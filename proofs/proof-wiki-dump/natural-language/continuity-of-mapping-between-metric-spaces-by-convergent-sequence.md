# 

Source: https://proofwiki.org/wiki/Continuity_of_Mapping_between_Metric_Spaces_by_Convergent_Sequence



Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $f: A_1 \to A_2$ be a mapping.

Then $f$ is continuous at $a \in X$ if and only if:

whenever $\ds \lim_{n \mathop \to \infty} x_n = a$ for a sequence $\sequence {x_n}$ of points of $A_1$
it is true that:

$\ds \lim_{n \mathop \to \infty} \map f {x_n} = \map f a$


Proof
Necessary Condition
Let $f$ be continuous at $a \in A_1$.
Let $\ds \lim_{n \mathop \to \infty} x_n = a$.
Let $V$ be a neighborhood of $\map f a$.
Then by Metric Space Continuity by Inverse of Mapping between Neighborhoods $f^{-1} \sqbrk V$ is a neighborhood of $a$.
By Limit of Sequence in Metric Space in Neighborhood:

$\exists N \in \N: n > N \implies x_n \in f^{-1} \sqbrk V$
Thus for each neighborhood $V$ of $\map f a$

$\exists N \in \N: n > N \implies \map f {x_n} \in V$
By Limit of Sequence in Metric Space in Neighborhood:

$\ds \lim_{n \mathop \to \infty} \map f {x_n} = \map f a$
$\Box$


Sufficient Condition
Aiming for a contradiction, suppose $f$ is not continuous at $a \in A_1$.
Then there is a neighborhood $V$ of $\map f a$ such that for each neighborhood $U$ of $a$:

$f \sqbrk U \nsubseteq V$
In particular, for each open $\epsilon$-ball $\map {B_\epsilon} a$ such that $\forall n \in \N_{>0}: \epsilon = \dfrac 1 n$:

$f \sqbrk {\map {B_\epsilon} a} \nsubseteq V$
Thus for each $n \in \N_{>0}$ there exists a point $x_n$ such that:

$x_n \subseteq \map {B_\epsilon} a$
and:

$\map f {x_n} \notin V$
Now:

$\map {d_1} {a, x_n} < \dfrac 1 n$
and therefore:

$\ds \lim_{n \mathop \to \infty} x_n = a$
whereas $\ds \lim_{n \mathop \to \infty} \map f {x_n} = \map f a$ is impossible, as:

$\forall n \in \N_{>0}: \map f {x_n} \notin V$
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 5$: Limits: Theorem $5.4$




