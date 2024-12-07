multiplication_principle ↔
    ∀task [step₁_ways = k ∧ step₂_ways = n] →
    total_ways = k·n →

[permutation_definition ↔
    P(n,r) := ways_to_arrange_r_from_n ∧
    two_step_process ↔ [
        step₁ ↔ choose_r_elements := C(n,r) ways ∧
        step₂ ↔ arrange_r_elements := r! ways
    ] →
    P(n,r) = C(n,r)·r!] →

[step₂_counting ↔
    ordering_r_elements ↔
        first_position := r choices ∧
        second_position := (r-1) choices ∧
        third_position := (r-2) choices ∧
        final_position := 1 choice →
        total := r·(r-1)·(r-2)···1 = r!] →

[known_permutation_formula ↔
    P(n,r) = n!/(n-r)! →
    substitute ↔
        n!/(n-r)! = C(n,r)·r! →
        solve_for_C ↔
            C(n,r) = n!/(r!·(n-r)!)]

∴ Proved.