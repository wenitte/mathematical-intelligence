theorem PreorderedVectorSpaceCharacterization() {
  let(𝔽 ∈ {ℝ, ℂ})
  let(X: VectorSpace(𝔽))
  let(≽: Preordering(X))
  assert(
    isPreorderedVectorSpace(⟨X, ≽⟩) ↔ 
    ∃P ⊆ X: (isConvexCone(P) ∧ (≽ = inducedPreordering(P)))
  )
}

proof PreorderedVectorSpaceCharacterization() {
  // Necessary Condition
  section NecessaryCondition() {
    assume(isPreorderedVectorSpace(⟨X, ≽⟩)) →
    define(P := {x ∈ X : x ≽ 0}) →
    define(≽ᴾ := inducedPreordering(P)) →
    
    forall(x, y ∈ X) {
      assert(x ≽ᴾ y ↔ x - y ∈ P) →
      assert(x - y ∈ P ↔ x - y ≽ 0) →
      assert(x - y ≽ 0 ↔ x ≽ y) →
      therefore(x ≽ᴾ y ↔ x ≽ y)
    }
  }

  // Sufficient Condition
  section SufficientCondition() {
    let(P ⊆ X: isConvexCone(P)) →
    define(≽ᴾ := inducedPreordering(P)) →
    
    // Property 1: Addition compatibility
    forall(x, x', y, y' ∈ X) {
      assume(x ≽ᴾ x' ∧ y ≽ᴾ y') →
      assert(x - x' ∈ P ∧ y - y' ∈ P) →
      apply(isConvexCone(P)) →
      assert((x - x') + (y - y') ∈ P) →
      assert((x + y) - (x' + y') ∈ P) →
      therefore(x + y ≽ᴾ x' + y')
    }

    // Property 2: Scalar multiplication compatibility
    forall(α ∈ ℝ₊, x, x' ∈ X) {
      assume(x ≽ᴾ x') →
      assert(x - x' ∈ P) →
      apply(isConvexCone(P)) →
      assert(α(x - x') ∈ P) →
      assert(αx - αx' ∈ P) →
      therefore(αx ≽ᴾ αx')
    }

    therefore(isPreorderedVectorSpace(⟨X, ≽ᴾ⟩))
  }
}