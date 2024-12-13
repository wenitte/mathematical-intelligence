theorem B_Algebra_Right_Cancellable() {
  assert(
    ∀X,∀◦: (isB_Algebra(⟨X,◦⟩) →
    ∀x,y,z ∈ X: ((x◦z = y◦z) → (x = y)))
  )
} ↔

proof B_Algebra_Right_Cancellable() {
  setStruct(⟨X,◦⟩: B_Algebra) →
  setVar(x,y,z: X) →
  
  lemma Identity_Derivation() {
    assert((x◦y)◦(0◦y)) →
    apply(B_Algebra_Axiom_A3()) →
    assert(x◦((0◦y)◦(0◦y))) →
    apply(B_Algebra_Axiom_A1()) →
    assert(x◦0) →
    apply(B_Algebra_Axiom_A2()) →
    assert(x)
  } →

  assume(x◦z = y◦z) →
  assert((x◦z)◦(0◦z) = (y◦z)◦(0◦z)) →
  apply(Identity_Derivation()) →
  assert(x = y) →
  conclude(isRightCancellable(◦,X))
}