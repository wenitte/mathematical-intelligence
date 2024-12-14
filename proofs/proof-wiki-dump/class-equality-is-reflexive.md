theorem Class_Equality_Reflexive() {
  assert(
    ∀A [A is a class] ⇒ (A = A)
  )
} ↔

proof Class_Equality_Reflexive() {
  setVar(A: Class) →
  assert(
    by_def(class_equality): [A = A] ↔ ∀x(x ∈ A ↔ x ∈ A)
  ) →
  assert(
    ∀x(x ∈ A ↔ x ∈ A)  // logical tautology
  ) →
  conclude(A = A)
}