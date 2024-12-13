theorem Canonical_Preordering_Antisymmetric() {
  let(A: C*Algebra, ≤_A: PreOrdering(A)) →
  assert(
    ∀a,b ∈ A: (a ≤_A b ∧ b ≤_A a) → a = b
  )
} ↔

proof Canonical_Preordering_Antisymmetric() {
  setVar(a,b: A) →
  assume(a ≤_A b ∧ b ≤_A a) →
  
  lemma Positive_Difference() {
    assert(b - a is positive) →
    assert(b - a is Hermitian) ∧
    assert(σ_A(b - a) ⊆ [0,∞))
  } →

  lemma Spectral_Mapping() {
    assert(σ_A(a - b) = {-t : t ∈ σ_A(b - a)}) →
    assert(σ_A(a - b) ⊆ (-∞,0])
  } →

  lemma Second_Positive() {
    assert(a - b is positive) →
    assert(σ_A(a - b) ⊆ [0,∞))
  } →

  apply(Positive_Difference(), Spectral_Mapping(), Second_Positive()) →
  assert(σ_A(a - b) ⊆ [0,∞) ∩ (-∞,0]) →
  assert(σ_A(a - b) ⊆ {0}) →

  lemma Non_Empty_Spectrum() {
    assert(σ_A(a - b) ≠ ∅)
  } →

  apply(Non_Empty_Spectrum()) →
  assert(σ_A(a - b) = {0}) →
  assert(r_A(a - b) = 0) →

  lemma Spectral_Radius_Normal() {
    assert(r_A(a - b) = 0 → ‖a - b‖ = 0)
  } →

  apply(Spectral_Radius_Normal()) →
  assert(a - b = 0_A) →
  assert(a = b)
}