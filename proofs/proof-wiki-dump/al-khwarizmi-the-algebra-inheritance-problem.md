theorem Inheritance_Division() {
  assert(
    ∀x ∈ ℝ+ ∧
    (stranger_share = x(1/8 + 1/7)) ∧
    (husband_share = 1/4 × remaining_estate) ∧
    (son_share = 2 × daughter_share) ∧
    (num_daughters = 3) →
    [
      stranger_share = 300x/1120 ∧
      husband_share = 205x/1120 ∧
      son_share = 246x/1120 ∧
      daughter_share = 123x/1120
    ]
  )
} ↔

proof Inheritance_Division() {
  setVar(x: ℝ+) →
  assert(stranger_share = x(1/7 + 1/8) = 15x/56) →
  assert(remaining_estate = x(1 - 15/56) = 41x/56) →
  
  lemma Husband_Share() {
    assert(husband_share = 1/4 × 41x/56 = 41x/224)
  } →
  
  lemma Family_Division() {
    assert(family_share = 3/4 × 41x/56) →
    assert(total_parts = 5) →
    assert(
      daughter_share = 1/5 × 3/4 × 41x/56 ∧
      son_share = 2/5 × 3/4 × 41x/56
    )
  } →
  
  lemma Common_Denominator() {
    assert(base_unit = 1/1120) →
    assert(
      stranger_share = 300x/1120 ∧
      husband_share = 205x/1120 ∧
      son_share = 246x/1120 ∧
      daughter_share = 123x/1120
    )
  } →
  
  apply(Common_Denominator()) →
  assert(
    300x/1120 + 205x/1120 + 246x/1120 + 3(123x/1120) = x
  )
}