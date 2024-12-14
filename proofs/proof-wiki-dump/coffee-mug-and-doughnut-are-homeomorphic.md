theorem Coffee_Mug_Doughnut_Homeomorphism() {
  assert(
    ∃f: Torus → CoffeeMug | 
    (f is_continuous ∧ f is_bijective ∧ f⁻¹ is_continuous)
  )
} ↔

proof Coffee_Mug_Doughnut_Homeomorphism() {
  setDef(Torus: TopologicalSpace) →
  setDef(CoffeeMug: TopologicalSpace) →
  
  assert(Torus.holes = 1) →
  assert(CoffeeMug.holes = 1) →
  
  lemma Genus_Invariant() {
    assert(
      ∀X,Y ∈ TopologicalSpace |
      (X.holes = Y.holes) →
      ∃f: X → Y | (f is_homeomorphism)
    )
  } →
  
  apply(Genus_Invariant()) →
  
  assert(
    Torus.holes = CoffeeMug.holes →
    ∃f: Torus → CoffeeMug | 
    (f is_continuous ∧ f is_bijective ∧ f⁻¹ is_continuous)
  )
}