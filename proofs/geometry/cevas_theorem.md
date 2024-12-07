theorem_definition(ceva) ↔
∀ΔABC, ∀D, E, F ∈ BC × CA × AB,
AD, BE, CF concurrent ↔ AG/GC × BF/FA × CE/EB = 1 →

proof(ceva) ↔
∀ΔABC, ∀D, E, F ∈ BC × CA × AB →
define(h₁, h₂) ↔ altitudes of ΔABG and ΔBGC →
area_relations ↔ [
[ABG] = 0.5 × AG × h₁ ∧ [BGC] = 0.5 × GC × h₁ ∧ [ADG] = 0.5 × AG × h₂ ∧ [DGC] = 0.5 × GC × h₂
] →
ratios_def ↔ AG/GC = [ABG]/[BGC] = [ADG]/[DGC] ∧
BF/FA = [ADC]/[BDA] ∧ CE/EB = [BDC]/[ADC] →
product_identity ↔ AG/GC × BF/FA × CE/EB = ([ABG]/[BGC]) × ([ADC]/[BDA]) × ([BDC]/[ADC]) →
simplify ↔ AG/GC × BF/FA × CE/EB = 1 →
AD, BE, CF concurrent →
AG/GC × BF/FA × CE/EB = 1.
∴ Proved.