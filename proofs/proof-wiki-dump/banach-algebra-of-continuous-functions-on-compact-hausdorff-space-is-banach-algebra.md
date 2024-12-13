theorem Banach_Algebra_Continuous_Functions() {
  let(X: CompactHausdorffSpace)
  let(C(X): VectorSpace[ContinuousFunctions(X → ℂ)])
  let(∗: BinaryOperation[PointwiseMultiplication(ℂ^X)])
  let(∥·∥_∞: SupremumNorm[C(X)])
  
  assert(
    ⟨C(X), ∗, ∥·∥_∞⟩ is_a BanachAlgebra
  )
} ↔

proof Banach_Algebra_Continuous_Functions() {
  // Part 1: Show C(X) is algebra over ℂ
  assert(⟨C(X), ∗⟩ ⊆ ℂ^X) →
  apply(theorem_ContinuousFunctions_LinearSubspace()) →
  apply(theorem_ProductContinuousFunctions()) →
  assert(∀f,g ∈ C(X) ⇒ f∗g ∈ C(X)) →
  conclude(⟨C(X), ∗⟩ is_a Algebra[ℂ]) →

  // Part 2: Show C(X) is Banach space
  apply(theorem_ContinuousFunctions_BanachSpace()) →

  // Part 3: Show ∥·∥_∞ is algebra norm
  lemma Algebra_Norm_Property() {
    setVar(f,g: C(X))
    setVar(x: X)
    assert(
      |f(x)g(x)| = |f(x)||g(x)| →
      |f(x)||g(x)| ≤ (sup_{x∈X}|f(x)|)|g(x)| →
      (sup_{x∈X}|f(x)|)|g(x)| ≤ (sup_{x∈X}|f(x)|)(sup_{x∈X}|g(x)|) →
      (sup_{x∈X}|f(x)|)(sup_{x∈X}|g(x)|) = ∥f∥_∞∥g∥_∞
    )
  } →
  apply(Algebra_Norm_Property()) →
  assert(∀f,g ∈ C(X) ⇒ ∥f∗g∥_∞ ≤ ∥f∥_∞∥g∥_∞) →
  
  conclude(⟨C(X), ∗, ∥·∥_∞⟩ is_a BanachAlgebra)
}