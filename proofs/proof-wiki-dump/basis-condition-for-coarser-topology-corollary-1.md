theorem CoarserTopologyBases() {
  assert(
    ∀S:Set ∧ ∀ℬ₁,ℬ₂:Basis(S) ∧ ∀τ₁,τ₂:Topology(S) ∧
    τ₁ = generate(ℬ₁) ∧ τ₂ = generate(ℬ₂) ∧
    (∀U ∈ ℬ₁ ⇒ ∀x ∈ U ⇒ ∃V ∈ ℬ₂: x ∈ V ⊆ U) ⇒
    isCoarser(τ₁, τ₂)
  )
} ↔

proof CoarserTopologyBases() {
  setVar(S: Set, ℬ₁,ℬ₂: Basis(S)) →
  assume(∀U ∈ ℬ₁ ⇒ ∀x ∈ U ⇒ ∃V ∈ ℬ₂: x ∈ V ⊆ U) →
  
  let(U ∈ ℬ₁) →
  define(𝒜 := {V ∈ ℬ₂ | V ⊆ U}) →
  
  lemma UnionSubset() {
    assert(∪𝒜 ⊆ U)
  } →
  
  forall(x ∈ U) {
    exists(Vₓ ∈ ℬ₂: x ∈ Vₓ ⊆ U) →
    assert(Vₓ ∈ 𝒜) →
    assert(x ∈ Vₓ ⊆ ∪𝒜)
  } →
  
  conclude(U ⊆ ∪𝒜) →
  conclude(U = ∪𝒜) →
  
  generalize(∀U ∈ ℬ₁ ⇒ ∃𝒜 ⊆ ℬ₂: U = ∪𝒜) →
  
  apply(BasisCoarserTopologyTheorem()) →
  conclude(isCoarser(τ₁, τ₂))
}