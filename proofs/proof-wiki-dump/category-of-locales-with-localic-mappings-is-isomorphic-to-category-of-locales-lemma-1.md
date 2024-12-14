theorem CategoryLocalesIsomorphism() {
  let(Loc: Category, Loc_*: Category)
  let(F: Functor[Loc → Loc_*])
  define(F(L: Locale) ↦ L)
  define(F(f: ContinuousMap) ↦ f_*)
  where(f_*: UpperAdjoint(f^*) ∧ f = (f^*)^op)
  assert(
    IsWellDefinedCovariantFunctor(F, Loc, Loc_*)
  )
} ↔

proof CategoryLocalesIsomorphism() {
  // Well-defined proof
  lemma FunctorWellDefined() {
    assert(Objects(Loc) = Objects(Loc_*)) →
    forall(f: ContinuousMap[L₁ → L₂]) {
      exists(f^*: FrameHomomorphism[L₂ → L₁]) {
        assert(f = (f^*)^op) ∧
        exists(f_*: UpperAdjoint(f^*)) {
          assert(IsGaloisConnection(f_*, f^*))
        }
      } →
      apply(GaloisConnectionUniqueness) →
      assert(IsWellDefined(F(f)))
    }
  } →

  // Preserves composition
  lemma PreservesComposition() {
    forall(f: ContinuousMap[L₁ → L₂], g: ContinuousMap[L₂ → L₃]) {
      let(⟨f_*, f^*⟩: GaloisConnection, ⟨g_*, g^*⟩: GaloisConnection)
      assert(F(g ∘ f) = (g ∘ f)_*) →
      apply(GaloisConnectionComposition) →
      assert(F(g ∘ f) = g_* ∘ f_*) →
      assert(F(g ∘ f) = F(g) ∘ F(f))
    }
  } →

  // Preserves identities
  lemma PreservesIdentities() {
    forall(L: Locale) {
      let(idL: IdentityMap[L → L])
      assert(idL = (idL)^op) →
      assert(idL = (idL^*)^op) →
      apply(IdentityGaloisConnection) →
      assert(⟨idL, idL⟩: GaloisConnection) →
      apply(GaloisConnectionUniqueness) →
      assert(F(idL) = idL) →
      assert(F(idL) = id[F(L)])
    }
  } →

  apply(FunctorWellDefined) →
  apply(PreservesComposition) →
  apply(PreservesIdentities) →
  assert(IsCovariantFunctor(F))
}