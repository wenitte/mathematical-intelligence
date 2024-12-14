theorem PadicClosedBallsCountable_Lemma() {
  assert(
    ∀p ∈ ℙ ∧ ∀ε ∈ ℝ_{>0} ⇒
    ∃n ∈ ℤ : (p^{-n} ≤ ε < p^{-(n-1)})
  )
} ↔

proof PadicClosedBallsCountable_Lemma() {
  setVar(p: ℙ) →
  setVar(ε: ℝ_{>0}) →
  
  lemma PowersReciprocalsNull() {
    assert(∃n₁ ∈ ℕ : ∀k ≥ n₁ : p^{-k} < ε)
  } →
  
  lemma PowersReciprocalsNullInverse() {
    assert(∃n₂ ∈ ℕ : ∀k ≥ n₂ : p^{-k} < 1/ε)
  } →
  
  assert(p^{-n₁} < ε ∧ p^{-n₂} < 1/ε) →
  assert(p^{-n₁} < ε < p^{n₂}) →
  
  lemma PowerFunctionDecreasing() {
    assert(-n₂ < n₁)
  } →
  
  define(n := min{k ∈ ℤ : -n₂ ≤ k ≤ n₁ ∧ p^{-k} ≤ ε}) →
  assert(p^{-n} ≤ ε < p^{n₂}) →
  assert(n > -n₂) →
  assert(n ≤ n₁) →
  assert(n₁ > n-1 ≥ -n₂) →
  
  proof_by_contradiction() {
    assume(p^{-(n-1)} ≤ ε) →
    assert(n-1 ∈ {k: -n₂ ≤ k ≤ n₁ ∧ p^{-k} ≤ ε}) →
    assert(n ≤ n-1) →
    assert(contradiction)
  } →
  
  assert(ε < p^{-(n-1)}) →
  assert(p^{-n} ≤ ε < p^{-(n-1)})
}