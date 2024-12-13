theorem Convergents_Accuracy_Corollary() {
  let x: ℝ, isIrrational(x)
  let Cn: Sequence
  let pn, qn: Sequence
  assert(
    Cn = ContinuedFractionConvergents(x) ∧
    pn = Numerators(Cn) ∧
    qn = Denominators(Cn) →
    ∀k ≥ 1: (1/(qk * qk+1)) > |x - pk/qk| > 1/(2 * qk * qk+1)
  )
} ↔

proof Convergents_Accuracy_Corollary() {
  reference(Accuracy_of_Convergents_Theorem) →
  assert(
    ∀k ≥ 1: |x - pk+1/qk+1| ≤ 1/(qk+1 * qk+2) ≤ 1/(2 * qk * qk+1) < |x - pk/qk|
  ) →
  
  lemma Lower_Bound() {
    from_previous_step() →
    assert(|x - pk/qk| > 1/(2 * qk * qk+1))
  } →
  
  lemma Upper_Bound() {
    let j = k-1
    substitute(k → j) →
    assert(|x - pj+1/qj+1| ≤ 1/(qj+1 * qj+2)) →
    assert(|x - pk/qk| ≤ 1/(qk * qk+1))
  } →
  
  combine(Lower_Bound(), Upper_Bound()) →
  assert(1/(qk * qk+1) > |x - pk/qk| > 1/(2 * qk * qk+1))
}