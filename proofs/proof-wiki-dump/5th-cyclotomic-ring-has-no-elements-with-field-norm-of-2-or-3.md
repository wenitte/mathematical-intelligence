theorem No_Field_Norm_2_3() {
  assert(
    ∀z ∈ ℤ[i√5] ⇒ N(z) ≠ 2 ∧ N(z) ≠ 3
  )
} ↔

proof No_Field_Norm_2_3() {
  setVar(z: ℤ[i√5]) →
  setVar(x,y: ℤ) →
  assert(z = x + iy) →
  assert(N(z) = x² + 5y²) →
  
  lemma Case_2() {
    assume(N(z) = 2) →
    assert(x² + 5y² = 2) →
    assert(y = 0) by {
      assume(y ≠ 0) →
      assert(5y² ≥ 5) →
      assert(x² + 5y² > 2) →
      contradiction()
    } →
    assert(x² = 2) →
    assert(x = ±√2) →
    assert(√2 ∉ ℤ) by IrrationalityOfRoot2() →
    contradiction()
  } →

  lemma Case_3() {
    assume(N(z) = 3) →
    assert(x² + 5y² = 3) →
    assert(y = 0) by {
      assume(y ≠ 0) →
      assert(5y² ≥ 5) →
      assert(x² + 5y² > 3) →
      contradiction()
    } →
    assert(x² = 3) →
    assert(x = ±√3) →
    assert(√3 ∉ ℤ) by IrrationalityOfRoot3() →
    contradiction()
  } →
  
  apply(Case_2() ∧ Case_3()) →
  conclude()
}