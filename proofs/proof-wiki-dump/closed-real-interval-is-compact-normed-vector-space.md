theorem Closed_Real_Interval_Is_Compact() {
  define(ℝ: EuclideanSpace) ∧
  define(I: [a,b]) ∧
  assert(
    I ⊂ ℝ ∧ I = [a,b] → I is compact
  )
} ↔

proof Closed_Real_Interval_Is_Compact() {
  assert(⟨ℝ, |·|⟩ is normed_vector_space) →
  
  lemma Sequence_Properties() {
    setVar(sequence: {aₙ}_{n∈ℕ}) ∧
    assert(∀n∈ℕ: aₙ ∈ I) ∧
    assert(∀n∈ℕ: a ≤ aₙ ≤ b)
  } →
  
  apply(Bolzano_Weierstrass_Theorem) →
  assert(∃{aₙₖ}_{k∈ℕ}: subsequence_of({aₙ}) ∧ ∃L∈ℝ: lim(k→∞)aₙₖ = L) →
  
  lemma Limit_In_Interval() {
    assert(∀k∈ℕ: a ≤ aₙₖ ≤ b) →
    apply(Limit_Preservation_Of_Inequalities) →
    assert(a ≤ L ≤ b) →
    assert(L ∈ I)
  } →
  
  assert(every_sequence_has_convergent_subsequence_in_I) →
  apply(Definition_Of_Compactness) →
  conclude(I is compact)
}