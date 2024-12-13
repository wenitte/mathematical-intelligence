theorem CartesianProduct_PowersetContainment() {
  assert(
    ∀S,T: Set ⇒ 
    S×T ⊆ 𝒫(𝒫(S∪T))
    where S×T := {{{x},{x,y}} | x∈S ∧ y∈T}
  )
} ↔

proof CartesianProduct_PowersetContainment() {
  setVar(S,T: Set) →
  setVar(x∈S, y∈T) →
  
  assert(x ∈ S) →
  assert(x ∈ S∪T) by DefSetUnion() →
  assert({x} ∈ 𝒫(S∪T)) by DefPowerSet() →
  
  assert(y ∈ T) →
  assert(y ∈ S∪T) by DefSetUnion() →
  assert({x,y} ∈ 𝒫(S∪T)) by DefPowerSet() →
  
  assert({{x},{x,y}} ∈ 𝒫(𝒫(S∪T))) by DefPowerSet() →
  
  assert(
    ∀x∈S, y∈T ⇒ {{x},{x,y}} ∈ 𝒫(𝒫(S∪T))
  ) →
  
  assert(S×T ⊆ 𝒫(𝒫(S∪T))) by DefCartesianProduct()
}