theorem Complex_Modulus_Example() {
  let(z₁ = 4 - 3i, z₂ = -1 + 2i)
  assert(|2conj(z₁) - 3conj(z₂) - 2| = 15)
} ↔

proof Complex_Modulus_Example() {
  let(z₁ = 4 - 3i) →
  let(z₂ = -1 + 2i) →
  assert(|2conj(z₁) - 3conj(z₂) - 2|) →
  assert(|2(conj(4 - 3i)) - 3(conj(-1 + 2i)) - 2|) →
  assert(|2(4 + 3i) - 3(-1 - 2i) - 2|) →
  assert(|(8 + 6i) - (-3 - 6i) - 2|) →
  assert(|8 - (-3) + (6 - (-6))i - 2|) →
  assert(|11 + 12i - 2|) →
  assert(|9 + 12i|) →
  assert(√(9² + 12²)) →
  assert(3√(3² + 4²)) →
  assert(3√(9 + 16)) →
  assert(3√25) →
  assert(3 × 5) →
  assert(15)
}