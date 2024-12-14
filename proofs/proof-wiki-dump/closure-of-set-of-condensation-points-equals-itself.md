theorem Closure_Condensation_Points_Equals_Itself() {
  let(T = ⟨S,τ⟩: TopologicalSpace) →
  let(A ⊆ S) →
  assert(
    (A⁰)⁻ = A⁰
    where(
      A⁰: SetOfCondensationPoints(A),
      A⁻: TopologicalClosure(A)
    )
  )
} ↔

proof Closure_Condensation_Points_Equals_Itself() {
  apply(Set_Is_Subset_Of_Topological_Closure(A⁰)) →
  assert(A⁰ ⊆ (A⁰)⁻) →
  
  lemma Prove_Reverse_Inclusion() {
    assert((A⁰)⁻ ⊆ A⁰)
  } →
  
  let(x ∈ (A⁰)⁻) →
  
  lemma Uncountable_Intersection(U: OpenSet) {
    assert(
      ∀U ∈ τ: x ∈ U ⇒ (A ∩ U is uncountable)
    )
  } →
  
  let(U ∈ τ: x ∈ U) →
  apply(Point_In_Closure_Condition(A⁰, U)) →
  assert(A⁰ ∩ U ≠ ∅) →
  
  ∃y: y ∈ (A⁰ ∩ U) →
  assert(y ∈ A⁰ ∧ y ∈ U) →
  assert(y is_condensation_point_of A) →
  assert(A ∩ U is uncountable) →
  
  lemma Prove_Limit_Point() {
    assert(x is_limit_point_of A) →
    let(U ∈ τ: x ∈ U) →
    apply(Uncountable_Intersection(U)) →
    assert(A ∩ U is uncountable) →
    assert(A ∩ (U\{x}) is uncountable) →
    assert(A ∩ (U\{x}) ≠ ∅)
  } →
  
  apply(Uncountable_Intersection()) →
  assert(x is_condensation_point_of A) →
  assert(x ∈ A⁰)
}