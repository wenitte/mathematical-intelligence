theorem Finite_Sets_Category() {
  assert(
    ∀S(S = Set ∧ isCategory(S)) →
    isMetaCategory(Set)
  )
} ↔

proof Finite_Sets_Category() {
  lemma Sets_Category() {
    assert(isCategory(Set))
  } →
  apply(Sets_Category()) →
  lemma Finite_Restriction() {
    assert(
      ∀X,Y ∈ Set(
        isFinite(X) ∧ isFinite(Y) →
        isFinite(Hom(X,Y))
      )
    )
  } →
  apply(Finite_Restriction()) →
  assert(
    isMetaCategory(Set) ↔ 
    isCategory(Set) ∧ 
    ∀X,Y ∈ Set(isFinite(Hom(X,Y)))
  )
}