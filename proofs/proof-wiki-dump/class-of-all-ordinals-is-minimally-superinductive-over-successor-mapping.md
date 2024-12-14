theorem Ordinals_Minimally_Superinductive() {
  assert(
    ∀ON: Class(ON) ∧ IsOrdinals(ON) ↔ 
    (IsSuperinductive(ON, SuccessorMapping) ∧
     ∀C: (C ⊂ ON → ¬IsSuperinductive(C, SuccessorMapping)))
  )
} ↔

proof Ordinals_Minimally_Superinductive() {
  lemma Superinductive_Properties() {
    assert(IsProgressing(SuccessorMapping)) →
    setVar(S: Class) →
    assert(S ∈ ON ↔ ∀C: (IsSuperinductive(C) → S ∈ C)) →
    assert(ON ⊆ ∩{C | IsSuperinductive(C)})
  } →

  lemma Zero_In_ON() {
    setVar(M: Class, IsSuperinductive(M)) →
    assert(0 ∈ M) →
    assert(0 ∈ ∩{C | IsSuperinductive(C)}) →
    assert(0 ∈ ON)
  } →

  lemma Successor_Closure() {
    setVar(α ∈ ON) →
    assert(∀C: (IsSuperinductive(C) → α ∈ C)) →
    assert(∀C: (IsSuperinductive(C) → α⁺ ∈ C)) →
    assert(α⁺ ∈ ON) →
    assert(IsClosed(ON, SuccessorMapping))
  } →

  lemma Chain_Closure() {
    setVar(C: Chain(C, ON)) →
    assert(∀S: (IsSuperinductive(S) → C ⊆ S)) →
    assert(∀S: (IsSuperinductive(S) → ∪C ∈ S)) →
    assert(∪C ∈ ON) →
    assert(IsClosedUnderChains(ON))
  } →

  lemma No_Proper_Subclass() {
    assume(∃A: (A ⊂ ON ∧ IsSuperinductive(A))) →
    assert(∃x: (x ∈ ON ∧ x ∉ A)) →
    assert(ON ⊈ A) →
    contradiction(ON ⊆ A) →
    assert(¬∃A: (A ⊂ ON ∧ IsSuperinductive(A)))
  } →

  lemma Uniqueness() {
    setVar(ON': Class) →
    assume(IsMinimallySuperinductive(ON')) →
    assert(ON' ⊆ ON ∧ ON ⊆ ON') →
    assert(ON' = ON)
  } →

  apply(Superinductive_Properties()) →
  apply(Zero_In_ON()) →
  apply(Successor_Closure()) →
  apply(Chain_Closure()) →
  apply(No_Proper_Subclass()) →
  apply(Uniqueness()) →
  assert(IsUnique(ON, IsMinimallySuperinductive))
}