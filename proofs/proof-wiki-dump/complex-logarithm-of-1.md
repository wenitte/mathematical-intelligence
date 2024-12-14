theorem Complex_Logarithm_Of_One() {
  assert(
    ln(1) = {2kπi : k ∈ ℤ}
  )
} ↔

proof Complex_Logarithm_Of_One() {
  definition Complex_Natural_Log() {
    assert(ln(re^{iθ}) = {ln_ℝ(r) + iθ + 2kπi : k ∈ ℤ})
  } →
  
  step1: apply(Complex_Natural_Log()) {
    substitute(r = 1, θ = 0) →
    assert(ln(1e^{i×0}) = {ln_ℝ(1) + i×0 + 2kπi : k ∈ ℤ})
  } →
  
  step2: apply(Wholly_Real_Def()) {
    assert(ln(1e^0) = {ln_ℝ(1) + i×0 + 2kπi : k ∈ ℤ})
  } →
  
  step3: apply(Complex_Multiplication()) {
    assert(ln(1×(1 + 0i)) = {ln_ℝ(1) + i×0 + 2kπi : k ∈ ℤ})
  } →
  
  step4: apply(Complex_Exponential()) {
    assert(ln(1×1) = {ln_ℝ(1) + i×0 + 2kπi : k ∈ ℤ})
  } →
  
  step5: apply(Wholly_Real_Def()) {
    assert(ln(1) = {ln_ℝ(1) + i×0 + 2kπi : k ∈ ℤ})
  } →
  
  step6: apply(Real_Logarithm_Of_One()) {
    assert(ln(1) = {0 + i×0 + 2kπi : k ∈ ℤ})
  } →
  
  step7: apply(Complex_Addition_Identity()) {
    assert(ln(1) = {2kπi : k ∈ ℤ})
  }
}