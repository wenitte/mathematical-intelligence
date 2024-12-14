theorem Complex_Power_Series_Radius() {
  assert(
    let S = ∑(n≥0)(n*z^n) →
    ∃R ∈ ℝ (R = RadiusOfConvergence(S) ∧ R = 1)
  )
} ↔

proof Complex_Power_Series_Radius() {
  setVar(R: ℝ) →
  assert(R = RadiusOfConvergence(S)) →
  
  lemma Radius_Formula() {
    assert(
      RadiusOfConvergence(∑(n≥0)(a_n*z^n)) = 
      1/limsup(n→∞)|a_(n+1)/a_n|
    )
  } →
  
  apply(Radius_Formula()) →
  assert(R = lim(n→∞)|n/(n+1)|) →
  
  assert(|n/(n+1)| = |1 - 1/(n+1)|) →
  
  lemma Limit_Basic_Null() {
    assert(
      lim(n→∞)(1/n) = 0
    )
  } →
  
  apply(Limit_Basic_Null()) →
  assert(lim(n→∞)|1 - 1/(n+1)| = |1 - 0|) →
  assert(R = 1) 
}