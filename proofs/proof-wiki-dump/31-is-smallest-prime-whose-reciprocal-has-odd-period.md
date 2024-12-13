theorem SmallestPrimeOddPeriodReciprocal() {
  assert(
    31 = min({p ∈ ℙ: period(1/p) > 1 ∧ odd(period(1/p))})
  )
} ↔

proof SmallestPrimeOddPeriodReciprocal() {
  // Period of 1/31
  assert(1/31 = 0.0322580645161290322580645161290...) →
  assert(period(1/31) = 15) →
  assert(odd(15)) →
  
  // Check all primes less than 31
  setVar(P = {p ∈ ℙ: p < 31}) →
  assert(P = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29}) →
  
  lemma CheckAllSmallerPrimes() {
    assert(1/2 = 0.5 ∧ period(1/2) = 0) ∧
    assert(1/3 = 0.333... ∧ period(1/3) = 1) ∧
    assert(1/5 = 0.2 ∧ period(1/5) = 0) ∧
    assert(1/7 = 0.142857142857... ∧ period(1/7) = 6) ∧
    assert(1/11 = 0.090909... ∧ period(1/11) = 2) ∧
    assert(1/13 = 0.076923076923... ∧ period(1/13) = 6) ∧
    assert(1/17 = 0.0588235294117647... ∧ period(1/17) = 16) ∧
    assert(1/19 = 0.052631578947368421... ∧ period(1/19) = 18) ∧
    assert(1/23 = 0.0434782608695652173913... ∧ period(1/23) = 22) ∧
    assert(1/29 = 0.0344827586206896551724137931... ∧ period(1/29) = 28)
  } →
  
  apply(CheckAllSmallerPrimes()) →
  assert(∀p ∈ P: ¬(period(1/p) > 1 ∧ odd(period(1/p)))) →
  assert(31 = min({p ∈ ℙ: period(1/p) > 1 ∧ odd(period(1/p))}))
}