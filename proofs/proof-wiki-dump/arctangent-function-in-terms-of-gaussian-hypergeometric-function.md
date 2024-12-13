theorem ArctanHypergeometric() {
  assert(
    ∀x ∈ ℝ, |x| < 1 ⇒ 
    arctan(x) = x⋅F(1/2, 1; 3/2; -x²)
  )
} ↔

proof ArctanHypergeometric() {
  setVar(x: ℝ, |x| < 1) →
  
  assert(x⋅F(1/2, 1; 3/2; -x²)) →
  
  step1() {
    assert(
      x⋅F(1/2, 1; 3/2; -x²) = 
      x⋅∑_{n=0}^∞ ((1/2)ⁿ⋅1ⁿ)/(3/2)ⁿ ⋅(-x²)ⁿ/n!
    )
  } →
  
  step2() {
    assert(
      x⋅∑_{n=0}^∞ ((1/2)ⁿ⋅1ⁿ)/(3/2)ⁿ ⋅(-x²)ⁿ/n! =
      x⋅∑_{n=0}^∞ (Γ(1/2 + n)/Γ(1/2))⋅(Γ(3/2)/Γ(3/2 + n))⋅n!⋅(-x²)ⁿ/n!
    )
  } →
  
  step3() {
    assert(
      x⋅∑_{n=0}^∞ (Γ(1/2 + n)/Γ(1/2))⋅(Γ(3/2)/Γ(3/2 + n))⋅n!⋅(-x²)ⁿ/n! =
      x⋅∑_{n=0}^∞ (1/(2(n + 1/2)))⋅(-1)ⁿ⋅x^(2n)
    )
  } →
  
  step4() {
    assert(
      x⋅∑_{n=0}^∞ (1/(2(n + 1/2)))⋅(-1)ⁿ⋅x^(2n) =
      ∑_{n=0}^∞ (-1)ⁿ⋅x^(2n + 1)/(2n + 1)
    )
  } →
  
  step5() {
    assert(
      ∑_{n=0}^∞ (-1)ⁿ⋅x^(2n + 1)/(2n + 1) = arctan(x)
    )
  } →
  
  conclude(arctan(x) = x⋅F(1/2, 1; 3/2; -x²))
}