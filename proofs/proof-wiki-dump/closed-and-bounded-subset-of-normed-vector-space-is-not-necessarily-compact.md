theorem NonCompactClosedBounded() {
  let(X: NormedVectorSpace) →
  let(K: Subset(X)) →
  assert(
    (K.isClosed ∧ K.isBounded) ̸⟹ K.isCompact
  )
} ↔

proof NonCompactClosedBounded_Proof1() {
  let(ℓ²: NormedVectorSpace) →
  let(K := {x ∈ ℓ² : ‖x‖₂ ≤ 1}) →
  assert(K.isClosed ∧ K.isBounded) →
  
  let(xₙ: Sequence) →
  define(xₙ := (0,...,0,1,0,...) where 1 at nth position) →
  assert(∀n ∈ ℕ: xₙ ∈ K) →
  
  assert(∀n,m ∈ ℕ: n ≠ m ⟹ ‖xₙ - xₘ‖₂ = √2) →
  conclude(¬isSequenceCauchy(xₙ)) →
  
  lemma CauchyConvergentSubsequence() {
    assert(¬isSequenceCauchy(xₙ) ⟹ ¬hasConvergentSubsequence(xₙ))
  } →
  
  apply(CauchyConvergentSubsequence()) →
  conclude(¬K.isCompact)
}

proof NonCompactClosedBounded_Proof2() {
  let(C[0,1]: NormedVectorSpace) →
  let(K := {x ∈ C[0,1] : ‖x‖∞ ≤ 1}) →
  assert(K.isClosed ∧ K.isBounded) →
  
  let(xₙ: Sequence) →
  define(xₙ(t) := {
    2^(n+2)t if ∑ᵢ₌₁ⁿ(1/2ⁱ) ≤ t < ∑ᵢ₌₁ⁿ(1/2ⁱ) + 1/2^(n+2),
    1 - 2^(n+2)(t - (∑ᵢ₌₁ⁿ(1/2ⁱ) + 1/2^(n+2))) if ∑ᵢ₌₁ⁿ(1/2ⁱ) + 1/2^(n+2) ≤ t ≤ ∑ᵢ₌₁ⁿ⁺¹(1/2ⁱ),
    0 otherwise
  }) →
  
  assert(∀n,m ∈ ℕ: n ≠ m ⟹ ‖xₙ - xₘ‖∞ = 1) →
  conclude(¬isSequenceCauchy(xₙ)) →
  conclude(¬isSequenceConvergent(xₙ)) →
  conclude(¬hasConvergentSubsequence(xₙ)) →
  conclude(¬K.isCompact)
}