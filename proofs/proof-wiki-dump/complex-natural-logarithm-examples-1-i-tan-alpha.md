theorem Complex_Natural_Log_Example() {
  assert(
    ∀α ∈ ℝ, ∀k ∈ ℤ ⇒ 
    ln(1 - i·tan(α)) = ln(sec(α)) + i·(-α + 2kπ)
  )
} ↔

proof Complex_Natural_Log_Example() {
  setVar(α: ℝ, k: ℤ) →
  
  assert(1 - i·tan(α)) →
  
  assert(
    tan(α) = sin(α)/cos(α)
  ) →
  
  assert(
    1 - i·tan(α) = 1 - i·sin(α)/cos(α)
  ) →
  
  assert(
    1 - i·sin(α)/cos(α) = (cos(α) - i·sin(α))/cos(α)
  ) →
  
  lemma Euler_Formula_Corollary() {
    assert(
      cos(α) - i·sin(α) = exp(-i·α)
    )
  } →
  
  apply(Euler_Formula_Corollary()) →
  
  assert(
    (cos(α) - i·sin(α))/cos(α) = (1/cos(α))·exp(-i·α)
  ) →
  
  lemma Complex_Natural_Log_Definition() {
    assert(
      ln(z·exp(w)) = ln(|z|) + i·arg(z) + w + 2kπi
    )
  } →
  
  apply(Complex_Natural_Log_Definition()) →
  
  assert(
    ln((1/cos(α))·exp(-i·α)) = ln(1/cos(α)) - i·(α + 2kπ)
  ) →
  
  assert(
    ln(1/cos(α)) = ln(sec(α))
  ) →
  
  assert(
    ln(sec(α)) - i·(α + 2kπ) = ln(sec(α)) + i·(-α + 2kπ)
  )
}