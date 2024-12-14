theorem QuotientSetInjection() {
  assert(
    ∀S,T:Set ∧ ∀R:EquivalenceRelation(S) ∧ ∀f:S→T ∧
    let S/R = QuotientSet(S,R) ∧
    let qR:S→S/R = QuotientMapping(S,R) ∧
    let φ:S/R→T = WellDefinedMap(f∘qR) →
    (φ isInjective) ↔ (∀x,y∈S: (x,y)∈R ↔ f(x)=f(y))
  )
}

proof QuotientSetInjection() {
  // Necessity (⇒)
  lemma NecessaryCondition() {
    setVar(x,y: S) →
    assume((x,y)∈R ↔ f(x)=f(y)) →
    assert(∀[x]R,[y]R∈S/R: φ([x]R)=φ([y]R) → [x]R=[y]R) →
    byDef(φ:S→S/R) →
    assert(∀x∈S: ∃f(x)∈S/R: φ([x]R)=f(x)) ∧
    assert(∀y∈S: ∃f(y)∈S/R: φ([y]R)=f(y)) →
    conclude(φ([x]R)=φ([y]R) → (x,y)∈R) →
    byDef(EquivalenceClass) →
    conclude(φ isInjective)
  }

  // Sufficiency (⇐)
  lemma SufficientCondition() {
    assume(φ isInjective) →
    byDef(WellDefined) →
    assert(∀x,y∈S: (x,y)∈R → f(x)=f(y)) →
    assert(∀x,y∈S: f(x)=f(y) → (x,y)∈R) →
    byDef(Injective) →
    assert(∀[x]R,[y]R∈S/R: φ([x]R)=φ([y]R) → [x]R=[y]R) →
    byDef(QuotientMap) →
    assert(∀x,y∈S: φ(qR(x))=φ(qR(y)) → (x,y)∈R) →
    byDef(Composition) →
    assert(∀x,y∈S: f(x)=f(y) → (x,y)∈R)
  }

  apply(NecessaryCondition()) ∧
  apply(SufficientCondition()) →
  conclude(theorem)
}