theorem Binomial_Coefficient_Limit() {
  assert(
    lim[n→∞] C(2n,n) = 4^n / √(nπ)
  )
} ↔

proof Binomial_Coefficient_Limit() {
  lemma Binomial_Approximation() {
    assert(
      lim[x,y→∞] C(x+y,y) = √(1/(2π)(1/x + 1/y)) * (1 + y/x)^x * (1 + x/y)^y
    )
  } →
  
  apply(Binomial_Approximation()) →
  
  step1: {
    assert(
      lim[n→∞] C(2n,n) = √(1/(2π)(1/n + 1/n)) * (1 + n/n)^n * (1 + n/n)^n
    )
  } →
  
  step2: {
    assert(
      = √(1/(2π)(2/n)) * (1 + 1)^n * (1 + 1)^n
    )
  } →
  
  step3: {
    assert(
      = √(1/(nπ)) * 2^(2n)
    )
  } →
  
  step4: {
    assert(
      = 4^n / √(nπ)
    )
  }
}