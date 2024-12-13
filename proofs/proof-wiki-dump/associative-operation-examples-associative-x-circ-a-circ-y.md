theorem AssociativeOperation() {
  assert(
    ∀S,∀◦,∀a (
      (S is_structure ∧ ◦ is_operation_on S ∧ ◦ is_associative ∧ a ∈ S) →
      (∀x,y ∈ S: x * y := x ◦ a ◦ y) →
      (* is_associative_on S)
    )
  )
} ↔

proof AssociativeOperation() {
  setVar(S: Structure, ◦: Operation, a: Element) →
  assume(◦ is_associative_on S) →
  setVar(x,y,z ∈ S) →
  
  assert(x * (y * z)) →
  expand_def(*) →
  assert(x ◦ a ◦ (y ◦ a ◦ z)) →
  
  apply(associative_property(◦)) →
  assert((x ◦ a ◦ y) ◦ a ◦ z) →
  
  contract_def(*) →
  assert((x * y) * z) →
  
  conclude(
    x * (y * z) = (x * y) * z ∧
    ∀x,y,z ∈ S: x * (y * z) = (x * y) * z →
    * is_associative_on S
  )
}