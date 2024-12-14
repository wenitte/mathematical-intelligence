theorem CauchySequenceNonArchimedean() {
  assert(
    ∀R: NormedDivisionRing(R) ∧ NonArchimedeanNorm(R.norm) ∧
    ∀{xₙ}: Sequence(xₙ, R) ⇒
    (CauchySequence(xₙ) ↔ lim(n→∞, norm(xₙ₊₁ - xₙ) = 0))
  )
}

proof CauchySequenceNonArchimedean() {
  // Necessary Condition
  lemma NecessaryCondition() {
    setVar(ε > 0) →
    assert(CauchySequence(xₙ) ⇒ 
      ∃N ∈ ℕ: ∀n,m > N: norm(xₙ - xₘ) < ε) →
    apply(CauchyDef, n+1, n) →
    assert(∃N ∈ ℕ: ∀n > N: norm(xₙ₊₁ - xₙ) < ε) →
    conclude(lim(n→∞, norm(xₙ₊₁ - xₙ) = 0))
  }

  // Sufficient Condition
  lemma SufficientCondition() {
    setVar(ε > 0) →
    assert(∃N ∈ ℕ: ∀n > N: norm(xₙ₊₁ - xₙ) < ε) →
    setVar(n,m > N, m = n+r) →
    assert(
      norm(xₘ - xₙ) = 
      norm(xₙ₊ᵣ - xₙ₊ᵣ₋₁ + xₙ₊ᵣ₋₁ - xₙ₊ᵣ₋₂ + ... + xₙ₊₁ - xₙ)
    ) →
    apply(NonArchimedeanProperty) →
    assert(
      norm(xₘ - xₙ) = 
      max{norm(xₙ₊ᵣ - xₙ₊ᵣ₋₁), ..., norm(xₙ₊₁ - xₙ)}
    ) →
    assert(∃s ∈ (0,r]: norm(xₘ - xₙ) = norm(xₙ₊ₛ - xₙ₊ₛ₋₁)) →
    apply(InitialAssumption) →
    assert(norm(xₘ - xₙ) < ε) →
    conclude(CauchySequence(xₙ))
  }

  apply(NecessaryCondition()) ∧ apply(SufficientCondition()) →
  conclude(CauchySequence(xₙ) ↔ lim(n→∞, norm(xₙ₊₁ - xₙ) = 0))
}

corollary CauchySequencePAdicIntegers() {
  assert(
    ∀p: Prime(p) ∧
    ∀{xₙ}: Sequence(xₙ, ℤ) ∧
    (∀n: xₙ₊₁ ≡ xₙ mod pⁿ) ⇒
    CauchySequence(xₙ, (ℚ,normₚ))
  )
}