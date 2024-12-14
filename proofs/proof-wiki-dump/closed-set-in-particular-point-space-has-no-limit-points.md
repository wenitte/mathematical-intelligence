theorem Closed_Set_No_Limit_Points() {
  assume(
    T = ⟨S, τ_p⟩ ∧ // particular point space
    H ⊂ S ∧ 
    isClosed(H, T)
  )
  assert(
    ∀x ∈ H ⇒ ¬isLimitPoint(x, H)
  )
} ↔

proof Closed_Set_No_Limit_Points() {
  assert(isClosed(H, T) ⇒ p ∉ H) →

  lemma LimitPoint_Definition() {
    assert(
      isLimitPoint(x, H) ↔
      ∀U ∈ τ_p: (x ∈ U ⇒ ∃y ∈ (U ∩ H): y ≠ x)
    )
  } →

  setVar(x: H) →
  setVar(U_x = {x, p}) →
  
  assert(p ∈ U_x ⇒ U_x ∈ τ_p) →
  assert(
    ∀y ∈ U_x: (y ∈ H ∧ y ≠ x) ⇒ false
  ) →
  
  apply(LimitPoint_Definition()) →
  assert(¬isLimitPoint(x, H)) →
  
  conclude(
    ∀x ∈ H ⇒ ¬isLimitPoint(x, H)
  )
}