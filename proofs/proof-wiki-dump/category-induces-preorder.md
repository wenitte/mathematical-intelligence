theorem Category_Induces_Preorder() {
  let(𝐒: Category, S: Set)
  assert(S = Objects(𝐒))
  define(⪯: BinaryRelation[S × S])
  assert(
    ∀a,b ∈ S: (a ⪯ b ↔ ∃f: Morphism(a → b))
  )
  prove(IsPreorder(⪯, S))
}

proof Category_Induces_Preorder() {
  lemma Reflexivity() {
    setVar(a: S) →
    assert(∃id_a: Morphism(a → a)) →
    assert(id_a = Identity(a)) →
    therefore(a ⪯ a)
  } →

  lemma Transitivity() {
    setVar(a,b,c: S) →
    assume(a ⪯ b ∧ b ⪯ c) →
    therefore(∃f: Morphism(a → b)) →
    therefore(∃g: Morphism(b → c)) →
    assert(g ∘ f: Morphism(a → c)) →
    therefore(a ⪯ c)
  } →

  apply(Reflexivity()) →
  apply(Transitivity()) →
  assert(IsReflexive(⪯, S) ∧ IsTransitive(⪯, S)) →
  therefore(IsPreorder(⪯, S))
}