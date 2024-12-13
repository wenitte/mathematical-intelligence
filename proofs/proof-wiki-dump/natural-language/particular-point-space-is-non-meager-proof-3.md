# 

Source: https://proofwiki.org/wiki/Particular_Point_Space_is_Non-Meager/Proof_3

Theorem
Let $T = \struct {S, \tau_p}$ be a particular point space.

Then $T$ is non-meager.


Proof
By definition of particular point space, any subset of $S$ which contains $p$ is open in $T$.

Aiming for a contradiction, suppose $T$ is meager.
By definition, $T$ is meager if and only if it is a countable union of subsets of $S$ which are nowhere dense in $T$.
At least one such nowhere dense subset $U$ of $S$ must contain $p$.

By definition, $U$ is nowhere dense in $T$ if and only if:

$U^-$ contains no open set of $T$ which is non-empty
where $U^-$ denotes the closure of $U$.

By definition of particular point space, $U$ is open in $T$.
By Closure of Open Set of Particular Point Space, $U^- = S$.
But $S$ is itself open in $T$ and non-empty, and so $U$ is not nowhere dense.

From this contradiction it follows that $T$ is non-meager
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $8 \text { - } 10$. Particular Point Topology: $14$




