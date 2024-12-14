theorem CommutativeBAlgebra_InducesAbelianGroup() {
  assert(
    ∀X(isCommutativeBAlgebra(X, ∘) ∧
    ∀a,b ∈ X(a * b := a ∘ (0 ∘ b))) →
    (isAbelianGroup(X, *) ∧
    ∀x ∈ X((0 ∘ x) = inverse(x, *)) ∧
    ∀a,b ∈ X(a * inverse(b, *) = a ∘ b))
  )
} ↔

proof CommutativeBAlgebra_InducesAbelianGroup() {
  assume(X: Set, ∘: BinaryOp, *: BinaryOp) →
  assume(isCommutativeBAlgebra(X, ∘)) →
  
  lemma GroupProperty() {
    apply(BAlgebra_InducesGroup()) →
    assert(isGroup(X, *)) ∧
    assert(∀x ∈ X((0 ∘ x) = inverse(x, *)))
  } →
  
  lemma CommutativityProof() {
    setVar(x,y: X) →
    assert(x * y = x ∘ (0 ∘ y)) by(def_*) →
    assert(x ∘ (0 ∘ y) = y ∘ (0 ∘ x)) by(isCommutativeBAlgebra) →
    assert(y ∘ (0 ∘ x) = y * x) by(def_*) →
    conclude(x * y = y * x)
  } →
  
  apply(GroupProperty()) →
  apply(CommutativityProof()) →
  conclude(isAbelianGroup(X, *))
}