theorem CompositionSeriesCondition() {
  assert(
    ∀G(isFiniteGroup(G) ⇒ 
      (isCompositionSeries(G, H) ↔ ∀k(isFactorGroup(H[k]) ⇒ isSimple(H[k])))
  )
}

proof CompositionSeriesCondition() {
  setGroup(G: FiniteGroup) →
  setElement(e: Identity(G)) →
  setNormalSeries(H: {G₀ = e ⊲ G₁ ⊲ ... ⊲ Gₙ₋₁ ⊲ Gₙ = G}) →

  lemma NecessaryCondition() {
    assert(¬∀k(isSimple(Gₖ₊₁/Gₖ)) ⇒ ¬isCompositionSeries(H)) →
    assume(∃k(¬isSimple(Gₖ₊₁/Gₖ))) →
    setGroup(G': NormalSubgroup(Gₖ₊₁/Gₖ)) →
    assert(e ⊲ G' ⊲ Gₖ₊₁/Gₖ) →
    assert(Gₖ ⊲ G ⊲ Gₖ₊₁) →
    assert(hasProperRefinement(H)) →
    apply(Contrapositive()) →
    conclude(isCompositionSeries(H) ⇒ ∀k(isSimple(Gₖ₊₁/Gₖ)))
  }

  lemma SufficientCondition() {
    assert(¬isCompositionSeries(H) ⇒ ¬∀k(isSimple(Gₖ₊₁/Gₖ))) →
    assume(¬isCompositionSeries(H)) →
    assert(∃G(Gₖ ⊲ G ⊲ Gₖ₊₁)) →
    assert(G/Gₖ ⊲ Gₖ₊₁/Gₖ) →
    assert(¬isSimple(Gₖ₊₁/Gₖ)) →
    apply(Contrapositive()) →
    conclude(∀k(isSimple(Gₖ₊₁/Gₖ)) ⇒ isCompositionSeries(H))
  }

  apply(NecessaryCondition()) ∧
  apply(SufficientCondition()) →
  conclude(isCompositionSeries(H) ↔ ∀k(isSimple(Gₖ₊₁/Gₖ)))
}