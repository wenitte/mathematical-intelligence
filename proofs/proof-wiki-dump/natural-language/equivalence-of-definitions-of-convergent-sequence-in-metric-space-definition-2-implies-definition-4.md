# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Convergent_Sequence_in_Metric_Space/Definition_2_implies_Definition_4

Theorem
Let $M = \struct {A, d}$ be a metric space or a pseudometric space.
Let $l \in A$.
Let $\sequence {x_k}$ be a sequence in $A$.

Let $\sequence {x_k}$ satisfy:

$\forall \epsilon > 0: \exists N \in \R_{>0}: \forall n \in \N: n > N \implies x_n \in \map {B_\epsilon} l$
where $\map {B_\epsilon} l$ is the open $\epsilon$-ball of $l$.

Then:

for every $\epsilon \in \R{>0}$, the open $\epsilon$-ball about $l$ contains all but finitely many of the $p_n$.


Proof
Let a fixed $\epsilon \in \R{>0}$ be selected.
Then:

$\exists N \in \R_{>0}: \forall n \in \N: n > N \implies x_n \in \map {B_\epsilon} l$
Hence the only $x_k$ that cannot be in the open $\epsilon$-ball $\map {B_\epsilon} l$ of $l$ are those for which $n \le N$.
There are finitely many of these.
$\blacksquare$


Sources
1953: Walter Rudin: Principles of Mathematical Analysis ... (previous) ... (next): $\S 3$ Numerical Sequences and Series, Theorem $3.2a$




