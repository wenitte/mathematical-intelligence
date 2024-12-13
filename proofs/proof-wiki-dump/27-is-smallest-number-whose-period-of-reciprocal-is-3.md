theorem SmallestPeriod3() {
  assert(
    ∀n ∈ ℤ⁺, n < 27 →
    period(1/n) ≠ 3 ∧
    period(1/27) = 3
  )
} ↔

proof SmallestPeriod3() {
  lemma Period27() {
    assert(1/27 = 0.037037037...) →
    assert(period(1/27) = 3)
  } →
  
  lemma AllSmallerNumbers() {
    setVar(n: ℤ⁺) →
    assert(n < 27) →
    forAll(n, 1, 26) {
      assert(period(1/n) ≠ 3)
    }
  } →
  
  apply(Period27()) →
  apply(AllSmallerNumbers()) →
  assert(27 = min{k ∈ ℤ⁺ | period(1/k) = 3})
}