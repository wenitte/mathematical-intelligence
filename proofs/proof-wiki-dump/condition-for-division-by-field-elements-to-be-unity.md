theorem DivisionUnity(F: Field) {
  assert(
    ∀a,b ∈ F ⇒ (a/b = 1_F ↔ a = b)
  )
} ↔

proof DivisionUnity(F: Field) {
  // Necessary Condition: a = b ⇒ a/b = 1_F
  part_1() {
    setVar(a,b: F) →
    assume(a = b) →
    assert(a/b = a × b⁻¹) by DivisionDef →
    assert(a × b⁻¹ = b × b⁻¹) by substitution →
    assert(b × b⁻¹ = 1_F) by FieldAxiomM4 →
    conclude(a/b = 1_F)
  } ∧

  // Sufficient Condition: a/b = 1_F ⇒ a = b
  part_2() {
    setVar(a,b: F) →
    assume(a/b = 1_F) →
    assert(a × b⁻¹ = 1_F) by DivisionDef →
    assert((a × b⁻¹) × b = 1_F × b) by MultiplyBothSides →
    assert(a × (b⁻¹ × b) = 1_F × b) by FieldAxiomM1 →
    assert(a × 1_F = 1_F × b) by FieldAxiomM4 →
    assert(a = b) by FieldAxiomM3 →
    conclude(a = b)
  } ∧

  conclude(part_1() ∧ part_2())
}