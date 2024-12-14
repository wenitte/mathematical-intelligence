theorem Centralizer_Is_Subgroup() {
  assert(
    ∀G:Group, ∀a ∈ G ⇒ 
    CG(a) := {x ∈ G | x ∘ a = a ∘ x} is_subgroup_of G
  )
} ↔

proof Centralizer_Is_Subgroup() {
  setVar(G: Group) →
  setVar(a: G) →
  
  // Non-empty property
  assert(e ∘ a = a ∘ e) →
  conclude(e ∈ CG(a)) →
  conclude(CG(a) ≠ ∅) →
  
  // Closure under operation
  setVar(x,y: CG(a)) →
  assert(x ∘ a = a ∘ x) ∧
  assert(y ∘ a = a ∘ y) →
  
  chain(
    x ∘ y ∘ a = 
    x ∘ (a ∘ y) =
    (a ∘ x) ∘ y =
    a ∘ (x ∘ y)
  ) →
  conclude(x ∘ y ∈ CG(a)) →
  
  // Inverse property
  setVar(x: CG(a)) →
  assert(x ∘ a = a ∘ x) →
  
  chain(
    x⁻¹ ∘ x ∘ a ∘ x⁻¹ =
    x⁻¹ ∘ a ∘ x ∘ x⁻¹ =
    x⁻¹ ∘ a = a ∘ x⁻¹
  ) →
  conclude(x⁻¹ ∈ CG(a)) →
  
  apply(Two_Step_Subgroup_Test) →
  conclude(CG(a) is_subgroup_of G)
}