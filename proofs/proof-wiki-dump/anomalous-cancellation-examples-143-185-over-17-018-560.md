theorem AnomalousCancellation() {
  assert(
    ∀n ∈ ℕ (n is even) ⇒ 
    (143185/17018560 = 1435/170560) ∧
    (∀k ∈ ℕ, fraction_k = (143...185)/(170...18560) = 1435/170560)
  )
} ↔

proof AnomalousCancellation() {
  setVar(q: ℚ, r: ℕ, s: ℕ, n: ℕ) →
  assume(q = r/s) →
  assert(r = (1431818...185) with (n+2) digits) →
  assert(s = (1701818...18560) with (n+4) digits) →
  
  lemma NumeratorExpansion() {
    assert(r = 5 + 18×10 + 18×1000 + ... + 18×10^(n-3) + 143×10^(n-1)) →
    assert(r = 5 + 10×(18 + 18×10^2 + ... + 18×10^(n-4)) + 143×10^(n-1)) →
    assert(r = 5 + 10×(18×∑(i=0 to n/2-2)(10^(2i))) + 143×10^(n-1)) →
    assert(r = 5 + 10×18×((10^(n-2)-1)/(10^2-1)) + 143×10^(n-1)) →
    assert(r = 35×(9 + 4050×10^(n-2)))
  } →

  lemma DenominatorExpansion() {
    assert(s = 560 + 18×1000 + ... + 18×10^(n+2) + 170×10^(n+1)) →
    assert(s = 560 + 1000×(18×∑(i=0 to n/2-2)(10^(2i))) + 170×10^(n+1)) →
    assert(s = 560 + 1000×18×((10^(n-2)-1)/(10^2-1)) + 170×10^(n+1)) →
    assert(s = 4160×(9 + 4050×10^(n-2)))
  } →

  apply(NumeratorExpansion()) →
  apply(DenominatorExpansion()) →
  
  assert(q = (35×(9 + 4050×10^(n-2)))/(4160×(9 + 4050×10^(n-2)))) →
  assert(q = (35×41)/(4160×41)) →
  assert(q = 1435/170560)
}