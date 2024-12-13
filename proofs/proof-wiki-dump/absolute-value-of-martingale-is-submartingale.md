theorem Abs_Value_Martingale_Is_Submartingale() {
  assert(
    ∀Ω,Σ,{ℱₜ}_{t≥0},ℙ [
      isFilteredProbSpace(Ω,Σ,{ℱₜ}_{t≥0},ℙ) ∧
      isContinuousTime({ℱₜ}_{t≥0})
    ] ∧
    ∀{Xₜ}_{t≥0} [
      isMartingale({Xₜ}_{t≥0}, {ℱₜ}_{t≥0})
    ] ⇒
    isSubmartingale({|Xₜ|}_{t≥0}, {ℱₜ}_{t≥0})
  )
} ↔

proof Abs_Value_Martingale_Is_Submartingale() {
  setVar(t: ℝ≥0) →
  lemma Integrable_Functions() {
    assert(∀t: isIntegrable(|Xₜ|))
  } →
  lemma Abs_Value_Is_Convex() {
    assert(isConvex(x ↦ |x|))
  } →
  lemma Convex_Martingale_Is_Submartingale() {
    assert(
      ∀f [
        isConvex(f) ∧
        isMartingale({Xₜ}_{t≥0}, {ℱₜ}_{t≥0})
      ] ⇒
      isSubmartingale({f(Xₜ)}_{t≥0}, {ℱₜ}_{t≥0})
    )
  } →
  apply(Abs_Value_Is_Convex()) →
  apply(Convex_Martingale_Is_Submartingale()) →
  assert(isSubmartingale({|Xₜ|}_{t≥0}, {ℱₜ}_{t≥0}))
}