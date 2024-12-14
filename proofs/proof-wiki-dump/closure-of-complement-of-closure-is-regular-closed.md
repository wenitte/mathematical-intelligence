theorem Closure_Complement_Closure_Regular_Closed() {
  let(T = ⟨S,τ⟩: TopologicalSpace) →
  let(A ⊆ S) →
  let(A⁻: Closure(A)) →
  let(A': Complement(A,S)) →
  assert(
    Regular_Closed(A⁻'⁻)
  )
} ↔

proof Closure_Complement_Closure_Regular_Closed() {
  let(A°: Interior(A)) →
  
  lemma Closed_Set() {
    assert(Closed(A⁻))
  } →
  
  lemma Open_Complement() {
    assert(
      Closed(A⁻) → Open(A⁻')
    )
  } →
  
  apply(Closed_Set()) →
  apply(Open_Complement()) →
  
  lemma Complement_Property() {
    assert(
      ∀x ∈ A⁻' ↔ (x ∉ A⁻)
    )
  } →
  
  lemma Limit_Points() {
    assert(
      ∀y ∈ A⁻'⁻ ∧ y ∉ A⁻' →
      y ∈ LimitPoints(A⁻)
    )
  } →
  
  lemma Interior_Property() {
    assert(
      ∀x ∈ A⁻'⁻° ↔ x ∈ A⁻'
    )
  } →
  
  assert(
    A⁻'⁻° ⁻ = A⁻'⁻
  ) →
  
  conclude(
    Regular_Closed(A⁻'⁻)
  )
}