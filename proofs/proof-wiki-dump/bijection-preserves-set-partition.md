theorem Bijection_Preserves_Partition() {
  assert(
    ∀S,T: Sets ∧ ∀f: S → T: Bijection ∧
    ∀I: IndexSet ∧ {Si}i∈I: Partition(S) →
    {f[Si]}i∈I: Partition(T)
  )
} ↔

proof Bijection_Preserves_Partition() {
  setVars(S,T: Sets, f: S → T, I: IndexSet, {Si}i∈I: Partition(S)) →
  
  lemma Partition_Properties() {
    assert(
      ∀i ∈ I: Si ≠ ∅ ∧
      S = ⋃i∈I Si ∧
      ∀i,j ∈ I: i ≠ j → Si ∩ Sj = ∅
    )
  } →

  goal_1: prove(∀i ∈ I: f[Si] ≠ ∅) {
    setVar(i: I) →
    assert(Si ≠ ∅) →
    assert(f[Si] = {t ∈ T | ∃s ∈ Si: f(s) = t}) →
    conclude(f[Si] ≠ ∅)
  } →

  goal_2: prove(T = ⋃i∈I f[Si]) {
    assert(f: Surjective) →
    assert(∀t ∈ T: ∃s ∈ S: f(s) = t) →
    assert(S = ⋃i∈I Si) →
    assert(∀s ∈ S: ∃i ∈ I: s ∈ Si) →
    conclude(∀t ∈ T: ∃i ∈ I: t ∈ f[Si]) →
    conclude(T = ⋃i∈I f[Si])
  } →

  goal_3: prove(∀i,j ∈ I: i ≠ j → f[Si] ∩ f[Sj] = ∅) {
    assert(f: Injective) →
    lemma Image_Intersection() {
      assert(∀A,B ⊆ S: f[A ∩ B] = f[A] ∩ f[B])
    } →
    apply(Image_Intersection()) →
    assert(∀i,j ∈ I: i ≠ j → Si ∩ Sj = ∅) →
    conclude(∀i,j ∈ I: i ≠ j → f[Si] ∩ f[Sj] = ∅)
  } →

  conclude({f[Si]}i∈I: Partition(T))
}