theorem ComplexIntegrationBySubstitution() {
  assert(
    ∀[a,b] ∈ ℝ, ∀φ: [a,b] → ℝ, ∀f: A → ℂ,
    (φ differentiable on [a,b] ∧ 
     f continuous on A ⊆ φ([a,b])) ⇒
    ((φ(a) ≤ φ(b) ⇒ ∫[φ(a)]^[φ(b)] f(t)dt = ∫[a]^[b] f(φ(u))φ'(u)du) ∧
     (φ(a) > φ(b) ⇒ ∫[φ(b)]^[φ(a)] f(t)dt = -∫[a]^[b] f(φ(u))φ'(u)du))
  )
} ↔

proof ComplexIntegrationBySubstitution() {
  setVar(a,b: ℝ, φ: [a,b] → ℝ, f: A → ℂ) →
  
  lemma Case1_PhiALessEqual() {
    assert(φ(a) ≤ φ(b)) →
    assert(∫[φ(a)]^[φ(b)] f(t)dt = 
           ∫[φ(a)]^[φ(b)] Re(f(t))dt + i∫[φ(a)]^[φ(b)] Im(f(t))dt) →
    apply(RealSubstitution) →
    assert(= ∫[a]^[b] Re(f(φ(u)))φ'(u)du + i∫[a]^[b] Im(f(φ(u)))φ'(u)du) →
    apply(ComplexMultiplication) →
    assert(= ∫[a]^[b] f(φ(u))φ'(u)du)
  } →

  lemma Case2_PhiAGreater() {
    assert(φ(a) > φ(b)) →
    assert(∫[φ(b)]^[φ(a)] f(t)dt = 
           ∫[φ(b)]^[φ(a)] Re(f(t))dt + i∫[φ(b)]^[φ(a)] Im(f(t))dt) →
    apply(RealSubstitution) →
    assert(= -∫[a]^[b] Re(f(φ(u)))φ'(u)du - i∫[a]^[b] Im(f(φ(u)))φ'(u)du) →
    apply(ComplexMultiplication) →
    assert(= -∫[a]^[b] f(φ(u))φ'(u)du)
  }
}