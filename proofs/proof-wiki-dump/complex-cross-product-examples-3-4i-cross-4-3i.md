theorem Complex_Cross_Product() {
  assert(
    ∀z₁,z₂ ∈ ℂ where z₁ = 3 - 4i ∧ z₂ = -4 + 3i ⇒ 
    z₁ × z₂ = -7
  )
} ↔

proof Complex_Cross_Product() {
  method1: {
    setVar(z₁ = 3 - 4i, z₂ = -4 + 3i) →
    assert(z₁ × z₂ = Im(z̄₁z₂)) →           // Definition 3 of Complex Cross Product
    assert(z̄₁ = 3 + 4i) →                   // Definition of Complex Conjugate
    assert(
      Im((3 + 4i)(-4 + 3i)) = 
      Im(3×(-4) - 4×3 + (3×3 + 4×(-4))i)
    ) →                                      // Definition of Complex Multiplication
    assert(Im((3×(-4) - 4×3 + (9 - 16)i)) →
    assert(-7)
  } ∨

  method2: {
    setVar(z₁ = 3 - 4i, z₂ = -4 + 3i) →
    assert(z₁ × z₂ = (3 - 4i) × (-4 + 3i)) →
    assert(z₁ × z₂ = 3×3 - (-4)×(-4)) →     // Definition 1 of Complex Cross Product
    assert(z₁ × z₂ = 9 - 16) →
    assert(z₁ × z₂ = -7)
  }
}