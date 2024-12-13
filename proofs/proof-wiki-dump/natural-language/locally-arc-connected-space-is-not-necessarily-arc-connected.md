# 

Source: https://proofwiki.org/wiki/Locally_Arc-Connected_Space_is_not_necessarily_Arc-Connected

Theorem
Let $T = \struct {S, \tau}$ be a topological space which is locally arc-connected.

Then it is not necessarily the case that $T$ is also arc-connected.


Proof
Let $T := \struct {\R, \tau_d}$ be the real number line $\R$ under the usual (Euclidean) topology $\tau_d$.
Let $a, b, c \in \R$ where $a < b < c$.
Let $A$ be the union of the two open intervals:

$A := \openint a b \cup \openint b c$
Let $T' := \struct {A, \tau_A}$ be the subspace composed of $A$ with the subspace topology induced on $\tau_d$ by $A$.

From Union of Adjacent Open Intervals is Locally Arc-Connected, $T'$ is a locally arc-connected space.
From Union of Adjacent Open Intervals is not Arc-Connected, $T$ is not a arc-connected space.
Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness




