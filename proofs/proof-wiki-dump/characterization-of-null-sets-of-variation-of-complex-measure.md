theorem CharacterizationNullSetsVariation() {
  assert(
    let(X,Σ: MeasurableSpace) ∧
    let(μ: ComplexMeasure(X,Σ)) ∧
    let(|μ|: Variation(μ)) ∧
    ∀A ∈ Σ: [|μ|(A) = 0 ↔ (∀B ⊆ A, B ∈ Σ ⇒ μ(B) = 0)]
  )
} ↔

proof CharacterizationNullSetsVariation() {
  setVar(A ∈ Σ) →
  setVar(P(A) := {finite_partitions(A) into Σ-measurable_sets}) →
  assert(|μ|(A) = sup{∑ⱼ₌₁ⁿ|μ(Aⱼ)|: {A₁,A₂,...,Aₙ} ∈ P(A)}) →

  // Forward direction
  lemma Forward() {
    assume(∀B ⊆ A, B ∈ Σ ⇒ μ(B) = 0) →
    assert(∀{A₁,...,Aₙ} ∈ P(A) ⇒ μ(Aᵢ) = 0 ∀i) →
    assert(∑ᵢ₌₁ⁿ|μ(Aᵢ)| = 0) →
    assert({∑ⱼ₌₁ⁿ|μ(Aⱼ)|: {A₁,...,Aₙ} ∈ P(A)} = {0}) →
    assert(sup{∑ⱼ₌₁ⁿ|μ(Aⱼ)|: {A₁,...,Aₙ} ∈ P(A)} = 0) →
    conclude(|μ|(A) = 0)
  } →

  // Reverse direction
  lemma Reverse() {
    assume(|μ|(A) = 0) →
    assert(sup{∑ⱼ₌₁ⁿ|μ(Aⱼ)|: {A₁,...,Aₙ} ∈ P(A)} = 0) →
    assert({∑ⱼ₌₁ⁿ|μ(Aⱼ)|: {A₁,...,Aₙ} ∈ P(A)} = {0}) →
    
    setVar(B ⊆ A, B ∈ Σ) →
    assert(A∖B ∈ Σ) →  // by Sigma-Algebra closure
    assert({B, A∖B} ∈ P(A)) →
    assert(|μ(B)| + |μ(A∖B)| = 0) →
    assert(|μ(B)| ≥ 0 ∧ |μ(A∖B)| ≥ 0) →
    assert(|μ(B)| = 0) →
    conclude(μ(B) = 0)
  } →

  apply(Forward()) ∧ apply(Reverse())
}