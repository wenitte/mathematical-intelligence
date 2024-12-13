# 

Source: https://proofwiki.org/wiki/Set_Intersection_is_Idempotent/Indexed_Family

Theorem
Let $\family {F_i}_{i \mathop \in I}$ be a non-empty indexed family of sets.
Suppose that all the sets in the $\family {F_i}_{i \mathop \in I}$ are the same.
That is, suppose that for some set $S$:

$\forall i \in I: F_i = S$

Then:

$\ds \bigcap_{i \mathop \in I} F_i = S$
where $\ds \bigcap_{i \mathop \in I} F_i$ is the intersection of $\family {F_i}_{i \mathop \in I}$.


Proof
First we show that:

$\ds \bigcap_{i \mathop \in I} F_i \subseteq S$
Let $x \in \ds \bigcap_{i \mathop \in I} F_i$.
Since $I$ is non-empty, it has an element $k$.
By the definition of intersection, $x \in F_k$.
By the premise, $F_k = S$, so $x \in S$.
Since this holds for all $x \in \ds \bigcap_{i \mathop \in I} F_i$:

$\ds \bigcap_{i \mathop \in I} F_i \subseteq S$

Next we show that:

$\ds S \subseteq \bigcap_{i \mathop \in I} F_i$
Let $x \in S$.
Then for all $i \in I$, $F_i = S$, so $x \in F_i$.
Thus by the definition of intersection:

$x \in \ds \bigcap_{i \mathop \in I} F_i$
Since this holds for all $x \in S$:

$S \subseteq \ds \bigcap_{i \mathop \in I} F_i$

By definition of set equality:

$\ds \bigcap_{i \mathop \in I} F_i = S$
$\blacksquare$





