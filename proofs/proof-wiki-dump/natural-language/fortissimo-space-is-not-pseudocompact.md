# 

Source: https://proofwiki.org/wiki/Fortissimo_Space_is_not_Pseudocompact

Theorem
Let $T = \struct {S, \tau_p}$ be a Fortissimo space.

Then $T$ is not a pseudocompact space.


Proof
Let $N_p$ be a neighborhood of $p$ such that $\relcomp S {N_p}$ is countable.
Let $\psi: \relcomp S {N_p} \to \Z_{\ne 0}$ be a bijection between $\relcomp S {N_p}$ and the non-zero integers $\Z_{\ne 0}$.
Let $\phi: S \to \set {0, 1}$ be the mapping defined as:

$\forall x \in S: \map \phi x = \begin {cases} 0 & : x \in N_p \\ \map \psi x & : x \notin N_p \end {cases}$
Then $\phi$ is a continuous mapping.
However, $\phi$ is not bounded.
Hence the result by definition of pseudocompact space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $25$. Fortissimo Space: $3$




