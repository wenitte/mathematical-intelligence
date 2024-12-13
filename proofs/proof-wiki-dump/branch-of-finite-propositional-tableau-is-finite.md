theorem Branch_Finite_Tableau() {
  assert(
    let(T: PropTableau) ∧
    isFinite(T) ∧
    let(Γ: Branch) ∧
    isBranch(Γ, T) →
    isFinite(Γ)
  )
} ↔

proof Branch_Finite_Tableau() {
  assert(isFinite(T) ↔ ∃n ∈ ℕ: appliedRules(T, n)) →
  
  lemma Extension_Rule_Finite() {
    assert(
      ∀r ∈ TableauRules:
      isFinite(applyRule(r, T))
    )
  } →
  
  assert(isFiniteTree(T)) →
  
  apply(Theorem_Branch_Finite_Tree(), {
    tree: T,
    branch: Γ
  }) →
  
  conclude(isFinite(Γ))
}