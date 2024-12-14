theorem Complex_Arithmetic_Example() {
  let z₃ = √3 - 2i
  assert(
    (z₃ - conj(z₃))⁵ = -1024i
  )
} ↔

proof Complex_Arithmetic_Example() {
  setVar(z₃ = √3 - 2i) →
  
  assert((z₃ - conj(z₃))⁵) →
  assert((√3 - 2i - conj(√3 - 2i))⁵) →
  
  lemma Conjugate_Property() {
    assert(conj(√3 - 2i) = √3 + 2i)
  } →
  
  apply(Conjugate_Property()) →
  assert((√3 - 2i - (√3 + 2i))⁵) →
  
  lemma Algebraic_Simplification() {
    assert(√3 - 2i - (√3 + 2i) = -4i)
  } →
  
  apply(Algebraic_Simplification()) →
  assert((-4i)⁵) →
  
  lemma Power_Decomposition() {
    assert((-4i)⁵ = (-1)⁵ × 4⁵ × i⁵)
  } →
  
  apply(Power_Decomposition()) →
  assert((-1) × 1024 × i) →
  assert(-1024i)
}