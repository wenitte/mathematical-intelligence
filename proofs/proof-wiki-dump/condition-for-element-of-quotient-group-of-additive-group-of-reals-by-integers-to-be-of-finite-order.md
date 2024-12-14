theorem Rational_Quotient_Finite_Order() {
  assert(
    let R = ⟨ℝ,+⟩ ∧
    let Z = ⟨ℤ,+⟩ ∧
    let x ∈ ℝ ∧
    let Q = R/Z ∧
    ∀(x + Z ∈ Q) ↔ (isFiniteOrder(x + Z) ↔ isRational(x))
  )
}

proof Rational_Quotient_Finite_Order() {
  lemma Z_Normal_Subgroup() {
    assert(isNormalSubgroup(Z, R))
  } →
  
  setDef(isRational(x) ↔ ∃m,n ∈ ℤ × ℤ>0: x = m/n) →
  
  let(x + Z ∈ Q) →
  
  assert(
    isFiniteOrder(x + Z) ↔
    ∃n ∈ ℤ≥0: (x + Z)^n = Z
  ) →
  
  apply(QuotientGroup_Identity_Element()) →
  assert(
    (x + Z)^n = Z ↔ nx ∈ Z
  ) →
  
  apply(QuotientGroup_Power_Identity()) →
  assert(
    nx ∈ Z ↔ ∃m ∈ ℤ: nx = m
  ) →
  
  assert(
    nx = m ↔ x = m/n
  ) →
  
  conclude(
    isFiniteOrder(x + Z) ↔ isRational(x)
  )
}