theorem Algebra_Loop_Abelian_Group() {
  let S be_algebraic_structure
  let ⊙ be_binary_operation_on(S)
  let S×S be_cartesian_product
  let ⊗ be_external_direct_product(S⊙, S⊙)
  let f,g: S×S → S be_homomorphisms
  
  assert(
    ∀((x₁,y₁),(x₂,y₂) ∈ S×S) → 
    ((x₁,y₁) ⊗ (x₂,y₂) = (x₁⊙x₂, y₁⊙y₂)) ∧
    is_loop(S,⊙) ∧
    (is_homomorphism(f) ∧ is_homomorphism(g) → is_homomorphism(f⊙g))
    ⇒ is_abelian_group(S,⊙)
  )
}

proof Algebra_Loop_Abelian_Group() {
  def Loop_Identity() {
    assert(∃e ∈ S: ∀x ∈ S: x⊙e = x = e⊙x)
  } →

  lemma Entropic_Structure() {
    assert(
      (is_homomorphism(f) ∧ is_homomorphism(g) → is_homomorphism(f⊙g))
      ⇒ is_entropic(S,⊙)
    )
  } →
  
  apply(Entropic_Structure()) →
  
  lemma Entropic_With_Identity() {
    assert(
      is_entropic(S,⊙) ∧ Loop_Identity()
      ⇒ is_commutative_monoid(S,⊙)
    )
  } →
  
  assert(is_commutative_semigroup(S,⊙)) →
  
  lemma Semigroup_Quasigroup_Group() {
    assert(
      is_semigroup(S,⊙) ∧ is_quasigroup(S,⊙)
      ⇒ is_group(S,⊙)
    )
  } →
  
  assert(
    is_group(S,⊙) ∧ is_commutative(S,⊙)
    ⇒ is_abelian_group(S,⊙)
  )
}