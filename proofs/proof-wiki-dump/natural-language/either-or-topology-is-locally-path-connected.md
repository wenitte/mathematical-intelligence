# 

Source: https://proofwiki.org/wiki/Either-Or_Topology_is_Locally_Path-Connected

Theorem
Let $T = \struct {S, \tau}$ be the either-or space.

Then $T$ is a locally path-connected space.


Proof
Consider the set:

$\BB := \set {\set x: x \in S, x \ne 0} \cup \openint {-1} 1$
Then by Basis for Either-Or Topology, $\BB$ is a basis for $T$.
From Point is Path-Connected to Itself, all $x \in S, x \ne 0$ are path-connected elements of $\BB$.

Finally we consider $\openint {-1} 1 \in \BB$.
Let $p \in \openint {-1} 1$ and consider the mapping $f: \closedint 0 1 \to \openint {-1} 1$:

$\forall x \in \closedint 0 1: \map f x = \begin{cases}
0 & : x = 0 \\
p & : x \in \hointl 0 1 \end{cases}$
Then $f$ is a continuous mapping and so a path from $0$ to $p$.
So $\openint {-1} 1$ is a path-connected element of $\BB$.
Hence the result by definition of locally path-connected space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $17$. Either-Or Topology: $4$




