theorem AlternatingGroupNotAbelian() {
  assert(
    ∀n ∈ ℤ : (n > 3) ⇒ 
    ¬(isAbelian(Aₙ))
  )
} ↔

proof AlternatingGroupNotAbelian() {
  setVar(n: ℤ, n > 3) →
  setVar(α: (1,2,3) ∈ Aₙ) →
  setVar(β: (2,3,4) ∈ Aₙ) →
  
  lemma CompositionLeft() {
    assert(
      (1,2,3)(2,3,4) = (1,2)(3,4)
    )
  } →
  
  lemma CompositionRight() {
    assert(
      (2,3,4)(1,2,3) = (1,3)(2,4)
    )
  } →
  
  apply(CompositionLeft()) ∧
  apply(CompositionRight()) →
  
  assert((1,2)(3,4) ≠ (1,3)(2,4)) →
  assert(α·β ≠ β·α) →
  
  conclude(¬(isAbelian(Aₙ)))
}