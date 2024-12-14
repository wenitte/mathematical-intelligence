theorem NotNecessarilyCompact() {
  let(X: NormedVectorSpace) →
  let(K: Subset(X)) →
  assert(
    Closed(K) ∧ Bounded(K) ⇏ Compact(K)
  )
} ↔

proof NotNecessarilyCompact() {
  let(ℓ²: SequenceSpace(2)) →
  let(K := {x ∈ ℓ² : ‖x‖₂ ≤ 1}) →
  assert(Closed(K) ∧ Bounded(K)) →
  
  let(xₙ: Sequence(ℕ → ℓ²)) →
  define(xₙ) {
    ∀n ∈ ℕ: xₙ = (0,...,0,1,0,...) where 1 at position n
  } →
  
  assert(∀n ∈ ℕ: xₙ ∈ K) →
  
  lemma NonCauchy() {
    assert(
      ∀n,m ∈ ℕ: n ≠ m ⇒ ‖xₙ - xₘ‖₂ = √2
    )
  } →
  
  apply(NonCauchy()) →
  assert(¬Cauchy(xₙ)) →
  
  apply(ConvergentSubsequenceCauchy) →
  assert(¬∃(subsequence: Sequence): Convergent(subsequence(xₙ))) →
  
  conclude(
    ∃K,∃(xₙ: Sequence): 
      (Closed(K) ∧ Bounded(K)) ∧ 
      (xₙ ∈ K) ∧ 
      ¬Convergent(subsequence(xₙ)) ⇒
      ¬Compact(K)
  )
}