theorem Center_Is_Kernel_Of_Conjugacy_Action() {
  assert(
    ∀G: Group ∧
    let Z = kernel(conjugacyAction(G)) →
    Z = center(G)
  )
} ↔

proof Center_Is_Kernel_Of_Conjugacy_Action() {
  setVar(G: Group) →
  setVar(Z: Set) →
  setVar(x: Element) →
  
  assert(
    x ∈ kernel(conjugacyAction(G)) ↔
    ∀y ∈ G: (x • y • x⁻¹ = y)
  ) →
  
  assert(
    ∀y ∈ G: (x • y • x⁻¹ = y) ↔
    ∀y ∈ G: (x • y = y • x)
  ) →
  
  lemma Group_Division() {
    assert(
      ∀a,b,c ∈ G:
      (a • b = c ↔ b = a⁻¹ • c)
    )
  } →
  
  apply(Group_Division()) →
  
  assert(
    ∀y ∈ G: (x • y = y • x) ↔
    x ∈ center(G)
  ) →
  
  conclude(Z = center(G))
}