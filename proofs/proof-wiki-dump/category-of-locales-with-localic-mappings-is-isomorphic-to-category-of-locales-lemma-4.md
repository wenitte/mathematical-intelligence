theorem CategoryLocaleIsomorphism() {
  let(Loc: Category, Loc_*: Category)
  let(F: Functor(Loc → Loc_*))
  let(G: Functor(Loc_* → Loc))
  assert(
    ∀L ∈ Loc_* : F(L) = L ∧
    ∀f ∈ Mor(Loc) : F(f) = f_* ∧
    ∀L ∈ Loc_* : G(L) = L ∧
    ∀g ∈ Mor(Loc_*) : G(g) = (g^*)^op
  ) →
  assert(FG = id_Loc_*)
}

proof CategoryLocaleIsomorphism() {
  assert(Obj(Loc_*) = Obj(Loc)) →
  assert(F_obj ∘ G_obj = id_obj) →
  
  let(g: Mor(L₁ → L₂) ∈ Loc_*) →
  
  lemma GaloisConnection() {
    assert(∃(g̅,g_): GaloisPair ∧ 
           g = g̅ ∧ 
           g_ isFrameHomomorphism)
  } →

  assert(FG(g) = F(G(g))) by(FunctorComposition) →
  assert(F(G(g)) = F((g^*)^op)) by(DefG) →
  assert(F((g^*)^op) = g̅) by(DefF) →
  assert(g̅ = g) by(DefLocalicMapping) →
  
  conclude(FG = id_Loc_* onMorphisms) →
  conclude(FG = id_Loc_*)
}