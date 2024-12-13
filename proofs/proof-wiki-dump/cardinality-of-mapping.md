theorem Mapping_Cardinality() {
  let(S: Set, T: Set, f: S → T, n: ℕ)
  assert(
    (finite(S) ∧ |S| = n ∧ T ≠ ∅) →
    |f| = n
  )
} ↔

proof Mapping_Cardinality() {
  case Empty_T() {
    assert(T = ∅) →
    apply(Null_Relation_Mapping_Theorem()) →
    assert(|f| = 0)
  } →

  define(Mapping_Properties()) {
    assert(
      ∀s ∈ S: ∃t ∈ T: ⟨s,t⟩ ∈ f ∧
      ∀s ∈ S: ∀t₁,t₂ ∈ T: (⟨s,t₁⟩ ∈ f ∧ ⟨s,t₂⟩ ∈ f) → t₁ = t₂
    )
  } →

  assert(|f| ≥ n) {
    from(Mapping_Properties().∀s ∈ S: ∃t ∈ T: ⟨s,t⟩ ∈ f)
  } →

  proof_by_contradiction() {
    assume(|f| > n) →
    apply(Pigeonhole_Principle()) →
    assert(∃x ∈ S: ∃y₁,y₂ ∈ T: y₁ ≠ y₂ ∧ ⟨x,y₁⟩ ∈ f ∧ ⟨x,y₂⟩ ∈ f) →
    assert(¬Mapping_Properties().∀s ∈ S: ∀t₁,t₂ ∈ T: (⟨s,t₁⟩ ∈ f ∧ ⟨s,t₂⟩ ∈ f) → t₁ = t₂) →
    contradiction()
  } →

  conclude(|f| = n)
}