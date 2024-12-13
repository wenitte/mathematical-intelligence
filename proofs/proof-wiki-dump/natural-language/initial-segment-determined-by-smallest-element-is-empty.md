# 

Source: https://proofwiki.org/wiki/Initial_Segment_Determined_by_Smallest_Element_is_Empty

Theorem
Let $\struct {S, \preceq}$ be a well-ordered set, where $S$ is non-empty.
Let $s_0 = \min S$, the smallest element of $S$.

Then the initial segment determined by $s_0$, $S_{s_0}$, is empty.


Proof
By the definition of initial segment:

$S_{s_0} := \set {b \in S: b \prec s_0}$
By the definition of smallest element:

$\forall b \in S: s_0 \preceq b$
Thus $S_{s_0}$ is empty.
$\blacksquare$





