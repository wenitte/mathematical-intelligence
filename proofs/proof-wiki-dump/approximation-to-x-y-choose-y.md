theorem Binomial_Coefficient_Limit() {
  assert(
    lim[x,y→∞] (x+y choose y) = √((1/(2π))*(1/x + 1/y))*(1 + y/x)^x*(1 + x/y)^y
  )
} ↔

proof Binomial_Coefficient_Limit() {
  setVar(x,y: ℤ⁺) →
  assert((x+y choose y) = (x+y)!/(x!*y!)) →
  
  lemma Stirling_Formula() {
    assert(
      lim[n→∞] n! = √(2πn)*(n/e)^n
    )
  } →
  
  apply(Stirling_Formula()) →
  assert(
    lim[x,y→∞] (x+y choose y) = 
    (√(2π(x+y))*((x+y)/e)^(x+y))/(√(2πx)*(x/e)^x * √(2πy)*(y/e)^y)
  ) →
  
  assert(
    = (1/√(2π))*(1/e)^(x+y)/((1/e)^x*(1/e)^y) * √((x+y)/(xy)) * 
    ((x+y)^x*(x+y)^y)/(x^x*y^y)
  ) →
  
  assert(
    = (1/√(2π))*√(1/x + 1/y)*(1 + y/x)^x*(1 + x/y)^y
  ) →
  
  assert(
    = √((1/(2π))*(1/x + 1/y))*(1 + y/x)^x*(1 + x/y)^y
  )
}