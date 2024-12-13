theorem IntegralEquality() {
  let(𝓧: MeasureSpace, Σ: σ-algebra, μ: Measure) →
  let(f,g: 𝓧 → ℝ̄₊) →
  assert(
    (isΣMeasurable(f) ∧ isΣMeasurable(g)) ∧
    (∀x ∈ 𝓧: f(x) = g(x) μ-a.e.) →
    ∫f dμ = ∫g dμ
  )
} ↔

proof IntegralEquality() {
  let(N = {x ∈ 𝓧 : f(x) ≠ g(x)}) →
  assert(μ(N) = 0) →
  
  case N = ∅ {
    assert(f = g) →
    assert(∫f dμ = ∫g dμ)
  } ∨
  
  case N ≠ ∅ {
    assert(𝓧 = N ∪ (𝓧∖N)) →
    
    chainEq(∫f dμ) {
      = ∫f·χ_𝓧 dμ                         // characteristic function of universe
      = ∫f·χ_{N ∪ (𝓧∖N)} dμ               // partition of 𝓧
      = ∫f·(χ_N + χ_{𝓧∖N}) dμ            // characteristic function of union
      = ∫f·χ_N dμ + ∫f·χ_{𝓧∖N} dμ        // additivity of integral
      = 0 + ∫f·χ_{𝓧∖N} dμ                // integral over null set
      = ∫g·χ_{𝓧∖N} dμ                    // definition of N
      = ∫g·χ_N dμ + ∫g·χ_{𝓧∖N} dμ        // integral over null set
      = ∫g·(χ_N + χ_{𝓧∖N}) dμ            // additivity of integral
      = ∫g·χ_{N ∪ (𝓧∖N)} dμ              // characteristic function of union
      = ∫g·χ_𝓧 dμ                         // partition of 𝓧
      = ∫g dμ                             // characteristic function of universe
    }
  }
}