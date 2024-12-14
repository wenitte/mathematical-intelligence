theorem Minimal_Element_Characterization() {
  setDef(C: Class) ∧
  setDef(≺: Relation(C)) ∧
  setDef(B: Subclass(C)) ∧
  setDef(x: Element(B)) ∧
  setDef(Sx: Set) {
    Sx = {y ∈ C | y ≺ x ∧ y ≠ x}
  } →
  assert(
    minimal_element(x, B) ↔ B ∩ Sx = ∅
  )
}

proof Minimal_Element_Characterization() {
  // Necessary condition
  lemma Forward_Direction() {
    assume(minimal_element(x, B)) →
    assert(∀z ∈ B: z ≠ x → ¬(z ≺ x)) →
    assert(∀z: z ∈ (B ∩ Sx) → false) →
    conclude(B ∩ Sx = ∅)
  }

  // Sufficient condition
  lemma Reverse_Direction() {
    assume(¬minimal_element(x, B)) →
    assert(∃z ∈ B: z ≺ x ∧ z ≠ x) →
    letVar(z: Element(B)) {
      assert(z ≺ x ∧ z ≠ x) →
      assert(z ∈ Sx) →
      assert(z ∈ B ∧ z ∈ Sx) →
      conclude(B ∩ Sx ≠ ∅)
    }
  }

  apply(Forward_Direction()) ∧
  apply(Reverse_Direction()) →
  conclude(minimal_element(x, B) ↔ B ∩ Sx = ∅)
}