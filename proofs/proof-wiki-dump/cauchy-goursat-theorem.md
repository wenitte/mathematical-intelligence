theorem Cauchy_Goursat() {
  assert(
    ∀f: D → ℂ [holomorphic] ∧
    ∀D ⊆ ℂ [simply_connected_domain] ∧
    ∀C [closed_contour_in_D] →
    ∮_C f(z)dz = 0
  )
}

proof Cauchy_Goursat() {
  # Proof 1: Staircase contour approach
  setVar(C: closed_staircase_contour) →
  assert(C = ∪_{i=1}^n C_i [smooth_curves]) →
  
  lemma Polygon_Decomposition() {
    setVar(P_n: polygon, n ≥ 4) →
    assert(∂P_n = Img(C)) →
    assert(∂P_n = boundary(Int(C)))
  } →

  lemma Complex_Real_Correspondence() {
    setVar(φ: ℂ → ℝ², φ(x,y) = x + iy) →
    assert(φ[homeomorphism]) →
    assert(∃f: [0,1] → ℝ² [Jordan_curve]) →
    assert(Img(f) = φ^{-1}(Img(C))) →
    assert(Int(f) ⊆ φ^{-1}(D)) →
    assert(Int(C) = φ(Int(f)) ⊆ D)
  } →

  lemma Triangle_Decomposition() {
    setVar(△_n: triangle) →
    assert(∂△_n = C_k ∪ C_{k+1} ∪ (-C̃)) →
    assert(∂P_{n-1} = C_1 ∪...∪ C_{k-1} ∪ C̃ ∪ C_{k+2} ∪...∪ C_n) →
    assert(∮_C f(z)dz = ∮_{∂P_{n-1}} f(z)dz + ∮_{∂△_n} f(z)dz) →
    apply(Goursat_Lemma()) →
    assert(∮_C f(z)dz = ∮_{∂P_{n-1}} f(z)dz)
  } →

  iterate(Triangle_Decomposition(), until: n=3) →
  apply(Goursat_Lemma()) →
  assert(∮_C f(z)dz = 0)
}

corollary Cauchy_Goursat_Simple() {
  assert(
    ∀f: U → ℂ [holomorphic] ∧
    ∀U ⊆ ℂ [open_set] ∧
    ∀C [simple_closed_contour_in_U] ∧
    Int(C) ⊆ U →
    ∮_C f(z)dz = 0
  )
}