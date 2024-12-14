theorem ChangeOfCoordinateVectors() {
  assert(
    ∀R: Ring_with_unity ∧
    ∀M,N: Free_R_modules ∧
    dim(M) = m > 0 ∧ dim(N) = n > 0 ∧
    ∀A: OrderedBasis(M) ∧
    ∀B: OrderedBasis(N) ∧
    ∃f: LinearTransform(M → N) ∧
    ∃M_f_BA: Matrix(f,B,A)
    ⇒
    ∀m ∈ M: [f(m)]_B = M_f_BA · [m]_A
  )
} ↔

proof ChangeOfCoordinateVectors() {
  setVar(m: M) →
  lemma LinearityBothSides() {
    assert(
      isLinear([f(m)]_B) ∧
      isLinear(M_f_BA · [m]_A)
    )
  } →
  lemma CoincideOnBasis() {
    assert(
      ∀a ∈ A:
      [f(a)]_B = M_f_BA · [a]_A
    )
  } →
  apply(LinearityBothSides()) →
  apply(CoincideOnBasis()) →
  apply(LinearMapUniqueness()) →
  assert(
    ∀m ∈ M:
    [f(m)]_B = M_f_BA · [m]_A
  )
}