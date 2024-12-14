theorem Combination_Theorem_Product_Rule() {
  assert(
    let(M = ⟨A,d⟩: metric_space) ∧
    let(f,g: A → ℝ) ∧
    let(a ∈ A) ∧
    let(l,m ∈ ℝ) ∧
    (lim[x→a] f(x) = l) ∧
    (lim[x→a] g(x) = m) ⇒
    (lim[x→a] (f(x)g(x)) = lm)
  )
} ↔

proof Combination_Theorem_Product_Rule() {
  setVar({xₙ}: sequence(A)) →
  assume(
    ∀n ∈ ℕ₊: xₙ ≠ a ∧
    lim[n→∞] xₙ = a
  ) →
  
  lemma Sequence_Limit_Convert() {
    assert(
      (lim[x→a] f(x) = l) ∧
      (lim[x→a] g(x) = m) ⇒
      (lim[n→∞] f(xₙ) = l) ∧
      (lim[n→∞] g(xₙ) = m)
    )
  } →
  
  lemma Product_Rule_Sequences() {
    assert(
      (lim[n→∞] f(xₙ) = l) ∧
      (lim[n→∞] g(xₙ) = m) ⇒
      lim[n→∞] (f(xₙ)g(xₙ)) = lm
    )
  } →
  
  apply(Sequence_Limit_Convert()) →
  apply(Product_Rule_Sequences()) →
  
  lemma Sequence_Limit_Convert_Back() {
    assert(
      lim[n→∞] (f(xₙ)g(xₙ)) = lm ⇒
      lim[x→a] (f(x)g(x)) = lm
    )
  } →
  
  apply(Sequence_Limit_Convert_Back()) →
  assert(lim[x→a] (f(x)g(x)) = lm)
}