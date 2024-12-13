theorem Basis_Has_Subset_Basis_Equal_Weight() {
  assert(
    ∀T[X,τ] ∈ TopologicalSpace ∧ ∀B ∈ Basis(T) ⇒
    ∃B₀ ⊆ B: (IsBasis(B₀,T) ∧ |B₀| = w(T))
  )
} ↔

proof Basis_Has_Subset_Basis_Equal_Weight() {
  case_split(w(T)) {
    case Infinite_Weight() {
      setVar(B₁: Basis(T)) →
      assert(|B₁| = w(T)) →
      
      lemma SubsetExists() {
        assert(
          ∀U ∈ B₁ ⇒ ∃A ⊆ B: (U = ∪A ∧ |A| ≤ w(T))
        )
      } →
      
      apply(AxiomOfChoice) →
      setVar(f: B₁ → P(B)) →
      assert(∀U ∈ B₁: U = ∪f(U) ∧ |f(U)| ≤ w(T)) →
      
      setVar(B₀ := ∪{f(U): U ∈ B₁}) →
      
      lemma B₀_Is_Basis() {
        assert(B₀ ⊆ τ) →
        assert(
          ∀A ∈ τ ∧ ∀p ∈ A ⇒
          ∃D ∈ B₀: p ∈ D ∧ D ⊆ A
        )
      } →
      
      apply(CardinalityTheorems) →
      assert(|B₀| ≤ w(T)) →
      assert(|B₀| = w(T))
    }

    case Finite_Weight() {
      apply(FiniteWeightBasisTheorem) →
      setVar(B₀: Basis(T)) →
      setVar(f: X → τ) →
      assert(B₀ = Im(f)) →
      assert(B₀ ⊆ B) →
      assert(|B₀| = w(T))
    }
  }
}