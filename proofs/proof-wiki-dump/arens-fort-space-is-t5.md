theorem ArensFort_Is_T5() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ is_ArensFort_space(T)) →
    is_T5_space(T)
  )
} ↔

proof ArensFort_Is_T5() {
  setVar(A,B: P(S)) →
  assume(separated(A,B)) →
  setVar(p: ⟨0,0⟩) →
  
  case p_not_in_sets() {
    assume(p ∉ A ∧ p ∉ B) →
    assert(is_open(A) ∧ is_open(B))
  } ∨
  
  case p_in_one_set() {
    assert(¬(p ∈ A ∧ p ∈ B)) →
    assume(p ∈ A) →
    assert(p ∉ B) →
    assert(is_open(B)) →
    assert(is_closed(B ∪ {p})) →
    
    lemma closure_containment() {
      assert(B ⊆ B⁻ ⊆ B ∪ {p})
    } →
    
    assert(is_closed(B) ∨ p ∈ B⁻) →
    assume(p ∈ B⁻) →
    assert(A ∩ B⁻ ≠ ∅) →
    assert(¬separated(A,B)) →
    contradiction() →
    assert(is_closed(B))
  } →
  
  assert(A ⊆ (S\B) ∧ is_open(S\B)) →
  assert(satisfies_T5_axiom(T))
}