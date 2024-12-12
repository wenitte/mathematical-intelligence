# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Convergent_Sequence_in_Metric_Space/Definition_4_implies_Definition_2

Theorem
Let $M = \struct {A, d}$ be a metric space or a pseudometric space.
Let $l \in A$.
Let $\sequence {x_k}$ be a sequence in $A$.
Let $\sequence {x_k}$ satisfy:

for every $\epsilon \in \R{>0}$, the open $\epsilon$-ball about $l$ contains all but finitely many of the $p_n$.

Then:

$\forall \epsilon > 0: \exists N \in \R_{>0}: \forall n \in \N: n > N \implies x_n \in \map {B_\epsilon} l$
where $\map {B_\epsilon} l$ is the open $\epsilon$-ball of $l$.


Proof
Let $\map {B_\epsilon} l$ be any open $\epsilon$-ball of $l$.
Let $A = \set {n: x_n \notin \map {B_\epsilon} l}$.
By assumption $A$ is finite.
From Finite Non-Empty Subset of Totally Ordered Set has Smallest and Greatest Elements, any finite subset of $\N$ has a maximum.
Let $N$ be the maximum of $A$.
Then for every $n > N$, $x_n$ must be in the open $\epsilon$-ball $\map {B_\epsilon} l$.
$\blacksquare$


Sources
1953: Walter Rudin: Principles of Mathematical Analysis ... (previous) ... (next): $\S 3$ Numerical Sequences and Series, Theorem $3.2a$




