theorem CauchyLemma() {
  let G: Group
  let p: Prime
  assert(
    (finite(G) ∧ p|order(G)) ⇒ ∃a ∈ G: order(a) = p
  )
} ↔

proof CauchyLemma_Proof1() {
  setVar(n: ℕ = order(G)) →
  setVar(X = {(a₁,...,aₚ) ∈ G^p: a₁∘...∘aₚ = e}) →
  
  lemma CardinalityOfX() {
    assert(|X| = n^(p-1)) ↔
    proof {
      assert(∀i ∈ [1,p-1]: aᵢ can be chosen freely) ∧
      assert(aₚ = (a₁∘...∘aₚ₋₁)⁻¹) →
      apply(ProductRule)
    }
  } →
  
  setVar(Cₚ: CyclicGroup(p)) →
  defineAction(Cₚ on X: c*(a₁,...,aₚ) = (a₂,...,aₚ,a₁)) →
  
  lemma OrbitSize() {
    assert(∀orbit ∈ X: |orbit| ∈ {1,p}) ↔
    proof {
      apply(OrbitStabilizerTheorem) ∧
      assert(p is prime)
    }
  } →
  
  setVar(r: ℕ = |{orbits of size 1}|) →
  setVar(s: ℕ = |{orbits of size p}|) →
  assert(r + sp = n^(p-1)) →
  assert(p|n ⇒ p|r) →
  assert(r ≥ 1) by {tuple(e,...,e) ∈ X} →
  assert(r ≥ p) →
  assert(∃a ∈ G: (a ≠ e ∧ a^p = e)) →
  conclude(∃a ∈ G: order(a) = p)
}

proof CauchyLemma_Proof2() {
  apply(FirstSylowTheorem_Corollary) →
  assert(∃H ⊆ G: order(H) = p) →
  apply(PrimeGroupIsCyclic) →
  assert(H is cyclic) →
  assert(∃a ∈ H: order(a) = p) →
  conclude(∃a ∈ G: order(a) = p)
}