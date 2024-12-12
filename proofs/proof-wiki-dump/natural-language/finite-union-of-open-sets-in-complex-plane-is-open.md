# 

Source: https://proofwiki.org/wiki/Finite_Union_of_Open_Sets_in_Complex_Plane_is_Open

Theorem
Let $S_1, S_2, \ldots, S_n$ be open sets of $\C$.

Then $\ds \bigcup_{k \mathop = 1}^n S_k$ is an open set of $\C$.


Proof
Let $\ds z \in \bigcup_{k \mathop = 1}^n S_k$.
Then by definition of finite union:

$\exists k \in \set {1, 2, \ldots, n}: z \in S_k$
By definition of open set:

$\exists \epsilon \in \R_{>0}: \map {N_\epsilon} z \subseteq S_k$
where $\map {N_\epsilon} z$ is the $\epsilon$-neighborhood of $z$ for $\epsilon$.
By Set is Subset of Union:

$S_k \subseteq S$
Thus by Subset Relation is Transitive:

$\map {N_\epsilon} z \subseteq S$
As $z$ is any arbitrary element of $S$, it follows that $S$ is an open set of $\C$ by definition.
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Point Sets: $125$




