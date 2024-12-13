theorem Cardinality_Of_Subsets() {
  assert(
    ∀S(card(S) = n ∧ m ≤ n) →
    ∀T⊆S(card(T) = m) →
    card(T) = (n! / (m! * (n-m)!))
  )
} ↔

proof Cardinality_Of_Subsets() {
  define(B(X,Y): {f | f: X → Y is bijective}) →
  define(𝕊: {Y | Y⊆S ∧ card(Y) = m}) →
  define(s: card(𝕊)) →
  define(β: B(ℕₙ,S) → 𝕊, f ↦ f(ℕₘ)) →
  
  lemma Bijection_Property() {
    ∀Y∈𝕊(
      ∃Φ_Y: β⁻¹(Y) → B(ℕₘ,Y) × B(ℕₙ-ℕₘ,S-Y),
      Φ_Y(f) = (f|ℕₘ, f|ℕₙ-ℕₘ) is bijective
    )
  } →

  apply(Cardinality_Of_Bijections) →
  assert(∀Y∈𝕊(
    card(B(ℕₘ,Y)) = m! ∧
    card(B(ℕₙ-ℕₘ,S-Y)) = (n-m)!
  )) →
  
  apply(Cardinality_Of_Cartesian_Product) →
  assert(∀Y∈𝕊(
    card(β⁻¹(Y)) = m!(n-m)!
  )) →
  
  lemma Partition_Property() {
    assert({β⁻¹(Y) | Y∈𝕊} partitions B(ℕₙ,S))
  } →
  
  apply(Number_Of_Elements_In_Partition) →
  assert(card(B(ℕₙ,S)) = m!(n-m)!s) →
  
  apply(Cardinality_Of_Bijections) →
  assert(n! = m!(n-m)!s) →
  
  assert(s = n!/(m!(n-m)!))
}