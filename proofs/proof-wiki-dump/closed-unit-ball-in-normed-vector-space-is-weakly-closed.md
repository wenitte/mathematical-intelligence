theorem Closed_Unit_Ball_Weakly_Closed() {
  let(GF ∈ {ℝ,ℂ}) ∧
  let(X: NormedVectorSpace, ∥·∥: Norm) ∧
  let(B⁻: ClosedUnitBall(X,∥·∥)) →
  assert(
    isWeaklyClosed(B⁻)
  )
} ↔

proof Closed_Unit_Ball_Weakly_Closed() {
  assert(isConvex(B⁻)) by(Closed_Unit_Ball_is_Convex) →
  assert(isNormClosed(B⁻)) by(Closed_Ball_is_Closed) →
  apply(Mazur_Theorem_Corollary, {
    premise1: isConvex(B⁻),
    premise2: isNormClosed(B⁻)
  }) →
  assert(isWeaklyClosed(B⁻))
}