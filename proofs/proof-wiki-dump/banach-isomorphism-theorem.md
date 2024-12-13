theorem Banach_Isomorphism() {
  let(X: BanachSpace, Y: BanachSpace) ∧
  let(T: LinearTransformation(X → Y)) ∧
  assert(
    isBijective(T) ∧ isBounded(T) →
    isBounded(T⁻¹) ∧ isNormedVectorSpaceIsomorphism(T)
  )
} ↔

proof Banach_Isomorphism() {
  let(B_X⁻: ClosedUnitBall(X)) ∧
  let(B_Y⁻: ClosedUnitBall(Y)) ∧
  let(T⁻¹: LinearTransformation(Y → X)) →
  
  lemma Inverse_Is_Linear() {
    assert(isLinear(T⁻¹))
  } →
  
  apply(Banach_Schauder_Theorem(T)) →
  assert(isOpenMapping(T)) →
  
  lemma Open_Linear_Characterization() {
    assert(∃δ > 0: δB_Y⁻ ⊆ T(B_X⁻))
  } →
  
  apply(Open_Linear_Characterization()) →
  let(δ > 0: δB_Y⁻ ⊆ T(B_X⁻)) →
  
  assert(T⁻¹(δB_Y⁻) ⊆ B_X⁻) →
  
  lemma Linear_Dilation() {
    assert(T⁻¹(B_Y⁻) ⊆ δ⁻¹B_X⁻)
  } →
  
  apply(Bounded_Linear_Unit_Ball_Characterization()) →
  assert(isBounded(T⁻¹))
}