theorem VectorField_Laplace() {
  assert(
    ∀V: VectorField, R: Region ⇒
    (isSolenoidal(V) ∧ isConservative(V)) ↔
    (∃F: ScalarField | (V = ∇F ∧ ∇²F ≡ 0))
  )
}

proof VectorField_Laplace() {
  // Sufficient direction (⇒)
  block Sufficient() {
    assume(isSolenoidal(V) ∧ isConservative(V)) →
    apply(ConservativeField_Gradient_Theorem()) →
    assert(∃F: ScalarField | V = ∇F) →
    setVar(F: ScalarField) →
    byDefinition(isSolenoidal) →
    assert(div(V) = 0) →
    substitute(V = ∇F) →
    assert(div(∇F) = 0) →
    apply(Laplacian_DivGrad_Theorem()) →
    assert(∇²F = 0) →
    conclude(∇²F ≡ 0)
  }

  // Necessary direction (⇐)
  block Necessary() {
    assume(∃F: ScalarField | (V = ∇F ∧ ∇²F ≡ 0)) →
    setVar(F: ScalarField) →
    assert(V = ∇F) →
    apply(ConservativeField_Gradient_Theorem()) →
    assert(isConservative(V)) →
    apply(Laplacian_DivGrad_Theorem()) →
    assert(div(∇F) = 0) →
    substitute(V = ∇F) →
    assert(div(V) = 0) →
    byDefinition(isSolenoidal) →
    conclude(isSolenoidal(V))
  }

  // Combine both directions
  combine(Sufficient(), Necessary()) →
  conclude(
    (isSolenoidal(V) ∧ isConservative(V)) ↔
    (∃F: ScalarField | (V = ∇F ∧ ∇²F ≡ 0))
  )
}