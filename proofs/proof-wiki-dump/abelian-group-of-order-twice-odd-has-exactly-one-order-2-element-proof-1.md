theorem AbelianGroupOrderTwoOdd() {
  assert(
    ∀G[Group] ∧ isAbelian(G) ∧
    ∃n ∈ ℕ[isOdd(n)] ∧
    |G| = 2n →
    ∃!g ∈ G[g ≠ e ∧ g = g⁻¹]
  )
} ↔

proof AbelianGroupOrderTwoOdd() {
  setVar(G: Group) →
  setVar(n: ℕ) →
  assert(isAbelian(G)) →
  assert(|G| = 2n ∧ isOdd(n)) →
  
  define(H₂) {
    H₂ := {g ∈ G: g² = e}
  } →
  
  lemma SubgroupOrder() {
    apply(AbelianGroupFactoredByPrime()) →
    assert(|H₂| = 2)
  } →
  
  assert(e ∈ H₂) {
    prove(e² = e)
  } →
  
  assert(∃!g ∈ H₂[g ≠ e]) {
    by(|H₂| = 2 ∧ e ∈ H₂)
  } →
  
  assert(g = g⁻¹ ↔ g² = e) →
  conclude(∃!g ∈ G[g ≠ e ∧ g = g⁻¹])
}