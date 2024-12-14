theorem Circle_Group_Properties() {
  assert(
    ∃K ⊆ ℂ ∧ 
    struct(K, ×) ↔ {z ∈ ℂ : |z| = 1} ∧
    isUncountableInfiniteAbelianGroup(struct(K, ×))
  )
}

proof Circle_Group_Properties() {
  reference(Circle_Group_is_Group) →
  assert(isGroup(struct(K, ×))) →
  
  assert(K ⊆ ℂ) →
  assert(isSubgroup(struct(K, ×), struct(ℂ, ×))) →
  
  reference(Complex_Multiplication_is_Commutative) →
  assert(∀a,b ∈ ℂ → a × b = b × a) →
  
  lemma Operation_Restriction() {
    assert(
      (isCommutative(×, ℂ) ∧ K ⊆ ℂ) →
      isCommutative(×, K)
    )
  } →
  
  apply(Operation_Restriction()) →
  assert(isCommutative(×, K)) →
  assert(isAbelianGroup(struct(K, ×))) →
  
  reference(Circle_Group_is_Uncountably_Infinite) →
  assert(isUncountablyInfinite(K)) →
  
  conclude(
    isUncountableInfiniteAbelianGroup(struct(K, ×))
  )
}