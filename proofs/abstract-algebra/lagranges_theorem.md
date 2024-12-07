theorem_definition(lagrange_theorem) ↔
    ∀G finite_group, ∀H ⊆ G subgroup →
    |G| = |H| · (G : H) →
    |H| divides |G|

proof(lagrange_theorem) ↔
    assume(G finite_group ∧ H ⊆ G subgroup ∧ |G| = n ∧ |H| = m ∧ r = (G : H)) →
    [
        cosets_definition ↔ ∀x ∈ G, ∃ unique_coset xH ∧ x ∈ xH →
        disjoint_cosets ↔ ∀x₁, x₂ ∈ G, x₁H = x₂H → x₁ = x₂ →
        union_of_cosets ↔ ∪{xH : x ∈ G} = G →
        partition_of_G ↔ ∀x ∈ G, ∃! coset(xH) ∧ disjoint_cosets →
        number_of_cosets ↔ r = (G : H) ∧ |H| = m →
        elements_in_partition ↔ |G| = r · |H| →
        divisibility ↔ ∃k ∈ ℕ, n = m · k →
        |H| divides |G|
    ]
∴ Proved.