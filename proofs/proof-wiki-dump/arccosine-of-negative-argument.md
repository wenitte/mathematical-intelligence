theorem Arccosine_Negative_Argument() {
  assert(
    ∀x ∈ domain(arccos) ⇒ arccos(-x) = π - arccos(x)
  )
} ↔

proof Arccosine_Negative_Argument() {
  setVar(y: ℝ) →
  assert(arccos(-x) = y) →
  
  lemma Step1() {
    assert(-x = cos(y) ∧ 0 ≤ y ≤ π) by Definition_Real_Arccosine
  } →
  
  lemma Step2() {
    assert(x = -cos(y) ∧ 0 ≤ y ≤ π)
  } →
  
  lemma Step3() {
    assert(x = cos(π - y) ∧ 0 ≤ y ≤ π) by Cosine_Supplementary_Angle
  } →
  
  lemma Step4() {
    assert(arccos(x) = π - y) by Definition_Real_Arccosine
  } →
  
  apply(Step1(), Step2(), Step3(), Step4()) →
  assert(arccos(-x) = y = π - arccos(x))
}