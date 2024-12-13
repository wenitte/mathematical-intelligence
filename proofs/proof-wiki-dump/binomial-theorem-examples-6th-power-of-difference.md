theorem BinomialTheorem_6th_Difference() {
  assert(
    ∀x,y ∈ ℝ ⇒ (x - y)^6 = x^6 - 6x^5y + 15x^4y^2 - 20x^3y^3 + 15x^2y^4 - 6xy^5 + y^6
  )
} ↔

proof BinomialTheorem_6th_Difference() {
  setVar(x,y: ℝ) →
  setVar(n: ℤ) →
  
  lemma GeneralBinomialTheorem() {
    assert(
      ∀n ∈ ℤ_≥0, ∀x,y ∈ ℝ ⇒ (x + (-y))^n = ∑_{k=0}^n (n choose k)x^(n-k)(-y)^k
    )
  } →
  
  apply(GeneralBinomialTheorem()) →
  substitute(n = 6) →
  expand(∑_{k=0}^6 (6 choose k)x^(6-k)(-y)^k) →
  compute(
    (6 choose 0)x^6(-y)^0 + 
    (6 choose 1)x^5(-y)^1 + 
    (6 choose 2)x^4(-y)^2 + 
    (6 choose 3)x^3(-y)^3 + 
    (6 choose 4)x^2(-y)^4 + 
    (6 choose 5)x^1(-y)^5 + 
    (6 choose 6)x^0(-y)^6
  ) →
  simplify() →
  assert(x^6 - 6x^5y + 15x^4y^2 - 20x^3y^3 + 15x^2y^4 - 6xy^5 + y^6)
}