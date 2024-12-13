theorem AE_Equal_Functions_Equal_Integrals() {
  let(X, Σ, μ: MeasureSpace)
  let(f,g: X → R̄₊)
  assert(
    isMeasurable(f, Σ) ∧
    isMeasurable(g, Σ) ∧
    almostEqual(f, g, μ) →
    ∫f dμ = ∫g dμ
  )
} ↔

proof AE_Equal_Functions_Equal_Integrals() {
  let(N: Set) →
  assert(N = {x ∈ X: f(x) ≠ g(x)}) →
  assert(isNullSet(N, μ)) →
  
  case N = ∅ {
    assert(f = g) →
    assert(∫f dμ = ∫g dμ)
  } ∨
  
  case N ≠ ∅ {
    assert(X = N ∪ (X∖N)) →
    
    chain(
      ∫f dμ
      = ∫f χ_X dμ,                         // CharFuncUniverse
      = ∫f χ_{N ∪ (X∖N)} dμ,              // SetPartition
      = ∫f(χ_N + χ_{X∖N}) dμ,             // CharFuncUnion
      = ∫f χ_N dμ + ∫f χ_{X∖N} dμ,        // IntegralAdditive
      = 0 + ∫f χ_{X∖N} dμ,                // IntegralNullSet
      = ∫g χ_{X∖N} dμ,                    // DefinitionOfN
      = ∫g χ_N dμ + ∫g χ_{X∖N} dμ,        // IntegralNullSet
      = ∫g(χ_N + χ_{X∖N}) dμ,             // IntegralAdditive 
      = ∫g χ_{N ∪ (X∖N)} dμ,              // CharFuncUnion
      = ∫g χ_X dμ,                        // SetPartition
      = ∫g dμ                             // CharFuncUniverse
    )
  }
}

// Alternative proof also provided in source
proof AE_Equal_Functions_Equal_Integrals_Alt() {
  let(A: Set) →
  assert(A = {x ∈ X: f(x) ≠ g(x)}) →
  assert(isMeasurable(A, Σ)) →
  
  let(h: X → R̄) →
  assert(h(x) = if x ∈ A then +∞ else 0) →
  assert(isMeasurable(h, Σ)) →
  assert(h ≥ 0) →
  
  assert(∀x ∈ X → f(x) ≤ g(x) + h(x)) →
  assert(∫f dμ ≤ ∫(g + h) dμ) →          // MonotoneIntegral
  assert(∫f dμ ≤ ∫g dμ + ∫h dμ) →        // AdditiveIntegral
  
  assert(μ(A) = 0) →
  assert(∫h dμ = 0) →                     // ZeroAEIntegral
  assert(∫f dμ ≤ ∫g dμ) →
  
  // Symmetric argument for g ≤ f + h
  assert(∫g dμ ≤ ∫f dμ) →
  
  assert(∫f dμ = ∫g dμ)
}