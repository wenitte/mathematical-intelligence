theorem ZornsLemma_from_AxiomOfChoice() {
  assert(
    (AxiomOfChoice() ∧ 
     ∀S(S ≠ ∅ ∧ isOrderedSet(S, ≼)) ∧
     ∃T(T ⊆ P(S) ∧ isTotallyOrdered(T, ≼)))
    →
    ∀t∈T(∃m∈T(isMaximal(m) ∧ t⊆m))
  )
} ↔

proof ZornsLemma_from_AxiomOfChoice() {
  // Proof 1 - Main constructive proof
  setDef(x≼ := {y ∈ X: y ≼ x}) →
  setDef(𝕊 := image(x≼, X → P(X))) →
  
  lemma OrderingEquivalence() {
    assert(∀x,y∈X(x≼ ⊆ y≼ ↔ x ≼ y))
  } →
  
  setDef(𝕏 := {C ⊆ X: isChain(C, ≼)}) →
  assert(∀C∈𝕏(⋃C ∈ 𝕏)) →

  // Choice function application
  letExists(f: P(X)\{∅} → X) →
  assert(∀A∈P(X)\{∅}(f(A) ∈ A)) →

  // Define hat operation
  setDef(Â := {x∈X: A∪{x}∈𝕏}) →
  
  // Define g mapping
  functionDef(g: 𝕏 → 𝕏,
    g(A) := if(Â\A ≠ ∅) then A∪{f(Â\A)} else A
  ) →
  
  // Tower construction
  setDef(Tower(T) := 
    ∅∈T ∧
    ∀A∈T(g(A)∈T) ∧
    ∀C⊆T(isChain(C) → ⋃C∈T)
  ) →
  
  letExists(T₀ := ⋂{T: Tower(T)}) →
  assert(isChain(T₀)) →
  
  letExists(M := ⋃T₀) →
  assert(M = g(M)) →
  assert(isMaximal(M))
} ↔

proof ZornsLemma_from_AxiomOfChoice_Alt() {
  // Proof 2 - Contradiction via ordinals
  assumeForContradiction(∀x∈X(∃y∈X(x ≺ y))) →
  
  letExists(f: X → X, ∀x∈X(x ≺ f(x))) →
  letExists(g: 𝓒 → X, ∀C∈𝓒(isUpperBound(g(C), C))) →
  
  functionDef(h: On → X,
    h(0) := p,
    h(α+1) := f(h(α)),
    h(λ) := f(g(h[λ])) for limit λ
  ) →
  
  assert(isInjective(h)) →
  assert(contradiction(BuraliForti())) →
  assert(∃x∈X(isMaximal(x)))
} ↔

proof ZornsLemma_from_AxiomOfChoice_Simple() {
  assert(AxiomOfChoice() → TukeysLemma()) →
  assert(TukeysLemma() → ZornsLemma()) →
  assert(ZornsLemma())
}