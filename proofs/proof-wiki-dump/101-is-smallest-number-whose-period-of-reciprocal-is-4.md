theorem SmallestRecipPeriod4() {
  assert(
    101 = min({n ∈ ℤ⁺ | period(1/n) = 4})
  )
} ↔

proof SmallestRecipPeriod4() {
  setVar(k: ℤ⁺) →
  setVar(a,b: ℤ⁺) →
  
  lemma PeriodOf4() {
    assert(period(1/k) = 4 ↔ ∃a[1/k = a/(10⁴-1)]) →
    assert(10⁴-1 = (10²-1)(10²+1)) →
    assert(10⁴-1 = 99 · 101)
  } →
  
  lemma NotPeriod2() {
    assert(period(1/k) = 4 → ¬∃b[1/k = b/(10²-1)]) →
    assert(1/k = a/(99·101)) →
    assert(ak = 99·101) →
    assert(a/(99·101) ≠ b/99) →
    assert(a ≠ 101b)
  } →
  
  apply(PeriodOf4()) →
  apply(NotPeriod2()) →
  
  assert(101 ∈ ℙ) →
  assert(a ∤ 101 ∧ 101|ak → 101|k) →
  assert(101 = min({n ∈ ℤ⁺ | 101|n ∧ period(1/n) = 4}))
}