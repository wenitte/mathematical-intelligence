theorem Matrix_Commutativity_Symmetric_Design() {
  let(A: Matrix) →
  assume(A_is_incidence_matrix_of_symmetric_design) →
  assert(A × A^T = A^T × A)
}

proof Matrix_Commutativity_Symmetric_Design() {
  lemma Basic_Properties() {
    assert(A × J = J × A = k × J) ∧
    assert(A^T × J = (J × A)^T = (k × J)^T = k × J) ∧
    assert(J × A^T = k × J) ∧
    assert(J^2 = v × J) ∧
    assert(A × A^T = (r - λ)I + λJ = (k - λ)I + λJ)
  } →

  let(expression1 = (A^T - √(λ/v)J) × (A + √(λ/v)J)) →
  assert(expression1 = A^T × A + √(λ/v)(A^T × J - J × A) - (λ/v)J^2) →
  apply(Basic_Properties()) →
  assert(expression1 = A^T × A - λJ = (k - λ)I) →

  lemma Inverse_Properties() {
    assert((1/(k - λ))(A + √(λ/v)J) is_inverse_of (A^T - √(λ/v)J)) →
    assert(matrices_commute((A + √(λ/v)J), (A^T - √(λ/v)J)))
  } →

  let(expression2 = (k - λ)I) →
  assert(expression2 = (A + √(λ/v)J) × (A^T - √(λ/v)J)) →
  assert(expression2 = A × A^T + √(λ/v)(J × A^T - A × J) - (λ/v)J^2) →
  apply(Basic_Properties()) →
  assert(expression2 = A × A^T - λJ) →

  conclude(A × A^T = (k - λ)I + λJ = A^T × A)
}