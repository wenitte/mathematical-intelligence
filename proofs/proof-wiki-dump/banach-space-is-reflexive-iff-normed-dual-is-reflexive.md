theorem BanachSpaceReflexiveIffDualReflexive() {
  setSpace(𝔽 ∈ {ℝ, ℂ})
  setSpace(X: BanachSpace(𝔽))
  setSpace(X*: NormedDual(X))
  assert(
    IsReflexive(X) ↔ IsReflexive(X*)
  )
}

proof BanachSpaceReflexiveIffDualReflexive() {
  setSpace(X**: SecondNormedDual(X))
  setSpace(X***: NormedDual(X**))

  // Necessary Condition: X reflexive ⟹ X* reflexive
  lemma NecessaryDirection() {
    assume(IsReflexive(X)) →
    ∀Φ ∈ X*** ∃φ ∈ X* [
      ∀F ∈ X** (
        Φ(F) = φ̂(F) = J_X*(φ)(F)
      )
    ] →
    ∀F ∈ X** ∃x ∈ X [F = x̂ = J_X(x)] →
    ∀x ∈ X [Φ(x̂) = φ̂(x̂) = x̂(φ) = φ(x)] →
    assert(LinearTransformation(x ↦ x̂, X → X**)) →
    assert(BoundedLinearTransformation(x ↦ x̂, X → X**)) →
    assert(BoundedLinearFunctional(Φ, X** → 𝔽)) →
    assert(φ ∈ X*) →
    conclude(IsReflexive(X*))
  }

  // Sufficient Condition: X* reflexive ⟹ X reflexive
  lemma SufficientDirection() {
    assume(IsReflexive(X*)) →
    assume(¬IsReflexive(X)) →
    assert(∀Φ ∈ X*** ∃φ ∈ X* [Φ = φ̂]) ∧
    assert(∃F ∈ X** ∀x ∈ X [F ≠ x̂]) →
    assert(ClosedLinearSubspace(J_X(X), X**)) →
    ∃Φ ∈ X*** [
      ‖Φ‖_X*** = 1 ∧
      ∀F ∈ J_X(X) [Φ(F) = 0]
    ] →
    ∀x ∈ X [Φ(x̂) = 0] →
    ∃φ ∈ X* [Φ = φ̂] →
    ∀x ∈ X [0 = Φ(x̂) = φ̂(x̂) = x̂(φ) = φ(x)] →
    assert(Φ ≡ 0) →
    assert(‖Φ‖_X*** = 0 ≠ 1) →
    conclude(contradiction) →
    conclude(IsReflexive(X))
  }

  apply(NecessaryDirection()) ∧
  apply(SufficientDirection()) →
  conclude(IsReflexive(X) ↔ IsReflexive(X*))
}