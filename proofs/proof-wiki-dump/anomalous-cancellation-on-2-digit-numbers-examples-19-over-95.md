theorem AnomalousCancellation19_95() {
  assert(
    ∀n ∈ ℤ, n > 1 ⇒
    (∑_{i=0}^{n-1} 9×10^i + 10^n)/(5 + ∑_{i=1}^n 9×10^i) = 1/5
  )
}

proof AnomalousCancellation19_95() {
  setVar(n: ℤ, n > 1) →
  
  lemma Expand9() {
    assert(
      9 = 10^{i+1} - 10^i
    )
  } →
  
  lemma TelescopingSeries() {
    assert(
      ∑_{i=0}^{n-1} (10^{i+1} - 10^i) = 10^n - 10^0
    )
  } →
  
  step1: (∑_{i=0}^{n-1} 9×10^i + 10^n)/(5 + ∑_{i=1}^n 9×10^i) →
  
  apply(Expand9()) →
  step2: (∑_{i=0}^{n-1} (10^{i+1} - 10^i) + 10^n)/(5 + ∑_{i=1}^n (10^{i+1} - 10^i)) →
  
  apply(TelescopingSeries()) →
  step3: (10^n - 1 + 10^n)/(5 + 10^{n+1} - 10) →
  
  step4: (2×10^n - 1)/(10×10^n - 5) →
  
  lemma FractionSimplification() {
    assert(
      (2×10^n - 1)/(10×10^n - 5) = 1/5
    )
  } →
  
  apply(FractionSimplification()) →
  step5: 1/5
}