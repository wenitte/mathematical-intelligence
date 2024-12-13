theorem Biconditional_iff_Disjunction_implies_Conjunction() {
  assert(
    ⊢ (p ⟺ q) ⟺ ((p ∨ q) → (p ∧ q))
  )
} ↔

proof Biconditional_iff_Disjunction_implies_Conjunction() {
  // Forward direction
  setPool(1) →
  assume(p ⟺ q) →
  assert((p ∨ q) → (p ∧ q)) by(SequentIntro) →
  conclude(
    (p ⟺ q) → ((p ∨ q) → (p ∧ q))
  ) by(ImplicationIntro) →

  // Backward direction  
  setPool(4) →
  assume((p ∨ q) → (p ∧ q)) →
  assert(p ⟺ q) by(SequentIntro) →
  conclude(
    ((p ∨ q) → (p ∧ q)) → (p ⟺ q)
  ) by(ImplicationIntro) →

  // Combine both directions
  conclude(
    (p ⟺ q) ⟺ ((p ∨ q) → (p ∧ q))
  ) by(BiconditionalIntro)
}