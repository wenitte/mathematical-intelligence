theorem ClosureUnionInequality() {
  assert(
    ∀T: TopologicalSpace, ∀I: InfiniteSet, ∀{Hi}i∈I: FamilyOfSets ⇒
    ∃H = ⋃i∈I Hi: [⋃i∈I cl(Hi) ≠ cl(⋃i∈I Hi)]
  )
} ↔

proof ClosureUnionInequality_Proof1() {
  setVar(ℝ, τd: EuclideanTopology) →
  define(Hn = [1/n, 1], n ≥ 2) →
  lemma ClosedIntervalProperty() {
    assert([1/n, 1] is closed in (ℝ, τd))
  } →
  apply(ClosedIntervalProperty()) →
  assert(cl(Hn) = Hn) →
  assert(⋃n≥2 cl(Hn) = ⋃n≥2 Hn = (0,1]) ∧
  assert(cl(⋃n≥2 Hn) = [0,1]) →
  conclude(⋃n≥2 cl(Hn) ≠ cl(⋃n≥2 Hn))
}

proof ClosureUnionInequality_Proof2() {
  setVar(ℝ, τd: EuclideanTopology) →
  setVar(ℚ ⊂ ℝ) →
  define(Bα = {α}, ∀α ∈ ℚ) →
  lemma RationalClosureProperty() {
    assert(⋃α∈ℚ cl(Bα) = ℚ)
  } →
  lemma UnionClosureProperty() {
    assert(cl(⋃α∈ℚ Bα) = ℝ)
  } →
  apply(RationalClosureProperty()) →
  apply(UnionClosureProperty()) →
  assert(⋃α∈ℚ cl(Bα) ⊂ cl(⋃α∈ℚ Bα)) →
  assert(⋃α∈ℚ cl(Bα) ≠ cl(⋃α∈ℚ Bα))
}