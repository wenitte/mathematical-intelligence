theorem ArcLength_Parametric() {
  assert(
    ∀f,g: ℝ → ℝ,
    ∀t ∈ [a,b],
    let C = {(f(t), g(t)) | t ∈ [a,b]} ∧
    continuous(f,g,t ∈ [a,b]) ∧
    differentiable(f,g,t ∈ (a,b)) ∧
    ¬∃t₁,t₂ ∈ (a,b): t₁ ≠ t₂ ∧ (f(t₁),g(t₁)) = (f(t₂),g(t₂)) ∧
    dx/dt ≠ 0
    ⇒
    arcLength(C) = ∫[a,b] √((dx/dt)² + (dy/dt)²) dt
  )
} ↔

proof ArcLength_Parametric() {
  setVar(s: arcLength(C)) →
  
  assert(s = ∫[a,b] √(1 + (dy/dx)²) dx) by ArcLength_Definition() →
  
  lemma ChainRule() {
    assert(dy/dx = (dy/dt)/(dx/dt))
  } →
  
  assert(s = ∫[a,b] √((dx/dt)²/(dx/dt)² + (dy/dt)²/(dx/dt)²) dx) by ChainRule() →
  
  assert((dx/dt)²/(dx/dt)² = 1) →
  
  assert(s = ∫[a,b] √((dx/dt)² + (dy/dt)²) * (1/(dx/dt)) dx) by Factoring() →
  
  lemma InverseDerivative() {
    assert(dt/dx = 1/(dx/dt))
  } →
  
  assert(s = ∫[a,b] √((dx/dt)² + (dy/dt)²) * (dt/dx) dx) by InverseDerivative() →
  
  assert(s = ∫[a,b] √((dx/dt)² + (dy/dt)²) dt) by Substitution()
}