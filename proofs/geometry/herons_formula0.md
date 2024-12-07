theorem_definition(Triangle_Area) ↔
    ∀triangle(a,b,c), let(s = (a+b+c)/2) →
    Area = √(s(s-a)(s-b)(s-c)) →

[setup ↔
    given_triangle ↔ [
        sides ↔ a,b,c ∧
        angles ↔ α,β,γ opposite to sides ∧
        base = a ∧
        height = b·sinγ
    ]] →

[cosine_law_application ↔
    law_of_cosines ↔ 
        cosγ = (a² + b² - c²)/(2ab) ∧
    
    trig_identity ↔
        sinγ = √(1 - cos²γ) →
        sinγ = √(4a²b² - (a² + b² - c²)²)/(2ab)] →

[area_derivation ↔
    area_formula ↔ [
        A = ½(base)(height) ∧
        A = ½ab·sinγ ∧
        A = ¼√(4a²b² - (a² + b² - c²)²)
    ] →
    
    algebraic_manipulation ↔ [
        A = ¼√((2ab - (a² + b² - c²))(2ab + (a² + b² - c²))) ∧
        A = ¼√((c² - (a-b)²)((a+b)² - c²)) ∧
        A = √((c-(a-b))(c+(a-b))((a+b)-c)((a+b)+c)/16)
    ] →
    
    semiperimeter_substitution ↔ [
        s = (a+b+c)/2 →
        A = √((b+c-a)(a+c-b)(a+b-c)(a+b+c)/16) ∧
        A = √(s(s-a)(s-b)(s-c))
    ]]

∴ Proved.