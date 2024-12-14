theorem PadicBallCharacterization() {
  let(p: Prime, n: ℤ, x,y: ℚ_p, ε: ℝ_{>0}) →
  assert(
    (x ∈ B_{p^{-n}}(y)) ↔
    (‖x - y‖_p < p^{-n}) ↔
    (B_{p^{-n}}(x) = B_{p^{-n}}(y)) ↔
    (x - y ∈ p^{n+1}ℤ_p) ↔
    (x + p^{n+1}ℤ_p = y + p^{n+1}ℤ_p)
  )
}

proof PadicBallCharacterization() {
  lemma NonArchimedean() {
    assert(‖·‖_p is_non_archimedean_norm)
  } →

  proof_equiv_1_2() {
    assert(x ∈ B_{p^{-n}}(y) ↔ ‖x - y‖_p < p^{-n}) by_definition
  } →

  proof_equiv_1_3() {
    apply(NonArchimedean()) →
    assert(x ∈ B_{p^{-n}}(y) → B_{p^{-n}}(x) = B_{p^{-n}}(y)) by_theorem(Centers_NonArchimedean) →
    assert(B_{p^{-n}}(x) = B_{p^{-n}}(y) → x ∈ B_{p^{-n}}(y)) by_theorem(Center_Element)
  } →

  proof_equiv_2_4() {
    let(norm_chain: Chain) {
      ‖x - y‖_p < p^{-n} ↔
      ‖x - y‖_p ≤ p^{-(n+1)} ↔
      ‖x - y‖_p ≤ ‖p^{n+1}‖_p ↔
      ‖p^{-(n+1)}(x - y)‖_p ≤ 1 ↔
      p^{-(n+1)}(x - y) ∈ ℤ_p ↔
      x - y ∈ p^{n+1}ℤ_p
    }
  } →

  proof_equiv_3_5() {
    assert(B_{p^{-n}}(x) = x + p^{n+1}ℤ_p) by_theorem(OpenBalls_Padic) →
    assert(B_{p^{-n}}(y) = y + p^{n+1}ℤ_p) by_theorem(OpenBalls_Padic) →
    assert(B_{p^{-n}}(x) = B_{p^{-n}}(y) ↔ x + p^{n+1}ℤ_p = y + p^{n+1}ℤ_p)
  }
}