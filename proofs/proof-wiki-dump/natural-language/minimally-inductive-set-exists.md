# 

Source: https://proofwiki.org/wiki/Minimally_Inductive_Set_Exists

Theorem
There exists a minimally inductive set $\omega$ that is a subset of every other inductive set.


Proof
From the Axiom of Infinity, there is a set $S$ such that:

$\O \in S$
$x \in S \implies x^+ \in S$
where $\O$ denotes the empty set and $x^+$ is the successor set of $x$.
That is, there exists an inductive set.
Next, by the Axiom of Specification, the minimally inductive set $\omega$:

$\omega := \ds \bigcap \set {S' \subseteq S: \text{$S'$ is an inductive set} }$
exists.

It remains to be shown that if $T$ is an inductive set, then $\omega \subseteq T$.
By Intersection of Inductive Sets, $S \cap T$ is an inductive set.
Moreover, by Intersection is Subset, $S \cap T$, so that:

$S \cap T \in \set {S' \subseteq S: \text{$S'$ is an inductive set} }$
from which we conclude by definition of $\omega$ and Intersection is Subset: General Result that:

$\omega \subseteq S \cap T \subseteq T$
as desired.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 11$: Numbers




