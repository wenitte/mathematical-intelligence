# 

Source: https://proofwiki.org/wiki/Point_not_in_Subset_of_Metric_Space_iff_Distance_from_Elements_is_Greater_than_Zero

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $H \subseteq A$ be an arbitrary subset of $A$.
Let $x \in A$ be arbitrary.

Then:

$x \notin H$
if and only if:

$\forall y \in H: \map d {x, y} > 0$


Proof









\(\ds \forall y \in H: \, \)



\(\ds \map d {x, y}\)

\(>\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall y \in H: \, \)



\(\ds \map d {x, y}\)

\(\ne\)







\(\ds \map d {x, x}\)





Metric Space Axiom $(\text M 1)$








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall y \in H: \, \)



\(\ds y\)

\(\ne\)







\(\ds x\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\notin\)







\(\ds H\)









$\blacksquare$





