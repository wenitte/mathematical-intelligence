theorem AnomalousCancellation16_64() {
  assert(
    ∀n ∈ ℕ ⇒ (166...66/666...64 = 1/4)
    where digits6 = n repetitions
  )
} ↔

proof AnomalousCancellation16_64() {
  setVar(n: ℕ) →
  
  assert(166...66 = 10^n + ∑(i=0 to n-1)[6×10^i]) ∧
  assert(666...64 = ∑(i=1 to n)[6×10^i] + 4) →
  
  lemma GeometricSum() {
    assert(∑(i=0 to n-1)[6×10^i] = 6×((10^n - 1)/(10 - 1)))
  } →
  
  apply(GeometricSum()) →
  assert(166...66/666...64 = 
    (10^n + 6×((10^n - 1)/(10 - 1))) / 
    (6×10×((10^n - 1)/(10 - 1)) + 4)) →
    
  assert((10-1)×10^n + 6×(10^n - 1)) / 
    (60×(10^n - 1) + 4×(10-1)) →
    
  assert((9×10^n + 6×10^n - 6) / 
    (60×10^n - 60 + 36)) →
    
  assert((15×10^n - 6) / 
    (60×10^n - 24)) →
    
  assert((15×10^n - 6) / 
    (4×(15×10^n - 6))) →
    
  assert(1/4)
}