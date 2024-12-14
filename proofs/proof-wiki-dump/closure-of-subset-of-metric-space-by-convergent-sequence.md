theorem Closure_By_Convergent_Sequence() {
  assert(
    ∀M[MetricSpace] ∧ ∀C[Subset(M)] ∧ ∀x ∈ M ⇒
    (x ∈ cl(C) ↔ ∃{xₙ}[Sequence(C)] | xₙ → x)
  )
} ↔

proof Closure_By_Convergent_Sequence() {
  // Necessary Condition (⇐)
  block Necessary() {
    assume(∃{xₙ}[Sequence(C)] | xₙ → x) →
    setVar(ε > 0) →
    assert(∃N ∈ ℕ | ∀n > N: xₙ ∈ Bε(x)) →
    assert(∀n: xₙ ∈ C) →
    conclude(∀ε > 0: Bε(x) ∩ C ≠ ∅) →
    
    setVar(U[OpenSet] | x ∈ U) →
    lemma OpenBallBasis() {
      assert(∃ε > 0 | Bε(x) ⊆ U)
    } →
    apply(OpenBallBasis()) →
    assert(Bε(x) ∩ C ≠ ∅ → U ∩ C ≠ ∅) →
    conclude(x ∈ cl(C))
  }

  // Sufficient Condition (⇒)
  block Sufficient() {
    assume(x ∈ cl(C)) →
    lemma OpenBallIsOpen() {
      assert(∀ε > 0: Bε(x)[OpenSet])
    } →
    assert(∀n ∈ ℕ: C ∩ B₁/ₙ(x) ≠ ∅) →
    construct({xₙ}[Sequence]) {
      ∀n ∈ ℕ: xₙ ∈ C ∩ B₁/ₙ(x)
    } →
    assert(∀n ∈ ℕ: d(xₙ,x) < 1/n ∧ xₙ ∈ C) →
    conclude(xₙ → x) →
    conclude(∃{xₙ}[Sequence(C)] | xₙ → x)
  }
}