theorem Automorphism_Group_Acts_Faithfully() {
  assert(
    ∀E,F[Field(E) ∧ Field(F) ∧ Extension(E,F)] ∧
    let Aut = Aut(E/F) ∧
    ∃S ⊆ E[GeneratingSet(S,E/F) ∧ Stable(S,Aut)]
    ⇒
    Faithful(Action(Aut,S))
  )
} ↔

proof Automorphism_Group_Acts_Faithfully() {
  setVar(σ ∈ Aut(E/F)) →
  assume(Stabilizes(σ,S)) →
  assert(S ⊆ FixedField(σ)) →
  
  lemma GeneratingSet_In_FixedField() {
    assert(
      S ⊆ FixedField(σ) ∧ GeneratingSet(S,E/F)
      ⇒
      E = FixedField(σ)
    )
  } →
  
  apply(GeneratingSet_In_FixedField()) →
  assert(σ = id_E) →
  conclude(Faithful(Action(Aut(E/F),S)))
}