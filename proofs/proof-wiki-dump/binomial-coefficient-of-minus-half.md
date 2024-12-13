theorem Binomial_Coefficient_Minus_Half() {
  assert(
    ∀k ∈ ℤ ⇒ (
      (⌊-1/2⌋_k = (((-1)^k)/(4^k)) * (⌊2k⌋_k))
    )
  )
} ↔

proof Binomial_Coefficient_Minus_Half() {
  setVar(k: ℤ) →
  lemma Product_Rule() {
    assert(
      ∀r ∈ ℝ ⇒ (
        ⌊r⌋_k * ⌊r - 1/2⌋_k = (⌊2r⌋_k * ⌊2r-k⌋_k)/(4^k)
      )
    )
  } →
  
  apply(Product_Rule(), r = -1/2) →
  assert(
    ⌊-1/2⌋_k * ⌊-1⌋_k = (⌊-1⌋_k * ⌊-1-k⌋_k)/(4^k)
  ) →
  
  assert(
    ⌊-1/2⌋_k = (⌊-1-k⌋_k)/(4^k)
  ) →
  
  lemma Negated_Upper_Index() {
    assert(
      ∀n,k ∈ ℤ ⇒ (⌊-n⌋_k = (-1)^k * ⌊k-(-n)-1⌋_k)
    )
  } →
  
  apply(Negated_Upper_Index(), n = 1+k) →
  assert(
    ⌊-1/2⌋_k = ((-1)^k)/(4^k) * ⌊k-(-1-k)-1⌋_k
  ) →
  
  simplify() →
  assert(
    ⌊-1/2⌋_k = ((-1)^k)/(4^k) * ⌊2k⌋_k
  )
}