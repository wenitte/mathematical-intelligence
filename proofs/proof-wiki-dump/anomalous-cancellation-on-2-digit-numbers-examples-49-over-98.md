theorem AnomalousCancellation49_98() {
  assert(
    ∀n ∈ ℕ ⇒ (
      (499...99/999...98) = 4/8
      where "..." represents n-1 repetitions of 9
    )
  )
}

proof AnomalousCancellation49_98() {
  setVar(n: ℕ) →
  
  assert(499...99 = 4×10^n + Σ(i=0 to n-1)[9×10^i]) →
  assert(999...98 = Σ(i=1 to n)[9×10^i] + 8) →
  
  lemma GeometricSum() {
    assert(
      Σ(i=0 to n-1)[9×10^i] = 9×((10^n - 1)/(10 - 1)) ∧
      Σ(i=1 to n)[9×10^i] = 9×10×((10^n - 1)/(10 - 1))
    )
  } →
  
  apply(GeometricSum()) →
  
  assert(
    (4×10^n + 9×((10^n - 1)/(10 - 1)))/(9×10×((10^n - 1)/(10 - 1)) + 8)
  ) →
  
  assert(
    (4×10^n + (10^n - 1))/(10×(10^n - 1) + 8)
  ) →
  
  assert(
    (5×10^n - 1)/(10×10^n - 2)
  ) →
  
  assert(
    (5×10^n - 1)/(2×(5×10^n - 1))
  ) →
  
  assert(1/2) →
  assert(4/8)
}