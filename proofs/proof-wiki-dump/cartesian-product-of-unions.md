theorem CartesianProduct_Union_Distribution() {
  assert(
    ∀A,B,C,D: Set →
    (A ∪ B) × (C ∪ D) = (A × C) ∪ (B × D) ∪ (A × D) ∪ (B × C)
  )
} ↔

proof CartesianProduct_Union_Distribution() {
  setVar(x,y: Element) →
  
  assert(
    (x,y) ∈ (A ∪ B) × (C ∪ D)
  ) ↔
  
  assert(
    (x ∈ A ∨ x ∈ B) ∧ (y ∈ C ∨ y ∈ D)
  ) by def(CartesianProduct, SetUnion) ↔
  
  assert(
    ((x ∈ A ∨ x ∈ B) ∧ y ∈ C) ∨
    ((x ∈ A ∨ x ∈ B) ∧ y ∈ D)
  ) by rule(Distribution) ↔
  
  assert(
    (x ∈ A ∧ y ∈ C) ∨
    (x ∈ B ∧ y ∈ C) ∨
    (x ∈ A ∧ y ∈ D) ∨
    (x ∈ B ∧ y ∈ D)
  ) by rule(Distribution) ↔
  
  assert(
    (x,y) ∈ (A × C) ∪ (B × C) ∪ (A × D) ∪ (B × D)
  ) by def(CartesianProduct, SetUnion)
}

corollary CartesianProduct_Union_Distribution_Simple() {
  assert(
    ∀A,B,C: Set →
    A × (B ∪ C) = (A × B) ∪ (A × C) ∧
    (B ∪ C) × A = (B × A) ∪ (C × A)
  )
}

theorem CartesianProduct_Union_Distribution_General() {
  assert(
    ∀I,J: IndexSet →
    ∀{Ai}i∈I, {Bj}j∈J: FamilyOfSets →
    (⋃i∈I Ai) × (⋃j∈J Bj) = ⋃(i,j)∈I×J (Ai × Bj)
  )
}