theorem Closed_Ball_Disjoint_Union() {
  setContext(p: Prime) →
  setContext(ℚ_p: p_adic_numbers) →
  setContext(a: ℚ_p) →
  setContext(B_ε⁻(a): closed_ball, B_ε(a): open_ball) →
  
  assert(
    ∀n ∈ ℤ ⇒ [
      B_p^{-n}⁻(a) = ⋃_{i=0}^{p-1} B_p^{-n}(a + ip^n)
      ∧
      {B_p^{-n}(a + ip^n) | i ∈ [0,p-1]} are_pairwise_disjoint
    ]
  )
}

proof Closed_Ball_Disjoint_Union() {
  setVar(n: ℤ) →
  
  lemma Previous_Result() {
    assert(
      B_p^{-n}⁻(a) = ⋃_{i=0}^{p-1} B_p^{-(n+1)}⁻(a + ip^n)
      ∧ 
      {B_p^{-(n+1)}⁻(a + ip^n) | i ∈ [0,p-1]} are_pairwise_disjoint
    )
  } →

  lemma Open_Ball_Is_Closed() {
    assert(
      ∀x ∈ ℚ_p, ∀r > 0 ⇒ B_r(x) = B_r⁻(x)
    )
  } →

  apply(Previous_Result()) →
  apply(Open_Ball_Is_Closed()) →
  
  assert(
    B_p^{-n}⁻(a) = ⋃_{i=0}^{p-1} B_p^{-n}(a + ip^n)
    ∧
    {B_p^{-n}(a + ip^n) | i ∈ [0,p-1]} are_pairwise_disjoint
  )
}