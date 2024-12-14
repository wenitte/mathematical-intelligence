theorem Paracompactness_Lemma_15() {
  assert(
    ∀X: Set ∧
    let(X×X: CartesianProduct(X,X)) ∧
    let(Vₙ: Sequence(n∈ℕ, SubsetOf(X×X))) ∧
    let(ΔX: DiagonalOf(X×X)) ∧
    ∀n∈ℕ₊: (Vₙ∘Vₙ ⊆ Vₙ₋₁) ∧
    let(Uₙ: ∀n∈ℕ₊ → Vₙ∘Vₙ₋₁∘...∘V₁) →
    ∀n∈ℕ₊: {Uₙ(x): x∈X} refines {V₀(x): x∈X}
  )
} ↔

proof Paracompactness_Lemma_15() {
  lemma Reflexivity() {
    assert(∀n∈ℕ₊: Uₙ is reflexive) →
    apply(Composite_Reflexive_Relations_Reflexive)
  } →
  
  lemma Covers() {
    assert({V₀(x): x∈X} covers X) ∧
    assert(∀n∈ℕ₊: {Uₙ(x): x∈X} covers X) →
    apply(Reflexive_Relation_Images_Cover)
  } →

  lemma Lemma_14() {
    assert(∀n∈ℕ₊: Uₙ ⊆ V₀)
  } →

  setVar(n: ℕ₊) →
  setVar(x: X) →
  
  assert(Uₙ(x) ⊆ V₀(x)) →
  apply(Image_Under_Subset_Relation_Corollary) →
  
  assert(∀n∈ℕ₊, x∈X: Uₙ(x) ⊆ V₀(x)) →
  apply(Arbitrary_Variables_Principle) →
  
  assert(∀n∈ℕ: {Uₙ(x): x∈X} refines {V₀(x): x∈X}) →
  apply(Refinement_Definition)
}