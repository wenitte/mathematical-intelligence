theorem SmallestTwoDigitSum() {
  assert(
    ∀n ∈ ℕ ∧ n ≥ 100 →
    (let s(n) := sum of all 2-digit numbers from n's digits) →
    (132 = min{n: n = s(n)})
  )
} ↔

proof SmallestTwoDigitSum() {
  setVar(n: ℕ) →
  setVar(a,b,c: ℕ) →
  assert(n = 100a + 10b + c) →
  
  lemma SumFormula() {
    assert(
      s(n) = [ab] + [ac] + [bc] + [ba] + [ca] + [cb] →
      s(n) = (10a + b) + (10a + c) + (10b + c) + (10b + a) + (10c + a) + (10c + b) →
      s(n) = 2(11a) + 2(11b) + 2(11c) →
      s(n) = 22(a + b + c)
    )
  } →

  apply(SumFormula()) →
  
  lemma CheckValues() {
    assert(
      22 × 4 = 88 → (too small) ∧
      22 × 5 = 110 → s(110) = 22 → (invalid) ∧
      22 × 6 = 132 → s(132) = 132
    )
  } →
  
  apply(CheckValues()) →
  assert(
    132 is smallest n where n = s(n) ∧ n ≥ 100
  )
}