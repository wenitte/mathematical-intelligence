theorem Commutative_B_Algebra_Is_Entropic() {
  assert(
    let G be algebraic_structure ∧
    has_operation(G, *) ∧
    is_commutative_B_algebra(G, *) →
    is_entropic_structure(G, *)
  )
}

proof Commutative_B_Algebra_Is_Entropic() {
  apply(Commutative_B_Algebra_Induces_Abelian_Group()) →
  assert(
    ∃(∘: binary_operation) [
      is_abelian_group(G, ∘) ∧
      ∀a,b ∈ G: (a ∘ inverse(b)) = (a * b)
    ]
  ) →
  apply(Abelian_Group_Induces_Entropic_Structure()) →
  assert(is_entropic_structure(G, *))
}