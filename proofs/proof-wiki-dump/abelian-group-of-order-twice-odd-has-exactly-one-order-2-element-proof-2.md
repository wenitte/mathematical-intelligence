theorem Unique_Order2_Element() {
  assert(
    ∀G: AbelianGroup ∧ 
    let e = identity(G) ∧
    let |G| = 2n where n ∈ ℕ ∧ odd(n)
    ⇒
    ∃!g ∈ G: (g ≠ e ∧ g = g⁻¹)
  )
} ↔

proof Unique_Order2_Element() {
  setVar(G: AbelianGroup) →
  setVar(e: identity(G)) →
  setVar(n: ℕ where odd(n)) →
  assert(|G| = 2n) →

  lemma Even_Order_Has_Order2() {
    assert(∃x ∈ G: order(x) = 2)
  } →
  apply(Even_Order_Has_Order2()) →
  setVar(x: G where order(x) = 2) →

  byContradiction() {
    assume(∃y ∈ G: y ≠ x ∧ order(y) = 2) →
    setVar(y: G where y ≠ x ∧ order(y) = 2) →
    assert(xy = yx by AbelianProperty) →
    assert(order(xy) = 2) →
    
    setVar(H = {g ∈ G: g² = e}) →
    assert(H = {e, x, y, xy}) →
    assert(isSubgroup(H, G)) →
    assert(|H| = 4) →
    
    assert(odd(n) → ¬divides(4, 2n)) →
    lemma Lagrange() {
      assert(∀K ⊆ G: isSubgroup(K, G) → divides(|K|, |G|))
    } →
    apply(Lagrange()) →
    assert(contradiction())
  } →
  
  conclude(∃!g ∈ G: g ≠ e ∧ g = g⁻¹)
}