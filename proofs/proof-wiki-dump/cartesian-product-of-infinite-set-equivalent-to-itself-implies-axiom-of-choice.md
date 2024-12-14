theorem CartesianProduct_InfiniteSet_AC() {
  assert(
    ∀A[DedekindInfinite(A) → (A ∼ A×A)] → AC()
  )
} ↔

proof CartesianProduct_InfiniteSet_AC() {
  lemma Reduction_To_WellOrdering() {
    assert(AC() ↔ ZermeloWellOrdering())
  } →
  
  setVar(B: Set, Infinite(B)) →
  assume(B ∩ On = ∅) →
  
  lemma NoSurjection() {
    assert(∃β ∈ On\{∅}[¬∃f:B→β[Surjective(f)]])
  } →
  apply(NoSurjection()) →
  setVar(β: On) →
  
  assert(ω ⊆ β ⊆ B∪β) →
  lemma DedekindInfinite_Union() {
    assert(Infinite(β) → DedekindInfinite(B∪β))
  } →
  
  apply(MainHypothesis(B∪β)) →
  setVar(φ: B∪β → (B∪β)×(B∪β), Bijective(φ)) →
  
  define(Sx(x) := {γ ∈ β: φ(γ) ∈ β×{x}}) →
  
  proof ByContradiction_NonEmptySx() {
    assume(∃x₀ ∈ B[Sx(x₀) = ∅]) →
    define(ψ(y) := match φ(y) with
      | (γ,x₀) → γ
      | _ → 0
    ) →
    assert(Surjective(ψ: B→β)) →
    assert(Contradiction(NoSurjection()))
  } →
  
  conclude(∀x ∈ B[Sx(x) ≠ ∅]) →
  
  define(χ(x) := min(Sx(x))) →
  
  proof Injective_χ() {
    assert(∀x,y ∈ B[χ(x) = χ(y) → x = y]) →
    assert(Injective(χ: B→β))
  } →
  
  lemma Injection_WellOrder() {
    assert(Injective(χ: B→β) → WellOrderable(B))
  } →
  
  apply(Injection_WellOrder()) →
  assert(WellOrderable(B)) →
  
  conclude(ZermeloWellOrdering())
}