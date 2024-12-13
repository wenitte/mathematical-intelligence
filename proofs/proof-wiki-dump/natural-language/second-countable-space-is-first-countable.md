# 

Source: https://proofwiki.org/wiki/Second-Countable_Space_is_First-Countable



Theorem
Let $T = \struct {S, \tau}$ be a topological space which is second-countable.

Then $T$ is also first-countable.


Proof 1
By definition $T$ is second-countable if and only if its topology has a countable basis.
Consider the entire set $S$ as an open set.
From Set is Open iff Neighborhood of all its Points, $S$ has that property.
As $T$ has a countable basis, then (trivially) every point in $T$ has a countable local basis.
So a second-countable space is trivially first-countable.
$\blacksquare$


Proof 2
By definition of second-countable space, there exists a countable analytic basis $\BB \subseteq \tau$.
Then each $x \in S$ has a countable local basis:

$\BB_x := \set {U \in \BB: x \in U}$
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Countability Properties
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Countability Axioms and Separability




