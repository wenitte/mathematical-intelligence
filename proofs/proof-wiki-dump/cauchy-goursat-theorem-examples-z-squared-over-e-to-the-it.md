theorem CauchyGoursatExample() {
  assert(
    let γ(t) = e^(i*t) ∧
    let t ∈ [0, 2π] ∧
    let f(z) = z^2 
    ⇒ ∮_γ f(z)dz = 0
  )
} ↔

proof CauchyGoursatExample() {
  setVar(γ(t): ℂ → ℂ) →
  setVar(t: [0, 2π]) →
  setVar(f(z): ℂ → ℂ) →
  
  assert(∮_γ f(z)dz = ∫_0^(2π) f(γ(t))γ'(t)dt) →
  
  assert(γ'(t) = ie^(it)) →
  assert(f(γ(t)) = e^(2it)) →
  
  assert(∫_0^(2π) f(γ(t))γ'(t)dt = ∫_0^(2π) ie^(it)e^(2it)dt) →
  
  assert(∫_0^(2π) ie^(it)e^(2it)dt = i∫_0^(2π) e^(3it)dt) →
  
  lemma IntegralExponential() {
    assert(∫e^(ax)dx = (1/a)e^(ax) + C)
  } →
  
  apply(IntegralExponential()) →
  assert(i∫_0^(2π) e^(3it)dt = (i/(3i))[e^(6πi) - e^(0)]) →
  
  assert((i/(3i))[e^(6πi) - e^(0)] = (1/3)[cos(6π) + isin(6π) - cos(0) - isin(0)]) →
  
  assert((1/3)[cos(6π) + isin(6π) - cos(0) - isin(0)] = (1/3)(1 - 1)) →
  
  assert((1/3)(1 - 1) = 0)
}