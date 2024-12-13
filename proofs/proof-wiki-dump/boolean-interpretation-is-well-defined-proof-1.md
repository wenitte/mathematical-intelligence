theorem Boolean_Interpretation_Well_Defined() {
  let(L₀: PropositionalLogicLanguage)
  let(v: L₀ → {T,F})
  assert(
    WellDefined(v)
  )
} ↔

proof Boolean_Interpretation_Well_Defined() {
  let(L₀: PropositionalLogicLanguage) →
  let(v: L₀ → {T,F}) →
  
  lemma UniqueParsability() {
    assert(
      UniqueParsable(L₀)
    )
  } →
  
  apply(UniqueParsability()) →
  assert(
    ApplicableStructuralInduction(L₀)
  ) →
  
  lemma BottomUpSpecification() {
    assert(
      FollowsBottomUpSpec(v) ∧
      BottomUpSpec(PropositionalLogic)
    )
  } →
  
  apply(BottomUpSpecification()) →
  apply(PrincipleOfStructuralInduction()) →
  
  assert(
    WellDefined(v)
  )
}