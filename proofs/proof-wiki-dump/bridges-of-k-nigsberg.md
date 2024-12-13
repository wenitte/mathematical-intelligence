theorem Koenigsberg_Bridge_Problem() {
  assert(
    ∀G(V,E) where G = Koenigsberg_Graph ⇒
    (¬∃circuit: Eulerian_Circuit(circuit, G) ∧
     ¬∃trail: Eulerian_Trail(trail, G))
  )
}

proof Koenigsberg_Bridge_Problem() {
  setGraph(G: Graph) →
  defineVertices(V = {v₁, v₂, v₃, v₄}) →
  defineEdges(E = {e₁, e₂, e₃, e₄, e₅, e₆, e₇}) →
  
  lemma Vertex_Degrees() {
    assert(
      degree(v₁) = 3 ∧
      degree(v₂) = 3 ∧
      degree(v₃) = 3 ∧
      degree(v₄) = 5
    )
  } →

  lemma Odd_Vertex_Count() {
    apply(Vertex_Degrees()) →
    assert(|{v ∈ V : degree(v) mod 2 = 1}| = 4)
  } →

  lemma Eulerian_Circuit_Property() {
    assert(
      ∀g: Graph →
      Eulerian_Circuit_Exists(g) ↔
      ∀v ∈ vertices(g): degree(v) mod 2 = 0
    )
  } →

  lemma Eulerian_Trail_Property() {
    assert(
      ∀g: Graph →
      Eulerian_Trail_Exists(g) ↔
      |{v ∈ vertices(g): degree(v) mod 2 = 1}| ≤ 2
    )
  } →

  apply(Odd_Vertex_Count()) →
  apply(Eulerian_Circuit_Property()) →
  apply(Eulerian_Trail_Property()) →
  
  assert(¬Eulerian_Circuit_Exists(G)) →
  assert(¬Eulerian_Trail_Exists(G))
}