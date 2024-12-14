theorem Cartesian_Product_Subset_Corollary() {
  assert(
    ∀A,B,C: Set ⇒
    (B ≠ ∅ ∧ A × B ⊆ C × C) →
    A ⊆ C
  )
}

proof Cartesian_Product_Subset_Corollary() {
  setVar(A,B,C: Set) →
  assume(B ≠ ∅) →
  assume(A × B ⊆ C × C) →
  lemma Cartesian_Product_Subset() {
    assert(
      ∀X,Y,Z: Set ⇒
      (Y ≠ ∅ ∧ X × Y ⊆ Z × Z) →
      (X ⊆ Z ∧ Y ⊆ Z)
    )
  } →
  apply(Cartesian_Product_Subset(), [X:=A, Y:=B, Z:=C]) →
  extract(A ⊆ C)
}