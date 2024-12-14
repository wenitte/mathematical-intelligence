theorem Complex_Modulus_Additive_Inverse() {
  assert(
    ∀z ∈ ℂ ⇒ |z| = |-z|
    where z + (-z) = 0
  )
} ↔

proof Complex_Modulus_Additive_Inverse() {
  setVar(z: ℂ) →
  setVar(z = a + bi) →
  assert(|-z| = |-(a + bi)|) →
  assert(|-z| = |-a - bi|) by(def_negative_complex) →
  assert(|-a - bi| = √((-a)² + (-b)²)) by(def_complex_modulus) →
  assert(√((-a)² + (-b)²) = √(a² + b²)) by(even_power_negative) →
  assert(√(a² + b²) = |a + bi|) by(def_complex_modulus) →
  assert(|a + bi| = |z|) by(def_z) →
  conclude(|-z| = |z|)
}