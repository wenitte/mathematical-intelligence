# 

Source: https://proofwiki.org/wiki/Closed_Subspace_of_Compact_Space_is_Compact



Theorem
Let $T = \struct {S, \tau}$ be a compact topological space.
Let $C = \struct {H, \tau_H}$ be a subspace of $T$.
Let $C$ be closed in $T$.

Then $\struct {H, \tau}$ is compact.

That is, the property of being compact is weakly hereditary.


Proof
Let $T$ be a compact space.
Let $C$ be a closed subspace of $T$.
Let $\UU$ be an open cover of $C$.

We have that $C$ is closed in $T$.
It follows by definition of closed that $T \setminus C$ is open in $T$.

So if we add $T \setminus C$ to $\UU$, we see that $\UU \cup \set {T \setminus C}$ is also an open cover of $T$.
As $T$ is compact, there exists a finite subcover of $\UU \cup \set {T \setminus C}$, say $\VV = \set {U_1, U_2, \ldots, U_r}$.
This covers $C$ by the fact that it covers $T$.

Suppose $T \setminus C$ is an element of $\VV$.
Then $T \setminus C$ may be removed from $\VV$, and the rest of $\VV$ still covers $C$.
Thus we have a finite subcover of $\UU$ which covers $C$.
Hence $C$ is compact.
$\blacksquare$


Also see
Intersection of Closed Set with Compact Subspace is Compact


Sources
1953: Walter Rudin: Principles of Mathematical Analysis: $2.35$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $5$: Compact spaces: $5.6$: Compactness and Constructions: Proposition $5.6.1$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction




