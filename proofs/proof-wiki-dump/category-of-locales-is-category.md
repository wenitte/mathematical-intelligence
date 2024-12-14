theorem Locales_Is_Category() {
  assert(
    ∀C(C = Loc → isCategory(C))
  )
} ↔

proof Locales_Is_Category() {
  setDef(Loc, dual(Frames)) →
  lemma Frames_Is_Category() {
    assert(isCategory(Frames))
  } →
  lemma Dual_Category_Is_Category() {
    assert(
      ∀C(isCategory(C) → isCategory(dual(C)))
    )
  } →
  apply(Frames_Is_Category()) →
  apply(Dual_Category_Is_Category()) →
  substitute(C = Frames) →
  assert(isCategory(dual(Frames))) →
  assert(isCategory(Loc))
}