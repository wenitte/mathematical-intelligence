theorem CompoundInterest() {
  assert(
    ∀P,r,n ∈ ℝ ⇒ CompoundInterestFormula(P,r,n) = P((1+r)^n - 1)
  )
} ↔

proof CompoundInterest_Example_1() {
  setVar(P: ℝ = 1000) ∧
  setVar(n: ℕ = 4) ∧
  setVar(r: ℝ = 0.04) ∧
  setVar(I_k: sequence(ℝ)) →
  
  assert(I_1 = (0.08/2)*1000) →
  compute(I_1 = 40) →
  
  assert(I_2 = (0.08/2)*(1000 + I_1)) →
  compute(I_2 = 41.60) →
  
  assert(I_3 = (0.08/2)*(1000 + I_1 + I_2)) →
  compute(I_3 = 43.26) →
  
  assert(I_4 = (0.08/2)*(1000 + I_1 + I_2 + I_3)) →
  compute(I_4 = 44.99) →
  
  lemma TotalInterest() {
    assert(
      TotalI = ∑(k=1 to 4) I_k
    )
  } →
  
  apply(CompoundInterestFormula(P,r,n)) →
  compute(I = 1000*((1 + 0.04)^4 - 1)) →
  assert(I = 169.85) →
  
  verify(TotalI = I)
}