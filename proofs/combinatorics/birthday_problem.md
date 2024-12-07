theorem_definition(Birthday_Problem) ↔
    ∀s,t ⊆ U,
    |s| = 23 ∧ |t| = 365 →
    2|{f ∈ s → t | ∃x,y ∈ s, x ≠ y ∧ f(x) = f(y)}| ≥ |s → t|
