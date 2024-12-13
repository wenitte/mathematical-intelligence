theorem AbsContinuousIsContinuous() {
  assert(
    ∀I ⊆ ℝ: isInterval(I) ∧
    ∀f: I → ℝ: isAbsolutelyContinuous(f) →
    isContinuous(f)
  )
}

proof AbsContinuousIsContinuous() {
  setVar(I: ℝ, isInterval(I)) →
  setVar(f: I → ℝ, isAbsolutelyContinuous(f)) →
  
  lemma AbsContinuousIsUniformlyContinuous() {
    assert(
      isAbsolutelyContinuous(f) → 
      isUniformlyContinuous(f)
    )
  } →
  
  lemma UniformlyContIsContinuous() {
    assert(
      isUniformlyContinuous(f) →
      isContinuous(f)
    )
  } →
  
  apply(AbsContinuousIsUniformlyContinuous()) →
  apply(UniformlyContIsContinuous()) →
  assert(isContinuous(f))
}