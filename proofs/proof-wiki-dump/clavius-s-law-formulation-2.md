theorem Clavius_Law_2() {
  assert(
    (¬p → p) → p
  )
} ↔

proof Clavius_Law_2_Deduction() {
  premise(¬p → p) →
  lemma Law_Excluded_Middle() {
    assert(p ∨ ¬p)
  } →
  case_analysis() {
    case_1(¬p) {
      apply(premise) →
      assert(p)
    } ∧
    case_2(p) {
      assert(p)
    }
  } →
  apply(cases(p, p)) →
  assert(p)
}

proof Clavius_Law_2_Truth_Table() {
  define(truth_table) {
    row_1(¬p: true, p: false) →
      evaluate((¬p → p) → p) = true
    ∧
    row_2(¬p: false, p: true) →
      evaluate((¬p → p) → p) = true
  } →
  assert(
    ∀assignments → evaluate((¬p → p) → p) = true
  )
}

proof Clavius_Law_2_Natural_Deduction() {
  premise(¬p → p) →
  apply(Clavius_Law_1()) →
  assert(p) →
  discharge_premise() →
  assert((¬p → p) → p)
}