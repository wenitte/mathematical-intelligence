theorem Composition_Series_S2() {
  assert(
    ∃!s: Series ∧ 
    s = ({e} = A₂ ⊲ S₂) ∧
    isCompositionSeries(s, S₂) ∧
    isSolvable(S₂)
  )
} ↔

proof Composition_Series_S2() {
  lemma S2_Isomorphism() {
    assert(S₂ ≅ C₂)
  } →
  
  lemma Cyclic_Properties() {
    assert(
      isAbelian(C₂) ∧
      (∀H ⊆ C₂ → isNormal(H, C₂))
    )
  } →
  
  apply(S2_Isomorphism()) →
  apply(Cyclic_Properties()) →
  
  setVar(s: Series) →
  assert(s = ({e} ⊲ C₂)) →
  assert(isCompositionSeries(s, C₂)) →
  
  apply(S2_Isomorphism().inverse()) →
  assert(
    ({e} = A₂ ⊲ S₂) ≅ s ∧
    isCompositionSeries({e} = A₂ ⊲ S₂, S₂)
  ) →
  
  conclude(isSolvable(S₂))
}