theorem Binomial_Coefficient_Two() {
  assert(
    ∀r ∈ ℝ ⇒ (r choose 2) = (r(r-1))/2
  )
} ↔

proof Binomial_Coefficient_Two() {
  setVar(r: ℝ) →
  setDef(BinomialCoefficient) {
    (r choose k) = r↓k/k! where k ≥ 0 ∧
    x↓k := ∏[j=0 to k-1](x-j)
  } →
  
  assert(k = 2) →
  expand(∏[j=0 to 1](x-j)) {
    = (x-0)(x-1)
  } →
  
  substitute(x → r) →
  evaluate(2!) {
    2! = 1 × 2 = 2
  } →
  
  assert(
    (r choose 2) = r↓2/2!
    = ((r-0)(r-1))/2
    = (r(r-1))/2
  )
}

corollary Natural_Numbers_Case() {
  assert(
    ∀n ∈ ℕ ⇒ (n choose 2) = Tₙ₋₁ = (n(n-1))/2
    where Tₙ is nth triangular number
  )
}