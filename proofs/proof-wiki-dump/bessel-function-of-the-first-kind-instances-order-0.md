theorem Bessel_Function_First_Kind_Order_0() {
  assert(
    ∀x ∈ ℝ ⇒ J₀(x) = ∑_{k=0}^∞ ((-1)^k / (k!)²)(x/2)^{2k}
  )
} ↔

proof Bessel_Function_First_Kind_Order_0() {
  setVar(x: ℝ) →
  lemma General_Bessel_Function() {
    assert(
      ∀n ∈ ℝ[n ≠ -1,-2,-3,...] ⇒ 
      Jₙ(x) = ∑_{k=0}^∞ ((-1)^k / (k!Γ(n+k+1)))(x/2)^{n+2k}
    )
  } →
  
  apply(General_Bessel_Function()) →
  substitute(n := 0) →
  assert(
    J₀(x) = ∑_{k=0}^∞ ((-1)^k / (k!Γ(k+1)))(x/2)^{2k}
  ) →
  
  lemma Gamma_Factorial() {
    assert(
      ∀k ∈ ℕ ⇒ Γ(k+1) = k!
    )
  } →
  
  apply(Gamma_Factorial()) →
  assert(
    J₀(x) = ∑_{k=0}^∞ ((-1)^k / (k!)²)(x/2)^{2k}
  ) →
  
  expand() →
  assert(
    J₀(x) = 1 - (x²/2²) + (x⁴/(2²×4²)) - (x⁶/(2²×4²×6²)) + ...
  )
}