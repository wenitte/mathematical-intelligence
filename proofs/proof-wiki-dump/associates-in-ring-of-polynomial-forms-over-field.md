theorem Polynomial_Associates() {
  assert(
    ∀F: Field, ∀d,d': F[X] ⇒
    (associates(d,d') ↔ ∃c ∈ F\{0_F}: d = c·d')
  )
}

proof Polynomial_Associates() {
  setVar(F: Field) →
  setVar(d,d': F[X]) →
  
  lemma Associates_Definition() {
    assert(
      associates(d,d') ↔ 
      ∃e,e' ∈ F[X]: (d = e·d' ∧ d' = e'·d)
    )
  } →

  lemma Field_Is_Integral_Domain() {
    assert(∀F: Field ⇒ integral_domain(F))
  } →

  lemma Degree_Product_Rule() {
    assert(
      ∀R: IntegralDomain, ∀p,q ∈ R[X] ⇒
      deg(p·q) = deg(p) + deg(q)
    )
  } →

  apply(Associates_Definition()) →
  let(e,e': F[X]) →
  assert(d = e·d' ∧ d' = e'·d) →
  
  apply(Field_Is_Integral_Domain()) →
  apply(Degree_Product_Rule()) →
  assert(deg(e) = 0 ∧ deg(e') = 0) →
  
  let(c,c': F) →
  assert(e = c ∧ e' = c') →
  assert(c·c' = 1_F) →
  assert(c ≠ 0_F) →
  
  conclude(associates(d,d') ↔ ∃c ∈ F\{0_F}: d = c·d')
}