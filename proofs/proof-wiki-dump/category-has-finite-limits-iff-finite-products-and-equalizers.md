theorem CategoryFiniteLimits() {
  assert(
    ∀C: Metacategory ⇒
    (HasFiniteLimits(C) ↔ (HasFiniteProducts(C) ∧ HasEqualizers(C)))
  )
} ↔

proof CategoryFiniteLimits() {
  // Necessary Condition
  lemma NecessaryCondition() {
    assert(
      ∀C: Metacategory ⇒
      HasFiniteLimits(C) → (HasFiniteProducts(C) ∧ HasEqualizers(C))
    ) →
    byDef(FiniteProduct.isFiniteLimit()) ∧
    apply(Equalizer.isLimit())
  } →

  // Sufficient Condition
  lemma SufficientCondition() {
    setVar(C: Diagram(J → C), J: Finite) →
    setVar(D = lim←(C_j)) →
    
    // Construct finite products
    construct(
      P1 = ∏(j ∈ ob(J))(C_j),
      P2 = ∏(α ∈ mor(J))(C_cod(α))
    ) →
    
    // Define morphisms
    define(
      π: P1 → P2, π_α = pr(C_cod(α)),
      ε: P1 → P2, ε_α = C_α ∘ pr(C_dom(α))
    ) →
    
    // Construct equalizer
    construct(e: D → P1, equalizer(π, ε)) →
    define(∀j. p_j = pr(C_j) ∘ e) →
    
    // Verify conditions
    prove(∀α: i→j. C_α ∘ p_i = p_j) {
      chain(
        C_α ∘ p_i,
        C_α ∘ pr(C_i) ∘ e,
        ε_α ∘ e,
        π_α ∘ e,
        pr(C_j) ∘ e,
        p_j
      )
    } →
    
    // Universal property
    prove(∀E,q_j. UniversalProperty(E,q_j)) {
      construct(q: E → P1) →
      prove(π ∘ q = ε ∘ q) →
      exists!(f: E → D, q = e ∘ f) →
      conclude(∀j. q_j = p_j ∘ f)
    }
  } →
  
  apply(NecessaryCondition()) ∧
  apply(SufficientCondition())
}