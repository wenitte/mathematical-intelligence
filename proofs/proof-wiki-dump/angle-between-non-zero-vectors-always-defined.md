theorem Angle_Between_Vectors_Defined() {
  assert(
    ∀v,w ∈ ℝⁿ where v≠0 ∧ w≠0 ⇒ 
    ∃θ[angle(v,w) = θ]
  )
} ↔

proof Angle_Between_Vectors_Defined() {
  case NonScalarMultiples() {
    assume(¬∃k∈ℝ[v=kw]) →
    lemma TriangleInequality() {
      assert(
        ‖v‖ = ‖w + v - w‖ <
        ‖w‖ + ‖v - w‖
      )
    } →
    lemma SecondInequality() {
      assert(
        ‖w‖ = ‖v + w - v‖ <
        ‖v‖ + ‖w - v‖ =
        ‖v‖ + ‖v - w‖
      )
    } →
    lemma ThirdInequality() {
      assert(
        ‖v - w‖ = ‖v + (-w)‖ <
        ‖v‖ + ‖-w‖ =
        ‖v‖ + ‖w‖
      )
    } →
    apply(TriangleConstruction()) →
    assert(∃θ[angle(v,w) = θ])
  } ∧
  
  case ScalarMultiples() {
    assume(∃k∈ℝ[v=kw]) →
    apply(ScalarMultipleAngleDefinition()) →
    assert(∃θ[angle(v,w) = θ])
  }
}