theorem_definition(quartic_solution) ↔ x⁴ + c₃x³ + c₂x² + c₁x + c₀ = 0 →

[biquadratic_form ↔
    (x² + a₁x + a₀)² = w(x + b₀)² ∧
    a₁ = ½c₃ ∧
    a₀ = ½c₂ + ½w - ⅛c₃² ∧
    b₀ = (-c₁ + ½c₂c₃ + ½c₃w - ⅛c₃³)/(2w)] →

[resolvent_equation ↔ 
    w² - b₀²w = 0 ∧
    w³ + (2c₂ - 3/4c₃²)w² + (-4c₀ + c₁c₃ - c₂c₃² + c₂² + 3/16c₃⁴)w +
    (c₁c₂c₃ - ¼c₁c₃³ + ⅛c₂c₃³ - c₁² - 1/64c₃⁴ - ¼c₂²c₃²) = 0] →

[reduced_form ↔
    y³ + py + q = 0 ∧
    y = w + ⅔c₂ - ¼c₃² ∧
    p = c₃c₁/c₄² - c₂²/3c₄² - 4c₀/c₄ ∧
    q = c₁c₂c₃/3c₄³ - c₂³c₀/c₄³ - 2c₃³/27c₄³ + 8c₃c₀/3c₄² - c₁²/c₄²] →

[discriminant_formula ↔
    D₄ = (p/3)² + (q/2)³ ∧
    D₄ = 1/108(-18c₃c₂c₁c₀ - 80c₂²c₁c₀ + 144c₂c₁²c₀ - 6c₃²c₁²c₀ - 4c₁³c₂ + 
         16c₂c₄³c₀ - 128c₂²c₀² - 27c₁⁴ + 256c₀³ + c₃²c₂²c₁²)] →

[quadratic_factors ↔
    x² + (c₃/2c₄ ± √w)x + ½w - c₃³/16c₄³w + c₁c₂/4c₄²w + c₁/4c₄ - c₁/2c₄w = 0] →

root_solution ↔
    x₁,₂ = -c₃/4c₄ - √w/2 ± 1/4c₄√(3c₃² - 8c₄c₂ - 4c₄²w - (c₃³ - 4c₄c₃c₂ + 8c₄²c₁)/c₄√w) ∧
    x₃,₄ = -c₃/4c₄ + √w/2 ± 1/4c₄√(3c₃² - 8c₄c₂ - 4c₄²w + (c₃³ - 4c₄c₃c₂ + 8c₄²c₁)/c₄√w)
