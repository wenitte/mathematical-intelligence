theorem SimpleFunction_AbsValue() {
  assert(
    ∀X,Σ,f [
      (X,Σ) ∈ MeasurableSpace ∧
      f: X → ℝ ∧
      isSimpleFunction(f)
    ] ⇒
    isSimpleFunction(|f|)
  )
}

proof SimpleFunction_AbsValue() {
  setVar((X,Σ): MeasurableSpace) →
  setVar(f: X → ℝ) →
  assume(isSimpleFunction(f)) →
  
  lemma AbsValue_Decomposition() {
    assert(|f| = f⁺ + f⁻)
  } →
  
  apply(AbsValue_Decomposition()) →
  
  lemma Positive_Part_Simple() {
    assert(
      isSimpleFunction(f) ⇒ isSimpleFunction(f⁺)
    )
  } →
  
  lemma Negative_Part_Simple() {
    assert(
      isSimpleFunction(f) ⇒ isSimpleFunction(f⁻)
    )
  } →
  
  apply(Positive_Part_Simple()) →
  apply(Negative_Part_Simple()) →
  
  lemma Sum_Simple_Functions() {
    assert(
      ∀g,h [
        isSimpleFunction(g) ∧
        isSimpleFunction(h)
      ] ⇒
      isSimpleFunction(g + h)
    )
  } →
  
  apply(Sum_Simple_Functions()) →
  assert(isSimpleFunction(|f|))
}