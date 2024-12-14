theorem Product_Continuity() {
  given(S: TopologicalSpace, τ: Topology(S)) →
  given(f: S → ℝ, g: S → ℝ) →
  assert(
    isContinuous(f) ∧ isContinuous(g) ∧
    ∀s ∈ S: (f·g)(s) = f(s)·g(s) 
    ⇒ 
    isContinuous(f·g)
  )
} ↔

proof Product_Continuity() {
  lemma RealField() {
    assert(ℝ isA ValuedField)
  } →
  
  lemma ValuedFieldProperty() {
    assert(ValuedField ⊆ NormedDivisionRing)
  } →
  
  lemma ContinuousProduct() {
    given(X: NormedDivisionRing) →
    assert(
      ∀h,k: S → X:
      (isContinuous(h) ∧ isContinuous(k))
      ⇒
      isContinuous(h·k)
    )
  } →
  
  apply(RealField()) →
  apply(ValuedFieldProperty()) →
  apply(ContinuousProduct()) →
  assert(isContinuous(f·g))
}