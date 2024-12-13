theorem AbelsGeneralisationSpecialCase() {
  assert(
    ∀x,y,z,n ∈ ℝ, (x + y = 0) →
    (x + y)^n = ∑_k (n choose k)x(x - kz)^(k-1)(y + kz)^(n-k)
  )
} ↔

proof AbelsGeneralisationSpecialCase() {
  setVar(x,y,z,n: ℝ) →
  assume(x + y = 0) →
  substitute(y = -x) →
  
  lemma PolynomialSum() {
    assert(
      ∀r ∈ ℕ, ∀P_r(k) polynomial of degree r →
      ∑_k (r choose k)(-1)^(r-k)P_r(k) = r!b_r
      where b_r is coefficient of k^r in P_r(k)
    )
  } →
  
  assert(
    ∑_k (n choose k)x(x - kz)^(k-1)(-x + kz)^(n-k)
  ) →
  
  transform(
    (-x + kz)^(n-k) = (-1)^(n-k)(x - kz)^(n-k)
  ) →
  
  assert(
    ∑_k (n choose k)(-1)^(n-k)x(x - kz)^(n-1)
  ) →
  
  apply(PolynomialSum()) →
  
  assert(
    coefficient(k^n) = 0 →
    ∑_k (n choose k)(-1)^(n-k)(b_0 + b_1k + ... + b_(n-1)k^(n-1) + 0k^n) = 0
  ) →
  
  conclude(
    (x + y)^n = ∑_k (n choose k)x(x - kz)^(k-1)(y + kz)^(n-k)
    when x + y = 0
  )
}