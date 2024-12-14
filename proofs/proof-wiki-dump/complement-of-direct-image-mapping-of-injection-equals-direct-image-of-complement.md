theorem Complement_Direct_Image_Injection() {
  let(f: S → T) →
  assume(Injection(f)) →
  let(f→: 𝒫(S) → 𝒫(T)) →
  assert(
    ∀A ∈ 𝒫(S) ⇒ (complement_Img(f) ∘ f→)(A) = (f→ ∘ complement_S)(A)
  )
} ↔

proof Complement_Direct_Image_Injection() {
  setVar(f: S → T) →
  setVar(f→: 𝒫(S) → 𝒫(T)) →
  
  lemma Injection_Implies_OneToMany() {
    assert(
      Injection(f) ⇒ OneToManyRelation(f)
    )
  } →
  
  lemma Set_Difference_Under_Relation() {
    assume(R ⊆ S × T) →
    assume(OneToManyRelation(R)) →
    assert(
      ∀A ∈ 𝒫(S) ⇒ (complement_Img(R) ∘ R→)(A) = (R→ ∘ complement_S)(A)
    )
  } →
  
  apply(Injection_Implies_OneToMany()) →
  apply(Set_Difference_Under_Relation(), R := f) →
  
  assert(
    ∀A ∈ 𝒫(S) ⇒ (complement_Img(f) ∘ f→)(A) = (f→ ∘ complement_S)(A)
  )
}