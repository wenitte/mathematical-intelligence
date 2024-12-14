theorem Circuits_Of_Matroid() {
  assert(
    ∃S: FiniteSet ∧ ∃𝒞: SetOfSubsets(S) ∧
    (¬(∅ ∈ 𝒞)) ∧ // C1
    (∀C₁,C₂ ∈ 𝒞: C₁ ≠ C₂ ⇒ C₁ ⊈ C₂) ∧ // C2
    (∀C₁,C₂ ∈ 𝒞: ∀z,w ∈ S: 
      (C₁ ≠ C₂ ∧ z ∈ C₁ ∩ C₂ ∧ w ∈ C₁\C₂) ⇒ 
      (∃C₃ ∈ 𝒞: w ∈ C₃ ⊆ (C₁ ∪ C₂)\{z})) // C4
    ⇒
    ∃M: Matroid(S): CircuitsOf(M) = 𝒞
  )
} ↔

proof Circuits_Of_Matroid() {
  // Define mapping ρ
  define(θ: Tuple(S) → Tuple(ℤ)) {
    ∀i ∈ {1,...,q}: θ(x₁,...,xq)ᵢ = 
      if(∃C ∈ 𝒞: xᵢ ∈ C ⊆ {x₁,...,xᵢ}) then 0 else 1
  } →

  define(t: Tuple(S) → ℤ) {
    t(x₁,...,xq) = ∑(i=1 to q) θ(x₁,...,xq)ᵢ
  } →

  lemma Permutation_Invariance() {
    assert(
      ∀π: Permutation, ∀(x₁,...,xq): Tuple(S):
      t(x₁,...,xq) = t(xπ(1),...,xπ(q))
    )
  } →

  define(ρ: 𝒫(S) → ℤ) {
    ρ(A) = if(A = ∅) then 0 else t(x₁,...,xq) where A = {x₁,...,xq}
  } →

  // Prove rank axioms
  assert(ρ(∅) = 0) → // R1

  lemma Rank_Increase() {
    assert(
      ∀X ⊆ S, ∀y ∈ S:
      ρ(X) ≤ ρ(X ∪ {y}) ≤ ρ(X) + 1
    )
  } →

  lemma Circuit_Characterization() {
    assert(
      ∀X ⊆ S, ∀y ∈ S\X:
      (ρ(X ∪ {y}) = ρ(X)) ↔ (∃C ∈ 𝒞: y ∈ C ⊆ X ∪ {y})
    )
  } →

  lemma Rank_Submodular() {
    assert(
      ∀X ⊆ S, ∀y,z ∈ S:
      (ρ(X ∪ {y}) = ρ(X ∪ {z}) = ρ(X)) ⇒ 
      ρ(X ∪ {y,z}) = ρ(X)
    )
  } →

  apply(Matroid_From_Rank_Function()) →
  assert(∃M: Matroid(S): RankFunction(M) = ρ) →
  assert(CircuitsOf(M) = 𝒞)
}