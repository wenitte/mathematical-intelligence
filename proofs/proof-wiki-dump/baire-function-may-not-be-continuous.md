theorem Baire_Not_Necessarily_Continuous() {
  assert(
    ∀X ⊆ ℝ, ∀f: X → ℝ,
    BaireFunction(f) ⇏ Continuous(f)
  )
}

proof Baire_Not_Necessarily_Continuous() {
  setVar(X := [0,1]) →
  
  lemma DefineSequence() {
    ∀n ∈ ℕ, setVar(fn: [0,1] → ℝ) →
    assert(∀x ∈ [0,1], fn(x) = xⁿ)
  } →
  
  lemma ConvergenceLessThanOne() {
    assert(
      ∀x ∈ [0,1), lim(n→∞) xⁿ = 0
    )
  } →
  
  lemma ConvergenceAtOne() {
    assert(
      ∀n ∈ ℕ, fn(1) = 1 →
      lim(n→∞) fn(1) = 1
    )
  } →
  
  setVar(f: [0,1] → ℝ) →
  assert(
    ∀x ∈ [0,1], f(x) = {
      0 if x ∈ [0,1),
      1 if x = 1
    }
  ) →
  
  lemma PointwiseConvergence() {
    assert(
      ∀x ∈ [0,1], lim(n→∞) fn(x) = f(x)
    )
  } →
  
  lemma DiscontinuityAtOne() {
    assert(
      ∀x ∈ (0,1), |f(x) - f(1)| = 1
    ) →
    ¬Continuous(f, 1)
  } →
  
  conclude(
    BaireFunction(f) ∧ ¬Continuous(f)
  )
}