# 

Source: https://proofwiki.org/wiki/Particular_Point_Space_is_Locally_Compact

Theorem
Let $T = \struct {S, \tau_p}$ be a particular point space.

Then $T$ is locally compact.


Proof
Let $x \in S$.
Consider the set $\set {p, x}$.
From the definition of particular point topology, $\set {p, x}$ is open in $T$.
By Finite Topological Space is Compact, $\set {p, x}$ is compact.

Let $N$ be a neighborhood of $x$.
Then:

$\exists U \in \tau_p: x \in U \subseteq N$.
From the definition of particular point topology, since $U \ne \O$, we must have $p \in U$.
Therefore $\set {p, x} \subseteq U \subseteq N$.

Since $N$ is arbitrary, $\set {\set {p, x}}$ is a neighborhood basis for $x$.
The result follows from definition of a locally compact space.
$\blacksquare$


Also see
Particular Point Space is Weakly Locally Compact




