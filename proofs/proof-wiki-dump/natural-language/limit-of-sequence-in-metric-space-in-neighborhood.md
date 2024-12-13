# 

Source: https://proofwiki.org/wiki/Limit_of_Sequence_in_Metric_Space_in_Neighborhood



Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\sequence {a_n}$ be a sequence in $A$.

Then $\ds \lim_{n \mathop \to \infty} a_n = a$ if and only if for each neighborhood $V$ of $a$:

$\exists N \in \N: n > N \implies a_n \in V$


Proof
Necessary Condition
Let $\ds \lim_{n \mathop \to \infty} a_n = a$.
Let $V$ be a neighborhood of $a$.
By definition of neighborhood:

$\exists \epsilon \in \R_{>0}: \map {B_\epsilon} a \subseteq V$
where $\map {B_\epsilon} a$ denotes the open $\epsilon$-ball of $a$ in $M$.
By definition of limit:

$\exists N \in \N: n > N \implies \map d {a, a_n} < \epsilon$
Hence $a_n \in V$.
$\Box$


Sufficient Condition
Let $\sequence {a_n}$ be such that for each neighborhood $V$ of $a$:

$\exists N \in \N: n > N \implies a_n \in V$
Let $\epsilon \in \R_{>0}$.
Then by Open Ball is Neighborhood of all Points Inside, $\map {B_\epsilon} a$ is a neighborhood of $a$.
Let $N \in \N$ be such that:

$\forall n > N: a_n \in \map {B_\epsilon} a$
Then:

$\map d {a, a_n} < \epsilon$
and so by definition of limit:

$\ds \lim_{n \mathop \to \infty} a_n = a$
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 5$: Limits: Corollary $5.3$




