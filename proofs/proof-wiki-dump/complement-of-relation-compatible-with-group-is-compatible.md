theorem Complement_Relation_Compatible() {
  assert(
    ∀G(isGroup(G, ∘) ∧
    ∀R(isRelation(R, G) ∧
    isCompatible(R, ∘) ∧
    ∀Q(Q = complement(G×G, R))) →
    isCompatible(Q, ∘))
  )
} ↔

proof Complement_Relation_Compatible() {
  setVar(G: Group, ∘: Operation, R: Relation, Q: Relation) →
  
  definition Q_Definition() {
    assert(
      ∀a,b ∈ G: aQb ↔ ¬(aRb)
    )
  } →
  
  lemma Compatibility_Forward() {
    setVar(x,y,z ∈ G) →
    assert(¬((x∘z)Q(y∘z))) →
    apply(Q_Definition()) →
    assert((x∘z)R(y∘z)) →
    apply(isCompatible(R,∘)) →
    assert((x∘z)∘z⁻¹ R (y∘z)∘z⁻¹) →
    apply(GroupAxiom_Associativity()) →
    apply(GroupAxiom_Inverse()) →
    assert(x R y) →
    apply(Q_Definition()) →
    assert(¬(xQy)) →
    apply(RuleOfTransposition()) →
    assert(∀x,y,z ∈ G: xQy → (x∘z)Q(y∘z))
  } →
  
  lemma Compatibility_Backward() {
    setVar(x,y,z ∈ G) →
    apply(SimilarArgument()) →
    assert(∀x,y,z ∈ G: xQy → (z∘x)Q(z∘y))
  } →
  
  apply(Compatibility_Forward()) →
  apply(Compatibility_Backward()) →
  apply(CompatibilityDefinition()) →
  assert(isCompatible(Q,∘))
}