theorem_definition(No_Cube_Dissection) ↔
    ∀C ⊆ 𝒫(ℝ³), 
    valid_cubes(C) ∧ disjoint_cubes(C) ∧ cover_unit_cube(C) ∧
    different_sizes(C) ∧ |C| ≥ 2 ∧ finite(C) →
    False →

[definitions ↔
    cube(c) := ⟨point ∈ ℝ³, width > 0⟩ ∧
    valid_cubes(C) := ∀c ∈ C, width(c) > 0 ∧
    to_set(c) := {p ∈ ℝ³ | ∀ax ∈ {x,y,z}, ax(p) ∈ [min_ax(c), max_ax(c))} ∧
    disjoint_cubes(C) := ∀c₁,c₂ ∈ C, c₁ ≠ c₂ → to_set(c₁) ∩ to_set(c₂) = ∅ ∧
    cover_unit_cube(C) := ⋃_{c∈C} to_set(c) = unit_cube] →

[hole_concept ↔
    is_hole(h) ↔ [
        valid(h) ∧
        top(h) ⊆ ⋃_{c∈C} bottom(c) ∧
        ∀c ∈ C, bottom(c) ∩ top(h) ≠ ∅ → bottom(c) ⊆ top(h)
    ] ∧
    
    minimum_cube(h) := arg_min_{c∈C} {width(c) | bottom(c) ⊆ top(h)}] →

[key_lemmas ↔
    unit_cube_bottom_is_hole ↔
        is_hole(shift_down(unit_cube)) ∧
    
    minimum_cube_is_hole ↔
        ∀h, is_hole(h) → is_hole(minimum_cube(h)) ∧
    
    width_decreases ↔
        ∀h, is_hole(h) → width(minimum_cube(h)) < width(h)] →

[infinite_descent ↔
    next_hole(h) := minimum_cube(h) ∧
    nth_hole(n) := next_hole^n(shift_down(unit_cube)) ∧
    
    sequence_properties ↔ [
        ∀n, is_hole(nth_hole(n)) ∧
        strictly_decreasing(width ∘ nth_hole) ∧
        injective(nth_hole) ∧
        ∀n, nth_hole(n) ∈ C
    ] →
    
    contradiction ↔
        infinite(range(nth_hole)) ∧ finite(C)]

∴ Proved by contradiction.
