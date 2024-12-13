theorem AnomalousCancellation_3544_7531() {
  assert(
    ∀n ∈ ℕ ⇒ (3544/7531 = 344/731) ∧
    (355...544/755...531 = 344/731)
  )
} ↔

proof AnomalousCancellation_3544_7531() {
  setVar(n: ℕ) →
  
  assert(355...544/755...531 = 
    (3×10^n + (∑_{i=2}^{n-1} 5×10^i) + 44) / 
    (7×10^n + (∑_{i=2}^{n-1} 5×10^i) + 31)
  ) →
  
  assert(
    (∑_{i=2}^{n-1} 5×10^i) = 500×∑_{i=0}^{n-3} 10^i
  ) →
  
  lemma GeometricSum() {
    assert(∑_{i=0}^{n-3} 10^i = (10^{n-2} - 1)/(10 - 1))
  } →
  
  apply(GeometricSum()) →
  
  assert(
    = (3×10^n×(10-1) + 500×(10^{n-2}-1) + 44×(10-1)) /
      (7×10^n×(10-1) + 500×(10^{n-2}-1) + 31×(10-1))
  ) →
  
  assert(
    = (27×10^n + 500×10^{n-2} - 104) /
      (63×10^n + 500×10^{n-2} - 221)
  ) →
  
  assert(
    = (2700×10^{n-2} + 500×10^{n-2} - 104) /
      (6300×10^{n-2} + 500×10^{n-2} - 221)
  ) →
  
  assert(
    = (3200×10^{n-2} - 104) /
      (6800×10^{n-2} - 221)
  ) →
  
  assert(
    = (8×(400×10^{n-2} - 13)) /
      (17×(400×10^{n-2} - 13))
  ) →
  
  assert(= 8/17) →
  
  assert(= (8×43)/(17×43)) →
  
  assert(= 344/731)
}