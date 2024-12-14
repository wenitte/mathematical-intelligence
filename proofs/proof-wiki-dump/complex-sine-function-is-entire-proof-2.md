theorem Complex_Sine_is_Entire() {
  assert(
    ∀z ∈ ℂ, sin: ℂ → ℂ ⇒ isEntire(sin)
  )
} ↔

proof Complex_Sine_is_Entire() {
  define(f: ℂ → ℂ, f(z) = exp(z)) →
  define(g: ℂ → ℂ, g(z) = iz) →
  define(h: ℂ → ℂ, h(z) = -iz) →
  
  lemma Functions_are_Entire() {
    assert(isEntire(f)) by Complex_Exponential_is_Entire() →
    assert(isEntire(g) ∧ isEntire(h)) by Polynomial_is_Entire()
  } →
  
  apply(Functions_are_Entire()) →
  apply(Composition_of_Entire_Functions(f,g)) →
  apply(Composition_of_Entire_Functions(f,h)) →
  assert(isEntire(f∘g) ∧ isEntire(f∘h)) →
  
  define(composite: ℂ → ℂ, composite(z) = (1/(2i))((f∘g)(z) - (f∘h)(z))) →
  apply(Linear_Combination_of_Entire_Functions()) →
  assert(isEntire(composite)) →
  
  lemma Eulers_Sine_Identity() {
    assert(
      ∀z ∈ ℂ, (1/(2i))(exp(iz) - exp(-iz)) = sin(z)
    )
  } →
  
  apply(Eulers_Sine_Identity()) →
  assert(composite = sin) →
  assert(isEntire(sin))
}