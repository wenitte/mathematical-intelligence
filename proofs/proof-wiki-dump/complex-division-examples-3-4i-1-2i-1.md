theorem Complex_Division_Example() {
  assert(
    (3 + 4i)/(1 + 2i) = 11/5 - (2/5)i
  )
} ↔

proof Complex_Division_Example() {
  define(z₁ = 3 + 4i) →
  define(z₂ = 1 + 2i) →
  
  assert(
    (3 + 4i)/(1 + 2i) = ((3 + 4i)(1 - 2i))/((1 + 2i)(1 - 2i))
  ) →
  
  lemma Conjugate_Product() {
    assert(
      (a + bi)(a - bi) = a² + b²
    )
  } →
  
  assert(
    ((3 + 4i)(1 - 2i)) = 3(1) + 3(-2i) + 4i(1) + 4i(-2i)
  ) →
  
  assert(
    ((3 + 4i)(1 - 2i)) = 3 - 6i + 4i - 8i²
  ) →
  
  assert(
    -8i² = 8 ∧ i² = -1
  ) →
  
  assert(
    ((3 + 4i)(1 - 2i)) = 11 - 2i
  ) →
  
  apply(Conjugate_Product()) →
  assert(
    (1 + 2i)(1 - 2i) = 1² + 2² = 5
  ) →
  
  assert(
    (3 + 4i)/(1 + 2i) = (11 - 2i)/5 = 11/5 - (2/5)i
  )
}