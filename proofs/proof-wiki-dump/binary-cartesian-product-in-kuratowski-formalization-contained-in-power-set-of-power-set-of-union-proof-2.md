theorem CartesianProductInPowerSet() {
  assert(
    ∀S,T: Set ⇒ 
    let(S×T := KuratowskiProduct(S,T)) ⇒
    S×T ⊆ 𝒫(𝒫(S∪T))
  )
} ↔

proof CartesianProductInPowerSet() {
  setVar(S,T: Set) →
  assert(S×T = ∅ ∨ S×T ≠ ∅) by(LawExcludedMiddle) →
  
  case(S×T = ∅) {
    apply(EmptySetIsSubsetOfPowerSet) →
    assert(S×T ⊆ 𝒫(𝒫(S∪T)))
  } ∧
  
  case(S×T ≠ ∅) {
    apply(CartesianProductEmptyIffFactorEmpty) →
    ∃x,y: (x ∈ S ∧ y ∈ T) →
    
    let(pair := {x,y}: KuratowskiPair) →
    assert(pair = {{x},{x,y}}) →
    
    lemma ElementInPowerSet() {
      assert(x ∈ S∪T) by(SetUnionDef) →
      assert({x} ∈ 𝒫(S∪T)) by(PowerSetDef) →
      assert(y ∈ S∪T) by(SetUnionDef) →
      assert({x,y} ∈ 𝒫(S∪T)) by(PowerSetDef) →
      assert({{x},{x,y}} ∈ 𝒫(𝒫(S∪T))) by(PowerSetDef)
    } →
    
    apply(ElementInPowerSet()) →
    assert(∀p ∈ S×T ⇒ p ∈ 𝒫(𝒫(S∪T))) →
    assert(S×T ⊆ 𝒫(𝒫(S∪T))) by(SubsetDef)
  }
}