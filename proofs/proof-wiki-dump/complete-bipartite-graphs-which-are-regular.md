theorem CompleteBipartiteRegular() {
  assert(
    ∀G(G = K_{m,n} ∧ G = ⟨A|B,E⟩ ∧ m,n ∈ ℕ) ⇒
    (
      (K_{n,n} is n-regular ∀n) ∧
      (K_{n,0} is 0-regular ∀n) ∧
      (K_{0,n} is 0-regular ∀n) ∧
      (¬∃K_{p,q}(p≠q ∧ p,q>0 ∧ K_{p,q} is regular))
    )
  )
} ↔

proof CompleteBipartiteRegular() {
  // Case 1: K_{n,0} and K_{0,n}
  setVar(n: ℕ) →
  lemma EdgelessCase() {
    assert(K_{n,0} has no edges) ∧
    assert(K_{0,n} has no edges) →
    apply(CompleteGraphEdgeless) →
    assert(∀v ∈ V(K_{n,0}): deg(v) = 0) ∧
    assert(∀v ∈ V(K_{0,n}): deg(v) = 0) →
    apply(ZeroRegularIffEdgeless) →
    assert(K_{n,0} is 0-regular ∧ K_{0,n} is 0-regular)
  } →

  // Case 2: K_{m,n} where m,n > 0
  setVar(m,n: ℕ, m>0, n>0) →
  lemma NonZeroCase() {
    assert(∀v ∈ A: deg(v) = n) ∧
    assert(∀v ∈ B: deg(v) = m) →
    assert(G is regular ↔ ∀v,w ∈ V(G): deg(v) = deg(w)) →
    assert(G is regular ↔ m = n) →
    assert(K_{n,n} is n-regular)
  } →

  combine(EdgelessCase(), NonZeroCase()) →
  assert(conclusion)
}