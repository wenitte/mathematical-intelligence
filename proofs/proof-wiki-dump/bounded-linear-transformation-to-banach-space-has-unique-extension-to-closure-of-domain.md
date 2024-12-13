theorem BoundedLinearTransformationExtension() {
  assert(
    (∀F ∈ {ℝ,ℂ}) ∧ 
    (X,∥·∥_X) is_normed_space_over(F) ∧
    D(T₀) is_linear_subspace_of(X) ∧
    (Y,∥·∥_Y) is_banach_space_over(F) ∧
    T₀: D(T₀) → Y is_bounded_linear_transformation
    ⇒
    ∃!T: D(T) → Y (
      T extends T₀ ∧ 
      D(T) = closure(D(T₀))
    )
  )
} ↔

proof BoundedLinearTransformationExtension() {
  // Existence part
  setVar(M: ℝ⁺) →
  assert(∀x ∈ D(T₀): ∥T₀x∥_Y ≤ M∥x∥_X) →
  
  letVar(x ∈ D(T)∖D(T₀)) →
  assert(∃{xₙ}ₙ∈ℕ ∈ D(T₀): xₙ → x) →
  
  // Limit existence and uniqueness
  letVar({xₙ}ₙ∈ℕ, {zₙ}ₙ∈ℕ ∈ D(T₀): xₙ → x ∧ zₙ → x) →
  assert(∥T₀xₙ - T₀xₘ∥_Y = ∥T₀(xₙ - xₘ)∥_Y ≤ M∥xₙ - xₘ∥_X) →
  
  lemma CauchySequence() {
    assert({xₙ}ₙ∈ℕ is_cauchy ∧ {T₀xₙ}ₙ∈ℕ is_cauchy)
  } →
  
  apply(CauchySequence()) →
  assert(∃z₁,z₂ ∈ Y: T₀xₙ → z₁ ∧ T₀zₙ → z₂) →
  assert(z₁ = z₂) →
  
  // Define extension T
  define(T(x) ≔ limₙ→∞ T₀xₙ) →
  
  // Linearity verification
  assert(
    ∀x,y ∈ D(T), λ ∈ F:
    T(λx + y) = λT(x) + T(y)
  ) →
  
  // Boundedness verification
  assert(∀x ∈ D(T): ∥Tx∥_Y ≤ M∥x∥_X) →
  
  // Uniqueness part
  letVar(T': D(T) → Y is_bounded_extension_of T₀) →
  assert(∀x ∈ D(T): T'x = Tx) →
  conclude(T' = T)
}