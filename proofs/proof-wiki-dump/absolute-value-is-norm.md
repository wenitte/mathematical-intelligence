theorem Absolute_Value_Is_Norm() {
  assert(
    ∀x ∈ ℝ ⇒ |x| is_a_norm_on(ℝ)
  )
} ↔

proof Absolute_Value_Is_Norm() {
  lemma Complex_Modulus_Is_Norm() {
    assert(
      ∀z ∈ ℂ ⇒ |z| is_a_norm_on(ℂ)
    )
  } →
  
  lemma Real_Numbers_Are_Complex_Subset() {
    assert(
      ℝ ⊆ ℂ
    )
  } →
  
  lemma Complex_Modulus_Equals_Absolute_Value() {
    assert(
      ∀x ∈ ℝ ⇒ |x|_ℂ = |x|_ℝ
    )
  } →
  
  apply(Complex_Modulus_Is_Norm()) ∧
  apply(Real_Numbers_Are_Complex_Subset()) →
  assert(|x|_ℂ is_a_norm_on(ℝ)) →
  
  apply(Complex_Modulus_Equals_Absolute_Value()) →
  assert(|x|_ℝ is_a_norm_on(ℝ))
}