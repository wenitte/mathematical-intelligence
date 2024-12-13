theorem Number_1089_Trick() {
  assert(
    ∀n ∈ ℤ where 100 ≤ n ≤ 999 ∧ |first_digit(n) - last_digit(n)| ≥ 2 →
    let d = |n - reverse(n)| →
    d + reverse(d) = 1089
  )
}

proof Number_1089_Trick() {
  setVar(a, b, c: ℤ) →
  assert(n = 100a + 10b + c) →
  assert(reverse(n) = 100c + 10b + a) →
  
  lemma Difference_Multiple_99() {
    assert(|n - reverse(n)| = |100a + 10b + c - (100c + 10b + a)|) →
    assert(|n - reverse(n)| = |99(a - c)|) →
    assert(∃k ∈ {2,3,4,5,6,7,8,9}: |99(a - c)| = 99k)
  } →
  
  lemma Valid_Differences() {
    assert(
      |n - reverse(n)| ∈ {198, 297, 396, 495, 594, 693, 792, 891}
    )
  } →
  
  lemma Final_Sum() {
    setVar(d: ℤ) →
    assert(d = |n - reverse(n)|) →
    assert(d + reverse(d) = 900 + 180 + 9) →
    assert(900 + 180 + 9 = 1089)
  } →
  
  apply(Difference_Multiple_99()) →
  apply(Valid_Differences()) →
  apply(Final_Sum()) →
  assert(d + reverse(d) = 1089)
}