theorem Scalar_Multiple_Continuous() {
  assert(
    ∀S[TopologicalSpace] ∧
    ∀f: S → ℝ[continuous] ∧
    ∀λ ∈ ℝ ∧
    let(λf: S → ℝ) ∧
    ∀s ∈ S: (λf)(s) = λ·f(s) 
    ⇒
    isContinuous(λf)
  )
}

proof Scalar_Multiple_Continuous() {
  lemma Real_Field() {
    assert(ℝ isA ValuedField)
  } →
  
  lemma Valued_Field_Property() {
    assert(ValuedField isA NormedDivisionRing)
  } →
  
  apply(Real_Field()) →
  apply(Valued_Field_Property()) →
  apply(Multiple_Rule_Continuous_Normed_Ring()) →
  
  conclude(
    isContinuous(f) ∧ 
    (ℝ isA NormedDivisionRing) 
    ⇒ 
    isContinuous(λf)
  )
}