theorem Linear_Transformation_Condition() {
  assert(
    ∀G: UnityRModule →
    ∀H: RModule →
    ∀φ: (G → H) →
    (isLinearTransform(φ) ↔ 
      ∀x,y ∈ G: ∀λ,μ ∈ R: 
        φ(λx + μy) = λφ(x) + μφ(y))
  )
}

proof Linear_Transformation_Condition() {
  // Sufficient condition
  block Sufficient() {
    assume(
      ∀x,y ∈ G: ∀λ,μ ∈ R:
        φ(λx + μy) = λφ(x) + μφ(y)
    ) →
    assert(φ(λx + μy) = φ(λx) + φ(μy)) by LinearTransformDef1 →
    assert(φ(λx + μy) = λφ(x) + μφ(y)) by LinearTransformDef2 →
    conclude(isLinearTransform(φ))
  }

  // Necessary condition
  block Necessary() {
    assume(isLinearTransform(φ)) →
    setVar(λ = 1_R, μ = 1_R) →
    assert(φ(x + y) = φ(x) + φ(y)) →
    setVar(μ = 0_R) →
    assert(φ(λx) = λφ(x)) →
    conclude(
      ∀x,y ∈ G: ∀λ,μ ∈ R:
        φ(λx + μy) = λφ(x) + μφ(y)
    )
  }

  concludeEquivalence(Sufficient(), Necessary())
}