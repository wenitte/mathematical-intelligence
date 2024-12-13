theorem GoldenMeanEquivalence() {
  assert(
    ∀x ∈ ℝ≥0, ∀p,q ∈ {0,1}* ⇒ 
    ((x = p100q) ↔ (x = p011q))
  )
} ↔

proof GoldenMeanEquivalence() {
  setVar(x: ℝ≥0) →
  setVar(p,q: {0,1}*) →
  setVar(r: ℤ) →
  setVar(C: ℙ(ℤ)) →
  
  lemma RepresentationForm() {
    assert(
      x = φ^r + ∑_{c∈C} φ^c ∧
      C ⊂ ℤ ∧
      r ∉ C ∧ (r-1) ∉ C ∧ (r-2) ∉ C
    )
  } →

  lemma GoldenMeanPowerDecomposition() {
    assert(
      ∀n ∈ ℤ ⇒ φ^n = φ^(n-1) + φ^(n-2)
    )
  } →

  apply(RepresentationForm()) →
  apply(GoldenMeanPowerDecomposition()) →
  
  assert(
    x = φ^r + ∑_{c∈C} φ^c →
    x = (φ^(r-1) + φ^(r-2)) + ∑_{c∈C} φ^c →
    x = φ^(r-1) + φ^(r-2) + ∑_{c∈C} φ^c
  ) →

  assert(
    pattern(p100q) ↔ pattern(p011q)
  )
}