# 

Source: https://proofwiki.org/wiki/Outer_Jordan_Content_is_Monotone

Theorem
Let $A, B \subseteq \R^n$ be bounded subspaces of Euclidean $n$-space.
Suppose that $A \subseteq B$.

Then:

$\map {m^*} A \le \map {m^*} B$
where $m^*$ denotes the outer Jordan content.


Proof
Let $C$ be a finite covering of $B$ by closed rectangles.
Since $A \subseteq B$, by Cover is Cover of Subset:

$C$ is a finite covering of $A$ by closed rectangles.
Therefore, by definition of the outer Jordan content:

$\ds \map {m^*} A \le \sum_{R \mathop \in C} \map V R$
But, since $C$ was arbitrary:

$\map {m^*} A$ is a lower bound of $\ds \set {\sum_{R \mathop \in C} \map V R : C}$
where $C$ ranges over all finite coverings of $B$ by closed rectangles.

Hence, by definition of outer Jordan content, and of infimum:

$\map {m^*} A \le \map {m^*} B$
$\blacksquare$





