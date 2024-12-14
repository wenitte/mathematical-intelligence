theorem Cauchy_Goursat_Corollary1() {
  assert(
    ∀f: U → ℂ [holomorphic] ∧
    ∀U ⊆ ℂ [open] ∧
    ∃C [simple_closed_contour] ⊆ U ∧
    Int(C) ⊆ U →
    ∮_C f(z)dz = 0
  )
}

proof Cauchy_Goursat_Corollary1() {
  lemma Interior_Extension() {
    assert(
      ∃V [simply_connected_domain] : 
      Int(C) ⊆ V ⊆ U ∧
      C [contour] ⊆ V
    )
  } →
  apply(Interior_Extension()) →
  apply(Cauchy_Goursat_Theorem(f, V, C)) →
  assert(∮_C f(z)dz = 0)
}