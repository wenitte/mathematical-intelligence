theorem Closure_Empty_Set() {
  assert(
    ∀T[TopologicalSpace(T) ∧ T = ⟨S,τ⟩] ⇒
    closure(∅,T) = ∅
  )
} ↔

proof Closure_Empty_Set() {
  setVar(T: TopologicalSpace) →
  lemma Empty_Set_Is_Closed() {
    assert(isClosed(∅,T))
  } →
  lemma Closed_Equals_Closure() {
    assert(
      ∀A ∈ P(S)[isClosed(A,T) ⇒ closure(A,T) = A]
    )
  } →
  apply(Empty_Set_Is_Closed()) →
  apply(Closed_Equals_Closure()) →
  assert(closure(∅,T) = ∅)
}