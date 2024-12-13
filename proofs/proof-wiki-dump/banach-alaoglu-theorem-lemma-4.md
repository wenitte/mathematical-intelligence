theorem Banach_Alaoglu_Lemma_4() {
  assert(
    ∀X[NormedVectorSpace] ∧
    let B = ClosedUnitBall(X) ∧
    let X* = Dual(X) ∧
    let B* = ClosedUnitBall(X*) ∧
    let F = Functions(B, [-1,1]) ∧
    let R = RestrictionMap(B* → F) →
    IsHomeomorphism(R, B*, Image(R))
  )
} ↔

proof Banach_Alaoglu_Lemma_4() {
  lemma Injection() {
    setVar(ψ₁,ψ₂: B*) →
    assume(R(ψ₁) = R(ψ₂)) →
    ∀x∈X\{0}: (
      ψ₁(x) = ||x||·ψ₁(x/||x||) →
      = ||x||·R(ψ₁)(x/||x||) →
      = ||x||·R(ψ₂)(x/||x||) →
      = ||x||·ψ₂(x/||x||) →
      = ψ₂(x)
    ) ∧
    ψ₁(0) = ψ₂(0) = 0 →
    assert(ψ₁ = ψ₂)
  } →

  lemma Continuity() {
    setVar(ψ₀: X*, x: X, r: ℝ₊) →
    let N = {ψ ∈ B*: |ψ(x) - ψ₀(x)| < r} →
    assert(x ≠ 0 → N(ψ₀;x;r) = N(ψ₀;x/||x||;r/||x||)) →
    let Iᵣ = (ψ₀(x)-r, ψ₀(x)+r) ∩ [-1,1] →
    assert(
      R[N(ψ₀;x;r)] = R[B*] ∩ πₓ⁻¹[Iᵣ(ψ₀(x))]
    )
  } →

  apply(InverseHomeomorphism()) →
  apply(WeakStarTopologyHausdorff()) →
  apply(ClosedSubspaceCompact()) →
  apply(ContinuousBijectionCompactHausdorff()) →
  assert(IsHomeomorphism(R, B*, Image(R)))
}