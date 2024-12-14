theorem OpenLinearTransformation() {
  letVar(𝔽 ∈ {ℝ,ℂ}) ∧
  letVar(X,Y: NormedVectorSpace(𝔽)) ∧
  letVar(T: LinearTransformation(X→Y)) ∧
  letVar(Bₓ⁻,Bᵧ⁻: ClosedUnitBall(X,Y)) →
  assert(
    equivalent(
      (1): isOpen(T),
      (2): ∃δ>0 ⇒ δBᵧ⁻ ⊆ T[Bₓ⁻],
      (3): ∃M>0 ⇒ ∀y∈Y ⇒ ∃x∈T⁻¹[{y}] ⇒ ‖x‖_X ≤ M‖y‖_Y
    )
  )
}

proof OpenLinearTransformation() {
  letVar(Bₓᵒ,Bᵧᵒ: OpenUnitBall(X,Y)) →
  
  // (1) ⇒ (2)
  proof_1_implies_2() {
    assume(isOpen(T)) →
    assert(isOpen(T[Bₓᵒ])) →
    ∃δ>0 ⇒ δBᵧᵒ ⊆ T[Bₓᵒ] →
    assert(δ/2·Bᵧ⁻ ⊆ δBᵧᵒ) ∧
    assert(T[Bₓᵒ] ⊆ T[Bₓ⁻]) →
    conclude(δ/2·Bᵧ⁻ ⊆ T[Bₓ⁻])
  } →

  // (2) ⇒ (1)
  proof_2_implies_1() {
    assume(∃δ>0 ⇒ δBᵧ⁻ ⊆ T[Bₓ⁻]) →
    assert(T[Bₓᵒ] ⊇ T[½·Bₓ⁻]) →
    assert(T[½·Bₓ⁻] = ½·T[Bₓ⁻]) →
    assert(½·T[Bₓ⁻] ⊇ δ/2·Bᵧ⁻) →
    assert(δ/2·Bᵧ⁻ ⊇ δ/2·Bᵧᵒ) →
    apply(LinearTransformationOpenness()) →
    conclude(isOpen(T))
  } →

  // (2) ⇒ (3) 
  proof_2_implies_3() {
    assume(∃δ>0 ⇒ δBᵧ⁻ ⊆ T[Bₓ⁻]) →
    assert(∀y∈Y ⇒ [
      case y=0: let x=0 →
      case y≠0: {
        assert(δy/‖y‖_Y ∈ δBᵧ⁻) →
        ∃x∈Bₓ⁻ ⇒ δy/‖y‖_Y = Tx →
        let(x' = ‖y‖_Y/δ·x) →
        assert(x'∈T⁻¹[{y}]) ∧
        assert(‖x'‖_X ≤ ‖y‖_Y/δ)
      }
    ]) →
    let(M = 1/δ) →
    conclude(∃M>0 ⇒ ∀y∈Y ⇒ ∃x∈T⁻¹[{y}] ⇒ ‖x‖_X ≤ M‖y‖_Y)
  } →

  // (3) ⇒ (2)
  proof_3_implies_2() {
    assume(∃M>0 ⇒ ∀y∈Y ⇒ ∃x∈T⁻¹[{y}] ⇒ ‖x‖_X ≤ M‖y‖_Y) →
    assert(∀y∈Bᵧ⁻ ⇒ ∃x∈T⁻¹[{y}] ⇒ ‖x‖_X ≤ M) →
    assert(Bᵧ⁻ ⊆ T[M·Bₓ⁻]) →
    assert(1/M·Bᵧ⁻ ⊆ T[Bₓ⁻]) →
    let(δ = 1/M) →
    conclude(∃δ>0 ⇒ δBᵧ⁻ ⊆ T[Bₓ⁻])
  }
}