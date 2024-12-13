# 

Source: https://proofwiki.org/wiki/Partition_Space_is_Pseudometrizable

Theorem
Let $T = \struct {S, \tau}$ be a partition space.
Then $T$ is pseudometrizable.


Proof
Let $\PP$ be the partition which is the basis for $T$.
Let us define $d: S^2 \to \R$ by:

$\forall x, y \in S: \map d {x, y} = \begin{cases}
0 & : \exists U \in \PP: x, y \in U \\
1 & : \text{otherwise} \end{cases}$
That is, $\map d {x, y} = 0$ when $x$ and $y$ are in the same set in the partition $\PP$, and $1$ otherwise.
This is easily established as being a pseudometric on $S$.
Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $5$. Partition Topology: $6$




