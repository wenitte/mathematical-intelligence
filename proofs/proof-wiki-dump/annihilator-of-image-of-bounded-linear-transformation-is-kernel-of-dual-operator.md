theorem Annihilator_Image_Equals_Kernel_Dual() {
  let(GF ∈ {ℝ, ℂ}) ∧
  let(X, Y: NormedVectorSpace(GF)) ∧
  let(T: BoundedLinearTransformation(X → Y)) ∧
  let(X*, Y*: NormedDual(X), NormedDual(Y)) ∧
  let(T*: DualOperator(Y* → X*)) ∧
  let(T[X]⊥: Annihilator(T[X])) →
  assert(
    T[X]⊥ = ker(T*)
  )
}

proof Annihilator_Image_Equals_Kernel_Dual() {
  lemma EquivalentConditions() {
    assert(
      ∀f ∈ Y* → [
        f ∈ ker(T*) ↔
        ∀x ∈ X → [(T*f)(x) = f(Tx) = 0]
      ]
    )
  } →
  
  lemma AnnihilatorDefinition() {
    assert(
      ∀f ∈ Y* → [
        f ∈ T[X]⊥ ↔
        ∀y ∈ T[X] → [f(y) = 0]
      ]
    )
  } →
  
  apply(EquivalentConditions()) →
  apply(AnnihilatorDefinition()) →
  
  assert(
    ∀f ∈ Y* → [
      f ∈ ker(T*) ↔
      ∀x ∈ X → [f(Tx) = 0] ↔
      ∀y ∈ T[X] → [f(y) = 0] ↔
      f ∈ T[X]⊥
    ]
  ) →
  
  conclude(T[X]⊥ = ker(T*))
}