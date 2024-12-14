theorem Chu_Vandermonde_Example() {
  let(r = e, s = π, n = 2)
  assert(
    (e + π choose 2) = Σ(k=0 to 2)[e choose k × π choose (2-k)]
  )
}

proof Chu_Vandermonde_Example() {
  let(LHS = (e + π choose 2)) →
  
  step1: {
    assert(LHS = ((e + π)(e + π - 1))/(2 × 1)) by(binomial_coefficient_def)
  } →
  
  step2: {
    assert(LHS = (1/2)((e + π)² - (e + π))) by(multiply_out)
  } →
  
  step3: {
    assert(LHS = (1/2)(e² + 2eπ + π² - e - π)) by(simplify)
  } →
  
  let(RHS = Σ(k=0 to 2)[e choose k × π choose (2-k)]) →
  
  step4: {
    assert(RHS = (e choose 0)(π choose 2) + (e choose 1)(π choose 1) + (e choose 2)(π choose 0)) by(summation_def)
  } →
  
  step5: {
    assert(RHS = 1 × (π(π-1)/2) + e × π + (e(e-1)/2) × 1) by(binomial_coefficient_def)
  } →
  
  step6: {
    assert(RHS = (1/2)(π² - π + 2eπ + e² - e)) by(simplify)
  } →
  
  step7: {
    assert(RHS = (1/2)(e² + 2eπ + π² - e - π)) by(rearrange)
  } →
  
  conclude: {
    assert(LHS = RHS) by(equality_of_expressions)
  }
}