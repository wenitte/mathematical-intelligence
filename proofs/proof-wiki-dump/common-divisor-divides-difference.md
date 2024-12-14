theorem Common_Divisor_Divides_Difference() {
  assert(
    ∀a,b,c ∈ ℤ : (c|a ∧ c|b) → c|(a-b)
  )
} ↔

proof Common_Divisor_Divides_Difference() {
  setVar(a,b,c: ℤ) →
  assume(c|a ∧ c|b) →

  // Proof path 1 using integer combination theorem
  apply(Common_Divisor_Divides_Integer_Combination()) →
  assert(∀p,q ∈ ℤ : c|(pa + qb)) →
  let(p = 1, q = -1) →
  assert(c|(a-b))

  // Alternative proof path 2 using divisor definition
  assert(c|a → ∃x ∈ ℤ : a = xc) →
  assert(c|b → ∃y ∈ ℤ : b = yc) →
  assert(a - b = xc - yc) →
  apply(Integer_Multiplication_Distributive()) →
  assert(a - b = (x-y)c) →
  let(z = x-y) →
  assert(∃z ∈ ℤ : a-b = zc) →
  assert(c|(a-b))
}

lemma Common_Divisor_Divides_Integer_Combination() {
  assert(
    ∀a,b,c,p,q ∈ ℤ : (c|a ∧ c|b) → c|(pa + qb)
  )
}

lemma Integer_Multiplication_Distributive() {
  assert(
    ∀x,y,c ∈ ℤ : xc - yc = (x-y)c
  )
}