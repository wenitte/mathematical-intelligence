theorem Coarser_Topology_Compact() {
  assert(
    ∀S: Set ∧
    ∀τ₁,τ₂: Topology(S) ∧
    (τ₁ ⊆ τ₂) ∧
    isCompact(⟨S,τ₂⟩) ⇒
    isCompact(⟨S,τ₁⟩)
  )
} ↔

proof Coarser_Topology_Compact() {
  setVar(S: Set) →
  setVar(τ₁,τ₂: Topology(S)) →
  assume(τ₁ ⊆ τ₂) →
  assume(isCompact(⟨S,τ₂⟩)) →
  
  define(I_S: ⟨S,τ₂⟩ → ⟨S,τ₁⟩) {
    ∀x ∈ S: I_S(x) = x
  } →
  
  lemma Identity_Continuous() {
    assert(
      ∀x ∈ S: I_S continuous at x
    )
  } →
  
  lemma Identity_Surjective() {
    assert(
      ∀y ∈ S: ∃x ∈ S: I_S(x) = y
    )
  } →
  
  apply(Identity_Continuous()) →
  apply(Identity_Surjective()) →
  apply(Continuous_Surjection_Preserves_Compactness(
    f: I_S,
    X: ⟨S,τ₂⟩,
    Y: ⟨S,τ₁⟩
  )) →
  
  conclude(isCompact(⟨S,τ₁⟩))
}