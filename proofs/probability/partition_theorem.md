theorem_definition(Partition_Theorem) ↔ 
    ∀n ∈ ℕ, p_odd(n) = p_distinct(n) →

partition_definitions(P) ↔ [
    odd_partition(n) := {λ | n = Σᵢλᵢ ∧ ∀i, λᵢ odd} ∧
    distinct_partition(n) := {μ | n = Σᵢμᵢ ∧ ∀i≠j, μᵢ ≠ μⱼ}
] →

bijection_construction(B) ↔ [
    let(p: partition) →
    binary_representation(p) ↔ 
        ∀part ∈ p, part = Σᵢ 2ⁱ·bᵢ where bᵢ ∈ {0,1} ∧
    odd_to_distinct(p) ↔
        map(part ↦ Σ_{i: bᵢ=1} 2ⁱ) ∧
    distinct_to_odd(p) ↔
        map(part ↦ Σ_{i in binary(part)} 2ⁱ·1)
] →

bijection_proof(BP) ↔ [
    well_defined(f) ↔ 
        odd_to_distinct maps odd partitions to distinct partitions ∧
        distinct_to_odd maps distinct partitions to odd partitions ∧
    inverse_proof(I) ↔
        distinct_to_odd ∘ odd_to_distinct = id_odd ∧
        odd_to_distinct ∘ distinct_to_odd = id_distinct ∧
    size_preservation(S) ↔
        Σparts(original) = Σparts(transformed)
] →

example_demonstration(E) ↔ [
    odd_partition(9) = {9, 5+3+1} maps_to
    distinct_partition(9) = {9, 4+3+2} via
    9 = 1·(2³ + 1) ↔ 9 ∧
    5+3+1 = 1·(2² + 1) + 1·(2¹ + 1) + 1·(2⁰ + 1) ↔ 4+3+2
] →

therefore(T) ↔ 
    bijection(odd_partitions ↔ distinct_partitions) →
    p_odd(n) = p_distinct(n)
