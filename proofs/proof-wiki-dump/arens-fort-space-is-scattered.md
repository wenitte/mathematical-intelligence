theorem ArensFort_Is_Scattered() {
  let T = (S, τ) be ArensFort_Space
  assert(
    T is_scattered_space
  )
} ↔

proof ArensFort_Is_Scattered() {
  lemma NonEmpty_Subset_Case() {
    setVar(H ⊆ T: H ≠ {(0,0)}) →
    ∃x ∈ H: x ≠ (0,0) →
    apply(Clopen_Points_ArensFort) →
    assert(∀p ∈ T: p ≠ (0,0) → p is_open_in T) →
    assert({x} is_open_in T) →
    assert(H ∩ {x} = {x}) →
    assert(x is_isolated_in H)
  } →

  lemma Origin_Singleton_Case() {
    setVar(H = {(0,0)}) →
    apply(Singleton_Point_Is_Isolated) →
    assert((0,0) is_isolated_in H)
  } →

  assert(∀H ⊆ S → 
    (H ≠ {(0,0)} → apply(NonEmpty_Subset_Case()) ∧
     H = {(0,0)} → apply(Origin_Singleton_Case()))
  ) →
  
  assert(∀H ⊆ S → ∃x ∈ H: x is_isolated_in H) →
  
  apply(Definition_Scattered_Space) →
  assert(T is_scattered_space)
}