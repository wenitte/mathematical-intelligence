theorem Bernstein_Lemma_3() {
  // Initial conditions
  setDomain(F, F_y, F_yp: ℝ → ℝ) ∧
  setInterval(I: [a,b]) ∧
  assert(continuous(F, F_y, F_yp) ∧ ∀(x,y,yp) ∈ I×ℝ×ℝ) ∧
  
  // Assumptions
  assert(∃k > 0: F_y(x,y,yp) > k) ∧
  assert(∃α,β ≥ 0: |F(x,y,yp)| ≤ α*yp² + β) ∧
  assert(y(x) = F(x,y,yp)) ∧
  assert(y(a) = a₁ ∧ y(c) = c₁) →

  // Conclusion
  assert(∀x ∈ I: ∃M ∈ ℝ: |y'(x) - (c₁-a₁)/(c-a)| ≤ M)
}

proof Bernstein_Lemma_3() {
  // Define bounds
  setVar(A: sup{α(x,y)}, B: sup{β(x,y)}) →
  setVar(m: (1/k)*max(|F(x,(a₁(c-x)+c₁(x-a))/(c-a),(c₁-a₁)/(c-a))|)) →
  
  // Define auxiliary functions
  assert(y(x) - (a₁(c-x)+c₁(x-a))/(c-a) + m = ln(u)/(2A)) ∧
  assert(-y(x) + (a₁(c-x)+c₁(x-a))/(c-a) + m = ln(v)/(2A)) →
  
  // First derivatives
  assert(y'(x) - (c₁-a₁)/(c-a) = u'/(2Au)) ∧
  assert(-y'(x) + (c₁-a₁)/(c-a) = v'/(2Av)) →
  
  // Second derivatives and bounds
  assert(|F(x,y,y')| ≤ 2A(y'(x)-(c₁-a₁)/(c-a))² + B₁) →
  setVar(B₁: B + 2A((c₁-a₁)/(c-a))²) →
  
  // Apply IVT
  lemma IVT() {
    assert(∃K⊂I: ∀x₀∈K: y'(x₀)-(c₁-a₁)/(c-a) = 0)
  } →
  apply(IVT()) →
  
  // Final bound
  assert(∀x∈I: |y'(x)-(c₁-a₁)/(c-a)| ≤ sqrt(B₁/(2A))*exp(4Am))
}