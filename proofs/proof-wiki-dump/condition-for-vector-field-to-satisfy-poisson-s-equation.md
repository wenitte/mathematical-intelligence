theorem VectorField_Poisson() {
  assert(
    ∀V: VectorField, ∀R: Region →
    (isConservative(V) ∧ ¬isSolenoidal(V)) ↔
    (∃F: ScalarField, ∃φ: Function →
      (V = ∇F) ∧ (∇²F = φ) ∧ (φ ≠ 0))
  )
}

proof VectorField_Poisson() {
  // Sufficient condition
  lemma Sufficient() {
    setVar(V: VectorField, R: Region) →
    assume(isConservative(V) ∧ ¬isSolenoidal(V)) →
    apply(VectorField_Conservative_Gradient) →
    assert(∃F: ScalarField → V = ∇F) →
    assert(¬isSolenoidal(V) → ∃v ∈ R: div(v) ≠ 0) →
    assert(div(∇F) ≠ 0) →
    apply(Laplacian_Divergence_Gradient) →
    assert(∇²F = φ, where φ ≠ 0)
  }

  // Necessary condition
  lemma Necessary() {
    setVar(V: VectorField, R: Region, F: ScalarField, φ: Function) →
    assume(V = ∇F ∧ ∇²F = φ ∧ φ ≠ 0) →
    apply(VectorField_Conservative_Gradient) →
    assert(isConservative(V)) →
    apply(Laplacian_Divergence_Gradient) →
    assert(∃v ∈ R: div(∇F) ≠ 0) →
    assert(∃v ∈ R: div(V) ≠ 0) →
    assert(¬isSolenoidal(V))
  }

  // Combine both directions
  apply(Sufficient()) →
  apply(Necessary()) →
  assert((isConservative(V) ∧ ¬isSolenoidal(V)) ↔
         (∃F: ScalarField, ∃φ: Function →
           (V = ∇F) ∧ (∇²F = φ) ∧ (φ ≠ 0)))
}