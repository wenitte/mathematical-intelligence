theorem EffectiveGroupAction() {
  let(G: Group, e: Identity(G), H: Subgroup(G))
  assert(
    ActsEffectively(G, G/H) ↔ (⋂_{a∈G} H^a = {e})
  )
}

proof EffectiveGroupAction() {
  let(G: Group, e: Identity(G), H: Subgroup(G))
  
  step1() {
    assert(
      ActsEffectively(G, G/H) ↔
      ∀g∈G: ∀aH∈G/H: (gaH = aH → g = e)
    )
  } →

  lemma LeftCosetEquality() {
    assert(
      ∀g∈G: ∀a∈G: (gaH = aH ↔ a^{-1}ga ∈ H)
    )
  } →

  step2() {
    apply(LeftCosetEquality()) →
    assert(
      ActsEffectively(G, G/H) ↔
      ∀g∈G: ∀a∈G: (a^{-1}ga ∈ H → g = e)
    )
  } →

  lemma ConjugateDefinition() {
    assert(
      ∀g∈G: ∀a∈G: (g ∈ aHa^{-1} ↔ g ∈ H^a)
    )
  } →

  step3() {
    apply(ConjugateDefinition()) →
    assert(
      ActsEffectively(G, G/H) ↔
      ∀g∈G: ∀a∈G: (g ∈ H^a → g = e)
    )
  } →

  step4() {
    assert(
      [∀g∈G: ∀a∈G: (g ∈ H^a → g = e)] ↔
      [⋂_{a∈G} H^a = {e}]
    )
  } →

  conclude() {
    assert(
      ActsEffectively(G, G/H) ↔ (⋂_{a∈G} H^a = {e})
    )
  }
}