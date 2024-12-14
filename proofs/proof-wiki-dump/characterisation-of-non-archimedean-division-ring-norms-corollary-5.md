theorem NonArchimedean_Norm_Supremum() {
  assert(
    ∀R: DivisionRing, ∀norm: Norm(R), ∀1_R: Unity(R) ⇒
    (isNonArchimedean(norm) →
     sup({norm(n·1_R) | n ∈ ℤ}) = 1)
  )
} ↔

proof NonArchimedean_Norm_Supremum() {
  setVar(R: DivisionRing),
  setVar(norm: Norm(R)),
  setVar(1_R: Unity(R)) →
  
  lemma Corollary1() {
    assert(sup({norm(n·1_R) | n ∈ ℕ_{>0}}) = 1)
  } →
  
  lemma NormPositiveDefiniteness() {
    assert(norm(0·1_R) = 0 ∧ 0 ≤ 1)
  } →
  
  lemma NegativeCase() {
    assert(
      ∀n < 0 ⇒
      norm(n·1_R) = 
      norm(-((1_R + ... + 1_R)_{-n times})) →
      norm((1_R + ... + 1_R)_{-n times}) →
      norm((-n)·1_R) →
      norm((-n)·1_R) ≤ 1
    )
  } →
  
  apply(Corollary1()),
  apply(NormPositiveDefiniteness()),
  apply(NegativeCase()) →
  
  assert(
    ∀n ∈ ℤ ⇒ norm(n·1_R) ≤ 1 ∧
    ∃k ∈ ℕ_{>0} ⇒ norm(k·1_R) = 1
  ) →
  
  conclude(sup({norm(n·1_R) | n ∈ ℤ}) = 1)
}