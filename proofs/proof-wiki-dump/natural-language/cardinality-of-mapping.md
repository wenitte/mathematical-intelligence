# 

Source: https://proofwiki.org/wiki/Cardinality_of_Mapping

Theorem
Let $S$ be a finite set whose cardinality is $n$:

$\card S = n$
Let $T$ be a non-empty set
Let $f: S \to T$ be a mapping.

Then:

$\card f = n$


Proof
First suppose $T = \O$ there are no elements in $f$
From Null Relation is Mapping iff Domain is Empty Set, there are no elements in $f$.
Hence in this case $\card f = 0$, whatever $\card S$ may be,

By definition of mapping, $f$ is a set of ordered pairs $\tuple {s, t}$ where $s \in S$ and $t \in T$, such that:

$(1): \quad \forall s \in S: \exists \tuple {s, t} \in f$
and:

$(2): \quad \forall x \in S: \tuple {s, t_1} \in f \land \tuple {s, t_2} \in f \implies t_1 = t_2$

From $(1)$ it follows that $\card f \ge n$.

Aiming for a contradiction, suppose that $\card f > n$.
Then by the Pigeonhole Principle:

$\exists x \in f: \exists y_1, y_2 \in T, y_1 \ne y_2: \tuple {x, y_1} \in f \land \tuple {x, y_2} \in f$
and so $f$ is not a mapping.
From this contradiction it follows that $\card f = n$.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.4$: Functions




