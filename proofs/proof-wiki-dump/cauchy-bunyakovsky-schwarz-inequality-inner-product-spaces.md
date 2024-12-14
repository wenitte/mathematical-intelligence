theorem Cauchy_Bunyakovsky_Schwarz() {
  let K: SubField(ℂ)
  let V: SemiInnerProductSpace(K)
  let x,y: V
  assert(
    |⟨x,y⟩|² ≤ ⟨x,x⟩⟨y,y⟩
  )
} ↔

proof Cauchy_Bunyakovsky_Schwarz_Part1() {
  setVar(x,y: V) →
  setVar(λ: K) →
  
  lemma NonNegDefinite() {
    assert(⟨x-λy,x-λy⟩ ≥ 0)
  } →

  apply(SemiInnerProductAxiom2) →
  assert(
    ⟨x-λy,x-λy⟩ = ⟨x,x⟩ - λ*⟨x,y⟩ - λ⟨x,y⟩* + λλ*⟨y,y⟩
  ) →

  case(⟨y,y⟩ ≠ 0) {
    setVar(λ = ⟨x,y⟩/⟨y,y⟩) →
    assert(
      0 ≤ ⟨x,x⟩ - |⟨x,y⟩|²/⟨y,y⟩
    ) →
    derive(|⟨x,y⟩|² ≤ ⟨x,x⟩⟨y,y⟩)
  } →

  case(⟨y,y⟩ = 0) {
    setVar(n: ℕ) →
    setVar(λ = n⟨x,y⟩) →
    assert(
      0 ≤ ⟨x,x⟩ - 2n|⟨x,y⟩|²
    ) →
    byContradiction(
      assume(|⟨x,y⟩|² ≠ 0) →
      derive(∀n: ℕ, ⟨x,x⟩/(2|⟨x,y⟩|²) ≥ n) →
      contradicts(ArchimedesAxiom)
    ) →
    conclude(|⟨x,y⟩|² = 0) →
    derive(|⟨x,y⟩|² ≤ ⟨x,x⟩⟨y,y⟩)
  }
}

proof Cauchy_Bunyakovsky_Schwarz_Part2() {
  require(K = ℝ) →
  setVar(x,y: V) →
  
  define(f_xy(λ: ℝ) = ⟨x-λy,x-λy⟩) →
  assert(∀λ: ℝ, f_xy(λ) ≥ 0) →
  
  apply(SemiInnerProductAxioms) →
  assert(
    f_xy(λ) = ⟨y,y⟩λ² - 2⟨x,y⟩λ + ⟨x,x⟩
  ) →
  
  lemma QuadraticDiscriminant() {
    assert(
      ∀a,b,c: ℝ, (ax² + bx + c ≥ 0 ∀x) → b² - 4ac ≤ 0
    )
  } →
  
  apply(QuadraticDiscriminant) →
  derive(4⟨x,y⟩² - 4⟨x,x⟩⟨y,y⟩ ≤ 0) →
  conclude(|⟨x,y⟩|² ≤ ⟨x,x⟩⟨y,y⟩)
}