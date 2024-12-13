theorem Arithmetic_Average_Second_Chebyshev() {
  assert(
    ∀x ∈ ℝ, x ≥ 1 ⇒ 
    ∑_{n≤x} ψ(x/n) = x ln(x) - x + O(ln(x+1))
  )
} ↔

proof Arithmetic_Average_Second_Chebyshev() {
  setVar(x: ℝ, x ≥ 1) →
  assert(∑_{n≤x} ψ(x/n) = ∑_{n≤x} ∑_{m≤x/n} Λ(m)) →
  
  lemma Sum_Rewrite() {
    assert(
      ∑_{n≤x} ∑_{m≤x/n} Λ(m) = ∑_{t≤x} ∑_{m|t} Λ(m)
    )
  } →
  
  apply(Sum_Over_Divisors_von_Mangoldt()) →
  assert(∑_{t≤x} ∑_{m|t} Λ(m) = ∑_{t≤x} ln(t)) →
  
  assert(∑_{t≤x} ln(t) = ∑_{2≤t≤x} ln(t)) →
  
  lemma Integral_Form() {
    assert(
      ∑_{2≤t≤x} ln(t) = ∑_{2≤t≤x} ∫_{t-1}^t ln(t) du
    )
  } →
  
  lemma Logarithm_Bounds() {
    assert(
      ∀u,t: t-1 ≤ u ≤ t ⇒ ln(u) ≤ ln(t) ≤ ln(u+1)
    )
  } →
  
  assert(
    ∫_1^⌊x⌋ ln(u) du ≤ ∑_{2≤t≤x} ∫_{t-1}^t ln(t) du ≤ ∫_1^⌊x⌋ ln(u+1) du
  ) →
  
  computeIntegral(
    ∫_1^⌊x⌋ ln(u+1) du = (⌊x⌋+1)ln(⌊x⌋+1) - ⌊x⌋ - 2ln(2) + 1
  ) →
  
  computeIntegral(
    ∫_1^⌊x⌋ ln(u) du = ⌊x⌋ln(⌊x⌋) - ⌊x⌋
  ) →
  
  lemma Final_Bounds() {
    assert(
      (x-1)ln(x-1) - (x-1) ≤ ∑_{n≤x} ψ(x/n) ≤ (x+1)ln(x+1) - x
    )
  } →
  
  apply(Big_O_Definition()) →
  assert(
    ∑_{n≤x} ψ(x/n) - (x ln(x) - x) = O(ln(x+1))
  ) →
  
  conclude(
    ∑_{n≤x} ψ(x/n) = x ln(x) - x + O(ln(x+1))
  )
}