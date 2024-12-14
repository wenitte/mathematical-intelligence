theorem Common_Divisor_Divides_Difference() {
  assert(
    ∀a,b,c ∈ ℤ → 
    (c|a ∧ c|b) →
    c|(a-b)
  )
} ↔

proof Common_Divisor_Divides_Difference() {
  setVar(a,b,c: ℤ) →
  assume(c|a) →
  assert(∃x ∈ ℤ: a = xc) →  // Definition of Divisor of Integer
  
  assume(c|b) →
  assert(∃y ∈ ℤ: b = yc) →  // Definition of Divisor of Integer
  
  assert(a - b = xc - yc) →  // Substitution
  assert(a - b = (x - y)c) →  // Integer Multiplication Distributes
  
  setVar(z: ℤ) →
  assert(z = x - y) →
  assert(a - b = zc) →
  assert(∃z ∈ ℤ: a - b = zc) →
  
  assert(c|(a-b))  // Definition of Divisor of Integer
}