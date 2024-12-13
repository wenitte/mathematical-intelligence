theorem Bijective_Relation_Has_Inverses() {
  assert(
    ∀R ⊆ S × T,
    ∀Is = Identity(S),
    ∀It = Identity(T),
    ∀R⁻¹ = Inverse(R)
    ⇒ (
      Bijection(R) 
      ⇒ (R⁻¹ ∘ R = Is ∧ R ∘ R⁻¹ = It)
    )
  )
}

proof Bijective_Relation_Has_Inverses() {
  setVar(R: Relation(S,T)) →
  assume(Bijection(R)) →
  
  lemma Properties() {
    assert(
      Surjection(R) ∧ RightTotal(R) ∧
      Mapping(R) ∧ LeftTotal(R) ∧
      OneToOne(R) ∧ ManyToOne(R) ∧ OneToMany(R)
    )
  } →
  
  lemma Inverse_Properties() {
    apply(RightTotal_Inverse_Theorem(R)) →
    apply(LeftTotal_Inverse_Theorem(R)) →
    apply(ManyToOne_Inverse_Theorem(R)) →
    assert(
      RightTotal(R⁻¹) ∧ LeftTotal(R⁻¹) ∧
      ManyToOne(R⁻¹) ∧ OneToMany(R⁻¹)
    )
  } →
  
  lemma Composition_Identity() {
    apply(Composite_Inverse_Identity_Theorem(R)) →
    assert(R⁻¹ ∘ R = Is ∧ R ∘ R⁻¹ = It)
  } →
  
  apply(Composition_Identity()) →
  assert(R⁻¹ ∘ R = Is ∧ R ∘ R⁻¹ = It)
}