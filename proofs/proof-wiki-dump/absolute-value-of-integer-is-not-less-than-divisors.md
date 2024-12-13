theorem Integer_Divisor_Magnitude() {
  assert(
    ∀c ∈ ℤ_{≠0}, ∀a ∈ ℤ: 
    (a | c) → (a ≤ |a| ≤ |c|)
  )
} ↔

proof Integer_Divisor_Magnitude() {
  setVar(c: ℤ_{≠0}, a: ℤ) →
  assume(a | c) →
  
  lemma Divisor_Definition() {
    assert(
      (a | c) ↔ ∃q ∈ ℤ: c = aq
    )
  } →
  
  apply(Divisor_Definition()) →
  setVar(q: ℤ) →
  assert(c = aq) →
  
  lemma Absolute_Value_Product() {
    assert(
      ∀x,y ∈ ℤ: |xy| = |x||y|
    )
  } →
  
  apply(Absolute_Value_Product()) →
  assert(|c| = |a||q|) →
  
  lemma Absolute_Value_Properties() {
    assert(
      ∀x ∈ ℤ: (
        a ≤ |a| ∧
        |q| ≥ 1
      )
    )
  } →
  
  apply(Absolute_Value_Properties()) →
  assert(|a||q| ≥ |a| × 1) →
  assert(|a||q| ≥ |a|) →
  assert(a ≤ |a| ≤ |c|)
}

corollary Positive_Integer_Divisor() {
  assert(
    ∀a,b ∈ ℤ_{>0}: 
    (a | b) → (a ≤ b)
  )
} ↔

proof Positive_Integer_Divisor() {
  setVar(a,b: ℤ_{>0}) →
  assume(a | b) →
  apply(Integer_Divisor_Magnitude()) →
  assert(a ≤ |a| ≤ |b|) →
  assert(a = |a| ∧ b = |b|) →
  conclude(a ≤ b)
}