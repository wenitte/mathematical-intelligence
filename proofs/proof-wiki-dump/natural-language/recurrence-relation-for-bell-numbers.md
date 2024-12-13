# 

Source: https://proofwiki.org/wiki/Recurrence_Relation_for_Bell_Numbers

Theorem
Let $B_n$ be the Bell number for $n \in \Z_{\ge 0}$.
Then:

$B_{n + 1} = \ds \sum_{k \mathop = 0}^n \dbinom n k B_k$
where $\dbinom n k$ are binomial coefficients.


Proof
By definition of Bell numbers:

$B_{n + 1}$ is the number of partitions of a (finite) set whose cardinality is $n + 1$.

Let $k \in \set {k \in \Z: 0 \le k \le n}$.
Let us form a partition of a (finite) set $S$ with cardinality $n + 1$ such that one component has $n + 1 - k > 0$ elements.
We can do this by first choosing $1$ element from $S$. We put this element into that single component.
Then choose $k$ more elements from $S$, and let the remaining $n - k$ elements be put into the same component as the first element.
From Cardinality of Set of Subsets and the definition of binomial coefficient, there are $\dbinom n k$ ways to do this.
For the chosen $k$ elements, there are $B_k$ ways to partition them.

Thus there are $\dbinom n k B_k$ possible partitions for $S$:

$\dbinom n k$ of selecting $n - k$ elements to form one component with the one singled-out element
for each of these, $B_k$ ways to partition the remaining $k$ elements.

Summing the number of ways to do this over all possible $k$:

$\ds B_{n + 1} = \sum_{k \mathop = 0}^n \dbinom n k B_k$
$\blacksquare$


Illustration
We have:

$B_{n + 1} = \ds \sum_{k \mathop = 0}^n \dbinom n k B_k$
Let $n = 3$.
Then: 














\(\ds B_4\)

\(=\)







\(\ds \sum_{k \mathop = 0}^3 \dbinom 3 k B_k\)




















\(\ds \)

\(=\)







\(\ds B_0 + 3 B_1 + 3 B_2 + B_3\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds 1 + 3 + 6 + 5\)










Let $S = \set {a, b, c, d}$.

The $1$ in $(1)$ represents all of the elements combined ($B_0 = 1$):

$\set {a, b, c, d}$

The $3$ in $(1)$ represents the sets where element $d$ is part of a triplet ($3 B_1 = 3$):

$\set {\set a \set {b, c, d} }$
$\set {\set b \set {a, c, d} }$
$\set {\set c \set {a, b, d} }$

The $6$ in $(1)$ represents the sets where element $d$ is part of a couple ($3 B_2 = 6$):

$\set {\set {a, d} \set {b, c} }$
$\set {\set {a, d} \set b \set c}$
$\set {\set {b, d} \set {a, c} }$
$\set {\set {b, d} \set a \set c}$
$\set {\set {c, d} \set {a, b} }$
$\set {\set {c, d} \set a \set b}$

Finally, the $5$ in $(1)$ represents where element $d$ is by itself and the remaining $3$ elements are partitioned ($B_3 = 5$):

$\set {\set d, \set {a, b, c} }$
$\set {\set d, \set a, \set {b, c} }$
$\set {\set d, \set b, \set {a, c} }$
$\set {\set d, \set c, \set {a, b} }$
$\set {\set d, \set a, \set b, \set c}$




