theorem_definition(Euclidean_Division_Polynomials) ↔
    [specification ↔
        ∀m,d ∈ F[x],
        edivp_spec(m,d) := (n,q,r) where
        m = q*d + r ∧ 
        (d ≠ 0 → deg(r) < deg(d))] →

    [theorem ↔
        ∀m,d ∈ F[x],
        edivp_spec(m,d,edivp(m,d))]
