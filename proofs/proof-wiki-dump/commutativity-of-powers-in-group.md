theorem Commutativity_Powers_Group() {
  define(G: Group) →
  define(∘: BinaryOperation) →
  assert(
    ∀a,b ∈ G ∧
    Commute(a,b) ⇒
    (∀m,n ∈ ℤ ⇒ a^m ∘ b^n = b^n ∘ a^m)
  )
} ↔

proof Commutativity_Powers_Group() {
  setVar(G: Group) →
  setVar(a,b ∈ G) →
  assume(Commute(a,b)) →
  
  lemma Group_Properties() {
    assert(
      IsGroup(G) ⇒ 
      ∀x ∈ G ⇒ HasInverse(x)
    )
  } →
  
  lemma Monoid_Power_Commute() {
    cite("Commutativity_Powers_Monoid") →
    assert(
      (IsMonoid(G) ∧ Commute(a,b)) ⇒
      (∀m,n ∈ ℤ ⇒ a^m ∘ b^n = b^n ∘ a^m)
    )
  } →
  
  apply(Group_Properties()) →
  apply(Monoid_Power_Commute()) →
  
  conclude(
    ∀m,n ∈ ℤ ⇒ a^m ∘ b^n = b^n ∘ a^m
  )
}