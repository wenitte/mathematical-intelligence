theorem Biconditional_Commutative() {
  assert(
    ∀p,q: [p ⟺ q] ⟺ [q ⟺ p]
  )
} ↔

proof Biconditional_Commutative() {
  // Forward direction
  lemma Forward() {
    assume(p ⟺ q) →
    apply(BiconditionalElim1, p ⟺ q) →
    assert(p → q) ∧
    apply(BiconditionalElim2, p ⟺ q) →
    assert(q → p) →
    apply(BiconditionalIntro, (q → p) ∧ (p → q)) →
    assert(q ⟺ p)
  } →

  // Backward direction
  lemma Backward() {
    assume(q ⟺ p) →
    apply(BiconditionalElim1, q ⟺ p) →
    assert(q → p) ∧
    apply(BiconditionalElim2, q ⟺ p) →
    assert(p → q) →
    apply(BiconditionalIntro, (p → q) ∧ (q → p)) →
    assert(p ⟺ q)
  } →

  // Combine both directions
  apply(Forward()) ∧ apply(Backward()) →
  assert([p ⟺ q] ⟺ [q ⟺ p])
}