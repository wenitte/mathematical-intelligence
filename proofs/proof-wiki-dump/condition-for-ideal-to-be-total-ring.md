theorem Total_Ring_Ideal() {
  assert(
    ∀A(CommutativeRingWithUnity(A) ∧
    ∃I(Ideal(I,A) ∧ IsField(A/I)) ∧
    ∃J(Ideal(J,A) ∧ I ⊊ J)) →
    J = A
  )
} ↔

proof Total_Ring_Ideal() {
  setVar(A: CommutativeRingWithUnity) →
  setVar(I: Ideal(A)) →
  assume(IsField(A/I)) →
  setVar(J: Ideal(A)) →
  assume(I ⊊ J) →

  lemma Subset_Containment() {
    assert(J ⊆ A) by IdealIsSubring()
  } →

  assert(∃j ∈ J: j ∉ I) by ProperSubset(I,J) →
  setVar(j: Element(J\I)) →
  
  lemma Field_Inverse() {
    assert(∃C ∈ A/I: (j + I) ∘ C = 1 + I) by IsField(A/I)
  } →
  
  setVar(j': Element(A)) where C = j' + I →
  assert((j + I) ∘ (j' + I) = 1 + I) →
  assert(j ∘ j' + I = 1 + I) by CosetMultiplication() →
  
  forall(a ∈ A) {
    assert(a ∘ (j ∘ j') + I = a + I) →
    assert(∃i,i' ∈ I: a ∘ (j ∘ j') + i = a + i') →
    assert(a = a ∘ j ∘ j' + i - i') →
    assert(a ∘ j ∈ J) by IdealProperty(J) →
    assert(a ∘ j ∘ j' ∈ J) by IdealProperty(J) →
    assert(a ∘ j ∘ j' + i - i' ∈ J) by IdealProperty(J) →
    assert(a ∈ J)
  } →
  
  assert(A ⊆ J) →
  assert(J = A) by SetEquality(J,A)
}