# 

Source: https://proofwiki.org/wiki/Point_in_Discrete_Space_is_Adherent_Point

Theorem
Let $T = \struct {S, \tau}$ be a discrete topological space.
Let $U \subseteq S$.

Then $x$ is an adherent point of $U$ if and only if $x \in U$.


Proof
Let $U \subseteq S$.
From Set in Discrete Topology is Clopen it follows that $U$ is open in $T$.

Let $x \in U$.
Then $U$ is an open neighborhood of $x$ containing (trivially) an element of $U$, that is, $x$.
So, by definition, $x$ is an adherent point of $U$.

Now suppose $x \notin U$.
Then $\set x$ is an open neighborhood of $x$ such that $\set x \cap U = \O$.
So $x$ can not be an adherent point of $U$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $1 \text { - } 3$. Discrete Topology: $3$




