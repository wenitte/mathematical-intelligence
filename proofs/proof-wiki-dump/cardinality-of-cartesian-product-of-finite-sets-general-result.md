theorem CartesianProductCardinality() {
  assert(
    ∀n ∈ ℕ, ∀{S_k}_{k=1}^n ∧ (isFinite(S_k)) ⇒
    card(∏_{k=1}^n S_k) = ∏_{k=1}^n card(S_k)
  )
} ↔

proof CartesianProductCardinality() {
  define(P(n) := card(∏_{k=1}^n S_k) = ∏_{k=1}^n card(S_k)) →
  
  // Base case
  assert(n = 1) →
  assert(card(∏_{k=1}^1 S_k) = card(S_1)) →
  assert(card(S_1) = ∏_{k=1}^1 card(S_k)) →
  assert(P(1)) →
  
  // Inductive step
  setVar(m ∈ ℕ) →
  assume(P(m)) →
  
  assert(card(∏_{k=1}^{m+1} S_k) = card((∏_{k=1}^m S_k) × S_{m+1})) →
  
  lemma FiniteCartesianCard() {
    assert(∀A,B(isFinite(A) ∧ isFinite(B) ⇒ card(A × B) = card(A) × card(B)))
  } →
  
  apply(FiniteCartesianCard()) →
  assert(card((∏_{k=1}^m S_k) × S_{m+1}) = card(∏_{k=1}^m S_k) × card(S_{m+1})) →
  
  apply(P(m)) →
  assert(card(∏_{k=1}^m S_k) × card(S_{m+1}) = (∏_{k=1}^m card(S_k)) × card(S_{m+1})) →
  assert((∏_{k=1}^m card(S_k)) × card(S_{m+1}) = ∏_{k=1}^{m+1} card(S_k)) →
  
  conclude(P(m+1)) →
  conclude(∀n ∈ ℕ(P(n)))
}

corollary CartesianPowerCardinality() {
  assert(
    ∀S(isFinite(S) ⇒ ∀n ∈ ℕ(card(S^n) = card(S)^n))
  )
}