theorem Category_Locale_Isomorphism() {
  let(Loc: Category, Loc_*: Category)
  let(F: Functor(Loc → Loc_*))
  let(G: Functor(Loc_* → Loc))
  defineF(
    ∀L ∈ Loc_*: F(L) = L ∧
    ∀f ∈ Mor(Loc): F(f) = f^↑
  ) ∧
  defineG(
    ∀L ∈ Loc_*: G(L) = L ∧
    ∀g ∈ Mor(Loc_*): G(g) = (g^↓)^op
  ) →
  assert(GF = id_Loc)
}

proof Category_Locale_Isomorphism() {
  assert(Obj(Loc) = Obj(Loc_*)) →
  assert(F_obj = id_obj ∧ G_obj = id_obj) →
  assert(GF_obj = id_obj) →
  
  lemma Morphism_Identity() {
    setVar(f: Mor(L₁ → L₂) ∈ Loc) →
    assert(∃f^↓: L₂ → L₁, f = (f^↓)^op) →
    assert(∃f^↑: L₁ → L₂, (f^↑,f^↓) ∈ GaloisConnection) →
    
    calc {
      GF(f)
      = G(F(f))        # functor composition
      = G(f^↑)         # F definition
      = (f^↓)^op      # G definition
      = f              # continuous map definition
    }
  } →
  
  apply(Morphism_Identity()) →
  assert(GF_mor = id_mor) →
  assert(GF = id_Loc)
}