theorem Circuit_Length() {
  assert(
    ∀G: SimpleGraph ∧ ∀C: Circuit(G) ⇒
    |E(C)| ≥ 3
  )
} ↔

proof Circuit_Length() {
  setVar(G: SimpleGraph) →
  setVar(C: Circuit(G)) →
  
  lemma No_Single_Edge() {
    assert(|E(C)| ≠ 1) ↔
    assume(|E(C)| = 1) →
    setVar(e: E(C)) →
    assert(¬HasLoops(G)) →
    assert(∃u,v: Vertices(e) ∧ u ≠ v) →
    assert(¬IsCircuit(e)) →
    contradiction()
  } →

  lemma No_Double_Edge() {
    assert(|E(C)| ≠ 2) ↔
    assume(|E(C)| = 2) →
    setVar(e,f: E(C)) →
    setVar(u,v: Vertices(e)) →
    assert(e = uv ∧ f = vu) →
    assert(MultipleEdge(u,v)) →
    assert(¬IsMultiGraph(G)) →
    contradiction()
  } →

  lemma Three_Edge_Exists() {
    setVar(V = {u,v,w}) →
    setVar(E = {{u,v}, {u,w}, {v,w}}) →
    setVar(G' = (V,E)) →
    assert(IsCircuit(⟨u,w,v,u⟩, G')) →
    assert(∃C: Circuit(G) ∧ |E(C)| = 3)
  } →

  apply(No_Single_Edge()) →
  apply(No_Double_Edge()) →
  apply(Three_Edge_Exists()) →
  assert(|E(C)| ≥ 3)
}