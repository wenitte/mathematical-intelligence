theorem_definition(Heron) ↔
    ∀triangle ABC with sides a,b,c,
    let(s = (a+b+c)/2) →
    Area = √(s(s-a)(s-b)(s-c)) →

[initial_setup ↔
    area_formula ↔ A = ½bh where h is height ∧
    construct ↔ 
        draw_perpendicular(BD on AC) ∧
        let(AD = x) ∧
        let(DC = b-x)] →

[pythagoras_application ↔
    triangle_BDA ↔ [
        x² + h² = c² →
        x² = c² - h² →
        x = √(c² - h²)
    ] ∧
    
    triangle_BDC ↔ [
        (b-x)² + h² = a² →
        b² - 2bx + x² = a² - h² →
        substitute(x² = c² - h²) →
        b² - 2b√(c² - h²) + c² - h² = a² - h²
    ]] →

[algebraic_manipulation ↔
    rearrange ↔ [
        b² + c² - a² = 2b√(c² - h²) →
        ((b² + c² - a²)²)/(4b²) = c² - h² →
        h² = (4b²c² - (b² + c² - a²)²)/(4b²)
    ] →
    
    factor ↔ [
        h² = ((2bc)² - (b² + c² - a²)²)/(4b²) →
        h² = ((b+c)² - a²)(a² - (b-c)²)/(4b²) →
        h² = (a+b+c)(b+c-a)(a+c-b)(a+b-c)/(4b²)
    ]] →

[semiperimeter_substitution ↔
    define(P) ↔ P = a + b + c →
    h² = P(P-2a)(P-2b)(P-2c)/(4b²) →
    h = √(P(P-2a)(P-2b)(P-2c))/(2b) →
    
    final_form ↔ [
        A = ½bh →
        A = ¼√(P(P-2a)(P-2b)(P-2c)) →
        let(s = P/2) →
        A = √(s(s-a)(s-b)(s-c))
    ]]

∴ Proved.