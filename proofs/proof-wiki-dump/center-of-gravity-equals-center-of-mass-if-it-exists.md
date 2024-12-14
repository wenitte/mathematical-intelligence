theorem CenterGravityEqualsCenterMass() {
  assert(
    ∀B(isBody(B) ∧ hasGravitationalField(B, G) ∧ hasCenterGravity(B, P)) ⇒
    centerMass(B) = P
  )
} ↔

proof CenterGravityEqualsCenterMass() {
  setVar(Q: Point, centerMass(B) = Q) →
  
  case UniformField() {
    assert(isUniform(G)) →
    apply(UniformGravityTheorem) →
    assert(P = Q)
  } ∨

  case NonUniformField() {
    assert(¬isUniform(G)) →
    
    subcase BaryCentric() {
      assert(isBarycentric(B)) →
      apply(BarycentricTheorem) →
      assert(P = Q)
    } ∨
    
    subcase NonBarycentric() {
      assert(¬isBarycentric(B)) →
      lemma NonUniformForces() {
        assert(∃F,C(
          isForce(F) ∧
          isCouple(C) ∧
          perpendicular(plane(C), lineOfAction(F))
        ))
      } →
      apply(NonUniformForces()) →
      assert(¬existsFixedPoint(lineOfAction(F))) →
      assert(¬hasCenterGravity(B)) →
      assert(contradiction())
    }
  } →
  
  assert(
    (isUniform(G) ∨ ¬isUniform(G)) ∧
    (isBarycentric(B) ∨ ¬isBarycentric(B))
  ) →
  assert(P = Q)
}