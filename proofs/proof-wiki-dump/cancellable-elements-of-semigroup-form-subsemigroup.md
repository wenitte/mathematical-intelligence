theorem Cancellable_Elements_Form_Subsemigroup() {
  let(S: Semigroup, ∘: BinaryOperation) →
  let(C: Set) →
  assert(
    C = {x ∈ S | x is cancellable in S} ∧
    struct(C,∘) ⊆ struct(S,∘)
  )
} ↔

proof Cancellable_Elements_Form_Subsemigroup() {
  let(S: Semigroup, ∘: BinaryOperation) →
  let(C: Set = {x ∈ S | x is cancellable in S}) →
  
  forall(x,y ∈ C) {
    assert(x is left_cancellable ∧ x is right_cancellable) →
    assert(y is left_cancellable ∧ y is right_cancellable) →
    
    lemma Left_Cancellable_Subsemigroup() {
      assert(x∘y is left_cancellable)
    } →
    
    lemma Right_Cancellable_Subsemigroup() {
      assert(x∘y is right_cancellable)
    } →
    
    apply(Left_Cancellable_Subsemigroup()) →
    apply(Right_Cancellable_Subsemigroup()) →
    
    assert(x∘y is left_cancellable ∧ x∘y is right_cancellable) →
    assert(x∘y is cancellable) →
    assert(x∘y ∈ C)
  } →
  
  apply(Subsemigroup_Closure_Test(C)) →
  assert(struct(C,∘) is subsemigroup of struct(S,∘))
}