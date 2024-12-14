theorem LocalRingCharacterization() {
  let R: Ring
  let J ⊆ R: MaximalIdeal
  assert(
    (R\J = R× → isLocal(R,J)) ∧
    (∀x∈J → isUnit(1+x) → isLocal(R,J))
  )
}

proof LocalRingCharacterization() {
  // Part 1
  proof Part1() {
    assume(R\J = R×) →
    lemma IdealOfUnits() {
      assert(∀I⊆R → I≠R → I⊆J)
    } →
    apply(IdealOfUnits()) →
    assert(isUniqueMaximalIdeal(J)) →
    conclude(isLocal(R,J))
  }

  // Part 2
  proof Part2() {
    setVar(x: R\J) →
    let I = idealGenerate(J ∪ {x}) →
    assert(J ⊊ I ⊆ R) →
    apply(MaximalIdealProperty(J)) →
    assert(I = R) →
    ∃t∈R,m∈J → tx + m = 1 →
    assert(tx = 1-m) →
    assert(tx ∈ 1+J) →
    assume(∀y∈J → isUnit(1+y)) →
    assert(isUnit(tx)) →
    conclude(isUnit(x))
  } →
  
  apply(Part1()) →
  assert(R\J ⊆ R×) →
  assert(isLocal(R,J))
}