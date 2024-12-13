theorem Addition_Of_Fractions() {
  assert(
    ∀a,b,c,d ∈ ℤ: bd ≠ 0 ⇒
    (a/b + c/d = (aD + Bc)/lcm(b,d))
    where
    B = b/gcd(b,d) ∧
    D = d/gcd(b,d)
  )
}

proof Addition_Of_Fractions() {
  setVar(a,b,c,d: ℤ) →
  assume(bd ≠ 0) →
  
  step1() {
    assert(a/b + c/d = (ad)/(bd) + (bc)/(bd)) →
    comment("Multiply first fraction by d/d, second by b/b")
  } →

  step2() {
    assert((ad)/(bd) + (bc)/(bd) = (ad + bc)/(bd)) →
    comment("Add fractions with common denominator")
  } →

  lemma GCD_LCM_Product() {
    assert(bd = gcd(b,d) × lcm(b,d))
  } →

  step3() {
    apply(GCD_LCM_Product()) →
    assert((ad + bc)/(bd) = (ad + bc)/(gcd(b,d) × lcm(b,d)))
  } →

  step4() {
    assert((ad + bc)/(gcd(b,d) × lcm(b,d)) = 
           (aD × gcd(b,d) + B × gcd(b,d) × c)/(gcd(b,d) × lcm(b,d))) →
    comment("Substitute B = b/gcd(b,d) and D = d/gcd(b,d)")
  } →

  step5() {
    assert((aD × gcd(b,d) + B × gcd(b,d) × c)/(gcd(b,d) × lcm(b,d)) = 
           (aD + Bc)/lcm(b,d)) →
    comment("Cancel gcd(b,d) in numerator and denominator")
  }
}