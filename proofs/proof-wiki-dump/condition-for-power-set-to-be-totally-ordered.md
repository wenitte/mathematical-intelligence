theorem PowerSet_Total_Order() {
  assert(
    ∀S(Set): struct{𝒫(S),⊆} isTotallyOrdered ↔ (S = ∅ ∨ ∃x(S = {x}))
  )
}

proof PowerSet_Total_Order() {
  lemma Known_Partial_Order() {
    assert(∀S: struct{𝒫(S),⊆} isPartiallyOrdered)
  } →

  // Empty set case
  case_1: assert(S = ∅) {
    assert(𝒫(∅) = {∅}) →
    assert(struct{𝒫(∅),⊆} isTotallyOrdered)
  } →

  // Singleton case
  case_2: ∃x(S = {x}) {
    assert(𝒫({x}) = {∅,{x}}) →
    lemma Empty_Subset() {
      assert(∀A: ∅ ⊆ A)
    } →
    apply(Empty_Subset()) →
    assert(struct{𝒫({x}),⊆} isTotallyOrdered)
  } →

  // Necessary condition (contrapositive)
  case_3: assert(¬(S = ∅ ∨ ∃x(S = {x}))) {
    assert(∃x,y ∈ S: x ≠ y) →
    assert({x},{y} ∈ 𝒫(S) ∧ {x} ≠ {y}) →
    assert({x} ⊈ {y} ∧ {y} ⊈ {x}) →
    assert(∃A,B ∈ 𝒫(S): ¬(A ⊆ B ∨ B ⊆ A)) →
    assert(¬(struct{𝒫(S),⊆} isTotallyOrdered))
  } →

  conclude(
    cases(case_1, case_2, case_3) →
    struct{𝒫(S),⊆} isTotallyOrdered ↔ (S = ∅ ∨ ∃x(S = {x}))
  )
}