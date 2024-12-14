theorem LipschitzCondition() {
  assert(
    ∀φ: ℝ → ℝ,
    ∀[a,b] ⊂ ℝ,
    (∀y ∈ [a,b]: ∃A ∈ ℝ: |φ'(y)| ≤ A) →
    ∃K ∈ ℝ: ∀x,y ∈ [a,b]: |φ(x) - φ(y)| ≤ K|x - y|
  )
} ↔

proof LipschitzCondition() {
  setVar(φ: ℝ → ℝ) →
  setVar(y ∈ [a,b]) →
  setVar(A ∈ ℝ) →
  
  assume(|φ'(y)| ≤ A) →
  assert(-A ≤ φ'(y) ≤ A) →
  
  lemma Integration() {
    assert(
      ∫(-A)dy ≤ ∫φ'(y)dy ≤ ∫(A)dy
    )
  } →
  
  apply(Integration()) →
  assert(-Ay ≤ φ(y) ≤ Ay) →
  assert(|φ(y)| ≤ A|y|) →
  
  lemma BoundedInterval() {
    assert(
      y ∈ [a,b] →
      |φ(y)| ≤ max(A|a|, A|b|)
    )
  } →
  
  apply(BoundedInterval()) →
  setVar(K := max(A|a|, A|b|)) →
  assert(∀x,y ∈ [a,b]: |φ(x) - φ(y)| ≤ K|x - y|)
}