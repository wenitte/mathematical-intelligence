theorem AbsValueFunctionComposite() {
  assert(
    ∀S ∀f: S → ℝ ⇒ (
      |f| = |·| ∘ f
      where
      |f|: S → ℝ,
      |·|: ℝ → ℝ,
      ∀s ∈ S: |f|(s) = |f(s)|
    )
  )
}

proof AbsValueFunctionComposite() {
  setVar(S: Set) →
  setVar(f: S → ℝ) →
  
  lemma FunctionEquality() {
    assert(
      ∀s ∈ S: |f|(s) = (|·| ∘ f)(s) ⇒
      |f| = |·| ∘ f
    )
  } →
  
  assert(
    ∀s ∈ S: 
    |f|(s) = |f(s)| by(DefAbsValueFunction) →
    |f(s)| = (|·| ∘ f)(s) by(DefCompositeMapping)
  ) →
  
  apply(FunctionEquality()) →
  assert(|f| = |·| ∘ f)
}