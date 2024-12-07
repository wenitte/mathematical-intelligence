theorem_definition(Pick_Theorem) ↔
    ∀p ∈ (ℝ²)*, 
    (∀x ∈ p, integral_vector(x)) ∧
    simple_path(polygonal_path(p)) ∧
    path_finish(p) = path_start(p) →
    Area(inside(path(p))) = 
        |{x ∈ inside(path(p)) | integral_vector(x)}| +
        |{x ∈ path(p) | integral_vector(x)}|/2 - 1
