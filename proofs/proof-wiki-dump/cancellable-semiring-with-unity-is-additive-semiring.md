theorem Cancellable_Semiring_Commutative() {
  assert(
    ∀S: Semiring, ∀*,∘: BinaryOp, ∀1_S: Unity ⇒
    (isCancellableSemiring(S,*,∘,1_S) → isCommutative(*))
  )
} ↔

proof Cancellable_Semiring_Commutative() {
  setVar(a,b,c,d: S) →
  
  lemma Distributive_Expansion_1() {
    assert((a * b) ∘ (c * d) = ((a * b) ∘ c) * ((a * b) ∘ d)) →
    assert(((a * b) ∘ c) * ((a * b) ∘ d) = (a ∘ c) * (b ∘ c) * (a ∘ d) * (b ∘ d))
  } →

  lemma Distributive_Expansion_2() {
    assert((a * b) ∘ (c * d) = (a ∘ (c * d)) * (b ∘ (c * d))) →
    assert((a ∘ (c * d)) * (b ∘ (c * d)) = (a ∘ c) * (a ∘ d) * (b ∘ c) * (b ∘ d))
  } →

  apply(Distributive_Expansion_1()) →
  apply(Distributive_Expansion_2()) →
  assert((a ∘ c) * (b ∘ c) * (a ∘ d) * (b ∘ d) = (a ∘ c) * (a ∘ d) * (b ∘ c) * (b ∘ d)) →
  
  lemma Cancellation() {
    assert(isCancellable(S,*) →
    (b ∘ c) * (a ∘ d) = (a ∘ d) * (b ∘ c))
  } →

  apply(Cancellation()) →
  setVar(c,d: 1_S) →
  assert(b * a = a * b) →
  assert(isCommutative(*))
}