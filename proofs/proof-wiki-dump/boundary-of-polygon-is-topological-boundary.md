theorem Polygon_Boundary_Equals_Topological_Boundary() {
  assert(
    ∀P ⊂ ℝ² [is_polygon(P)] ∧
    let ∂P := boundary(P) ∧
    let IntP := interior(∂P) ∧
    let ExtP := exterior(∂P) ⇒
    (topological_boundary(IntP) = ∂P) ∧ 
    (topological_boundary(ExtP) = ∂P)
  )
} ↔

proof Polygon_Boundary_Equals_Topological_Boundary() {
  let ∂IntP := topological_boundary(IntP) →
  let ∂ExtP := topological_boundary(ExtP) →

  lemma Boundary_Contains_Topological() {
    apply(Jordan_Curve_Theorem(∂P)) →
    assert(IntP ∩ ExtP = ∅ ∧ is_open(IntP) ∧ is_path_connected(IntP)) →
    apply(Open_Set_Disjoint_From_Boundary(IntP)) →
    assert(IntP ∩ ∂IntP = ∅) →
    apply(Open_Set_Disjoint_From_Closure(ExtP, IntP)) →
    assert(ExtP ∩ closure(IntP) = ∅) →
    assert(∂IntP ⊆ closure(IntP)) →
    assert(ExtP ∩ ∂IntP = ∅) →
    apply(Jordan_Polygon_Theorem()) →
    assert(ℝ² = IntP ∪ ExtP ∪ ∂P) →
    assert(∂IntP ⊆ ∂P ∧ ∂ExtP ⊆ ∂P)
  } →

  lemma Topological_Contains_Boundary() {
    ∀p ∈ ∂P [
      case(¬is_vertex(p)) {
        let S := containing_side(p) →
        let n := num_sides(P) →
        let δ := d(S, ∪{Sⱼ: j ∈ [1,n], Sⱼ ≠ S}) →
        assert(δ > 0) →
        ∀ε ∈ (0,δ) [
          let Bε := open_ball(p,ε) →
          ∃x₁ ∈ Bε [
            let v := p - x₁ →
            let L₁ := {x₁ + sv: s ≥ 0} →
            let x₂ := x₁ + 2v →
            let L₂ := {x₂ + sv: s ≥ 0} →
            assert(N(x₁) + 1 = N(x₂)) →
            assert(parity(x₁) ≠ parity(x₂)) →
            assert((x₁ ∈ IntP ∧ x₂ ∈ ExtP) ∨ (x₁ ∈ ExtP ∧ x₂ ∈ IntP))
          ]
        ] →
        assert(p ∈ ∂IntP ∧ p ∈ ∂ExtP)
      } →
      case(is_vertex(p)) {
        ∃{pₖ} [
          assert(pₖ → p) ∧
          ∀k[pₖ ∈ ∂IntP ∧ pₖ ∈ ∂ExtP]
        ] →
        assert(p ∈ ∂IntP ∧ p ∈ ∂ExtP)
      }
    ] →
    assert(∂P ⊆ ∂IntP ∧ ∂P ⊆ ∂ExtP)
  } →

  apply(Set_Equality()) →
  assert((∂IntP = ∂P) ∧ (∂ExtP = ∂P))
}