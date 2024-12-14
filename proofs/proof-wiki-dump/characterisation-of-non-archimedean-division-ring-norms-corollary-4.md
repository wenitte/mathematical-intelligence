theorem NonArchimedean_CharP_Norm(R: DivisionRing, ‖·‖: Norm, 1ᴿ: Unity) {
  assume(
    char(R) = p ∧ p > 0
  ) →
  assert(
    isNonArchimedean(‖·‖)
  )
}

proof NonArchimedean_CharP_Norm() {
  setVar(S: Set) →
  let(S = {n·1ᴿ | n ∈ ℤ}) →
  assert(
    |S| = p - 1
  ) →
  
  setVar(M: ℝ) →
  let(M = sup{‖n·1ᴿ‖ | n ∈ ℤ}) →
  assert(
    M = max{‖1·1ᴿ‖, ‖2·1ᴿ‖, ..., ‖(p-1)·1ᴿ‖}
  ) →
  assert(
    M < +∞
  ) →
  
  lemma Corollary2() {
    assert(
      ∀x∈R (sup{‖n·1ᴿ‖ | n ∈ ℤ} < +∞) →
      isNonArchimedean(‖·‖) ∧ C = 1
    )
  } →
  
  apply(Corollary2()) →
  conclude(
    isNonArchimedean(‖·‖)
  )
}