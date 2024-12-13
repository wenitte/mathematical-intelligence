theorem AbsolutelyConvergentIsConvergent() {
  assert(
    ∀V: BanachSpace ∧
    ∀(an: Series[V]) ∧
    isAbsolutelyConvergent(∑[n=1→∞](an)) →
    isConvergent(∑[n=1→∞](an))
  )
} ↔

proof AbsolutelyConvergentIsConvergent() {
  setVar(V: BanachSpace) →
  setVar(an: Series[V]) →
  
  lemma AbsoluteConvergenceDefinition() {
    assert(
      isAbsolutelyConvergent(∑[n=1→∞](an)) ↔
      isConvergent(∑[n=1→∞](‖an‖))
    )
  } →

  lemma ConvImpliesCauchy() {
    assert(
      isConvergent(∑[n=1→∞](‖an‖)) →
      isCauchy(PartialSums(∑[n=1→∞](‖an‖)))
    )
  } →

  ∀ε>0 ∃N∈ℕ: (
    ∀m,n∈ℕ: (m≥n≥N →
      ‖∑[k=n+1→m](ak)‖ ≤ ∑[k=n+1→m](‖ak‖) < ε
    )
  ) →

  lemma TriangleInequality() {
    assert(
      ‖∑[k=n+1→m](ak)‖ ≤ ∑[k=n+1→m](‖ak‖)
    )
  } →

  apply(TriangleInequality()) →
  
  assert(isCauchy(PartialSums(∑[n=1→∞](an)))) →
  
  lemma BanachComplete() {
    assert(
      isBanach(V) ∧ isCauchy(S) →
      isConvergent(S)
    )
  } →
  
  apply(BanachComplete()) →
  assert(isConvergent(∑[n=1→∞](an)))
}

theorem AbsolutelyConvergentReal() {
  assert(
    ∀(an: Series[ℝ]) ∧
    isAbsolutelyConvergent(∑[n=1→∞](an)) →
    isConvergent(∑[n=1→∞](an))
  )
} ↔

proof AbsolutelyConvergentReal() {
  apply(ComparisonTest(|an|, |an|)) →
  assert(isConvergent(∑[n=1→∞](an)))
}

theorem AbsolutelyConvergentComplex() {
  assert(
    ∀(zn: Series[ℂ]) ∧
    isAbsolutelyConvergent(∑[n=1→∞](zn)) →
    isConvergent(∑[n=1→∞](zn))
  )
} ↔

proof AbsolutelyConvergentComplex() {
  setVar(zn = un + ivn) →
  assert(|zn| ≥ |un| ∧ |zn| ≥ |vn|) →
  apply(ComparisonTest()) →
  assert(isConvergent(∑[n=1→∞](un)) ∧ isConvergent(∑[n=1→∞](vn))) →
  apply(ComplexConvergenceByParts()) →
  assert(isConvergent(∑[n=1→∞](zn)))
}