theorem Foundation_Strong_Form() {
  assert(
    ∀B: Class ∧ B ≠ ∅ →
    ∃m ∈ B: (∀b ∈ B: b ∉ m)
  )
} ↔

proof Foundation_Strong_Form_1() {
  assume(B: Class ∧ B ≠ ∅) →
  lemma Epsilon_Well_Founded() {
    assert(Epsilon is_strictly_well_founded_on B)
  } →
  lemma Epsilon_Proper() {
    assert(⟨𝕌,Epsilon⟩ is_proper_relational_structure)
  } →
  apply(Well_Founded_Proper_Determines_Minimal()) →
  conclude(∃m ∈ B: (∀b ∈ B: b ∉ m))
} ∨

proof Foundation_Strong_Form_2() {
  assume(B: Class ∧ B ≠ ∅) →
  setVar(x ∈ B) →
  let(x': transitive_closure(x)) →
  let(L = x' ∩ B) →
  assert(x ∈ L ∧ L ≠ ∅) →
  assert(L is_set) by(Axiom_of_Subset) →
  apply(Axiom_of_Foundation, L) →
  obtain(m ∈ L: ∀y ∈ L: y ∉ m) →
  assert(m ∈ B) by(def_intersection) →
  
  byContradiction() {
    assume(∃b ∈ B: b ∈ m) →
    assert(m ∈ x' ∧ x' is_transitive) →
    assert(b ∈ x') →
    assert(b ∈ L) →
    assert(contradicts(b ∈ L ∧ ∀y ∈ L: y ∉ m))
  } →
  
  conclude(m is_minimal_element_of B)
}