theorem Locale_Category_Functor() {
  let(ℒoc: Category, ℒoc*: Category) →
  let(G: ℒoc* → ℒoc) →
  assert(
    ∀L ∈ ℒoc* → [G(L) = L] ∧
    ∀g: L₁ → L₂ ∈ ℒoc* → [G(g) = (g_lower)ᵒᵖ]
  ) →
  claim(G is_well_defined_covariant_functor)
}

proof Locale_Category_Functor() {
  // Well-defined proof
  lemma Well_Defined() {
    assert(Objects(ℒoc*) = Objects(ℒoc)) →
    assert(G_objects = id_functor) →
    
    let(g: L₁ → L₂ ∈ ℒoc*) →
    assert(∃(g_upper, g_lower): GaloisConnection) →
    assert(g = g_upper) →
    apply(Unique_Galois_Connection_Theorem()) →
    assert((g_lower)ᵒᵖ ∈ Mor(ℒoc)) →
    conclude(G is_well_defined)
  }

  // Composition preservation proof
  lemma Preserves_Composition() {
    let(g: L₁ → L₂, h: L₂ → L₃ ∈ ℒoc*) →
    let((g_upper, g_lower): GaloisConnection) →
    let((h_upper, h_lower): GaloisConnection) →
    let((h∘g_upper, h∘g_lower): GaloisConnection) →
    
    assert(
      G(h∘g) = (h∘g_lower)ᵒᵖ →
      = (g_lower ∘ h_lower)ᵒᵖ →
      = (h_lower)ᵒᵖ ∘ (g_lower)ᵒᵖ →
      = G(h) ∘ G(g)
    )
  }

  // Identity preservation proof
  lemma Preserves_Identity() {
    let(L ∈ ℒoc*) →
    let(idₗ: L → L) →
    let((id_upper, id_lower): GaloisConnection) →
    
    apply(Identity_Galois_Connection_Theorem()) →
    assert((idₗ, idₗ) is_galois_connection) →
    
    assert(
      G(idₗ) = (id_lower)ᵒᵖ →
      = (idₗ)ᵒᵖ →
      = idₗ →
      = id_G(L)
    )
  }

  apply(Well_Defined()) →
  apply(Preserves_Composition()) →
  apply(Preserves_Identity()) →
  conclude(G is_covariant_functor)
}