theorem Weierstrass_Elementary_Factors_Bounds() {
  let E_p: ℂ → ℂ
  def E_p(z) = match p with {
    0 → (1 - z)
    _ → (1 - z)exp(z + z²/2 + ... + zᵖ/p)
  }
  
  assert(
    [∀z ∈ ℂ ∧ |z| ≤ 1/2] →
    |E_p(z) - 1| ≤ 3|z|^(p+1)
  ) ∧
  assert(
    [∀z ∈ ℂ ∧ |z| ≤ 1] →
    |E_p(z) - 1| ≤ |z|^(p+1)
  )
}

proof First_Bound() {
  assume(|z| ≤ 1/2) →
  assume(p ≥ 1) →
  
  assert(E_p(z) = exp(log(1-z) + Σ_{k=1}^p z^k/k)) →
  
  lemma Log_Series() {
    assert(|log(1-z) + Σ_{k=1}^p z^k/k| = |Σ_{k=p+1}^∞ z^k/k|)
  } →
  
  apply(Triangle_Inequality) →
  assert(|Σ_{k=p+1}^∞ z^k/k| ≤ Σ_{k=p+1}^∞ |z|^k/k) →
  assert(Σ_{k=p+1}^∞ |z|^k/k ≤ Σ_{k=p+1}^∞ |z|^k) →
  
  lemma Geometric_Series() {
    assert(Σ_{k=p+1}^∞ |z|^k = |z|^(p+1)/(1-|z|))
  } →
  
  apply(|z| ≤ 1/2) →
  assert(|z|^(p+1)/(1-|z|) ≤ 2|z|^(p+1)) →
  
  apply(Complex_Exponential_Bounds) →
  assert(|E_p(z) - 1| ≤ 3|z|^(p+1))
}

proof Second_Bound() {
  assume(|z| ≤ 1) →
  assume(p ≥ 1) →
  
  let E_p(z) = (1-z)exp(z + z²/2 + ... + zᵖ/p) = 1 + Σ_{k=1}^∞ aₖz^k →
  
  lemma Coefficient_Properties() {
    assert(a₁ = a₂ = ... = aₚ = 0) ∧
    assert(∀k ≥ p+1: aₖ ≤ 0) ∧
    assert(∀k ≥ p+1: |aₖ| = -aₖ) ∧
    assert(Σ_{k=p+1}^∞ |aₖ| = 1)
  } →
  
  assert(|E_p(z) - 1| = |Σ_{k=p+1}^∞ aₖz^k|) →
  assert(|Σ_{k=p+1}^∞ aₖz^k| = |z|^(p+1)|Σ_{k=p+1}^∞ aₖz^(k-p-1)|) →
  
  apply(Triangle_Inequality) →
  apply(|z| ≤ 1) →
  assert(|z|^(p+1)|Σ_{k=p+1}^∞ aₖz^(k-p-1)| ≤ |z|^(p+1)Σ_{k=p+1}^∞ |aₖ|) →
  
  apply(Coefficient_Properties()) →
  assert(|z|^(p+1)Σ_{k=p+1}^∞ |aₖ| = |z|^(p+1))
}