theorem T3_Space_Characterization() {
  let T = ⟨S,τ⟩ be a topological space
  assert(
    (1) T is T₃ space ↔
    (2) ∀F⊆S: (S\F∈τ ∧ ∀y∈S\F → ∃V∈τ: (y∈V ∧ V⁻∩F=∅)) ↔
    (3) ∀U∈τ: ∀y∈U → ∃V∈τ: (y∈V ∧ V⁻⊆U)
  )
}

proof T3_Space_Part1() { // (1) → (2)
  assume(T is T₃ space) →
  setVar(F⊆S: S\F∈τ) →
  setVar(y∈S\F) →
  byDef(T₃_space) {
    assert(∃V,W∈τ: y∈V ∧ F⊆W ∧ V∩W=∅)
  } →
  lemma DisjointSetDifference() {
    assert(V∩W=∅ ↔ V⊆S\W)
  } →
  assert(S\W is closed in T) →
  lemma ClosureSubset() {
    assert(V⊆S\W → V⁻⊆S\W)
  } →
  apply(ClosureSubset()) →
  lemma SetDiffSubset() {
    assert(S\W⊆S\F)
  } →
  byTransitivity(V⁻⊆S\W ∧ S\W⊆S\F) {
    assert(V⁻⊆S\F)
  } →
  assert(V⁻∩F=∅)
}

proof T3_Space_Part2() { // (2) → (3)
  assume(∀F⊆S: S\F∈τ ∧ ∀y∈S\F → ∃V∈τ: (y∈V ∧ V⁻∩F=∅)) →
  setVar(U∈τ) →
  setVar(y∈U) →
  let F = S\U →
  assert(S\F = U) →
  assert(S\F∈τ ∧ y∈S\F) →
  apply(assumption) {
    assert(∃V∈τ: y∈V ∧ V⁻∩F=∅)
  } →
  assert(V⁻∩(S\U)=∅) →
  assert(V⁻⊆U)
}

proof T3_Space_Part3() { // (3) → (1)
  assume(∀U∈τ: ∀y∈U → ∃V∈τ: (y∈V ∧ V⁻⊆U)) →
  setVar(U∈τ) →
  setVar(y∈U) →
  apply(assumption) {
    assert(∃V∈τ: y∈V ∧ V⁻⊆U)
  } →
  let N = V⁻ →
  assert(V⊆N) →
  assert(S\N∈τ) →
  assert(∃N⊆S: S\N∈τ ∧ ∃V∈τ: y∈V⊆N⊆U) →
  byDef(T₃_space) {
    assert(T is T₃ space)
  }
}