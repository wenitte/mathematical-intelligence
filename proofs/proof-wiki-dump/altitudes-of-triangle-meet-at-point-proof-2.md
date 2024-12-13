theorem Altitudes_Intersect() {
  assert(
    ∀triangle(ABC) ∈ ℝ² ⇒
    ∃point(O) ∈ ℝ² : intersect(altitude(A,BC), altitude(B,AC), altitude(C,AB), O)
  )
} ↔

proof Altitudes_Intersect() {
  setVar(triangle(ABC)) →
  construct(altitude(A,BC), P) →
  construct(altitude(B,AC), Q) →
  
  lemma Equal_Angles() {
    assert(∠AOQ = ∠BOP) ∧
    assert(∠AQO = ∠BPO = 90°)
  } →
  
  lemma Similar_Triangles() {
    apply(Equal_Angles()) →
    assert(△AOQ ∼ △BOP) ∧
    assert(△AOQ ∼ △ACP ∼ △BOP)
  } →
  
  lemma Ratio_Property() {
    apply(Similar_Triangles()) →
    assert(OP/BP = CP/AP) →
    assert(OP = (BP·CP)/AP)
  } →
  
  lemma Independence() {
    assert(∀side ∈ {AC, AB} ⇒
      point(O) = intersect(altitude(A,BC), altitude(B,side)))
  } →
  
  apply(Independence()) →
  assert(altitude(C,AB) ∩ altitude(A,BC) ∩ altitude(B,AC) = {O})
}