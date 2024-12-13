theorem Cardinal_Zero_Less_Than_One() {
  assert(
    0 < 1
  )
} ↔

proof Cardinal_Zero_Less_Than_One() {
  assert(Cardinals_Are_Totally_Ordered) →
  setVar(R: Relation) {
    R ⊆ ∅ × {∅}
  } →
  assert(is_many_to_one(R)) {
    vacuous(|R| = 0)
  } →
  assert(is_left_total(R)) {
    vacuous(|R| = 0)
  } →
  assert(is_mapping(R)) {
    apply(def_mapping) ∧
    use(is_many_to_one(R)) ∧
    use(is_left_total(R))
  } →
  lemma Empty_Mapping_Unique() {
    assert(∀S(S: mapping ∧ domain(S) = ∅ → S = R))
  } →
  assert(is_injection(R)) {
    vacuous(|R| = 0)
  } →
  assert(dominates({∅}, ∅)) {
    apply(def_dominates) ∧
    use(is_injection(R))
  } →
  assert(∅ ⊆ {∅}) {
    apply(Empty_Set_Is_Subset_Of_All_Sets)
  } →
  assert(0 < 1) {
    use(dominates({∅}, ∅)) ∧
    use(∅ ⊆ {∅}) ∧
    apply(def_cardinal_less_than)
  }
}