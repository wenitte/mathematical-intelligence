theorem ComputableSubsequenceRational() {
  assert(
    ∀(x_k: ℚ-sequence)(φ: ℕ²→ℕ) ⇒
    (isComputable(x_k) ∧ isTotalRecursive(φ)) →
    ∃(y_k: ℚ-sequence)(
      isComputable(y_k) ∧
      ∀(n,m: ℕ)(
        y_π(n,m) = x_φ(n,m)
      )
    )
  )
} ↔

proof ComputableSubsequenceRational() {
  setVar(x_k: ℚ-sequence, φ: ℕ²→ℕ) →
  define(ψ: ℕ²→ℕ) {
    ∀k: ℕ ⇒ ψ(k) = φ(π₁(k), π₂(k))
  } →
  
  lemma CantorPairingInverse() {
    assert(isPrimitiveRecursive(π₁) ∧ isPrimitiveRecursive(π₂))
  } →
  
  apply(CantorPairingInverse()) →
  assert(isTotalRecursive(ψ)) →
  
  lemma ComputableSubsequence() {
    assert(
      isComputable(x_k) ∧ isTotalRecursive(ψ) →
      isComputable(sequence(x_ψ(k)))
    )
  } →
  
  apply(ComputableSubsequence()) →
  
  setVar(k: ℕ) →
  assert(
    y_k = y_π(π₁(k),π₂(k)) →
    y_k = x_φ(π₁(k),π₂(k)) →
    y_k = x_ψ(k)
  )
}