theorem Division_Products_Addition() {
  assert(
    let R be commutative_ring_with_unity ∧
    let U_R be units_group_of(R) ∧
    ∀a,c ∈ R, ∀b,d ∈ U_R ⇒
    (a/b + c/d = (a∘d + b∘c)/(b∘d))
  )
} ↔

proof Division_Products_Addition() {
  setVars(a,c: R, b,d: U_R) →
  
  lemma Division_Definition() {
    assert(∀x ∈ R, ∀z ∈ U_R ⇒ (x/z = x∘z⁻¹))
  } →
  
  apply(Division_Definition()) →
  assert(a/b + c/d = a∘b⁻¹ + c∘d⁻¹) →
  
  lemma Inverse_Identity() {
    assert(∀x ∈ U_R ⇒ (x∘x⁻¹ = 1))
  } →
  
  apply(Inverse_Identity()) →
  assert(a∘b⁻¹ + c∘d⁻¹ = (a∘b⁻¹∘d∘d⁻¹) + (c∘d⁻¹∘b∘b⁻¹)) →
  
  lemma Commutativity() {
    assert(∀x,y ∈ R ⇒ (x∘y = y∘x))
  } →
  
  apply(Commutativity()) →
  assert((a∘b⁻¹∘d∘d⁻¹) + (c∘d⁻¹∘b∘b⁻¹) = (a∘d)∘(d⁻¹∘b⁻¹) + (b∘c)∘(d⁻¹∘b⁻¹)) →
  
  lemma Distributivity() {
    assert(∀x,y,z ∈ R ⇒ ((x + y)∘z = x∘z + y∘z))
  } →
  
  apply(Distributivity()) →
  assert((a∘d)∘(d⁻¹∘b⁻¹) + (b∘c)∘(d⁻¹∘b⁻¹) = (a∘d + b∘c)∘(b∘d)⁻¹) →
  
  apply(Division_Definition()) →
  assert((a∘d + b∘c)∘(b∘d)⁻¹ = (a∘d + b∘c)/(b∘d))
}