theorem Complex_Multiplication_Associative_Example() {
  assert(
    ∀a,b,c ∈ ℂ: (a(bc) = (ab)c) where
    a = (2-i),
    b = (-3+2i),
    c = (5-4i)
  )
} ↔

proof Complex_Multiplication_Associative_Example() {
  setVar(a: ℂ = 2-i) ∧
  setVar(b: ℂ = -3+2i) ∧
  setVar(c: ℂ = 5-4i) →
  
  lemma Right_Side() {
    compute(b*c) →
    assert((-3+2i)(5-4i) = -15+12i+10i-8i² = -15+22i+8 = -7+22i) →
    compute(a*(b*c)) →
    assert((2-i)(-7+22i) = -14+44i+7i-22i² = -14+51i+22 = 8+51i)
  } →
  
  lemma Left_Side() {
    compute(a*b) →
    assert((2-i)(-3+2i) = -6+4i+3i-2i² = -6+7i+2 = -4+7i) →
    compute((a*b)*c) →
    assert((-4+7i)(5-4i) = -20+16i+35i-28i² = -20+51i+28 = 8+51i)
  } →
  
  apply(Right_Side()) ∧
  apply(Left_Side()) →
  assert(
    (2-i)((-3+2i)(5-4i)) = ((2-i)(-3+2i))(5-4i) = 8+51i
  )
}