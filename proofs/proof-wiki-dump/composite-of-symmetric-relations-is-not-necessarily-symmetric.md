theorem CompositeSymmetricRelationsNotNecessarilySymmetric() {
  assert(
    ∀A:Set ∧ ∀R,S:Relation(A) →
    (Symmetric(R) ∧ Symmetric(S)) ̸⇒ Symmetric(R∘S)
  )
} ↔

proof CompositeSymmetricRelationsNotNecessarilySymmetric() {
  setVar(A: Set = {1,2,3}) →
  setVar(R: Relation = {(1,2),(2,1)}) →
  setVar(S: Relation = {(2,3),(3,2)}) →
  
  assert(Symmetric(R)) →
  assert(Symmetric(S)) →
  
  lemma CompositionDefinition() {
    assert(
      R∘S = {(x,z) ∈ A×A | ∃y ∈ A: (x,y) ∈ S ∧ (y,z) ∈ R}
    )
  } →
  
  apply(CompositionDefinition()) →
  compute(R∘S = {(3,1)}) →
  
  assert(¬Symmetric(R∘S)) ↔
  [
    ∀x,y ∈ A: ((x,y) ∈ R∘S ⇒ (y,x) ∈ R∘S) = false →
    ((3,1) ∈ R∘S ∧ (1,3) ∉ R∘S)
  ]
}