theorem Bourbaki_Witt_Fixed_Point() {
  assert(
    ∀X: OrderedSet[ChainComplete] ∧
    ∀f: (X → X)[Inflationary] ∧
    ∀x ∈ X ⇒
    ∃y ∈ X: (y ≥ x ∧ f(y) = y)
  )
} ↔

proof Bourbaki_Witt_Fixed_Point() {
  setVar(γ: HartogsNumber(X)) →
  setVar(x: X) →
  
  define(g: γ → X) {
    g(0) = x ∧
    g(α + 1) = f(g(α)) ∧
    g(α) = sup({g(β) | β < α})[when α is_limit_ordinal]
  } →
  
  lemma Chain_Properties() {
    assert(
      ∀α < γ: {g(β) | β < α} is_chain ∧
      g is_increasing
    )
  } →
  
  lemma Strictly_Monotone() {
    assert(
      g is_strictly_increasing ⇒
      g is_injection
    )
  } →
  
  apply(HartogsNumber_Definition) →
  assert(∃α,β < γ: α < β ∧ g(α) = g(β)) →
  
  assert(α + 1 ≤ β) →
  assert(g(α) ≤ g(α + 1) ≤ g(β) = g(α)) →
  assert(f(g(α)) = g(α)) →
  
  conclude(
    ∃y ∈ {y ∈ X | x ≤ y}: f(y) = y
  )
}