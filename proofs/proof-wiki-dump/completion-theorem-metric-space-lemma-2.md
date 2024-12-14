theorem MetricSpaceCompletion_Lemma2() {
  assert(
    ∀M(M = (A,d) ∧ isMetricSpace(M)) →
    let(CC[A] := {s | isCauchySequence(s,A)}) →
    let(∼ := {(x,y) | x,y ∈ CC[A] ∧ lim(n→∞)d(xₙ,yₙ) = 0}) →
    let(Ã := CC[A]/∼) →
    let(d̃: Ã×Ã → ℝ₊, d̃([xₙ],[yₙ]) := lim(n→∞)d(xₙ,yₙ)) →
    isMetric(d̃,Ã)
  )
} ↔

proof MetricSpaceCompletion_Lemma2() {
  // M4: Range axiom
  lemma M4_Proof() {
    assert(∀[xₙ],[yₙ] ∈ Ã →
      (d̃([xₙ],[yₙ]) = ∞ → ¬(isCauchySequence(xₙ) ∧ isCauchySequence(yₙ))) ∧
      d̃([xₙ],[yₙ]) ∈ ℝ₊
    )
  } →

  // M1: Identity axiom
  lemma M1_Proof() {
    assert(∀[xₙ],[yₙ] ∈ Ã →
      (d̃([xₙ],[yₙ]) = 0 ↔ [xₙ] = [yₙ]) ∧
      d̃([xₙ],[xₙ]) = 0
    )
  } →

  // M3: Symmetry axiom
  lemma M3_Proof() {
    assert(∀[xₙ],[yₙ] ∈ Ã →
      d̃([xₙ],[yₙ]) = d̃([yₙ],[xₙ])
    ) by {
      d̃([xₙ],[yₙ]) = lim(n→∞)d(xₙ,yₙ) = 
      lim(n→∞)d(yₙ,xₙ) = d̃([yₙ],[xₙ])
    }
  } →

  // M2: Triangle inequality
  lemma M2_Proof() {
    assert(∀[xₙ],[yₙ],[zₙ] ∈ Ã →
      d̃([xₙ],[zₙ]) ≤ d̃([xₙ],[yₙ]) + d̃([yₙ],[zₙ])
    ) by {
      d̃([xₙ],[zₙ]) = lim(n→∞)d(xₙ,zₙ) ≤
      lim(n→∞)(d(xₙ,yₙ) + d(yₙ,zₙ)) =
      lim(n→∞)d(xₙ,yₙ) + lim(n→∞)d(yₙ,zₙ) =
      d̃([xₙ],[yₙ]) + d̃([yₙ],[zₙ])
    }
  } →

  assert(isMetric(d̃,Ã))
}