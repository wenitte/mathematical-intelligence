theorem Join_Irreducible_Characterization() {
  let(S: JoinSemilattice) →
  let(z ∈ S) →
  assert(
    JoinIrreducible(z) ↔
    ∀x,y ∈ S : [(x ≺ z) ∧ (y ≺ z)] → (x ∨ y ≺ z)
  )
} ↔

proof Join_Irreducible_Characterization() {
  lemma Duality_Principle() {
    assert(
      JoinSemilattice ≅ MeetSemilattice_dual ∧
      JoinIrreducible ≅ MeetIrreducible_dual ∧
      (∨) ≅ (∧)_dual ∧
      (≺) ≅ (≻)_dual
    )
  } →
  
  apply(Duality_Principle()) →
  apply(Theorem.Meet_Irreducible_Characterization().dual) →
  assert(conclusion_holds_by_duality)
}