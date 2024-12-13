# 

Source: https://proofwiki.org/wiki/Locally_Path-Connected_Space_is_not_necessarily_Path-Connected

Theorem
Let $T = \struct {S, \tau}$ be a topological space which is locally path-connected.

Then it is not necessarily the case that $T$ is also path-connected.


Proof
Let $T := \struct {\R, \tau_d}$ be the real number line $\R$ under the usual (Euclidean) topology $\tau_d$.
Let $a, b, c \in \R$ where $a < b < c$.
Let $A$ be the union of the two open intervals:

$A := \openint a b \cup \openint b c$
Let $T' := \struct {A, \tau_A}$ be the subspace composed of $A$ with the subspace topology induced on $\tau_d$ by $A$.

From Union of Adjacent Open Intervals is Locally Path-Connected, $T'$ is a locally path-connected space.
From Union of Adjacent Open Intervals is not Path-Connected, $T$ is not a path-connected space.
Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness




