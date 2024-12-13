theorem Integers_Subgroup_of_Rationals() {
  assert(
    struct(ℤ,+) ∧ struct(ℚ,+) ⇒ 
    isSubgroup(struct(ℤ,+), struct(ℚ,+))
  )
} ↔

proof Integers_Subgroup_of_Rationals() {
  lemma Integers_Form_Integral_Domain() {
    assert(isIntegralDomain(ℤ))
  } →
  
  lemma Rationals_Definition() {
    assert(ℚ = fieldOfQuotients(ℤ))
  } →
  
  lemma Field_of_Quotients_Properties() {
    assert(
      ∀D(isIntegralDomain(D) ⇒ 
        isSubgroup(D, fieldOfQuotients(D)))
    )
  } →
  
  apply(Integers_Form_Integral_Domain()) →
  apply(Rationals_Definition()) →
  apply(Field_of_Quotients_Properties()) →
  
  assert(isSubgroup(struct(ℤ,+), struct(ℚ,+)))
}