theorem Components_Are_Open() {
  assert(
    ∀T=(S,τ): TopologicalSpace ∧
    (S = ⋃{U ⊆ S: U∈τ ∧ Connected(U)}) →
    ∀C∈Components(T) → Open(C)
  )
}

proof Components_Are_Open() {
  setVar(T=(S,τ): TopologicalSpace) →
  setVar(C: Component(T)) →

  lemma Connected_Set_Intersection() {
    assert(
      ∀U: Connected →
      (U ∩ C ≠ ∅ ↔ (U ≠ ∅ ∧ U ⊆ C))
    )
  } →

  assert(
    C = C ∩ S
    [by Intersection_With_Subset]
  ) →

  assert(
    C = C ∩ ⋃{U ⊆ S: U∈τ ∧ Connected(U)}
    [by Substitution]
  ) →

  assert(
    C = ⋃{C ∩ U: U∈τ ∧ Connected(U)}
    [by Intersection_Distributes_Over_Union]
  ) →

  assert(
    C = ⋃{C ∩ U: U∈τ ∧ U∩C≠∅ ∧ Connected(U)}
    [by Union_With_Empty_Set]
  ) →

  apply(Connected_Set_Intersection()) →

  assert(
    C = ⋃{U ⊆ C: U∈τ ∧ Connected(U)}
    [by Connected_Set_Intersection]
  ) →

  assert(
    Open(C)
    [by Union_Of_Open_Sets]
  )
}