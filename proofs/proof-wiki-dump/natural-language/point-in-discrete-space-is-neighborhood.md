# 

Source: https://proofwiki.org/wiki/Point_in_Discrete_Space_is_Neighborhood

Theorem
Let $T = \struct {S, \tau}$ be a discrete topological space.
Let $x \in S$.

Then $\set x$ is a neighborhood of $x$ in $T$.


Proof
By definition, a neighborhood $N_x$ of $x$ is any subset of $S$ containing an open set which itself contains $x$.
That is:

$\exists U \in \tau: x \in U \subseteq N_x \subseteq S$

From Set in Discrete Topology is Clopen we have that $\set x$ is open set in $S$.
So by Set is Subset of Itself, $\set x$ is a subset of $S$ containing an open set $\set x$ which itself contains $x$.
Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $1 \text { - } 3$. Discrete Topology: $7$




