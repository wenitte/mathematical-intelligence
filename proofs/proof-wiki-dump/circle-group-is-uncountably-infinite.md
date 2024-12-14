theorem Circle_Group_Uncountable() {
  assert(
    ∀G[G = struct{K, ×}] ⇒ 
    (isGroup(G) ∧ isUncountablyInfinite(G))
  )
}

proof Circle_Group_Uncountable() {
  lemma IsomorphismQuotient() {
    assert(
      struct{K, ×} ≅ struct{ℝ, +}/struct{ℤ, +}
    )
  } →
  
  lemma QuotientInterval() {
    assert(
      struct{ℝ, +}/struct{ℤ, +} = [0,1)
    )
  } →
  
  apply(IsomorphismQuotient()) →
  apply(QuotientInterval()) →
  
  lemma RealIntervalUncountable() {
    assert(
      ∀I[isRealInterval(I)] ⇒ isUncountable(I)
    )
  } →
  
  setVar(I: [0,1)) →
  assert(isRealInterval(I)) →
  apply(RealIntervalUncountable()) →
  assert(isUncountable(struct{K, ×})) →
  assert(isUncountablyInfinite(struct{K, ×}))
}