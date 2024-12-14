theorem MetricSpace_Sum_Rule_Limits() {
  assert(
    let(M = ⟨A,d⟩: metric_space) ∧
    let(f,g: A → ℝ) ∧
    let(a ∈ A) ∧
    let(l,m ∈ ℝ) ∧
    (lim_{x→a} f(x) = l) ∧
    (lim_{x→a} g(x) = m) ⇒
    (lim_{x→a} (f(x) + g(x)) = l + m)
  )
} ↔

proof MetricSpace_Sum_Rule_Limits() {
  setVar(M: metric_space) →
  setVar(f,g: A → ℝ) →
  setVar(a ∈ A) →
  setVar(l,m ∈ ℝ) →
  
  lemma Sequence_Existence() {
    assert(
      ∃{xₙ} ⊆ A: (
        ∀n ∈ ℕ₊: xₙ ≠ a ∧
        lim_{n→∞} xₙ = a
      )
    )
  } →
  
  apply(Limit_By_Convergent_Sequences) →
  assert(
    lim_{n→∞} f(xₙ) = l ∧
    lim_{n→∞} g(xₙ) = m
  ) →
  
  apply(Sum_Rule_Real_Sequences) →
  assert(
    lim_{n→∞} (f(xₙ) + g(xₙ)) = l + m
  ) →
  
  apply(Limit_By_Convergent_Sequences) →
  assert(
    lim_{x→a} (f(x) + g(x)) = l + m
  )
}