theorem Finite_Intersection_In_Cover_Refinement() {
  let(T = ⟨X,τ⟩: TopologicalSpace) →
  let(𝒰: OpenCover(T)) →
  let(𝒱: ClosedLocallyFiniteRefinement(𝒰)) →
  let(∀x ∈ X: Wₓ ∈ τ ∧ x ∈ Wₓ ∧ |{V ∈ 𝒱: V ∩ Wₓ ≠ ∅}| < ∞) →
  let(𝒲 = {Wₓ: x ∈ X}) →
  let(𝒜: ClosedLocallyFiniteRefinement(𝒲)) →
  let(∀V ∈ 𝒱: V* = X \ ⋃{A ∈ 𝒜: A ∩ V = ∅}) →
  let(𝒱* = {V*: V ∈ 𝒱}) →
  let(∀V ∈ 𝒱: ∃Uᵥ ∈ 𝒰: V ⊆ Uᵥ) →
  let(𝒰* = {V* ∩ Uᵥ: V ∈ 𝒱}) →
  assert(∀A ∈ 𝒜: |{U* ∈ 𝒰*: U* ∩ A ≠ ∅}| < ∞)
} ↔

proof Finite_Intersection_In_Cover_Refinement() {
  lemma L4() {
    assert(∀A ∈ 𝒜: |{V ∈ 𝒱: V ∩ A ≠ ∅}| < ∞)
  } →
  
  lemma L11() {
    assert(∀A ∈ 𝒜, ∀V* ∈ 𝒱*: A ∩ V* ≠ ∅ → A ∩ V ≠ ∅)
  } →
  
  setVar(A₀: 𝒜) →
  apply(L4()) →
  assert(|{V ∈ 𝒱: V ∩ A₀ ≠ ∅}| < ∞) →
  
  define(f: {V ∈ 𝒱: V ∩ A₀ ≠ ∅} → {V* ∩ Uᵥ: V ∈ 𝒱: V ∩ A₀ ≠ ∅}) →
  assert(f(V) = V* ∩ Uᵥ) →
  assert(isSurjective(f)) →
  
  apply(CardinalityOfSurjection()) →
  assert(|{V* ∩ Uᵥ: V ∈ 𝒱: V ∩ A₀ ≠ ∅}| < ∞) →
  
  apply(L11()) →
  assert({V* ∩ Uᵥ: V ∈ 𝒱: V* ∩ A₀ ≠ ∅} ⊆ {V* ∩ Uᵥ: V ∈ 𝒱: V ∩ A₀ ≠ ∅}) →
  
  assert({V* ∩ Uᵥ: V ∈ 𝒱: V* ∩ Uᵥ ∩ A₀ ≠ ∅} ⊆ {V* ∩ Uᵥ: V ∈ 𝒱: V* ∩ A₀ ≠ ∅}) →
  
  apply(SubsetOfFiniteIsFinite()) →
  assert(|{U* ∈ 𝒰*: U* ∩ A₀ ≠ ∅}| < ∞) →
  
  generalize(∀A ∈ 𝒜: |{U* ∈ 𝒰*: U* ∩ A ≠ ∅}| < ∞)
}