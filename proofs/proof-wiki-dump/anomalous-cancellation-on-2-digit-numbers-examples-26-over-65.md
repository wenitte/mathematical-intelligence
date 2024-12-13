theorem AnomalousCancellation26_65() {
  assert(
    ∀n ∈ ℕ ⇒ (26...6/66...65 = 2/5) 
    where digits 6 repeat n times in numerator and n+1 times in denominator
  )
} ↔

proof AnomalousCancellation26_65() {
  setVar(n: ℕ) →
  
  assert(
    26...6/66...65 = 
    (2×10^n + ∑_{i=0}^{n-1} 6×10^i) / (∑_{i=1}^n 6×10^i + 5)
  ) →

  lemma GeometricSum() {
    assert(
      ∑_{i=0}^{n-1} x^i = (x^n - 1)/(x - 1)
    )
  } →

  apply(GeometricSum()) →
  assert(
    = (2×10^n + 6×((10^n - 1)/(10 - 1))) / (6×10×((10^n - 1)/(10 - 1)) + 5)
  ) →

  assert(
    = (2×(10-1)×10^n + 6×(10^n - 1)) / (60×(10^n - 1) + 5×(10-1))
  ) →

  assert(
    = (18×10^n + 6×10^n - 6) / (60×10^n - 60 + 45)
  ) →

  assert(
    = (24×10^n - 6) / (60×10^n - 15)
  ) →

  assert(
    = (2×(12×10^n - 3)) / (5×(12×10^n - 3))
  ) →

  assert(
    = 2/5
  )
}