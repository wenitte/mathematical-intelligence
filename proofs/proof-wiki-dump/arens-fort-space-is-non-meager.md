theorem ArensFort_NonMeager() {
  let(T = (S,τ): TopologicalSpace) →
  assert(
    isArensFortSpace(T) →
    isNonMeager(T)
  )
}

proof ArensFort_NonMeager() {
  let(T = (S,τ): TopologicalSpace) →
  apply(MeagerSets_ArensFort_Theorem()) →
  assert(
    ∀A ⊆ S: (isMeager(A,T) ↔ A = {(0,0)})
  ) →
  assert({(0,0)} ≠ S) →
  assert(S ⊈ {(0,0)}) →
  conclude(¬isMeager(S,T)) →
  conclude(isNonMeager(T))
}

lemma MeagerSets_ArensFort_Theorem() {
  let(T = (S,τ): TopologicalSpace) →
  assert(
    isArensFortSpace(T) →
    ∀A ⊆ S: (isMeager(A,T) ↔ A = {(0,0)})
  )
}