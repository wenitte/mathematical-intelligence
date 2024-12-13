theorem Minimal_Element_Under_Epsilon() {
  assert(
    ∀B: Class ∧ (B ≠ ∅) → 
    ∃x ∈ B: (∀y ∈ B: y ≠ x → ¬(y ∈ x))
  )
} ↔

proof Minimal_Element_Under_Epsilon() {
  setVar(B: Class) →
  assume(B ≠ ∅) →
  
  lemma Epsilon_Well_Founded() {
    assert(Epsilon_Relation_Is_Strictly_Well_Founded(∈, B))
  } →
  
  lemma Epsilon_Proper() {
    assert(
      Proper_Relational_Structure(⟨𝕌, ∈⟩) ∧
      𝕌 = Universal_Class
    )
  } →
  
  apply(Well_Founded_Proper_Relational_Structure_Theorem()) →
  apply(Epsilon_Well_Founded()) →
  apply(Epsilon_Proper()) →
  
  conclude(
    ∃x ∈ B: (∀y ∈ B: y ≠ x → ¬(y ∈ x))
  )
}