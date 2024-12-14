theorem Complex_Cosine_is_Entire() {
  assert(
    ∀z ∈ ℂ, cos: ℂ → ℂ ⇒ cos is entire
  )
} ↔

proof Complex_Cosine_is_Entire() {
  setVar(f: ℂ → ℂ, g: ℂ → ℂ, h: ℂ → ℂ) →
  define(f(z) = exp(z)) →
  define(g(z) = iz) →
  define(h(z) = -iz) →
  
  lemma Exp_is_Entire() {
    assert(f is entire)
  } →
  
  lemma Polynomial_is_Entire() {
    assert(g is entire ∧ h is entire)
  } →
  
  lemma Composition_is_Entire() {
    assert(
      (f is entire ∧ g is entire) ⇒ (f ∘ g) is entire ∧
      (f is entire ∧ h is entire) ⇒ (f ∘ h) is entire
    )
  } →
  
  lemma Linear_Combination_is_Entire() {
    assert(
      (f ∘ g) is entire ∧ (f ∘ h) is entire ⇒
      ½((f ∘ g) + (f ∘ h)) is entire
    )
  } →
  
  apply(Euler_Cosine_Identity()) →
  assert(
    ∀z ∈ ℂ, cos(z) = ½(exp(iz) + exp(-iz))
  ) →
  
  assert(cos is entire)
}