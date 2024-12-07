theorem_definition(Segments_of_Chords) ↔
    ∀ chords AB, CD in circle,
    intersect(AB, CD) at E →
    AE·EB = CE·ED →

[setup ↔
    given ↔ [
        circle_O with chords AB and CD ∧
        E := intersection_point(AB,CD) ∧
        draw_segments(AD, AC)
    ] →
    
    angle_relationships ↔ [
        inscribed_angles ↔
            ∠CAB ≅ ∠CDB (intercept same arc) ∧
            ∠ACD ≅ ∠ABD (intercept same arc)
    ]] →

[similarity_proof ↔
    triangles ↔ [
        ΔDEA ∼ ΔCEB by AA_similarity ↔ [
            ∠CAB ≅ ∠CDB ∧
            ∠ACD ≅ ∠ABD
        ]
    ] →
    
    proportions ↔ [
        ΔDEA ∼ ΔCEB →
        ED/EB = EA/EC →
        EA·EB = EC·ED
    ]] →

[numerical_example ↔
    let(lengths) ↔ [
        KN = x ∧
        NJ = x + 4 ∧
        MN = x + 2 ∧
        NL = x + 1
    ] →
    
    cross_products ↔
        KN·NJ = MN·NL →
        x(x+4) = (x+2)(x+1)]

∴ Proved.