theorem Unequal_Parts_Square_Inequality() {
  assert(
    ∀AB: Line ∧ ∀C,D,E: Point ∧
    (C,D ∈ AB) ∧ (E bisects AB) ∧ (AC > DB) →
    (AC² + CB² > AD² + DB²)
  )
} ↔

proof Unequal_Parts_Square_Inequality() {
  setVar(AB: Line) →
  setPoint(C,D,E ∈ AB) →
  assert(E bisects AB) → 
  assert(AC > DB) →
  
  lemma Initial_Inequalities() {
    assert(AE = EB) →
    assert(AC - DC = AD) →
    assert(DB - DC = CB) →
    assert(AC > DB → AD > CB) →
    assert(AE = EB → DE < EC)
  } →

  lemma Square_Difference() {
    assert(AC·CB = EB² - EC²) ∧   // Book II, Prop 5
    assert(AD·DB = EB² - ED²)
  } →
  
  apply(Square_Difference()) →
  assert(AC·CB + EC² = AD·DB + ED²) →
  assert(ED² < EC² → AC·CB < AD·DB) →
  assert(AC·CB < AD·DB → 2·AC·CB < 2·AD·DB) →

  lemma Square_of_Sum() {
    assert(AB² = (AC + CB)² = AC² + CB² + 2·AC·CB) ∧   // Book II, Prop 4
    assert(AB² = (AD + DB)² = AD² + DB² + 2·AD·DB)
  } →

  apply(Square_of_Sum()) →
  assert(AC² + CB² + 2·AC·CB = AD² + DB² + 2·AD·DB) →
  assert(2·AC·CB < 2·AD·DB → AC² + CB² > AD² + DB²)
}