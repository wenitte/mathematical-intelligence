theorem Arccot_Negative() {
  assert(
    ∀x ∈ ℝ where arccot(x) defined ⇒
    arccot(-x) = π - arccot(x)
  )
} ↔

proof Arccot_Negative() {
  setVar(y: ℝ) →
  assert(arccot(-x) = y) →
  
  lemma Cot_Definition() {
    assert(-x = cot(y) ∧ 0 ≤ y ≤ π) →
    assert(x = -cot(y) ∧ 0 ≤ y ≤ π)
  } →
  
  lemma Cot_Supplementary() {
    assert(
      x = cot(π - y) ∧ 0 ≤ y ≤ π ↔
      x = -cot(y) ∧ 0 ≤ y ≤ π
    )
  } →
  
  apply(Cot_Definition()) →
  apply(Cot_Supplementary()) →
  
  lemma Arccot_Definition() {
    assert(
      x = cot(π - y) ∧ 0 ≤ y ≤ π ↔
      arccot(x) = π - y
    )
  } →
  
  apply(Arccot_Definition()) →
  assert(arccot(-x) = y ∧ arccot(x) = π - y) →
  assert(arccot(-x) = π - arccot(x))
}