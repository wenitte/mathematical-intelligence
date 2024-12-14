theorem ChuVandermonde() {
  let(r, s ∈ ℝ, n ∈ ℤ≥0)
  assert(
    ∑(k=0 to n)[binomial(r,k) × binomial(s,n-k)] = binomial(r+s,n)
  )
}

proof ChuVandermonde() {
  // First proof using generating functions
  setVar(x: ℝ) →
  assert(
    ∑(n=0 to r+s)[binomial(r+s,n)x^n] = (1+x)^(r+s)
  ) →
  apply(ExponentCombination) →
  assert(
    (1+x)^(r+s) = (1+x)^r × (1+x)^s
  ) →
  apply(BinomialTheorem) →
  assert(
    (1+x)^r × (1+x)^s = ∑(k=0 to r)[binomial(r,k)x^k] × ∑(k=0 to s)[binomial(s,k)x^k]
  ) →
  apply(ProductOfSeries) →
  assert(
    ∑(k=0 to r)[binomial(r,k)x^k] × ∑(k=0 to s)[binomial(s,k)x^k] = 
    ∑(n=0 to r+s)[(∑(k=0 to n)[binomial(r,k) × binomial(s,n-k)])x^n]
  ) →
  lemma CoefficientEquality() {
    assert(
      binomial(r+s,n) = ∑(k=0 to n)[binomial(r,k) × binomial(s,n-k)]
    )
  }
}

theorem ChuVandermondeRisingFactorial() {
  let(r, s ∈ ℝ, n ∈ ℤ≥0)
  assert(
    ∑(k=0 to n)[binomial(n,k) × r^(k↑) × s^((n-k)↑)] = (r+s)^(n↑)
  )
}

theorem ChuVandermondeFallingFactorial() {
  let(r, s ∈ ℝ, n ∈ ℤ≥0)
  assert(
    ∑(k=0 to n)[binomial(n,k) × r^(k↓) × s^((n-k)↓)] = (r+s)^(n↓)
  )
}

theorem ExtendedChuVandermonde() {
  let(r, s, α, β ∈ ℂ)
  assert(
    ∑(k∈ℤ)[binomial(r,α+k) × binomial(s,β-k)] = binomial(r+s,α+β)
  )
}