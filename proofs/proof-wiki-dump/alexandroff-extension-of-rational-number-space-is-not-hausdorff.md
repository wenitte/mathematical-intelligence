theorem Alexandroff_Extension_Not_Hausdorff() {
  let(Q: SetWithTopology(τ_d), τ_d: EuclideanTopology) ∧
  let(p: Element, p ∉ Q) ∧
  let(Q*: Set = Q ∪ {p}) ∧
  let(T*: TopologicalSpace = (Q*, τ*)) ∧
  let(τ*: AlexandroffExtension(Q, τ_d)) →
  assert(¬isHausdorff(T*))
} ↔

proof Alexandroff_Extension_Not_Hausdorff() {
  lemma Hausdorff_Condition() {
    assert(isHausdorff(T*) ↔ isLocallyCompactHausdorff(Q, τ_d))
  } →
  
  lemma Rational_Space_Properties() {
    assert(¬isLocallyCompactHausdorff(Q, τ_d))
  } →
  
  apply(Hausdorff_Condition()) →
  apply(Rational_Space_Properties()) →
  assert(¬isHausdorff(T*)) →
  conclude()
}