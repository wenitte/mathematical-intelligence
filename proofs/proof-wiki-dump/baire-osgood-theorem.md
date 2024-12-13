theorem Baire_Osgood() {
  let(X: BaireSpace, Y: MetrizableSpace) →
  let(f: X → Y) →
  let(fn: SequenceOf(C(X,Y))) →
  assert(f = limPointwise(fn)) →
  let(Df: SetOf(DiscontinuityPoints(f))) →
  assert(Df.isMeager(X))
} ↔

proof Baire_Osgood() {
  let(d: Metric(Y)) →
  let(ωf: X → ℝ, oscillationOf(f)) →
  
  assert(Df = ∪n∈ℕ{x ∈ X: ωf(x) ≥ 1/n}) →
  
  lemma NowhereDense() {
    ∀ε ∈ ℝ>0 →
    let(Fε = {x ∈ X: ωf(x) ≥ 5ε}) →
    assert(Fε.isNowhereDense())
  } →
  
  let(ε ∈ ℝ>0) →
  let(An = ∩i,j≥n{x ∈ X: d(fi(x), fj(x)) ≤ ε}) →
  assert(∪n∈ℕAn = X) →
  
  let(U ⊆ X, U.isOpen() ∧ U ≠ ∅) →
  assert(∃k ∈ ℕ: An[k] ∩ U.hasInteriorPoint()) →
  let(V ⊆ An[k] ∩ U, V.isOpen()) →
  
  assert(∀x,y ∈ V: d(f(x), f(y)) ≤ 4ε) → {
    assert(∀i,j≥k: d(fi(x), fj(x)) ≤ ε) →
    assert(d(f(x), fk(x)) ≤ ε) →
    assert(∃Vx⊆V: ∀y∈Vx: d(fk(y), fk(x)) ≤ ε) →
    assert(∀y∈Vx: d(f(y), fk(x)) ≤ 2ε) →
    conclude(d(f(x), f(y)) ≤ 4ε)
  } →
  
  assert(∀x∈V: ωf(x) ≤ 4ε) →
  conclude(V ∩ Fε = ∅) →
  conclude(Df.isMeager(X))
}