theorem CartesianProductSubsets() {
  assert(
    ∀A,B,S,T: Sets ⇒
    ((A ⊆ B ∧ S ⊆ T) → (A × S ⊆ B × T)) ∧
    ((A ≠ ∅ ∧ S ≠ ∅) → (A × S ⊆ B × T ↔ A ⊆ B ∧ S ⊆ T))
  )
}

proof CartesianProductSubsets() {
  // Part 1: Forward direction
  case1() {
    setVar(A: Set, B: Set, S: Set, T: Set) →
    assume(A = ∅ ∨ S = ∅) →
    apply(CartesianProductEmptyFactor) →
    assert(A × S = ∅) →
    assert(∅ ⊆ B × T)
  }

  case2() {
    assume(A ≠ ∅ ∧ S ≠ ∅) →
    setVar(x ∈ A, y ∈ S) →
    assert(⟨x,y⟩ ∈ A × S) →
    assume(A ⊆ B ∧ S ⊆ T) →
    assert(x ∈ B ∧ y ∈ T) →
    assert(⟨x,y⟩ ∈ B × T) →
    conclude(A × S ⊆ B × T)
  }

  // Part 2: Reverse direction for non-empty sets
  reverseImplication() {
    assume(A ≠ ∅ ∧ S ≠ ∅) →
    assume(A × S ⊆ B × T) →
    setVar(x ∈ A, y ∈ S) →
    assert(⟨x,y⟩ ∈ A × S) →
    assert(⟨x,y⟩ ∈ B × T) →
    assert(x ∈ B ∧ y ∈ T) →
    conclude(A ⊆ B ∧ S ⊆ T)
  }

  conclude(
    (A ≠ ∅ ∧ S ≠ ∅) → (A × S ⊆ B × T ↔ A ⊆ B ∧ S ⊆ T)
  )
}

theorem CartesianProductSubsetsCorollary1() {
  assert(
    ∀A,B,S: Sets ⇒ (A ⊆ B → A × S ⊆ B × S)
  )
}

theorem CartesianProductSubsetsCorollary2() {
  assert(
    ∀A,S,T: Sets ⇒ (S ⊆ T → A × S ⊆ A × T)
  )
}

theorem CartesianProductSubsetsCorollary3() {
  assert(
    ∀A,B,C: Sets ⇒ ((B ≠ ∅ ∧ A × B ⊆ C × C) → A ⊆ C)
  )
}

theorem CartesianProductSubsetsFamilies() {
  assert(
    ∀I: IndexSet, ∀{Si}i∈I, {Ti}i∈I: FamiliesOfSets ⇒
    ((∀i ∈ I: Ti ⊆ Si) → ∏i∈I Ti ⊆ ∏i∈I Si) ∧
    ((∀i ∈ I: Ti ≠ ∅) → (∏i∈I Ti ⊆ ∏i∈I Si ↔ ∀i ∈ I: Ti ⊆ Si))
  )
}