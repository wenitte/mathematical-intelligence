theorem K5_Not_Planar() {
  assert(
    K5 ∈ Graphs ⇒ ¬isPlanar(K5)
  )
} ↔

proof K5_Not_Planar() {
  lemma PlanarDef() {
    assert(
      ∀G ∈ Graphs: isPlanar(G) ↔ 
      ∃drawing ∈ Plane: (
        ∀e1,e2 ∈ edges(G):
        intersect(e1,e2) ⊆ vertices(G)
      )
    )
  } →

  lemma K4_Planar() {
    assert(isPlanar(K4)) →
    proof_by_construction(K4_planar_drawing)
  } →

  setVar(K4: subgraph(K5)) →
  setVar(v5: vertex) →
  assert(v5 ∉ vertices(K4)) →
  
  lemma K4_Face_Equivalence() {
    assert(
      ∀f ∈ faces(K4):
      ∃v1,v2,v3 ∈ vertices(K4):
      f = triangle(v1,v2,v3) ∧
      ∃v4 ∈ vertices(K4):
      ¬incident(v4,f)
    )
  } →

  setVar(E: v5) →
  place(E, exterior(triangle(A,B,C))) →
  
  assert(
    constructible_without_crossing(edge(A,E)) ∧
    constructible_without_crossing(edge(B,E)) ∧
    constructible_without_crossing(edge(C,E))
  ) →
  
  lemma Final_Edge_Impossible() {
    assert(
      ∀placement ∈ Plane:
      edge(D,E) crosses_one_of {edge(A,B), edge(B,C), edge(A,C)}
    )
  } →
  
  conclude(¬isPlanar(K5))
}