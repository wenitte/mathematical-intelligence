# 

Source: https://proofwiki.org/wiki/Intermediate_Value_Theorem_(Topology)



Theorem
Let $X$ be a connected topological space.
Let $\struct {Y, \preceq, \tau}$ be a totally ordered set equipped with the order topology.
Let $f: X \to Y$ be a continuous mapping.
Let $a$ and $b$ are two points of $a, b \in X$ such that:

$\map f a \prec \map f b$

Let:

$r \in Y: \map f a \prec r \prec \map f b$
Then there exists a point $c$ of $X$ such that:

$\map f c = r$


Proof
Let $a, b \in X$, and let $r \in Y$ lie between $\map f a$ and $\map f b$.
Define the sets:

$A = f \sqbrk X \cap r^\prec$ and $B = f \sqbrk X \cap r^\succ$
where $r^\prec$ and $r^\succ$ denote the strict lower closure and strict upper closure respectively of $r$ in $Y$.
$A$ and $B$ are disjoint by construction.
$A$ and $B$ are also non-empty since one contains $\map f a$ and the other contains $\map f b$.
$A$ and $B$ are also both open by definition as the intersection of open sets.
Suppose there is no point $c$ such that $\map f c = r$.
Then:

$f \sqbrk X = A \cup B$
so $A$ and $B$ constitute a separation of $X$.
But this contradicts the fact that Continuous Image of Connected Space is Connected.
Hence by Proof by Contradiction:

$\exists c \in X: \map f c = r$
which is what was to be proved.
$\blacksquare$


Also see
Intermediate Value Theorem of calculus, which follows as a corollary from this by considering $\R$ under the order topology and noting that Subset of Real Numbers is Interval iff Connected.


Sources
1975: James R. Munkres: Topology: $\S 24$: Theorem $24.3$




