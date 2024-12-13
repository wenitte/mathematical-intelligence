theorem Boundary_Spectrum_Subalgebra() {
  let(A: BanachAlgebra, B: SubAlgebra(A), x ∈ B) →
  assert(
    ∀λ ∈ ∂σ_B(x) ⇒ λ ∈ ∂σ_A(x)
  )
} ↔

proof Boundary_Spectrum_Subalgebra_1() {
  let(G_B: Units(B)) →
  let(λ ∈ ∂σ_B(x)) →
  assert(λ ∈ cl(ℂ \ σ_B(x))) →
  
  lemma Sequence_Existence() {
    assert(∃{λ_n}_{n∈ℕ} ∈ (ℂ \ σ_B(x))ℕ: λ_n → λ)
  } →
  
  assert(λ_n𝟙_A - x → λ𝟙_A - x) ∧
  assert(∀n ∈ ℕ: λ_n𝟙_A - x ∈ G_B) ∧
  assert(λ𝟙_A - x ∉ G_B) →
  
  lemma Units_Open() {
    assert(G_B is_open_in B) →
    assert(∂G_B = cl(G_B) \ G_B)
  } →
  
  assert(λ𝟙_A - x ∈ ∂G_B) →
  assert(λ𝟙_A - x ∉ G_A) →
  assert(λ ∈ σ_A(x)) →
  
  lemma Interior_Contradiction() {
    assume(λ ∈ int(σ_A(x))) →
    assert(∃N ∈ ℕ: ∀n > N ⇒ λ_n ∈ σ_A(x)) →
    assert(∀n ∈ ℕ: λ_n ∉ σ_A(x)) →
    contradiction()
  } →
  
  assert(λ ∈ ∂σ_A(x))
}

proof Boundary_Spectrum_Subalgebra_2() {
  let(λ ∈ ∂σ_B(x)) →
  assert(∂σ_B(x) = σ_B(x) ∩ cl(ρ_B(x))) →
  
  lemma Contradiction_Proof() {
    assume(λ ∈ ρ_A(x)) →
    assert(λ ∈ cl(ρ_B(x)) ∩ ρ_A(x)) →
    assert(λ ∈ cl_ρ_A(x)(ρ_B(x))) →
    assert(ρ_B(x) is_clopen_in ρ_A(x)) →
    assert(cl_ρ_A(x)(ρ_B(x)) = ρ_B(x)) →
    assert(λ ∈ σ_B(x) ∩ ρ_B(x)) →
    contradiction()
  } →
  
  assert(λ ∈ σ_A(x)) →
  assert(ρ_B(x) ⊆ ρ_A(x)) →
  assert(cl(ρ_B(x)) ⊆ cl(ρ_A(x))) →
  assert(λ ∈ σ_A(x) ∩ cl(ρ_A(x))) →
  assert(λ ∈ ∂σ_A(x))
}