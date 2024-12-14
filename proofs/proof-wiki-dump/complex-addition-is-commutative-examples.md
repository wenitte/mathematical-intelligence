theorem Complex_Addition_Commutative_Example() {
  assert(
    (3 + 2i) + (-7 - i) = (-7 - i) + (3 + 2i)
  )
} ↔

proof Complex_Addition_Commutative_Example() {
  assert((3 + 2i) + (-7 - i)) →
  expand_complex((3 + 2i) + (-7 - i)) →
  assert((3 + (-7)) + (2i + (-i))) →
  simplify_real(3 + (-7)) →
  simplify_complex(2i + (-i)) →
  assert(-4 + i) →
  
  assert((-7 - i) + (3 + 2i)) →
  expand_complex((-7 - i) + (3 + 2i)) →
  assert((-7 + 3) + (-i + 2i)) →
  simplify_real(-7 + 3) →
  simplify_complex(-i + 2i) →
  assert(-4 + i) →
  
  conclude((3 + 2i) + (-7 - i) = (-7 - i) + (3 + 2i))
}