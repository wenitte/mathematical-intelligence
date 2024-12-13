theorem Burnsides_Lemma() {
  let(G: FiniteGroup, X: Set) →
  let(X/G: Set[Orbits]) →
  let(Stab[x]: Set, ∀x ∈ X) →
  let(X^g := {x ∈ X: gx = x}, ∀g ∈ G) →
  assert(
    |X/G| = (1/|G|) ∑{g∈G} |X^g|
  )
} ↔

proof Burnsides_Lemma() {
  assert((1/|G|) ∑{g∈G} |X^g|) →
  
  step_1() {
    assert((1/|G|) ∑{g∈G} |{x ∈ X: gx = x}|) →
    by(definition[X^g])
  } →

  step_2() {
    assert((1/|G|) ∑{x∈X} |{g ∈ G: gx = x}|) →
    by(reindex_summation)
  } →

  step_3() {
    assert((1/|G|) ∑{x∈X} |Stab[x]|) →
    by(definition[Stabilizer])
  } →

  step_4() {
    assert((1/|G|) ∑{x∈X} (|G|/|Orb[x]|)) →
    by(Orbit_Stabilizer_Theorem)
  } →

  step_5() {
    assert(∑{x∈X} (1/|Orb[x]|)) →
    by(arithmetic)
  } →

  step_6() {
    assert(∑{Orb[x]∈X/G} (∑{x∈Orb[x]} (1/|Orb[x]|))) →
    by(sum_reorganization)
  } →

  step_7() {
    assert(∑{Orb[x]∈X/G} 1) →
    by(sum_evaluation)
  } →

  step_8() {
    assert(|X/G|) →
    by(definition[cardinality])
  }
}