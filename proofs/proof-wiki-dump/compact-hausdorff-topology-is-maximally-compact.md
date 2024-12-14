theorem Maximally_Compact_Hausdorff() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ isHausdorff(T) ∧ isCompact(T)) ⇒ 
    isMaximallyCompact(τ)
  )
} ↔

proof Maximally_Compact_Hausdorff() {
  setVar(τ': Topology(S)) →
  assume(τ ⊆ τ' ∧ τ ≠ τ') →
  
  let(Is: Function) →
  assert(Is = identityMapping(⟨S,τ'⟩ → ⟨S,τ⟩)) →
  
  lemma Identity_Properties() {
    assert(
      isContinuous(Is) ∧ 
      isBijective(Is) ∧
      isHausdorff(⟨S,τ'⟩) ∧
      isCompact(⟨S,τ⟩)
    )
  } →
  
  assume(isCompact(⟨S,τ'⟩)) →
  
  lemma Continuous_Bijection_Property() {
    assert(
      (isContinuous(Is) ∧ isBijective(Is) ∧ 
       isCompact(⟨S,τ'⟩) ∧ isHausdorff(⟨S,τ⟩)) ⇒
      isOpen(Is)
    )
  } →
  
  apply(Continuous_Bijection_Property()) →
  assert(isOpen(Is) ⇒ τ' ⊆ τ) →
  assert((τ ⊆ τ' ∧ τ' ⊆ τ) ⇒ τ = τ') →
  
  contradiction(τ = τ', τ ≠ τ') →
  
  conclude(
    ¬∃τ'(τ ⊂ τ' ∧ isCompact(⟨S,τ'⟩))
  )
}