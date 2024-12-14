theorem ComplexNumbersAsExternalDirectProduct() {
  assert(
    ∀G₁(ℂ_{≠0},×), G₂(ℝ_{>0},×), G₃(K,×) → 
    G₁ ≅ G₂ × G₃
  )
} ↔

proof ComplexNumbersAsExternalDirectProduct() {
  setMap(φ: ℂ_{≠0} → ℝ_{>0} × K) →
  define(φ(re^{iθ}) = (r, e^{iθ})) →
  
  // Surjectivity
  assert(
    ∀(a,b) ∈ ℝ_{>0} × K → 
    ∃z(z = a × b ∈ ℂ ∧ φ(z) = (a,b))
  ) →
  
  // Injectivity
  assert(
    ∀r₁,r₂ ∈ ℝ_{>0}, θ₁,θ₂ ∈ ℝ →
    [φ(r₁e^{iθ₁}) = φ(r₂e^{iθ₂})] →
    [(r₁,e^{iθ₁}) = (r₂,e^{iθ₂})] →
    [r₁ = r₂ ∧ e^{iθ₁} = e^{iθ₂}] →
    [r₁e^{iθ₁} = r₂e^{iθ₂}]
  ) →
  
  // Homomorphism
  assert(
    ∀r₁,r₂ ∈ ℝ_{>0}, θ₁,θ₂ ∈ ℝ →
    φ(r₁e^{iθ₁} × r₂e^{iθ₂}) = 
    φ(r₁r₂e^{i(θ₁+θ₂)}) =
    (r₁r₂, e^{i(θ₁+θ₂)}) =
    (r₁×r₂, e^{iθ₁}×e^{iθ₂}) =
    (r₁,e^{iθ₁}) × (r₂,e^{iθ₂}) =
    φ(r₁e^{iθ₁}) × φ(r₂e^{iθ₂})
  ) →
  
  conclude(
    φ is bijective ∧ φ is homomorphism →
    φ is isomorphism →
    G₁ ≅ G₂ × G₃
  )
}