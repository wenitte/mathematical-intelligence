theorem Birthday_Paradox_Three() {
  assert(
    ∀n ∈ ℤ⁺ ∧
    let P(n) := Prob(∃x,y,z ∈ {1,...,n}: birthday(x) = birthday(y) = birthday(z)) ∧
    P(n) > 0.5 
    ⇒ n ≥ 88
  )
}

proof Birthday_Paradox_Three() {
  define F(r,n) := {
    // Number of ways to distribute r objects into n cells with max 2 per cell
    let d ∈ ℤ⁺ be count of cells with 2 objects ∧
    let s = r - 2d be remaining objects ∧
    F(r,n) = (n choose d)(n-d choose s)(r!)/(2^d)
  } →
  
  lemma Probability_Formula() {
    assert(
      P(r) = 1 - ∑_{d=0}^{⌊r/2⌋} (n!r!)/(n^r 2^d d!(r-2d)!(n+d-r)!)
      where n = 365
    )
  } →
  
  lemma Distribution_Probability() {
    assert(
      Prob(exact_d_pairs_s_singles) = F(r,n)/n^r ∧
      d - s ≤ n
    )
  } →

  apply(Probability_Formula()) →
  assert(
    P(88) > 0.5 ∧
    ∀k < 88: P(k) ≤ 0.5
  ) →
  
  conclude(n ≥ 88)
}