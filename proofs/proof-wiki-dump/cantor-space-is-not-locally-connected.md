theorem Cantor_Space_Not_Locally_Connected() {
  let(T = ⟨C,τ_d⟩) →
  assert(
    IsCantor_Space(T) →
    ¬IsLocally_Connected(T)
  )
} ↔

proof Cantor_Space_Not_Locally_Connected() {
  let(T = ⟨C,τ_d⟩) →
  assert(IsCantorSpace(T)) →
  let(B: Basis(T)) →
  ∀A ∈ B → {
    assert(IsOpen(A,T)) ∧
    lemma TotallySeparated() {
      assert(IsTotallySeparated(T))
    } →
    apply(TotallySeparated()) →
    assert(¬IsConnected(A))
  } →
  apply(LocallyConnected_Definition()) →
  assert(¬IsLocally_Connected(T))
}