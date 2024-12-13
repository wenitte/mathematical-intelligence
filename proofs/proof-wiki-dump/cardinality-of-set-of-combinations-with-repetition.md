theorem Cardinality_Combinations_With_Repetition() {
  assert(
    ∀S: Set, ∀n,k ∈ ℕ ⇒
    (|S| = n) ∧ (k ≥ 0) ⇒
    |{multiset M: |M| = k ∧ M ⊆ S}| = (n+k-1 choose k)
  )
} ↔

proof Cardinality_Combinations_With_Repetition() {
  setVar(S: Set, n,k: ℕ) →
  assume(|S| = n ∧ k ≥ 0) →
  
  let(S = {a₁, a₂, ..., aₙ}) →
  assert(∀i∈[1,n]: aᵢ ordered by index) →
  
  lemma Representation() {
    assert(
      ∀M multiset of S: |M| = k ⇒
      ∃(r₁,...,rₖ) ∈ [1,n]ᵏ:
      M = {{aᵣ₁, aᵣ₂, ..., aᵣₖ}} ∧
      r₁ ≤ r₂ ≤ ... ≤ rₖ
    )
  } →
  
  lemma Bijection_To_Inequalities() {
    assert(
      |{(r₁,...,rₖ): 1 ≤ r₁ ≤ r₂ ≤ ... ≤ rₖ ≤ n}| =
      |{(s₁,...,sₖ): 0 < s₁ < s₂ < ... < sₖ < n+k}|
    )
  } →
  
  lemma Subset_Selection() {
    assert(
      |{(s₁,...,sₖ): 0 < s₁ < s₂ < ... < sₖ < n+k}| =
      |(n+k-1 choose k)|
    )
  } →
  
  apply(Representation()) →
  apply(Bijection_To_Inequalities()) →
  apply(Subset_Selection()) →
  
  conclude(
    |{multiset M: |M| = k ∧ M ⊆ S}| = (n+k-1 choose k)
  )
}