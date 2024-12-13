theorem Beta_Function_Real_With_One() {
  assert(
    ∀x ∈ ℝ⁺ ⇒ (β(x,1) = β(1,x) = 1/x)
  )
} ↔

proof Beta_Function_Real_With_One() {
  setVar(x: ℝ⁺) →
  
  lemma First_Equality() {
    assert(β(x,1) = ∫₀¹ t^(x-1)(1-t)^(1-1) dt) →
    assert(β(x,1) = ∫₀¹ t^(x-1) dt) →
    assert(β(x,1) = [t^x/x]₀¹) →
    assert(β(x,1) = 1/x - 0/x) →
    assert(β(x,1) = 1/x)
  } →

  lemma Second_Equality() {
    assert(β(1,x) = ∫₀¹ t^(1-1)(1-t)^(x-1) dt) →
    assert(β(1,x) = ∫₀¹ (1-t)^(x-1) dt) →
    assert(β(1,x) = ∫₁₀ -z^(x-1) dz) →  # substitution z = 1-t
    assert(β(1,x) = -[z^x/x]₁₀) →
    assert(β(1,x) = -(0/x - 1/x)) →
    assert(β(1,x) = 1/x)
  } →

  apply(First_Equality()) ∧ apply(Second_Equality()) →
  assert(β(x,1) = 1/x = β(1,x))
}