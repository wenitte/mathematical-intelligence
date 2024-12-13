theorem No_Subgroup_Order_6_A4() {
  assert(
    ∀G[G = A₄ → ¬∃H[H ≤ G ∧ |H| = 6]]
  )
} ↔

proof No_Subgroup_Order_6_A4() {
  setVar(G: Group[G = A₄]) →
  lemma List_All_Subgroups() {
    assert(
      SubGroups(A₄) = {
        {e},                    // order 1
        {e, t}, {e, u}, {e, v}, // order 2
        {e, a, p}, {e, b, s},   // order 3
        {e, c, q}, {e, d, r},   // order 3
        {e, t, u, v},           // order 4
        A₄                      // order 12
      }
    )
  } →
  
  apply(List_All_Subgroups()) →
  
  lemma Verify_Orders() {
    assert(
      ∀H[H ∈ SubGroups(A₄) → 
        |H| ∈ {1, 2, 3, 4, 12}
      ]
    )
  } →
  
  apply(Verify_Orders()) →
  
  assert(
    6 ∉ {|H| : H ∈ SubGroups(A₄)}
  ) →
  
  conclude(¬∃H[H ≤ A₄ ∧ |H| = 6])
}