# 

Source: https://proofwiki.org/wiki/Interior_of_Subset_of_Double_Pointed_Topological_Space

Theorem
Let $\struct {S, \tau_S}$ be a topological space.
Let $D$ be a doubleton endowed with the indiscrete topology.
Let $\struct {S \times D, \tau}$ be the double pointed topology on $S$.
Let $X \subseteq S \times D$ be a subset of $S \times D$.
Define $A \subseteq S$ by:

$A := \set {s \in S: \paren {\forall d \in D: \tuple {s, d} \in X} }$

Then the interior of $X$ in $\tau$ is:

$X^\circ = A^\circ \times D$


Proof
By Open Sets of Double Pointed Topology, $X^\circ$ must be of the form:

$X^\circ = U \times D$
with $U$ open in $\tau_S$.

By Set Interior is Largest Open Set, we have for any open set $U' \times D$ of $\tau$ that:

$U' \times D \subseteq X \iff U' \times D \subseteq X^\circ = U \times D$
By Cartesian Product of Subsets, we have for open sets $V, V'$:

$V \subseteq V' \iff V \times D \subseteq V' \times D$
since $D$ is non-empty.
Combining these two equivalences, we have:

$U' \times D \subseteq X \iff U' \subseteq U$

The condition that $U' \times D \subseteq X$ can be expressed by:

$\forall s \in U': \forall d \in D: \tuple {s, d} \in X$
By definition of the set $A$, this is equivalent to:

$U' \subseteq A$
Combining this with the above, it follows that:

$U' \subseteq A \iff U' \subseteq U$
Recall that $U$ is open in $\tau_S$.
By Set Interior is Largest Open Set, we conclude:

$U = A^\circ$
and so:

$X^\circ = A^\circ \times D$
as desired.
$\blacksquare$


Also see
Closure of Subset of Double Pointed Topological Space




