theorem Lattice_To_Heyting() {
  assert(
    ∀L[complete_lattice ∧ infinite_join_distributive] →
    is_heyting_algebra(L)
  )
} ↔

proof Lattice_To_Heyting() {
  setVar(a, b: L.S) →
  define(a_to_b := sup{c ∈ L.S | a ∧ c ⪯ b}) →
  
  lemma Evaluate_Meet() {
    assert(
      a ∧ (a_to_b) = 
      a ∧ sup{c | a ∧ c ⪯ b} →
      sup{a ∧ c | a ∧ c ⪯ b} →
      ⪯ b
    )
  } →
  
  apply(Evaluate_Meet()) →
  
  conclude(
    ∀c[c ∧ a ⪯ b] → 
    a_to_b = greatest(c)
  ) →
  
  conclude(
    is_relative_pseudocomplement(a_to_b)
  ) →
  
  conclude(
    ∀a,b ∈ L.S → 
    ∃(a_to_b ∈ L.S) ∧
    is_greatest_element(a_to_b, c | a ∧ c ⪯ b)
  ) →
  
  apply(def_heyting_algebra) →
  assert(is_heyting_algebra(L))
}