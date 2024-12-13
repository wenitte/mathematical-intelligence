theorem Algebra_Defined_By_Ring_Homomorphism_Is_Commutative() {
  declare(R: CommutativeRing) ∧
  declare(S: CommutativeRing) ∧
  declare(f: RingHomomorphism(R → S)) ∧
  declare(S_R: Algebra(f)) →
  assert(
    isCommutative(S_R)
  )
} ↔

proof Algebra_Defined_By_Ring_Homomorphism_Is_Commutative() {
  lemma Center_Of_Commutative_Ring() {
    assert(
      ∀x ∈ Image(f) ⇒ x ∈ Center(S)
    )
  } →
  
  assert(
    multiplication(S_R) = multiplication(S)
  ) →
  
  apply(Center_Of_Commutative_Ring()) →
  
  assert(
    isCommutative(S) ⇒ isCommutative(S_R)
  ) →
  
  conclude(
    isCommutative(S_R)
  )
}