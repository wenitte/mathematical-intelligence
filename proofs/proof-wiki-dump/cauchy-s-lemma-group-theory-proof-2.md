theorem CauchyLemma_GroupTheory() {
  assert(
    ∀G(isGroup(G) ∧ isFinite(G)) ∧
    ∃p(isPrime(p) ∧ divides(p, order(G))) 
    ⇒
    ∃x ∈ G(order(x) = p)
  )
} ↔

proof CauchyLemma_GroupTheory() {
  setVar(G: Group, p: ℕ) →
  assume(isFinite(G) ∧ isPrime(p) ∧ divides(p, order(G))) →
  
  lemma FirstSylowCorollary() {
    assert(
      ∀r ∈ ℕ(
        divides(p^r, order(G)) ⇒
        ∃H ⊆ G(isSubgroup(H, G) ∧ order(H) = p^r)
      )
    )
  } →
  
  apply(FirstSylowCorollary(), r = 1) →
  assert(∃H ⊆ G(isSubgroup(H, G) ∧ order(H) = p)) →
  
  lemma PrimeGroupCyclic() {
    assert(
      ∀H(isGroup(H) ∧ order(H) = p ∧ isPrime(p) ⇒ isCyclic(H))
    )
  } →
  
  apply(PrimeGroupCyclic()) →
  assert(isCyclic(H)) →
  
  lemma CyclicGroupElement() {
    assert(
      ∀H(isCyclic(H) ∧ order(H) = p ⇒ ∃x ∈ H(order(x) = p))
    )
  } →
  
  apply(CyclicGroupElement()) →
  assert(∃x ∈ G(order(x) = p))
}