theorem Compact_Complement_Is_T1() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ isCompactComplementSpace(T)) →
    isT1Space(T)
  )
} ↔

proof Compact_Complement_Is_T1() {
  lemma Finite_Is_Compact() {
    assert(
      ∀X(isFiniteSpace(X) → isCompact(X))
    )
  } →
  
  lemma Finite_Subspace_Compact() {
    assert(
      ∀F(F ⊆ T ∧ isFinite(F) → isCompact(F))
    )
  } →
  
  setVar(τ*: Set) →
  assert(
    τ* = {S ⊆ ℝ: S = ∅ ∨ isFinite(ℝ∖S)}
  ) →
  
  lemma Subset_Of_Topology() {
    assert(
      τ* ⊆ τ ∧
      isFiniteComplementTopology(τ*)
    )
  } →
  
  apply(Minimal_T1_Topology_Theorem()) →
  assert(
    isFiniteComplementTopology(τ*) →
    isT1Space(T)
  ) →
  
  conclude(isT1Space(T))
}