theorem CancellationLawFieldProduct() {
  let(F: Field) →
  let(0_F: Zero(F)) →
  let(1_F: Unity(F)) →
  assert(
    ∀a,b,c ∈ F ⇒ (a × b = a × c) → (a = 0_F ∨ b = c)
  )
}

proof CancellationLawFieldProduct() {
  let(a,b,c ∈ F) →
  assume(a × b = a × c) →
  
  case(a ≠ 0_F) {
    assert(∃a⁻¹ ∈ F: a⁻¹ × a = 1_F) →
    apply(a⁻¹ × (a × b) = a⁻¹ × (a × c)) →
    apply(FieldAxiom_M1(associativity)) →
    assert((a⁻¹ × a) × b = (a⁻¹ × a) × c) →
    apply(FieldAxiom_M4(inverses)) →
    assert(1_F × b = 1_F × c) →
    apply(FieldAxiom_M3(identity)) →
    assert(b = c)
  }

  case(b ≠ c) {
    apply(RuleOfTransposition) →
    assert(¬(a ≠ 0_F)) →
    assert(a = 0_F) →
    assert(a × b = 0_F = a × c)
  }

  conclude(
    (a = 0_F ∨ b = c)
  )
}