theorem BanachSchauderLemma1() {
  assert(
    ∀X,Y: BanachSpace ∧
    ∀T: LinearTransformation(X → Y) ∧
    T.isSurjective() ∧ T.isBounded() ∧
    ∀y ∈ Y ∧ ∀r > 0 ∧
    B_Y(y,r) ⊆ closure(T[B_X(0,m)]) →
    B_Y(0,r) ⊆ closure(T[B_X(0,m)])
  )
} ↔

proof BanachSchauderLemma1() {
  lemma BallProperties() {
    assert(
      B_X(0,m).isConvex() ∧
      B_X(0,m).isSymmetric()
    )
  } →
  
  lemma ImageProperties() {
    assert(
      T[B_X(0,m)].isConvex() ∧
      T[B_X(0,m)].isSymmetric()
    )
  } →
  
  lemma ClosureProperties() {
    assert(
      closure(T[B_X(0,m)]).isConvex() ∧
      closure(T[B_X(0,m)]).isSymmetric()
    )
  } →
  
  setVar(x ∈ B_Y(0,r)) →
  assert(∃u: ∥u∥_Y < 1 ∧ x = r·u) →
  assert(u = x/r) →
  
  assert(y + r·u ∈ closure(T[B_X(0,m)])) →
  assert(y - r·u ∈ closure(T[B_X(0,m)])) →
  apply(ClosureProperties.isSymmetric) →
  assert(-y + r·u ∈ closure(T[B_X(0,m)])) →
  
  assert(r·u = 1/2(y + r·u) + 1/2(-y + r·u)) →
  apply(ClosureProperties.isConvex) →
  assert(r·u ∈ closure(T[B_X(0,m)])) →
  assert(x ∈ closure(T[B_X(0,m)])) →
  
  conclude(B_Y(0,r) ⊆ closure(T[B_X(0,m)]))
}