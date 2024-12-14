theorem Paracompactness_Characterization() {
  assert(
    ∀X(Set(X) ∧ WellOrdered(X, ≼)) ∧
    let V_n[n ∈ ℕ>0]: SubsetSequence(X × X) ∧
    (∀n ∈ ℕ>0: Symmetric(V_n)) ∧
    (∀n ∈ ℕ>0: V_n ∘ V_n ⊆ V_(n-1)) ∧
    let U_n = V_n ∘ V_(n-1) ∘ ... ∘ V_1 ∧
    let A_n(x) = U_n(x) \ (⋃_{y≼x, y≠x} U_(n+1)(y)) ∧
    let 𝔸_n = {A_n(x): x ∈ X} →
    ∀n ∈ ℕ>0: DiscreteSet(𝔸_n)
  )
} ↔

proof Paracompactness_Characterization() {
  setVar(n: ℕ>0) →
  setVar(x: X) →
  
  lemma Case1() {
    assert(∀y ∈ X: V_(n+1)(x) ∩ A_n(y) = ∅) →
    assert(Neighborhood(V_(n+1)(x), x, T)) →
    assert(∀y ∈ X: V_(n+1)(x) ∩ A_n(y) = ∅)
  } →

  lemma Case2() {
    assert(∃y ∈ X: V_(n+1)(x) ∩ A_n(y) ≠ ∅) →
    apply(ImageRelationProperties()) →
    assert(V_(n+1)[V_(n+1)(x) ∩ A_n(y)] ⊆ V_(n+1)[V_(n+1)(x)] ∩ V_(n+1)[A_n(y)]) →
    apply(SymmetricRelationProperties()) →
    assert(x ∈ V_(n+1)[A_n(y)]) →
    assert(Neighborhood(V_(n+1)[A_n(y)], x, T)) →
    apply(Lemma16()) →
    assert(∀z ∈ X: y ≠ z → A_n(z) ∩ V_(n+1)[A_n(y)] = ∅)
  } →

  applyDisjunction(Case1(), Case2()) →
  assert(∃N ∈ Neighborhoods(x): IntersectsAtMostOne(N, 𝔸_n)) →
  
  forall(x: X) →
  assert(DiscreteSet(𝔸_n)) →
  
  forall(n: ℕ>0) →
  assert(∀n ∈ ℕ>0: DiscreteSet(𝔸_n))
}