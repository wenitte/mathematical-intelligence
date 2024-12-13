theorem AC_Implies_DC() {
  assert(
    let S be_set() ∧
    let R be_relation(binary, S, S) ∧
    ∀a ∈ S ⇒ (∃b ∈ S: aRb) ∧
    AC() ⇒ DC()
  )
} ↔

proof AC_Implies_DC() {
  setVar(S: set, nonEmpty) →
  setVar(R: relation(binary, S, S)) →
  
  define(R_x: function) {
    ∀x ∈ S: R_x = {y ∈ S: xRy}
  } →
  
  assert(∀x ∈ S ⇒ R_x ≠ ∅) →
  
  let(F = {R_x: x ∈ S}) →
  
  apply(AC()) {
    assert(∃f: S → S: ∀x ∈ S ⇒ f(x) ∈ R_x)
  } →
  
  assert(∀x ∈ S ⇒ xRf(x)) →
  
  define(sequence_x: function) {
    ∀x ∈ S: sequence_x(n) = f^n(x), n ∈ ℕ
  } →
  
  assert(
    ∀x ∈ S ⇒ (
      ∀n ∈ ℕ: sequence_x(n)Rsequence_x(n+1)
    )
  ) →
  
  conclude(DC())
}