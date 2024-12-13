theorem ArcTan_Reciprocal_Equals_ArcCot() {
  assert(
    ∀x ∈ Dom(arctan ∘ reciprocal) ∩ Dom(arccot) →
    arctan(1/x) = arccot(x)
  )
} ↔

proof ArcTan_Reciprocal_Equals_ArcCot() {
  setVar(y: ℝ) →
  
  lemma Step1() {
    assert(arctan(1/x) = y) ↔
    assert(1/x = tan(y))
  } →
  
  lemma Step2() {
    assert(1/x = tan(y)) ↔
    assert(x = cot(y))
  } →
  
  lemma Step3() {
    assert(x = cot(y)) ↔
    assert(y = arccot(x))
  } →
  
  apply(Step1()) ∧
  apply(Step2()) ∧
  apply(Step3()) →
  
  conclude(
    arctan(1/x) = y = arccot(x)
  )
}