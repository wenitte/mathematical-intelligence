theorem Complex_Power_2i() {
  assert(
    2^i = cos(ln(2)) + i⋅sin(ln(2))
  )
} ↔

proof Complex_Power_2i() {
  assert(2^i = exp(i⋅ln(2))) →
  // By definition of Complex Power
  
  assert(exp(i⋅ln(2)) = cos(ln(2)) + i⋅sin(ln(2))) →
  // By De Moivre's Formula

  conclude(2^i = cos(ln(2)) + i⋅sin(ln(2)))
}