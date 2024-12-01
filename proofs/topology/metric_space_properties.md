metric_definition(M) ↔
    d: X × X → ℝ
    ∀x,y,z ∈ X
    d(x,y) ≥ 0 ∧ d(x,y) = 0 ↔ x = y
    d(x,y) = d(y,x)
    d(x,z) ≤ d(x,y) + d(y,z)
→

[open_ball(B) ↔
    B(x,r) = {y ∈ X : d(x,y) < r}
    r > 0]
→

[topology_from_metric(T) ↔
    U ⊆ X open
    ↔ ∀x ∈ U, ∃r > 0
    B(x,r) ⊆ U]
