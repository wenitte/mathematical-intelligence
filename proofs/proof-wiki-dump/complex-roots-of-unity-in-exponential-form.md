theorem ComplexRootsOfUnity() {
  require(n ∈ ℤ ∧ n > 0)
  require(z ∈ ℂ)
  assert(
    z^n = 1 ↔ z ∈ {e^(2πik/n) : k ∈ ℕ_n}
  ) ∧
  assert(
    |U_n| = n where U_n = {1, ω, ω^2, ..., ω^(n-1)} ∧ ω = e^(2πi/n)
  )
}

proof ComplexRootsOfUnity() {
  // Forward direction
  setVar(z: ℂ) →
  assume(z ∈ {e^(2πik/n) : k ∈ ℕ_n}) →
  assert(z^n ∈ {e^(2πik) : k ∈ ℕ_n}) →
  assert(z^n = 1) →

  // Reverse direction
  assume(z^n = 1) →
  setVar(r: ℝ, θ: ℝ) →
  assert(z = re^(iθ)) →
  
  lemma ModulusOne() {
    assert(|z^n| = 1) →
    assert(|z| = 1) →
    assert(r = 1)
  } →

  lemma ArgumentForm() {
    assert(nθ ≡ 0 (mod 2π)) →
    assert(∃k ∈ ℤ: θ = 2πk/n)
  } →

  apply(ModulusOne()) →
  apply(ArgumentForm()) →

  assert(z = e^(2πik/n) for some k ∈ ℕ_n) →
  assert(z ∈ {e^(2πik/n) : k ∈ ℕ_n})
}