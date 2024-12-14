theorem NormalDistribution_CharacteristicFunction_Lemma1() {
  let φ(t) := CharacteristicFunction(NormalDist(μ, σ²))
  let k := μ + itσ²
  let c := exp(μit - (1/2)t²σ²)
  
  assert(
    φ(t) = c * (1/√(2πσ²)) * ∫[x∈ℝ](exp(-(((x-k)/(√2σ))²)))dx
  )
} ↔

proof NormalDistribution_CharacteristicFunction_Lemma1() {
  // Definition of characteristic function
  assert(φ(t) = 𝔼[exp(itX)]) →
  
  // Expand expectation using PDF of normal distribution
  assert(
    φ(t) = ∫[x∈ℝ](exp(itx) * (1/√(2πσ²)) * exp(-(((x-μ)²)/(2σ²))))dx
  ) →
  
  // Combine exponential terms
  assert(
    φ(t) = (1/√(2πσ²)) * ∫[x∈ℝ](exp(itx - ((x-μ)²)/(2σ²)))dx
  ) →
  
  lemma ExponentIdentity() {
    assert(
      itx - ((x-μ)²)/(2σ²) = 
      -((x-k)² + 2μitσ² - t²σ⁴)/(2σ²)
    )
  } →
  
  apply(ExponentIdentity()) →
  
  // Separate constant terms from integral
  assert(
    φ(t) = (1/√(2πσ²)) * exp((2μitσ² - t²σ⁴)/(2σ²)) * 
    ∫[x∈ℝ](exp(-((x-k)²)/(2σ²)))dx
  ) →
  
  // Simplify exponential term
  assert(
    exp((2μitσ² - t²σ⁴)/(2σ²)) = exp(μit - (1/2)t²σ²)
  ) →
  
  // Substitute c definition
  assert(
    φ(t) = c * (1/√(2πσ²)) * ∫[x∈ℝ](exp(-(((x-k)/(√2σ))²)))dx
  )
}