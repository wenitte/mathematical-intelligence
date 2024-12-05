theorem_definition(André_Ballot_Problem) ↔
    ∀a, b, k (a, b ∈ ℕ ∧ k ≥ 1 →
        NumberOfGoodPaths(a, b, k) =
        C(a + b, a) - (k + 1) * C(a + b - 1, a)).
→

[bad_ballot_paths(Definition) ↔
    ∀P (Path(P) ∧ EndsBelowXAxis(P) ↔ BadPath(P)).
→

[good_ballot_paths(Definition) ↔
    ∀P (Path(P) ∧ ¬EndsBelowXAxis(P) ↔ GoodPath(P)).
→

[reversible_procedure(Construction) ↔
    ∀P (BadPath(P) →
        ∃X, Y (P = XY ∧ Rotate180°(X) ∧ Reflect(Y)) ↔ GoodPath(P)).
→

[bad_path_partition(Partitioning) ↔
    ∀k (BadPaths = ⋃(Bi ∀i(0 ≤ i ≤ k)) ∧
        ∀i, j (i ≠ j → Bi ∩ Bj = ∅)).
→

[cardinality_partition(Symmetry) ↔
    ∀i, j (i ≠ j → |Bi| = |Bj|).
→

[good_path_count(Computation) ↔
    GoodPaths =
    TotalPaths(a, b) - BadPathsPartition(k).
→

[good_path_formula(Simplification) ↔
    GoodPaths =
    C(a + b, a) - (k + 1) * C(a + b - 1, a)].
→

[conclusion(C) ↔
    ∀a, b, k (a, b ∈ ℕ ∧ k ≥ 1 →
        NumberOfGoodPaths(a, b, k) =
        C(a + b, a) - (k + 1) * C(a + b - 1, a)).
    ∴ Proved. )
