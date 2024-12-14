theorem Closure_Infinite_Union_Not_Equal_Union_Closures() {
  assert(
    ∃T: TopologicalSpace ∧
    ∃I: InfiniteSet ∧
    ∃{Hi}i∈I: IndexedFamily(subsets(S)) ∧
    let H = ⋃i∈I Hi →
    ¬(∀T,I,{Hi}: ⋃i∈I cl(Hi) = cl(⋃i∈I Hi))
  )
} ↔

proof Closure_Infinite_Union_Not_Equal_Union_Closures() {
  setVar(ℝ, τd: EuclideanTopology) →
  setVar(ℚ ⊂ ℝ) →
  setVar(Bα = {α}: SingletonSet, ∀α ∈ ℚ) →

  lemma Union_Closures_Singleton_Rationals() {
    assert(⋃α∈ℚ cl(Bα) = ℚ)
  } →

  lemma Closure_Union_Singleton_Rationals() {
    assert(cl(⋃α∈ℚ Bα) = ℝ)
  } →

  apply(Union_Closures_Singleton_Rationals()) →
  apply(Closure_Union_Singleton_Rationals()) →
  
  assert(⋃α∈ℚ cl(Bα) ⊂ cl(⋃α∈ℚ Bα)) →
  assert(ℚ ⊂ ℝ) →
  assert(ℚ ≠ ℝ) →
  
  conclude(
    ∃T,I,{Hi}: ⋃i∈I cl(Hi) ≠ cl(⋃i∈I Hi)
  )
}