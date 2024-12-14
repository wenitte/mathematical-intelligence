theorem Rel_Is_Metacategory() {
  assert(
    ∀C(C = Rel → is_metacategory(C))
  )
} ↔

proof Rel_Is_Metacategory() {
  setVar(X: Set) →
  assert(∃id_X: Rel(id_X = diagonal_relation(X))) →
  
  lemma Identity_Morphism() {
    assert(
      ∀R: Rel(
        (compose(id_X, R) = R) ∧
        (compose(R, id_X) = R)
      )
    ) →
    apply(Diagonal_Relation_Left_Identity()) →
    apply(Diagonal_Relation_Right_Identity())
  } →

  lemma Association_Property() {
    assert(
      ∀R,S,T: Rel(
        compose(compose(R, S), T) = compose(R, compose(S, T))
      )
    ) →
    apply(Composition_Relations_Associative())
  } →

  assert(
    satisfies_C1(Rel) ∧
    satisfies_C2(Rel) ∧
    satisfies_C3(Rel)
  ) →
  
  apply(Identity_Morphism()) →
  apply(Association_Property()) →
  assert(is_metacategory(Rel))
}