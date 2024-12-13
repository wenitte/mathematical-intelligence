theorem Borel_Cantelli_Lemma() {
  let(X,Σ,μ: MeasureSpace) ∧
  let(En: Sequence[ΣMeasurable]) ∧
  assert(
    (∑[n=1→∞] μ(En) < ∞) →
    μ(limsup[n→∞] En) = 0
  )
} ↔

proof Borel_Cantelli_Lemma() {
  setDef(limsup[n→∞] En = ∩[i=1→∞](∪[j=i→∞] Ej)) →
  
  lemma Inequality_Step() {
    assert(
      μ(limsup[n→∞] En) = 
      μ(∩[i=1→∞](∪[j=i→∞] Ej)) ≤ 
      μ(∪[j=i→∞] Ej)
    ) ∧
    apply(Measure_Is_Monotone) ∧
    apply(Intersection_Is_Subset)
  } →

  lemma Subadditive_Step() {
    assert(
      μ(∪[j=i→∞] Ej) ≤ ∑[j=i→∞] μ(Ej)
    ) ∧
    apply(Measure_Is_Subadditive)
  } →

  assert(∑[n=1→∞] μ(En) < ∞) →
  apply(Tail_Of_Convergent_Series) →
  assert(lim[i→∞] ∑[n=i→∞] μ(En) = 0) →

  lemma Final_Bounds() {
    apply(Inequality_Step) ∧
    apply(Lower_Upper_Bounds_Sequences) →
    assert(μ(limsup[n→∞] En) ≤ 0)
  } →

  assert(μ(limsup[n→∞] En) ≥ 0) →
  conclude(μ(limsup[n→∞] En) = 0)
}