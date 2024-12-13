theorem Boundary_of_Spectrum() {
  assert(
    ∀A: BanachAlgebra(ℂ) ∧
    ∀B ⊆ A: ClosedUnitalSubalgebra(B) ∧
    ∀x ∈ B ∧
    let σ_A(x): Spectrum(A) ∧
    let σ_B(x): Spectrum(B) →
    ∂σ_B(x) ⊆ ∂σ_A(x)
  )
} ↔

proof Boundary_of_Spectrum() {
  setVar(G_B: Units(B)) →
  setVar(λ ∈ ∂σ_B(x)) →
  
  lemma Boundary_Closure_Intersection() {
    assert(λ ∈ cl(ℂ ∖ σ_B(x)))
  } →

  lemma Metric_Space_Sequence() {
    assert(∃{λ_n}_{n∈ℕ} ∈ (ℂ ∖ σ_B(x))ℕ: λ_n → λ)
  } →

  assert(
    λ_n𝟙_A - x → λ𝟙_A - x as n → ∞ ∧
    ∀n ∈ ℕ: (λ_n𝟙_A - x) ∈ G_B ∧
    (λ𝟙_A - x) ∉ G_B
  ) →

  lemma Units_Group_Open() {
    assert(G_B is open in B) →
    assert(∂G_B = cl(G_B) ∖ G_B)
  } →

  assert(λ𝟙_A - x ∈ ∂G_B) →

  lemma Boundary_Units_Not_Invertible() {
    assert(λ𝟙_A - x ∉ G_A)
  } →

  assert(λ ∈ σ_A(x)) →

  proof NotInInterior() {
    assume(λ ∈ int(σ_A(x))) →
    assert(∃N ∈ ℕ: ∀n > N: λ_n ∈ σ_A(x)) →
    assert(∀n ∈ ℕ: λ_n ∉ σ_A(x)) →
    contradiction()
  } →

  assert(λ ∉ int(σ_A(x))) →
  assert(λ ∈ ∂σ_A(x))
}