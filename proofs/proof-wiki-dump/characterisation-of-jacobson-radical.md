theorem Jacobson_Radical_Characterization() {
  assert(
    let A: CommutativeRing ∧
    let A_units: GroupOfUnits(A) ∧
    let Jac(A): JacobsonRadical(A) ∧
    Jac(A) = {a ∈ A | ∀x ∈ A: (1_A - ax) ∈ A_units}
  )
} ↔

proof Jacobson_Radical_Characterization() {
  define(Jac(A) = ∩{M | M: MaximalIdeal(A)}) →
  
  // Subset direction (⊆)
  proof_by_contradiction() {
    assume(∃x ∈ Jac(A): ∃y ∈ A: (1_A - xy) ∉ A_units) →
    let m: MaximalIdeal(A) →
    assert(x ∈ Jac(A) ⊆ m) →
    assert(xy ∈ m) →
    assert(1_A - xy ∈ m) →
    assert(1_A ∈ m) →
    
    lemma Ideal_With_Unity() {
      assert(1_A ∈ m → m = A)
    } →
    
    apply(Ideal_With_Unity()) →
    assert(m = A) →
    assert(contradiction(m: MaximalIdeal(A) ∧ m = A))
  } →
  conclude(Jac(A) ⊆ {a ∈ A | ∀x ∈ A: (1_A - ax) ∈ A_units}) →
  
  // Superset direction (⊇)
  proof_by_contrapositive() {
    assume(x ∉ Jac(A)) →
    assert(∃m: MaximalIdeal(A): x ∉ m) →
    assert(∃w ∈ m, ∃y ∈ A: w + xy = 1_A) →
    assert(1_A - xy ∈ m) →
    assert(1_A - xy ∉ A_units) →
    conclude(x ∉ {a ∈ A | ∀x ∈ A: (1_A - ax) ∈ A_units})
  } →
  
  // Conclusion
  assert(
    Jac(A) ⊆ {a ∈ A | ∀x ∈ A: (1_A - ax) ∈ A_units} ∧
    Jac(A) ⊇ {a ∈ A | ∀x ∈ A: (1_A - ax) ∈ A_units}
  ) →
  conclude(Jac(A) = {a ∈ A | ∀x ∈ A: (1_A - ax) ∈ A_units})
}