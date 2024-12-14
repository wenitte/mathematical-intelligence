theorem Conditional_Expectation_Sum_Squared_Increments() {
  assert(
    ∀(Ω,Σ,{ℱt}t≥0,ℙ): FilteredProbabilitySpace,
    ∀{Xt}t≥0: Martingale,
    ∀s,t ∈ [0,∞), s < t,
    ∀{ti}i=0..n: Subdivision(s,t) →
    (E[∑i=1..n(Xti - Xti-1)² | ℱs] = E[Xt² - Xs² | ℱs] = E[(Xt - Xs)² | ℱs]) a.s.
  )
} ↔

proof Conditional_Expectation_Sum_Squared_Increments() {
  lemma Expectation_Difference_Squared() {
    setVar(i,j: ℕ, i < j) →
    assert(E[(Xtj - Xti)² | ℱti] = 
           E[Xtj² | ℱti] - 2E[XtjXti | ℱti] + E[Xti² | ℱti]) →
    apply(Conditional_Expectation_Linear) →
    assert(Xti is ℱti-measurable) →
    apply(Extract_Random_Variable_Rule) →
    assert(2E[XtjXti | ℱti] = 2XtiE[Xtj | ℱti]) →
    apply(Martingale_Property) →
    assert(E[Xtj | ℱti] = Xti) →
    apply(Measurable_Random_Variable) →
    assert(E[Xti² | ℱti] = Xti²) →
    conclude(E[(Xtj - Xti)² | ℱti] = E[Xtj² | ℱti] - Xti²)
  } →

  assert(E[Xt² - Xs² | ℱs] = E[(Xt - Xs)² | ℱs]) →
  
  setVar(sum_expression := E[∑i=1..n(Xti - Xti-1)² | ℱs]) →
  apply(Conditional_Expectation_Linear) →
  assert(sum_expression = ∑i=1..nE[(Xti - Xti-1)² | ℱs]) →
  apply(Tower_Property) →
  assert(sum_expression = ∑i=1..nE[E[(Xti - Xti-1)² | ℱti-1] | ℱs]) →
  apply(Expectation_Difference_Squared) →
  assert(sum_expression = ∑i=1..nE[Xti² - Xti-1² | ℱs]) →
  apply(Conditional_Expectation_Linear) →
  assert(sum_expression = E[∑i=1..n(Xti² - Xti-1²) | ℱs]) →
  apply(Telescoping_Sum) →
  conclude(sum_expression = E[Xt² - Xs² | ℱs])
}

corollary Unconditional_Expectation() {
  assert(
    E[∑i=1..n(Xti - Xti-1)²] = E[Xt² - Xs²] = E[(Xt - Xs)²]
  )
}