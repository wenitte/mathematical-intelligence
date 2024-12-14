theorem ComplexDerivativeMultipleRule() {
  assert(
    ∀D ⊆ ℂ[open] ∧ 
    ∀f: D → ℂ[complex-differentiable] ∧
    ∀w ∈ ℂ ⇒
    (wf is complex-differentiable in D ∧
     ∀z ∈ D: (wf)′(z) = wf′(z))
  )
}

proof ComplexDerivativeMultipleRule() {
  setVar(D: open_subset(ℂ)) →
  setVar(f: D → ℂ) →
  setVar(w: ℂ) →
  setVar(z: D) →
  
  lemma EpsilonDiffCondition() {
    assert(
      ∃r ∈ ℝ₊: ∀h ∈ (Bᵣ(0) ∖ {0}):
      f(z + h) = f(z) + h(f′(z) + ε(h))
    ) ∧
    assert(
      ∃ε: Bᵣ(0) ∖ {0} → ℂ:
      lim[h→0] ε(h) = 0
    )
  } →
  
  apply(EpsilonDiffCondition()) →
  assert(
    w·f(z + h) = w·f(z) + h(w·f′(z) + w·ε(h))
  ) →
  
  lemma ComplexLimitMultipleRule() {
    assert(
      lim[h→0] w·ε(h) = (lim[h→0] w)·(lim[h→0] ε(h)) = 0
    )
  } →
  
  apply(ComplexLimitMultipleRule()) →
  apply(EpsilonDiffCondition()) →
  
  assert(
    (wf)′(z) = w·f′(z)
  )
}