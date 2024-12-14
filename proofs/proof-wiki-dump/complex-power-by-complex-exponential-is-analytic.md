theorem Complex_Power_Analytic() {
  assert(
    ∀ψ,η ∈ ℂ ∧ f(z) = z^ψ exp(-ηz) ⇒ 
    isAnalytic(f, D) where D = {z ∈ ℂ: z ≠ 0 ∧ z ∉ ℝ⁻}
  )
} ↔

proof Complex_Power_Analytic() {
  setVar(z = r exp(iθ) where r > 0 ∧ θ ∈ (-π,π)) →
  setVar(ψ = a + bi, η = c + di) →
  
  step1: {
    f(r exp(iθ)) = z^ψ exp(-ηz) →
    = (r exp(iθ))^ψ exp(-ηr exp(iθ)) →
    = exp(ψ Log(r exp(iθ))) exp(-η r(cos(θ) + i sin(θ))) →
    = exp(ψ ln(r) + iψθ - ηr(cos(θ) + i sin(θ)))
  } →
  
  step2: {
    define(g(r,θ) = a ln(r) - bθ - cr cos(θ) + dr sin(θ)) →
    define(h(r,θ) = b ln(r) + aθ - dr cos(θ) - cr sin(θ)) →
    f(r exp(iθ)) = exp(g) exp(ih) →
    = exp(g)(cos(h) + i sin(h))
  } →
  
  step3: {
    define(u(r,θ) = exp(g) cos(h)) →
    define(v(r,θ) = exp(g) sin(h))
  } →
  
  lemma Cauchy_Riemann_Polar() {
    assert(
      ∂u/∂r = (1/r)∂v/∂θ ∧
      ∂u/∂θ = -r∂v/∂r
    )
  } →
  
  step4: {
    compute(∂g/∂r = a/r - c cos(θ) + d sin(θ)) →
    compute(∂h/∂r = b/r - d cos(θ) - c sin(θ)) →
    compute(∂g/∂θ = -b + cr sin(θ) + dr cos(θ)) →
    compute(∂h/∂θ = a + dr sin(θ) - cr cos(θ))
  } →
  
  apply(Cauchy_Riemann_Polar()) →
  
  conclude(isAnalytic(f, D))
}