theorem Closed_Set_Ultraconnected() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ isUltraconnected(T) ∧
    ∃F(F ⊆ S ∧ isClosed(F,T))) →
    isUltraconnected(F)
  )
} ↔

proof Closed_Set_Ultraconnected() {
  setVar(T: TopologicalSpace) →
  setVar(F: Set) →
  assume(isUltraconnected(T) ∧ isClosed(F,T)) →
  
  lemma Check_Arbitrary_Closed_Sets() {
    setVar(A,B: Set) →
    assume(
      isNonEmpty(A) ∧ isNonEmpty(B) ∧
      isClosed(A,⟨F,τ⟩) ∧ isClosed(B,⟨F,τ⟩)
    ) →
    apply(Closed_Set_Topological_Subspace()) →
    assert(isClosed(A,T) ∧ isClosed(B,T)) →
    apply(Definition_Ultraconnected_Space(T)) →
    assert(¬isDisjoint(A,B))
  } →
  
  apply(Definition_Ultraconnected_Space()) →
  assert(
    ∀A,B(
      (isNonEmpty(A) ∧ isNonEmpty(B) ∧
      isClosed(A,⟨F,τ⟩) ∧ isClosed(B,⟨F,τ⟩)) →
      ¬isDisjoint(A,B)
    )
  ) →
  assert(isUltraconnected(F))
}