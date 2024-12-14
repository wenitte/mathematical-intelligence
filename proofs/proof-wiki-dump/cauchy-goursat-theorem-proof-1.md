theorem Cauchy_Goursat() {
  assert(
    ∀f: D → ℂ, holomorphic(f) ∧
    simply_connected(D) ∧
    closed_contour(C, D) ⇒
    ∮_C f(z)dz = 0
  )
} ↔

proof Cauchy_Goursat() {
  assume(simple_closed_staircase_contour(C)) →
  assert(∃n ∈ ℕ≥4: C = ⋃_{i=1}^n C_i ∧ smooth_curves(C_i)) →
  setVar(P_n: polygon(C)) →
  assert(∂P_n = boundary(Int(C))) →
  
  lemma Complex_Real_Homeomorphism() {
    assert(∃φ: ℂ ≅ ℝ², φ(x,y) = x + iy)
  } →
  
  lemma Jordan_Curve() {
    assert(∃f: [0,1] → ℝ², Img(f) = φ⁻¹(Img(C)))
  } →
  
  apply(Complex_Real_Homeomorphism()) →
  apply(Jordan_Curve()) →
  assert(Int(C) ⊆ D) →
  
  lemma Two_Ears() {
    assert(∃triangle_n ⊂ P_n: ear(triangle_n, P_n))
  } →
  
  apply(Two_Ears()) →
  setVar(P_{n-1}: polygon(n-1)) →
  assert(∂triangle_n = C_k ∪ C_{k+1} ∪ (-C̃)) →
  assert(∂P_{n-1} = C_1 ∪ ... ∪ C_{k-1} ∪ C̃ ∪ C_{k+2} ∪ ... ∪ C_n) →
  
  lemma Goursat_Integral() {
    assert(Int(triangle_n) ⊆ Int(C) ⊆ D ⇒
           ∮_C f(z)dz = ∮_{∂P_{n-1}} f(z)dz + ∮_{∂triangle_n} f(z)dz = ∮_{∂P_{n-1}} f(z)dz)
  } →
  
  apply(Goursat_Integral()) →
  iterate(n → 3, 
    assert(∮_C f(z)dz = ∮_{∂P_{n-1}} f(z)dz)
  ) →
  
  assert(∮_C f(z)dz = 0) →
  
  lemma Primitive_Existence() {
    assert(∃F: D → ℂ, F'(z) = f(z))
  } →
  
  apply(Primitive_Existence()) →
  conclude(∀C: closed_contour(C,D) ⇒ ∮_C f(z)dz = 0)
}