theorem CommutativeRingWithTwoIdealsIsField() {
  assert(
    ∀R: Ring ∧
    isCommutative(R) ∧
    hasUnity(R) ∧
    (∀I: Ideal(R) ⇒ (I = {0_R} ∨ I = R)) ⇒
    isField(R)
  )
} ↔

proof CommutativeRingWithTwoIdealsIsField() {
  setVar(R: Ring) →
  assume(isCommutative(R) ∧ hasUnity(R)) →
  lemma IdealsExist() {
    assert({0_R} ∈ Ideals(R) ∧ R ∈ Ideals(R))
  } →
  
  setVar(a ∈ R*) where R* := R\{0_R} →
  setVar(⟨a⟩: PrincipalIdeal(R)) →
  
  assert(⟨a⟩ ≠ {0_R}) →
  apply(hypothesisOnIdeals()) →
  assert(⟨a⟩ = R) →
  assert(1_R ∈ ⟨a⟩) →
  
  lemma PrincipalIdealProperty() {
    assert(1_R ∈ ⟨a⟩ ⇒ ∃x ∈ R: x∘a = 1_R)
  } →
  
  apply(PrincipalIdealProperty()) →
  assert(isInvertible(a)) →
  
  conclude(
    ∀a ∈ R*: isInvertible(a) →
    isDivisionRing(R) ∧ isCommutative(R) →
    isField(R)
  )
}