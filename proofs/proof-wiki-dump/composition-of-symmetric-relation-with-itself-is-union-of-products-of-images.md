theorem Symmetric_Relation_Composition() {
  assert(
    ∀R,S [
      (R is_relation_on S ∧ R is_symmetric) →
      (R ∘ R = ⋃{s∈S} (R(s) × R(s)))
    ]
  )
} ↔

proof Symmetric_Relation_Composition() {
  setVar(R: Relation, S: Set) →
  assert(
    ⟨x,y⟩ ∈ (R ∘ R) ↔
    ∃s∈S [⟨x,s⟩ ∈ R ∧ ⟨s,y⟩ ∈ R]
  ) →  // Definition of Composite Relation
  
  assert(
    ∃s∈S [⟨x,s⟩ ∈ R ∧ ⟨s,y⟩ ∈ R] ↔
    ∃s∈S [⟨s,x⟩ ∈ R ∧ ⟨s,y⟩ ∈ R]
  ) →  // Definition of Symmetric Relation
  
  assert(
    ∃s∈S [⟨s,x⟩ ∈ R ∧ ⟨s,y⟩ ∈ R] ↔
    ∃s∈S [x ∈ R(s) ∧ y ∈ R(s)]
  ) →  // Definition of Image of Element under Relation
  
  assert(
    ∃s∈S [x ∈ R(s) ∧ y ∈ R(s)] ↔
    ∃s∈S [⟨x,y⟩ ∈ (R(s) × R(s))]
  ) →  // Definition of Cartesian Product
  
  assert(
    ∃s∈S [⟨x,y⟩ ∈ (R(s) × R(s))] ↔
    ⟨x,y⟩ ∈ ⋃{s∈S} (R(s) × R(s))
  ) →  // Definition of Set Union
  
  conclude(R ∘ R = ⋃{s∈S} (R(s) × R(s)))
}