theorem Completion_Theorem() {
  assert(
    ∀X,Σ,μ [MeasureSpace(X,Σ,μ) ⇒ 
      ∃Σ*,μ̄ [Completion(X,Σ*,μ̄,X,Σ,μ)]]
  )
} ↔

proof Completion_Theorem() {
  // Construction of completion
  define(𝒩 := {N ⊆ X: ∃M ∈ Σ[μ(M) = 0 ∧ N ⊆ M]}) →
  define(Σ* := {E ∪ N: E ∈ Σ ∧ N ∈ 𝒩}) →

  // Show Σ* is σ-algebra
  assert(∅ ∈ 𝒩) →
  assert(∀E ∈ Σ[E ∪ ∅ = E ∈ Σ*]) →
  assert(Σ ⊆ Σ*) →
  assert(X ∈ Σ*) →

  // Complement closure
  lemma Complement_Closure() {
    assert(∀E,N[E ∪ N ∈ Σ* ⇒ X∖(E ∪ N) ∈ Σ*]) ↔
    proof {
      apply(DeMorgansLaw()) →
      apply(UnionOfRelativeComplements()) →
      apply(IntersectionDistributesOverUnion()) →
      assert(X∖(E ∪ N) ∈ Σ*)
    }
  } →

  // Countable union closure
  lemma Countable_Union_Closure() {
    assert(∀{En},{Nn}[
      (∀n[En ∈ Σ ∧ Nn ∈ 𝒩]) ⇒ 
      ⋃n(En ∪ Nn) ∈ Σ*
    ]) ↔
    proof {
      apply(SetUnionDistributive()) →
      apply(NullSetsClosure()) →
      assert(⋃nEn ∈ Σ) →
      assert(⋃nNn ∈ 𝒩) →
      assert(⋃n(En ∪ Nn) ∈ Σ*)
    }
  } →

  // Define μ̄ and verify properties
  define(μ̄: Σ* → ℝ̄≥0, μ̄(E ∪ N) := μ(E)) →

  lemma WellDefined_Measure() {
    assert(∀E,F∈Σ ∀N,M∈𝒩[
      E ∪ N = F ∪ M ⇒ μ(E) = μ(F)
    ]) →
    assert(μ̄(∅) = 0) →
    assert(CountablyAdditive(μ̄))
  } →

  // Verify completion properties
  assert(∀E∈Σ[μ̄(E) = μ(E)]) →
  assert(Complete(X,Σ*,μ̄)) →
  
  conclude(Completion(X,Σ*,μ̄,X,Σ,μ))
}