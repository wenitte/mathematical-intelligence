theorem Cauchy_Bunyakovsky_Schwarz() {
  let(𝕂: SubField(ℂ))
  let(V: SemiInnerProductSpace(𝕂))
  let(x,y: Elements(V))
  assert(
    |⟨x,y⟩|² ≤ ⟨x,x⟩⟨y,y⟩
  )
} ↔

proof Cauchy_Bunyakovsky_Schwarz() {
  setVar(x,y: V) →
  setVar(λ: 𝕂) →
  
  lemma NonNegDefinite() {
    assert(⟨x-λy, x-λy⟩ ≥ 0)
  } →

  apply(SesquilinearityAxiom) →
  assert(⟨x-λy, x-λy⟩ = ⟨x,x⟩ - λ*⟨x,y⟩ - λ⟨x,y⟩* + λλ*⟨y,y⟩) →

  case ⟨y,y⟩ ≠ 0 {
    setVar(λ = ⟨x,y⟩/⟨y,y⟩) →
    substitute(λ) →
    simplify() →
    assert(0 ≤ ⟨x,x⟩ - |⟨x,y⟩|²/⟨y,y⟩) →
    assert(|⟨x,y⟩|² ≤ ⟨x,x⟩⟨y,y⟩)
  } →

  case ⟨y,y⟩ = 0 {
    assert(ℚ ⊂ 𝕂) →
    setVar(n: ℕ) →
    setVar(λ = n⟨x,y⟩) →
    substitute(λ) →
    simplify() →
    assert(0 ≤ ⟨x,x⟩ - 2n|⟨x,y⟩|²) →
    
    lemma Contradiction() {
      assume(|⟨x,y⟩|² ≠ 0) →
      assert(∀n∈ℕ: ⟨x,x⟩/(2|⟨x,y⟩|²) ≥ n) →
      contradict(ArchimedesAxiom)
    } →
    
    apply(Contradiction()) →
    assert(|⟨x,y⟩|² = 0) →
    assert(|⟨x,y⟩|² ≤ 0 = ⟨x,x⟩⟨y,y⟩)
  }
}