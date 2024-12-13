theorem Basis_Particular_Point_Space() {
  let(T = (S, τ_p): Particular_Point_Space) →
  let(𝔹 = {(x, p) | x ∈ S} ∪ {p}) →
  assert(
    𝔹 is_basis_for T
  )
} ↔

proof Basis_Particular_Point_Space() {
  let(H ∈ τ_p) →
  
  lemma Open_Set_Contains_Points() {
    assert(
      ∀y ∈ H ⇒ ∃{y, p} ∈ 𝔹
    ) ∧
    assert(
      y = p ⇒ {y, p} = {p} ∈ 𝔹
    )
  } →

  lemma Union_Representation() {
    assert(
      H = ⋃(y∈H) {y, p}
    )
  } →

  apply(Open_Set_Contains_Points()) →
  apply(Union_Representation()) →
  
  conclude(
    𝔹 is_analytic_basis_for T
  ) →
  
  assert(
    is_analytic_basis_for T ⇒ is_basis_for T
  )
}