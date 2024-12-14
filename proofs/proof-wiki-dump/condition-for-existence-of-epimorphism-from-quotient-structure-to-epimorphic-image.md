theorem QuotientStructureEpimorphism() {
  assert(
    let(A,⊙: AlgebraicStructure) ∧
    let(B,⊗: AlgebraicStructure) ∧
    let(R: CongruenceRelation(A,⊙)) ∧
    let(f: Epimorphism(A,⊙ → B,⊗)) ∧
    let(A/R,⊙_R: QuotientStructure(R)) ∧
    let(q_R: QuotientMapping(A → A/R)) ∧
    ∀x ∈ A: q_R(x) = [x]_R ⇒
    (∃g: Epimorphism(A/R,⊙_R → B,⊗): g ∘ q_R = f) ↔ R ⊆ R_f
  )
}

proof QuotientStructureEpimorphism() {
  // Necessary Condition (⇐)
  assume(R ⊆ R_f) →
  define(R_f := {(x,y) ∈ A×A | f(x) = f(y)}) →
  define(g: A/R → B := [x]_R ↦ f(x)) →
  
  lemma WellDefined() {
    assert(∀x,y ∈ A: xRy ⇒ (
      xR_fy → 
      [x]_R = [y]_R →
      g([x]_R) = f(x) = f(y) = g([y]_R)
    ))
  } →

  lemma Homomorphism() {
    assert(∀x,y ∈ A: 
      g([x]_R ⊙_R [y]_R) = g([x⊙y]_R) = f(x⊙y) = f(x)⊗f(y) = g([x]_R)⊗g([y]_R)
    )
  } →

  lemma Surjective() {
    assert(g∘q_R = f) →
    assert(f: Surjective) →
    apply(SurjectiveComposition()) →
    assert(g: Surjective)
  } →

  // Sufficient Condition (⇒)
  assume(∃g: Epimorphism(A/R,⊙_R → B,⊗): g∘q_R = f) →
  setVar(x,y: A, xRy) →
  assert(
    xRy →
    [x]_R = [y]_R →
    g([x]_R) = g([y]_R) →
    g(q_R(x)) = g(q_R(y)) →
    (g∘q_R)(x) = (g∘q_R)(y) →
    f(x) = f(y) →
    xR_fy →
    R ⊆ R_f
  )
}