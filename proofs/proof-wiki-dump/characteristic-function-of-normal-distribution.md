theorem NormalDistCharFunc() {
  assert(
    ∀μ,σ,t ∈ ℝ ⇒ φ(t) = exp(iμt - (1/2)t²σ²)
  )
} ↔

proof NormalDistCharFunc() {
  lemma L1() {
    setVar(k: ℝ = μ + itσ²) ∧
    setVar(c: ℝ = exp(μit - (1/2)t²σ²)) →
    assert(
      φ(t) = c * (1/√(2πσ²)) ∫_{x∈ℝ} exp(-(((x-k)/(√2σ))²)) dx
    )
  } →

  lemma L2() {
    assert(
      lim_{α→∞} ∫_{(-α-μ)/(√2σ)-itσ/√2}^{(α-μ)/(√2σ)-itσ/√2} exp(-z²) dz = √(2πσ²)
    )
  } →

  apply(L1()) →
  
  setVar(z: ℂ = (x-k)/(√2σ)) →
  
  assert(
    φ(t) = c * (1/√(2πσ²)) ∫_{(-α-μ)/(√2σ)-itσ/√2}^{(α-μ)/(√2σ)-itσ/√2} exp(-z²) dz
  ) →

  apply(L2()) →
  
  assert(
    φ(t) = c * (1/√(2πσ²)) * √(2πσ²)
  ) →
  
  assert(
    φ(t) = c
  ) →
  
  assert(
    φ(t) = exp(iμt - (1/2)t²σ²)
  )
}

corollary StandardNormalCharFunc() {
  assert(
    ∀t ∈ ℝ ⇒ (μ = 0 ∧ σ = 1) → φ(t) = exp(-(1/2)t²)
  )
}