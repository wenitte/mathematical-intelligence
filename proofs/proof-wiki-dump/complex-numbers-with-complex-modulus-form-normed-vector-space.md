theorem Complex_Numbers_Normed_Vector_Space() {
  assert(
    let(C: SetOfComplexNumbers) ∧
    let(|·|: ComplexModulus) ∧
    isNormedVectorSpace(⟨C, |·|⟩)
  )
} ↔

proof Complex_Numbers_Normed_Vector_Space() {
  lemma Complex_Vector_Space() {
    assert(isVectorSpace(C))
  } →
  lemma Complex_Modulus_Is_Norm() {
    assert(isNorm(|·|))
  } →
  apply(Complex_Vector_Space()) ∧
  apply(Complex_Modulus_Is_Norm()) →
  assert(isNormedVectorSpace(⟨C, |·|⟩)) →
  qed()
}