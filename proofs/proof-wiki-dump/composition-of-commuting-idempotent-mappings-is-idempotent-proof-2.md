theorem Composition_of_Commuting_Idempotent_Mappings() {
  let(S: Set)
  let(f,g: S → S)
  assert(
    (isIdempotent(f) ∧ isIdempotent(g)) ∧
    (f ∘ g = g ∘ f) ⇒
    isIdempotent(f ∘ g)
  )
} ↔

proof Composition_of_Commuting_Idempotent_Mappings() {
  lemma Self_Maps_Form_Semigroup() {
    assert(
      ∀S: Set ⇒
      {f | f: S → S} forms_semigroup_under(∘)
    )
  } →
  
  lemma Commuting_Idempotents_Product() {
    assert(
      ∀a,b in_semigroup(G) ⇒
      (isIdempotent(a) ∧ isIdempotent(b) ∧ a·b = b·a) ⇒
      isIdempotent(a·b)
    )
  } →
  
  apply(Self_Maps_Form_Semigroup()) →
  apply(Commuting_Idempotents_Product(), 
    {G ↦ {f | f: S → S}, · ↦ ∘, a ↦ f, b ↦ g}) →
  
  assert(isIdempotent(f ∘ g))
}