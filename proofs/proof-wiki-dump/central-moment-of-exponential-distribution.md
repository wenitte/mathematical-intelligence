theorem Central_Moment_Exponential() {
  assume(
    X: Random_Variable(continuous),
    X ~ Exponential(β),
    β ∈ ℝ_{>0},
    n ∈ ℤ_{>0}
  ) →
  assert(
    μ_n = n!β^n ∑_{k=0}^n (-1)^k/k!
  )
}

proof Central_Moment_Exponential() {
  // Definition of central moment
  assert(μ_n = 𝔼[(X - μ)^n]) →
  
  // Apply known expectation of exponential distribution
  assert(μ = β) →
  
  // Apply binomial theorem to (X - β)^n
  assert(
    μ_n = 𝔼[∑_{k=0}^n (n choose k)X^{n-k}(-β)^k]
  ) →
  
  // Linearity of expectation
  assert(
    μ_n = ∑_{k=0}^n (n choose k)(-β)^k 𝔼[X^{n-k}]
  ) →
  
  // Apply raw moment of exponential distribution
  assert(
    μ_n = ∑_{k=0}^n β^k (n choose k)(-1)^k ((n-k)!β^{n-k})
  ) →
  
  // Substitute binomial coefficient definition
  assert(
    μ_n = ∑_{k=0}^n β^n (n!/(k!(n-k)!))(-1)^k(n-k)!
  ) →
  
  // Simplify
  assert(
    μ_n = n!β^n ∑_{k=0}^n (-1)^k/k!
  )
}