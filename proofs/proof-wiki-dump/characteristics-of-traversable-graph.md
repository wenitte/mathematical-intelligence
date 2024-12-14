theorem Traversable_Graph_Characterization() {
  assert(
    ∀G(FiniteLoopMultigraph(G) → 
      (Traversable(G) ↔ (Connected(G) ∧ 
        (|{v ∈ Vertices(G) : Odd(Degree(v))}| ≤ 2)))
  )
}

proof Traversable_Graph_Characterization() {
  // Sufficient condition
  lemma Even_Vertices_Traversable() {
    assert(∀G(
      (∀v ∈ Vertices(G): Even(Degree(v))) → Eulerian(G)
    )) →
    assert(Eulerian(G) → Traversable(G))
  }

  lemma Two_Odd_Vertices_Traversable() {
    setVar(G: FiniteLoopMultigraph) →
    setVar(u,v: Vertex) →
    assert(Connected(G) ∧ 
           Odd(Degree(u)) ∧ Odd(Degree(v)) ∧
           (∀w ∈ Vertices(G)\{u,v}: Even(Degree(w)))) →
    let(G' = AddEdge(G, u, v)) →
    assert(∀w ∈ Vertices(G'): Even(Degree(w))) →
    apply(Even_Vertices_Traversable()) →
    assert(∃P'(EulerianCircuit(P', G'))) →
    let(P = RemoveLastEdge(P')) →
    assert(EulerianTrail(P, G)) →
    assert(Traversable(G))
  }

  // Necessary condition
  lemma Traversable_Has_At_Most_Two_Odd() {
    setVar(G: FiniteLoopMultigraph) →
    assert(Traversable(G)) →
    cases {
      case EulerianCircuit() {
        assert(∀v ∈ Vertices(G): Even(Degree(v)))
      }
      case NonCircuitTrail() {
        setVar(P: EulerianTrail) →
        let(u = First(P), v = Last(P)) →
        assert(Odd(Degree(u)) ∧ Odd(Degree(v))) →
        assert(∀w ∈ Vertices(G)\{u,v}: Even(Degree(w)))
      }
    } →
    assert(|{v ∈ Vertices(G) : Odd(Degree(v))}| ≤ 2)
  }

  // Combine results
  apply(Two_Odd_Vertices_Traversable()) →
  apply(Traversable_Has_At_Most_Two_Odd()) →
  assert(Traversable(G) ↔ (Connected(G) ∧ 
    (|{v ∈ Vertices(G) : Odd(Degree(v))}| ≤ 2)))
}