theorem AlgebraField_UnititizationIdeal() {
  setVar(K: Field) →
  setVar(A: Algebra(over: K)) →
  setVar(A_plus: Unitization(of: A)) →
  define(A_0: {(x, 0_K) | x ∈ A} ⊆ A_plus) →
  assert(
    A_0 isIdealIn A_plus
  )
} ↔

proof AlgebraField_UnititizationIdeal() {
  assert(A isIdealIn A) →
  apply(theorem: IdealAlgebraField_UnititizationIdeal(
    field: K,
    algebra: A,
    ideal: A
  )) →
  conclude(A_0 isIdealIn A_plus)
}