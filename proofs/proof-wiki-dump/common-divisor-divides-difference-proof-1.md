theorem Common_Divisor_Divides_Difference() {
  assert(
    ∀a,b,c ∈ ℤ ⇒ 
    (c|a ∧ c|b) → c|(a-b)
  )
} ↔

proof Common_Divisor_Divides_Difference() {
  setVar(a,b,c: ℤ) →
  assume(c|a ∧ c|b) →
  
  lemma Integer_Combination() {
    assert(
      ∀p,q ∈ ℤ ⇒ (c|a ∧ c|b) → c|(pa + qb)
    )
  } →
  
  apply(Integer_Combination(), p=1, q=-1) →
  substitute(pa + qb = 1⋅a + (-1)⋅b = a - b) →
  assert(c|(a-b))
}