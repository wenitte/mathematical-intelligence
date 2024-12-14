theorem CauchysLemma_GroupTheory() {
  assert(
    ∀G(isGroup(G) ∧ isFinite(G)) ∧
    ∀p(isPrime(p) ∧ divides(p, order(G))) →
    ∃a∈G(order(a) = p)
  )
} ↔

proof CauchysLemma_GroupTheory() {
  setVar(n: ℕ, n = order(G)) →
  setVar(X: Set, X = {(a₁,...,aₚ) ∈ G^p | a₁∘a₂∘...∘aₚ = e}) →
  
  lemma CountX() {
    assert(card(X) = n^(p-1)) →
    proof {
      assert(∀i∈[1,p-1](aᵢ freely chosen)) ∧
      assert(aₚ = (a₁∘...∘aₚ₋₁)⁻¹) →
      apply(ProductRule()) →
      assert(card(X) = n^(p-1))
    }
  } →
  
  setVar(Cₚ: Group, Cₚ = cyclicGroup(p)) →
  setVar(c: Element, c = generator(Cₚ)) →
  defineAction(Cₚ, X, c*(a₁,...,aₚ) = (a₂,...,aₚ,a₁)) →
  
  apply(OrbitStabilizerTheorem()) →
  assert(∀orbit(card(orbit) | p)) →
  assert(isPrime(p) → ∀orbit(card(orbit) = 1 ∨ card(orbit) = p)) →
  
  setVar(r: ℕ, r = countOrbits(size=1)) →
  setVar(s: ℕ, s = countOrbits(size=p)) →
  
  assert(r + sp = n^(p-1)) →
  assert(divides(p,n) → divides(p,r)) →
  assert((e,...,e)∈X → r > 0) →
  assert(r ≥ p) →
  
  assert(∀x((x,...,x)∈X → x^p = e)) →
  assert(∃a∈G(a ≠ e ∧ a^p = e)) →
  conclude(∃a∈G(order(a) = p))
}