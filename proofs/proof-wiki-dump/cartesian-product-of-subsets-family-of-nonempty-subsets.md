theorem CartesianProduct_Subset_Family() {
  let(I: IndexSet) →
  let({Si}[i∈I]: Family[Set]) →
  let({Ti}[i∈I]: Family[Set]) →
  let(S = ∏[i∈I] Si) →
  let(T = ∏[i∈I] Ti) →
  assume(∀i∈I: Ti ≠ ∅) →
  assert(
    T ⊆ S ↔ ∀i∈I: Ti ⊆ Si
  )
} ↔

proof CartesianProduct_Subset_Family() {
  lemma Forward() {
    assert(∀i∈I: Ti ⊆ Si → T ⊆ S)
  } →
  
  lemma Backward() {
    assume(T ⊆ S) →
    setVar(j: I) →
    setVar(xj ∈ Tj) →
    let(x[j] = xj) →
    
    forall(k∈I: k≠j) {
      assume(Tk ≠ ∅) →
      byAxiomOfChoice(∃x[k] ∈ Tk)
    } →
    
    assert(x ∈ T) →
    assert(x ∈ S) →
    byDef(CartesianProduct) {
      assert(∀i∈I: x[i] ∈ Si)
    } →
    
    assert(x[j] = xj ∈ Sj) →
    
    byArbitrary(xj ∈ Tj) {
      assert(Tj ⊆ Sj)
    } →
    
    byArbitrary(j ∈ I) {
      assert(∀i∈I: Ti ⊆ Si)
    }
  } →
  
  apply(Forward()) ∧ apply(Backward()) →
  assert(T ⊆ S ↔ ∀i∈I: Ti ⊆ Si)
} ↔

requires(AxiomOfChoice)