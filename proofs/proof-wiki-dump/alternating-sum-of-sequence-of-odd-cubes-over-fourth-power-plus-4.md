theorem AlternatingSumOddCubes() {
  assert(
    ∀n ∈ ℤ_≥0 ⇒ 
    ∑(k=0 to n) [(-1)^k (2k + 1)^3]/[(2k + 1)^4 + 4] = 
    [(-1)^n (n + 1)]/[4(n + 1)^2 + 1]
  )
} ↔

proof AlternatingSumOddCubes() {
  let P(n) := ∑(k=0 to n) [(-1)^k (2k + 1)^3]/[(2k + 1)^4 + 4] = 
               [(-1)^n (n + 1)]/[4(n + 1)^2 + 1] →

  // Base case
  assert(P(0)) {
    ∑(k=0 to 0) [(-1)^k (2k + 1)^3]/[(2k + 1)^4 + 4] =
    1^3/(1^4 + 4) =
    1/5 =
    [(-1)^0 (0 + 1)]/[4(0 + 1)^2 + 1]
  } →

  // Inductive step
  assert(∀r ≥ 1: P(r-1) ⇒ P(r)) {
    setVar(r: ℤ_≥1) →
    assume(P(r-1)) →
    
    assert(
      ∑(k=0 to r) [(-1)^k (2k + 1)^3]/[(2k + 1)^4 + 4] =
      ∑(k=0 to r-1) [(-1)^k (2k + 1)^3]/[(2k + 1)^4 + 4] + 
      [(-1)^r (2r + 1)^3]/[(2r + 1)^4 + 4]
    ) →
    
    lemma DenominatorFactorization() {
      assert((2r + 1)^4 + 4 = (4r^2 + 1)(4(r + 1)^2 + 1))
    } →

    lemma NumeratorSimplification() {
      assert(
        (-1)^{r-1} r(4r^2 + 1)(4(r + 1)^2 + 1) + 
        (-1)^r (2r + 1)^3(4r^2 + 1) =
        (-1)^r (4r^2 + 1)(r + 1)
      )
    } →

    apply(DenominatorFactorization()) →
    apply(NumeratorSimplification()) →
    
    assert(
      [(-1)^r (r + 1)]/[4(r + 1)^2 + 1] = P(r)
    )
  } →

  apply(InductionPrinciple(P))
}