theorem Category_Axioms_Self_Dual() {
  let CT = {set of category axioms}
  let CT* = {dual statements of CT}
  assert(CT = CT*)
} ↔

proof Category_Axioms_Self_Dual() {
  setAxioms(CT) {
    A1: dom(idₐ) = A
    A2: cod(idₐ) = A
    A3: f ∘ 1_{dom(f)} = f
    A4: 1_{cod(f)} ∘ f = f
    A5: dom(g ∘ f) = dom(f)
    A6: cod(g ∘ f) = cod(g)
    A7: h ∘ (g ∘ f) = (h ∘ g) ∘ f
  } →

  setAxioms(CT*) {
    A1*: cod(idₐ) = A
    A2*: dom(idₐ) = A
    A3*: 1_{cod(f)} ∘ f = f
    A4*: f ∘ 1_{dom(f)} = f
    A5*: cod(f ∘ g) = cod(f)
    A6*: dom(f ∘ g) = dom(g)
    A7*: (f ∘ g) ∘ h = f ∘ (g ∘ h)
  } →

  lemma Dual_Equivalence() {
    assert(
      ∀i ∈ {1,...,7} : 
      Aᵢ ↔ Aᵢ* under variable renaming
    )
  } →
  
  apply(Dual_Equivalence()) →
  assert(CT = CT*)
}