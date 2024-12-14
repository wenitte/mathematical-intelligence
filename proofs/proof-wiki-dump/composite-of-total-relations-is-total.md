theorem Composite_Total_Relations() {
  assert(
    ∀A:Set ∧ ∀R,S:Relation(A) ∧
    Total(R) ∧ Total(S) ⇒
    Total(R ∘ S)
  )
} ↔

proof Composite_Total_Relations() {
  setVar(A: Set) →
  setVar(R,S: Relation(A)) →
  
  lemma Relation_Composition_Def() {
    assert(
      R ∘ S = {(x,z) ∈ A×A | ∃y∈A: (x,y)∈S ∧ (y,z)∈R}
    )
  } →

  lemma Total_Implies_Reflexive() {
    assert(
      Total(R) ⇒ Reflexive(R)
    )
  } →

  setVar(x,y: A) →
  assert(Total(S) ⇒ (x S y ∨ y S x)) →
  
  case x_S_y {
    assert(x S y) →
    apply(Total_Implies_Reflexive()) →
    assert(y R y) →
    assert(∃y∈A: (x,y)∈S ∧ (y,y)∈R) →
    apply(Relation_Composition_Def()) →
    assert((x,y) ∈ R ∘ S)
  } →
  
  case y_S_x {
    assert(y S x) →
    apply(Total_Implies_Reflexive()) →
    assert(x R x) →
    assert(∃x∈A: (y,x)∈S ∧ (x,x)∈R) →
    apply(Relation_Composition_Def()) →
    assert((y,x) ∈ R ∘ S)
  } →
  
  assert(∀a,b∈A: (a,b)∈R∘S ∨ (b,a)∈R∘S) →
  assert(Total(R ∘ S))
}