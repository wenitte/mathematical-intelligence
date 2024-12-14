theorem CharacterizationOfAnalyticBasis() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ IsTopologicalSpace(T)) ∧
    ∀P(P ⊆ PowerSet(S)) ∧
    (P ⊆ τ) ∧
    (∀p ∈ S → ∃B(IsLocalBasis(B,p) ∧ B ⊆ P)) →
    IsBasis(P,T)
  )
}

proof CharacterizationOfAnalyticBasis() {
  assume(P ⊆ τ) →
  setVar(U: OpenSet(S)) →
  define(X := {V ∈ P | V ⊆ U}) →
  assert(X ⊆ P) →

  lemma SubsetEquivalence() {
    assert(∀u ∈ S → (u ∈ U ↔ ∃Z ∈ X(u ∈ Z)))
  } →

  proof SubsetEquivalence() {
    setVar(u: S) →
    
    subproof ForwardDirection() {
      assume(u ∈ U) →
      apply(LocalBasisAssumption(u)) →
      assert(∃B(IsLocalBasis(B,u) ∧ B ⊆ P)) →
      apply(LocalBasisDefinition()) →
      assert(∃V ∈ B(V ⊆ U)) →
      assert(V ∈ X) →
      assert(u ∈ V)
    } →

    subproof BackwardDirection() {
      assume(∃Z ∈ X(u ∈ Z)) →
      apply(SetDefinition(X)) →
      assert(Z ⊆ U) →
      assert(u ∈ U)
    }
  } →

  apply(SubsetEquivalence()) →
  assert(U = ⋃X) →
  assert(IsBasis(P,T))
}