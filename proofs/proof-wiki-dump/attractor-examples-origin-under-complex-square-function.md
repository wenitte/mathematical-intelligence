theorem ComplexSquareAttractor() {
  assert(
    ∀z ∈ ℂ, f(z) = z² →
    (0,0) is_attractor_for f
  )
} ↔

proof ComplexSquareAttractor() {
  define(B₀₁ = {z ∈ ℂ: |z| < 1}) →
  setVar(z ∈ B₀₁) →
  
  // Express z in polar form
  assert(z = r·e^(iθ)) →
  assert(z = e^(ln(r))·e^(iθ)) →
  assert(z = e^(ln(r) + iθ)) →
  
  lemma ModulusCondition() {
    assert(|z| < 1) →
    assert(|r| < 1) →
    assert(ln(r) < 0)
  } →
  
  // Track iterations of f
  assert(f(z) = (e^(ln(r) + iθ))²) →
  assert(f(z) = e^(2ln(r) + 2iθ)) →
  
  // General form for n iterations
  assert(∀n ∈ ℕ: f^n(z) = (e^(ln(r) + iθ))^(2^n)) →
  assert(∀n ∈ ℕ: f^n(z) = e^(2^n·ln(r) + 2^n·iθ)) →
  
  // Limit behavior
  apply(ModulusCondition()) →
  assert(lim[n→∞](2^n·ln(r)) = -∞) →
  assert(lim[n→∞](e^(2^n·ln(r) + 2^n·iθ)) = 0) →
  
  conclude((0,0) is_attractor_for f)
}