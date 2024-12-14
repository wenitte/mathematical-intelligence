theorem Common_Log_657_3() {
  assert(
    log₁₀(657.3) = 2.8178
  )
} ↔

proof Common_Log_657_3() {
  setVar(x: ℝ) →
  assert(657.3 = 6.573 × 10²) [Scientific_Notation] →
  assert(log₁₀(657.3) = log₁₀(6.573 × 10²)) [Log_Equality] →
  
  lemma Log_Product() {
    assert(∀a,b ∈ ℝ⁺: log₁₀(a × b) = log₁₀(a) + log₁₀(b))
  } →
  
  apply(Log_Product()) →
  assert(log₁₀(6.573 × 10²) = log₁₀(6.573) + log₁₀(10²)) →
  
  lemma Common_Log_Power() {
    assert(∀n ∈ ℝ: log₁₀(10ⁿ) = n)
  } →
  
  apply(Common_Log_Power()) →
  assert(log₁₀(6.573) + log₁₀(10²) = 0.8178 + 2) [Common_Log_Value] →
  assert(0.8178 + 2 = 2.8178) [Arithmetic] →
  assert(log₁₀(657.3) = 2.8178)
}