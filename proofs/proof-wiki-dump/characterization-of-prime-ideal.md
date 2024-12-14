theorem Prime_Ideal_Characterization() {
  let(L: MeetSemilattice{S, ∧, ⪯}) →
  let(I: Ideal[L]) →
  assert(
    is_proper(I) ↔
    (I is_prime_ideal ↔ ∀x,y ∈ S: (x ∧ y ∈ I → (x ∈ I ∨ y ∈ I)))
  )
}

proof Prime_Ideal_Characterization() {
  // Sufficient condition
  assume(I is_prime_ideal) →
  setVar(x,y: S) →
  assume(x ∧ y ∈ I) →
  assert(x ∧ y ∉ S\I) by(def_relative_complement) →
  assert(S\I is_filter[L]) by(def_prime_ideal) →
  apply(Filtered_Meet_Semilattice) →
  assert(x ∉ S\I ∨ y ∉ S\I) →
  assert(x ∈ I ∨ y ∈ I) by(def_relative_complement) →

  // Necessary condition
  assume(∀x,y ∈ S: (x ∧ y ∈ I → (x ∈ I ∨ y ∈ I))) →
  let(F = S\I) →
  
  lemma F_Nonempty() {
    assert(∃x₀ ∈ S: x₀ ∉ I) by(def_proper_subset) →
    assert(x₀ ∈ F) by(def_relative_complement) →
    assert(F ≠ ∅)
  }

  lemma F_Is_Filtered() {
    setVar(x,y: F) →
    assert(x ∉ I ∧ y ∉ I) by(def_relative_complement) →
    assert(x ∧ y ∉ I) by(assumption) →
    assert(x ∧ y ∈ F) by(def_relative_complement) →
    assert(x ∧ y ⪯ x ∧ x ∧ y ⪯ y) by(Meet_Precedes_Operands) →
    assert(∃z ∈ F: (z ⪯ x ∧ z ⪯ y))
  }

  lemma F_Is_Upper_Section() {
    setVar(x: F, y: S) →
    assume(x ⪯ y) →
    assert(y ∈ I → x ∈ I) by(def_lower_section) →
    assert(x ∉ I) by(def_relative_complement) →
    assert(y ∉ I) →
    assert(y ∈ F) by(def_relative_complement)
  }

  apply(F_Nonempty()) →
  apply(F_Is_Filtered()) →
  apply(F_Is_Upper_Section()) →
  assert(F is_filter[L]) by(def_filter)
}