theorem Circle_Bisected_By_Diameter() {
  assert(
    ∀c: Circle, ∀d: Diameter ∈ c ⇒
    ∃arc1, arc2: Arc ∈ c | (
      arc1 ∪ arc2 = c ∧
      arc1 ∩ arc2 = endpoints(d) ∧
      arc1 ≅ arc2
    )
  )
} ↔

proof Circle_Bisected_By_Diameter() {
  setVar(O: Point) →
  setVar(c: Circle | center(c) = O) →
  setVar(A, B: Point ∈ c) →
  setVar(d: Line = AB) →
  
  assert(diameter(d, c) ⇒ O ∈ d) →
  
  lemma Equal_Angles() {
    assert(
      ∠AOB ≅ ∠BOA ∧
      isStraitAngle(∠AOB) ∧
      isStraitAngle(∠BOA)
    )
  } →
  
  apply(Equal_Angles()) →
  apply(Equal_Angles_Equal_Arcs_Theorem()) →
  
  assert(
    arc(A,B) ≅ arc(B,A)
  ) →
  
  conclude(
    arc(A,B) ∪ arc(B,A) = c ∧
    arc(A,B) ∩ arc(B,A) = {A,B} ∧
    arc(A,B) ≅ arc(B,A)
  )
}