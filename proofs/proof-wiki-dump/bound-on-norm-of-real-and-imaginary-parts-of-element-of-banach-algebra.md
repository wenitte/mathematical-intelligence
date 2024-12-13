theorem BoundNormRealImaginaryParts() {
  assert(
    ∀A: BanachStarAlgebra ∧ ∀x ∈ A ⇒
    (∥Re(x)∥ ≤ ∥x∥) ∧ (∥Im(x)∥ ≤ ∥x∥)
  )
} ↔

proof BoundNormRealImaginaryParts() {
  setVar(x: A) →
  
  // Real part proof
  assert(Re(x) = (1/2)(x + x*)) →
  assert(∥Re(x)∥ = ∥(1/2)(x + x*)∥) →
  assert(∥(1/2)(x + x*)∥ = (1/2)∥x + x*∥) by NormAxiom_PositiveHomogeneity →
  assert((1/2)∥x + x*∥ ≤ (1/2)(∥x∥ + ∥x*∥)) by NormAxiom_Triangle →
  assert(∥x*∥ = ∥x∥) by BanachStarAlgebra_Definition →
  assert((1/2)(∥x∥ + ∥x*∥) = (1/2)(∥x∥ + ∥x∥) = ∥x∥) →

  // Imaginary part proof
  assert(Im(x) = (1/2i)(x - x*)) →
  assert(∥Im(x)∥ = ∥(1/2i)(x - x*)∥) →
  assert(∥(1/2i)(x - x*)∥ = (1/2)∥x - x*∥) by NormAxiom_PositiveHomogeneity →
  assert((1/2)∥x - x*∥ ≤ (1/2)(∥x∥ + ∥x*∥)) by NormAxiom_Triangle →
  assert(∥x*∥ = ∥x∥) by BanachStarAlgebra_Definition →
  assert((1/2)(∥x∥ + ∥x*∥) = (1/2)(∥x∥ + ∥x∥) = ∥x∥) →

  conclude((∥Re(x)∥ ≤ ∥x∥) ∧ (∥Im(x)∥ ≤ ∥x∥))
}