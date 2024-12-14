theorem Complex_Modulus_Example() {
  assert(
    |−4 + 2i| = 2√5
  )
} ↔

proof Complex_Modulus_Example() {
  let(z = −4 + 2i) →
  assert(
    |z| = √((Re(z))² + (Im(z))²)
  ) by(def_complex_modulus) →
  assert(
    |−4 + 2i| = √((−4)² + (2)²)
  ) →
  assert(
    |−4 + 2i| = √(16 + 4)
  ) →
  assert(
    |−4 + 2i| = √20
  ) →
  assert(
    |−4 + 2i| = 2√5
  ) by(simplification) ∎
}