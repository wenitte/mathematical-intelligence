theorem AntiTransitiveGreaterByOne() {
  assert(
    let ℛ = {(x,y) ∈ ℝ×ℝ : x-y = 1} →
    isAntitransitive(ℛ)
  )
} ↔

proof AntiTransitiveGreaterByOne() {
  setVar(x,y,z: ℝ) →
  assume(xℛy ∧ yℛz) →
  
  lemma FirstDiff() {
    assert(x - y = 1)
  } →
  
  lemma SecondDiff() {
    assert(y - z = 1)
  } →
  
  apply(FirstDiff() ∧ SecondDiff()) →
  assert(
    (x - y) + (y - z) = 1 + 1 →
    x - z = 2
  ) →
  
  lemma NotThirdRel() {
    assert(
      x - z = 2 →
      x - z ≠ 1 →
      ¬(xℛz)
    )
  } →
  
  apply(NotThirdRel()) →
  conclude(
    ∀x,y,z ∈ ℝ: (xℛy ∧ yℛz) → ¬(xℛz)
  )
}