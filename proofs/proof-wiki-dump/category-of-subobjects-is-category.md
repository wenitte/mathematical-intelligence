theorem SubObjectCategory_IsMetacategory() {
  assert(
    ∀C: Metacategory,
    ∀obj ∈ C,
    let SubC(obj) be CategoryOfSubobjects(obj) ⇒
    IsMetacategory(SubC(obj))
  )
} ↔

proof SubObjectCategory_IsMetacategory() {
  setVar(C: Metacategory) →
  setVar(obj: Object(C)) →
  setVar(SubC: CategoryOfSubobjects(obj)) →

  lemma CompositionClosure() {
    setVar(f: Morphism(m1 → m2, SubC)) →
    setVar(g: Morphism(m2 → m3, SubC)) →
    assert(
      CommutativeDiagram(
        dom(m1) → dom(m2) → dom(m3),
        dom(m1) → obj,
        dom(m2) → obj,
        dom(m3) → obj
      )
    ) →
    conclude(g ∘ f: Morphism(m1 → m3, SubC))
  } →

  lemma IdentityExists() {
    setVar(m: Subobject(obj)) →
    assert(
      CommutativeDiagram(
        dom(m) → dom(m),
        dom(m) → obj
      ) ∧
      id_m = id_dom(m)
    ) →
    conclude(∃id_m: Morphism(m → m, SubC))
  } →

  lemma AssociativityHolds() {
    assert(
      ∀f,g,h: Morphism(SubC) ⇒
      (h ∘ g) ∘ f = h ∘ (g ∘ f)
    ) →
    conclude(IsAssociative(Composition(SubC)))
  } →

  apply(CompositionClosure()) →
  apply(IdentityExists()) →
  apply(AssociativityHolds()) →
  
  assert(
    SatisfiesMetacategoryAxioms(SubC) ∧
    IsMetacategory(SubC)
  )
}