theorem ContinuousLinearFunctionals() {
  let(F ∈ {ℝ,ℂ}) ∧
  let(X: TopologicalVectorSpace over F) ∧
  let(f: LinearFunctional on X) ∧
  assert(∃x ∈ X: f(x) ≠ 0) →
  assert(
    (1) f.continuous() ↔
    (2) ker(f).closed() ↔
    (3) ¬ker(f).everywhereDense() ↔
    (4) ∃U: OpenNeighborhood(0_X): f.bounded(U)
  )
}

proof ContinuousLinearFunctionals() {
  // (1) → (2)
  proof OneImpliesTwo() {
    assume(f.continuous()) →
    assert(ker(f) = f⁻¹({0})) →
    assert({0}.closed() in F) →
    apply(ContinuityFromClosedSets) →
    conclude(ker(f).closed())
  }

  // (2) → (3)
  proof TwoImpliesThree() {
    assume(ker(f).closed()) →
    assert(∃x ∈ X: f(x) ≠ 0) →
    assert(ker(f) ≠ X) →
    apply(ClosedSetEqualsTopologicalClosure) →
    assert(ker(f)⁻ = ker(f) ≠ X) →
    conclude(¬ker(f).everywhereDense())
  }

  // (3) → (4)
  proof ThreeImpliesFour() {
    assume(¬ker(f).everywhereDense()) →
    apply(EverywhereDenseInteriorComplement) →
    assert(∃W: OpenSet: W ∩ ker(f) = ∅) →
    let(x ∈ W) →
    assert(U = W - x: OpenNeighborhood(0_X)) →
    assert(∃V: BalancedOpenNeighborhood(0_X): V ⊆ U) →
    assert((x + V) ∩ ker(f) = ∅) →
    assert(f[V].balanced()) →
    if(F = ℝ) {
      apply(BalancedSubsetReals)
    } else {
      apply(BalancedSubsetComplex)
    } →
    assert(f[V].bounded() ∨ f[V] = F) →
    assume(f[V] = F) →
    assert(∃y ∈ V: f(y) = -f(x)) →
    assert(f(x + y) = 0) →
    assert(x + y ∈ ker(f) ∧ x + y ∈ x + V) →
    contradiction((x + V) ∩ ker(f) = ∅) →
    conclude(f[V].bounded())
  }

  // (4) → (1)
  proof FourImpliesOne() {
    assume(∃U: OpenNeighborhood(0_X): f.bounded(U)) →
    apply(LinearTransformationContinuityAtOrigin) →
    let(V: OpenNeighborhood(0) in F) →
    assert(∃r > 0: ∀α ∈ F: |α| < r → α ∈ V) →
    assert(∃M > 0: ∀x ∈ U: |f(x)| < M) →
    let(W = (r/M)U) →
    assert(W.open()) →
    assert(∀x ∈ W: |f(x)| < r) →
    assert(f[W] ⊆ V) →
    conclude(f.continuous())
  }
}