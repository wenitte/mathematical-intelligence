theorem CauchyInequality() {
  assert(
    ∀{ri, si} ∈ ℝ ⇒ (∑ri²)(∑si²) ≥ (∑risi)²
  )
} ↔

proof CauchyInequality_Direct() {
  setVar(λ ∈ ℝ) →
  define(f(λ) := ∑(ri + λsi)²) →
  assert(∀λ ∈ ℝ: f(λ) ≥ 0) →
  
  expand(f(λ)) {
    f(λ) = ∑(ri² + 2λrisi + λ²si²) →
    f(λ) = ∑ri² + 2λ∑risi + λ²∑si²
  } →
  
  define(
    a := ∑si²,
    b := 2∑risi,
    c := ∑ri²
  ) →
  
  assert(QuadraticForm: aλ² + bλ + c ≥ 0) →
  
  define(D := b² - 4ac) →
  
  lemma ContradictionProof() {
    assume(D > 0) →
    assert(∃λ₁,λ₂ ∈ ℝ: f(λ) = 0) →
    assert(∃λ ∈ (λ₁,λ₂): f(λ) < 0) →
    contradiction(f(λ) ≥ 0)
  } →
  
  apply(ContradictionProof()) →
  assert(D ≤ 0) →
  substitute(D) {
    4(∑risi)² - 4(∑ri²)(∑si²) ≤ 0 →
    (∑ri²)(∑si²) ≥ (∑risi)²
  }
}

proof CauchyInequality_Complex() {
  apply(CauchySchwarzComplex: ∀{wi,zi} ∈ ℂ ⇒ (∑|wi|²)(∑|zi|²) ≥ |∑wizi|²) →
  assert(ℝ ⊂ ℂ) →
  substitute(wi := ri, zi := si) →
  assert(∀r ∈ ℝ: |r|² = r²) →
  conclude((∑ri²)(∑si²) ≥ (∑risi)²)
}