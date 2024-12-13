theorem Binomial_Approx_Example() {
  assert(
    ∀x = 1.06 → x^(1/3) ≈ 1.019613 [to 6 decimal places]
  )
} ↔

proof Binomial_Approx_Example() {
  setVar(x := 1.06) →
  assert(1.06 = 1 + 0.06) →
  
  lemma Binomial_Expansion() {
    assert(
      (1 + a)^n = 1 + na + (n(n-1)/2!)a^2 + (n(n-1)(n-2)/3!)a^3 + (n(n-1)(n-2)(n-3)/4!)a^4 + ...
    )
  } →
  
  apply(Binomial_Expansion(), n := 1/3, a := 0.06) →
  
  assert(
    (1.06)^(1/3) = 1 + (1/3)(0.06) + ((1/3)(-2/3)/2!)(0.06)^2 
    + ((1/3)(-2/3)(-5/3)/3!)(0.06)^3 
    + ((1/3)(-2/3)(-5/3)(-7/3)/4!)(0.06)^4
  ) →
  
  eval(
    = 1 + 0.02 - 0.0004 + 0.000133 - 0.00000053
  ) →
  
  assert(
    = 1.0196128
  ) →
  
  truncate(6_decimals) →
  
  conclude(1.0196128 ≈ 1.019613)
}