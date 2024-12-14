theorem ContinuousMinimum() {
  assert(
    ∀S[TopologicalSpace] ∧ ∀f,g: S → ℝ[Continuous] →
    let(min_fg := λs∈S. min{f(s), g(s)}) →
    (min_fg: S → ℝ)[Continuous]
  )
}

proof ContinuousMinimum() {
  lemma MinimumCharacterization() {
    assert(
      ∀f,g: S → ℝ →
      f ∧ g = (1/2)(f + g - |f - g|)
    )
  } →
  
  apply(MinimumCharacterization()) →
  
  step1: {
    assert(f - g)[Continuous] by DifferenceRule(f,g)
  } →
  
  step2: {
    assert(|f - g|)[Continuous] by AbsoluteValueRule(f-g)
  } →
  
  step3: {
    assert(g - |f - g|)[Continuous] by DifferenceRule(g,|f-g|)
  } →
  
  step4: {
    assert(f + g - |f - g|)[Continuous] by SumRule(f,g,|f-g|)
  } →
  
  step5: {
    assert((1/2)(f + g - |f - g|))[Continuous] by MultipleRule(f+g-|f-g|)
  } →
  
  conclude(min_fg[Continuous])
}