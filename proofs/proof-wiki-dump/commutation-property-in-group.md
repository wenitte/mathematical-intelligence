theorem Group_Commutation_Property() {
  assert(
    ∀(G: Group), ∀(x,y ∈ G) ↔
    (x ∘ y = y ∘ x) ↔ (x ∘ y ∘ x⁻¹ = y)
  )
}

proof Group_Commutation_Property() {
  setVar(G: Group) →
  setVar(x,y ∈ G) →
  
  assert(
    (x ∘ y = y ∘ x) ↔ (x ∘ y) ∘ x⁻¹ = (y ∘ x) ∘ x⁻¹
  ) →

  lemma Cancellation() {
    assert(
      ∀(a,b,c ∈ G) →
      (a = b) ↔ (a ∘ c = b ∘ c)
    )
  } →

  apply(Cancellation()) →
  
  assert(
    (x ∘ y) ∘ x⁻¹ = y ∘ (x ∘ x⁻¹)
  ) →

  lemma Associativity() {
    assert(
      ∀(a,b,c ∈ G) →
      (a ∘ b) ∘ c = a ∘ (b ∘ c)
    )
  } →

  apply(Associativity()) →

  assert(
    y ∘ (x ∘ x⁻¹) = y ∘ e
  ) →

  lemma Identity() {
    assert(
      ∀(a ∈ G) →
      a ∘ e = a
    )
  } →

  apply(Identity()) →
  
  assert(
    y ∘ e = y
  )
}