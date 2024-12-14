theorem Category_Locale_Isomorphism() {
  let(Loc: Category)
  let(Loc_*: Category)
  assert(
    IsIsomorphic(Loc_*, Loc)
  )
} ↔

proof Category_Locale_Isomorphism() {
  setDef(Loc, {
    objects: Locales,
    morphisms: ContinuousMaps
  }) ∧
  setDef(Loc_*, {
    objects: Locales,
    morphisms: LocalicMappings
  }) →

  assert(∀f: ContinuousMap(L₁, L₂) ↔ 
    ∃f*: FrameHomomorphism(L₂, L₁) ∧ 
    f = (f*)^op
  ) →

  assert(∀g: LocalicMapping(L₁, L₂) ↔ 
    ∃g*: FrameHomomorphism(L₂, L₁) ∧ 
    IsGaloisConnection(⟨g, g*⟩)
  ) →

  let(F: Functor(Loc, Loc_*)) {
    ∀L ∈ Loc: F(L) = L ∧
    ∀f ∈ Mor(Loc): F(f) = f_* 
    where(f_* = UpperAdjoint(f*))
  } →

  lemma Functor_F_WellDefined() {
    assert(IsCovariantFunctor(F, Loc, Loc_*))
  } →

  let(G: Functor(Loc_*, Loc)) {
    ∀L ∈ Loc_*: G(L) = L ∧
    ∀g ∈ Mor(Loc_*): G(g) = (g*)^op
  } →

  lemma Functor_G_WellDefined() {
    assert(IsCovariantFunctor(G, Loc_*, Loc))
  } →

  lemma Composition_GF() {
    assert(G ∘ F = id_Loc)
  } →

  lemma Composition_FG() {
    assert(F ∘ G = id_Loc_*)
  } →

  assert(IsFunctorIsomorphism(F)) →
  conclude(IsIsomorphic(Loc_*, Loc))
}