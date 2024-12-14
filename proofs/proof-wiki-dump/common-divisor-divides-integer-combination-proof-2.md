theorem Divides_Integer_Combination() {
  assert(
    ∀a,b,c ∈ ℤ, (c|a ∧ c|b) ⇒ 
    ∀p,q ∈ ℤ: c|(pa + qb)
  )
} ↔

proof Divides_Integer_Combination() {
  setVar(a,b,c: ℤ) →
  assume(c|a ∧ c|b) →
  
  lemma Division_A() {
    assert(c|a ⇒ ∃x ∈ ℤ: a = xc)
  } →
  
  lemma Division_B() {
    assert(c|b ⇒ ∃y ∈ ℤ: b = yc)
  } →
  
  apply(Division_A()) →
  apply(Division_B()) →
  
  setVar(p,q: ℤ) →
  assert(pa + qb = p(xc) + q(yc)) →
  assert(pa + qb = (px + qy)c) →
  
  setVar(z: ℤ) →
  let(z = px + qy) →
  assert(pa + qb = zc) →
  
  lemma Divides_Definition() {
    assert(∀m,n ∈ ℤ: (m = nc) ⇒ c|m)
  } →
  
  apply(Divides_Definition()) →
  assert(c|(pa + qb))
}