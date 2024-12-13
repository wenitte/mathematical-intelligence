theorem AbelianGroupOrder2Element() {
  assert(
    ∀G: AbelianGroup ∧
    let e = identityElement(G) ∧
    let |G| = 2n where n ∈ ℕ ∧ isOdd(n) ⇒
    ∃!g ∈ G: (g ≠ e ∧ g = g⁻¹)
  )
} ↔

proof AbelianGroupOrder2Element_1() {
  apply(AbelianGroupFactoredByPrime) →
  setVar(H₂ := {g ∈ G: g² = e}) →
  assert(|H₂| = 2) →
  assert(e ∈ H₂) ∧ assert(e² = e) →
  conclude(∃!g ∈ G: g ≠ e ∧ g = g⁻¹)
} ↔

proof AbelianGroupOrder2Element_2() {
  apply(EvenOrderGroupHasOrder2Element) →
  assert(∃x ∈ G: order(x) = 2) →
  
  lemma Contradiction() {
    assume(∃y ∈ G: y ≠ x ∧ order(y) = 2) →
    assert(xy = yx) →  // abelian property
    setVar(H := {g ∈ G: g² = e}) →
    assert(H = {e, x, y, xy}) →
    assert(|H| = 4) →
    assert(isOdd(n) ⇒ 4 ∤ 2n) →
    apply(LagrangeTheorem) →
    assert(contradiction)
  } →
  
  conclude(∃!g ∈ G: g ≠ e ∧ g = g⁻¹)
}