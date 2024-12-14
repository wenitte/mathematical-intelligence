theorem CompleteBipartiteGraphTrees() {
  assert(
    ∀G(G = K_{m,n} ∧ G = struct{A|B,E}) ⇒
    (isTree(K_{0,0}) ∧
     ∀n(isTree(K_{1,n}) ∧ isTree(K_{n,1})) ∧
     ∀m,n((m > 1 ∧ n > 1) ⇒ ¬isTree(K_{m,n})))
  )
} ↔

proof CompleteBipartiteGraphTrees() {
  lemma NullGraphCase() {
    apply(NullGraphIsCompleteBipartite()) →
    apply(NullGraphIsTree()) →
    assert(isTree(K_{0,0}))
  } →
  
  lemma K1nCase() {
    setVar(n: ℕ) →
    assert(order(K_{1,n}) = n + 1) →
    assert(size(K_{1,n}) = n) →
    apply(FiniteConnectedSimpleGraphTreeTheorem()) →
    assert(isTree(K_{1,n}))
  } →
  
  lemma Kn1Case() {
    setVar(n: ℕ) →
    assert(order(K_{n,1}) = n + 1) →
    assert(size(K_{n,1}) = n) →
    apply(FiniteConnectedSimpleGraphTreeTheorem()) →
    assert(isTree(K_{n,1}))
  } →
  
  lemma K0nNotTree() {
    setVar(n: ℕ, n > 1) →
    setVar(b₁,b₂: B) →
    assert(A = ∅) →
    assert(¬connected(b₁,b₂)) →
    assert(¬connected(K_{0,n})) →
    assert(¬isTree(K_{0,n}))
  } →
  
  lemma KmnNotTree() {
    setVar(m,n: ℕ, m > 1 ∧ n > 1) →
    assert(∃a₁,a₂ ∈ A) →
    assert(∃b₁,b₂ ∈ B) →
    assert(hasCycle(⟨a₁,b₁,a₂,b₂,a₁⟩)) →
    assert(hasCycle(K_{m,n}) ⇒ ¬isTree(K_{m,n})) →
    assert(¬isTree(K_{m,n}))
  } →
  
  apply(NullGraphCase()) ∧
  apply(K1nCase()) ∧
  apply(Kn1Case()) ∧
  apply(K0nNotTree()) ∧
  apply(KmnNotTree())
}