theorem Binomial_Power_5() {
  assert(
    ∀x,y ∈ ℝ ⇒ (x + y)^5 = x^5 + 5x^4y + 10x^3y^2 + 10x^2y^3 + 5xy^4 + y^5
  )
} ↔

proof Binomial_Power_5() {
  setVar(x,y: ℝ) →
  lemma BinomialTheorem() {
    assert(
      ∀n ∈ ℤ≥0, ∀x,y ∈ ℝ ⇒ 
      (x + y)^n = ∑[k=0 to n](C(n,k)x^(n-k)y^k)
    )
  } →
  apply(BinomialTheorem(), n ← 5) →
  assert(
    (x + y)^5 = ∑[k=0 to 5](C(5,k)x^(5-k)y^k)
  ) →
  evaluate(
    C(5,0) = 1,
    C(5,1) = 5,
    C(5,2) = 10,
    C(5,3) = 10,
    C(5,4) = 5,
    C(5,5) = 1
  ) →
  assert(
    (x + y)^5 = x^5 + 5x^4y + 10x^3y^2 + 10x^2y^3 + 5xy^4 + y^5
  )
}