# 

Source: https://proofwiki.org/wiki/Lexicographic_Order_on_Pair_of_Totally_Ordered_Sets_is_Total_Ordering



Theorem
Let $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ be ordered sets.
Let $\preccurlyeq_l$ be the lexicographic order on $S_1 \times S_2$:

$\tuple {x_1, x_2} \preccurlyeq_l \tuple {y_1, y_2} \iff \paren {x_1 \prec_1 y_1} \lor \paren {x_1 = y_1 \land x_2 \preccurlyeq_2 y_2}$

Then:

$\preccurlyeq_l$ is a total ordering on $S_1 \times S_2$
if and only if

both $\preccurlyeq_1$ and $\preccurlyeq_2$ are total orderings.


Proof
Recall that from Lexicographic Order is Ordering we have that $\struct {S_1 \times S_2, \preccurlyeq_l}$ is an ordered set.


Necessary Condition
Let $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ be totally ordered sets.
Let $\tuple {x_1, x_2}, \tuple {y_1, y_2} \in S_1 \times S_2$.

The following cases are to be examined:

$(1): \quad x_1 \ne y_1$
As $\preccurlyeq_1$ is a total ordering it follows that either $x_1 \preccurlyeq_1 y_1$ or $y_1 \preccurlyeq_1 x_1$.
Thus by definition of the lexicographic order on $S_1 \times S_2$:

either $\tuple {x_1, x_2} \preccurlyeq_l \tuple {y_1, y_2}$ or $\tuple {y_1, y_2} \preccurlyeq_l \tuple {x_1, x_2}$.

$(2): \quad x_1 = y_1$
As $\preccurlyeq_2$ is a total ordering it follows that one of the following holds:

$x_2 \preccurlyeq_2 y_2$ in which case $\tuple {x_1, x_2} \preccurlyeq_l \tuple {y_1, y_2}$
$y_2 \preccurlyeq_2 x_2$ in which case $\tuple {y_1, y_2} \preccurlyeq_l \tuple {x_1, x_2}$
$x = y$ in which case $\tuple {x_1, x_2} = \tuple {y_1, y_2}$
by definition of the lexicographic order on $S_1 \times S_2$,

In all cases $\tuple {x_1, x_2}$ is comparable with $\tuple {y_1, y_2}$.
That is, $\preccurlyeq_l$ is a total ordering on $S_1 \times S_2$
$\Box$


Sufficient Condition
Let $\struct {S_1 \times S_2, \preccurlyeq_l}$ be a totally ordered set.

There are two cases to address:

$(1): \quad$ Let $\tuple {x_1, x_2}, \tuple {y_1, y_2} \in S_1 \times S_2$ such that $x_1 = x_2$.
As $\preccurlyeq_l$ is a total ordering it follows that one of the following holds:

$\tuple {x_1, x_2} \preccurlyeq_l \tuple {y_1, y_2}$ in which case $x_2 \preccurlyeq_2 y_2$
$\tuple {y_1, y_2} \preccurlyeq_l \tuple {x_1, x_2}$ in which case $y_2 \preccurlyeq_2 x_2$
$\tuple {x_1, x_2} = \tuple {y_1, y_2}$ in which case $x = y$
by definition of the lexicographic order on $S_1 \times S_2$.
As the above holds for all $x_2, y_2 \in S_2$, it follows that $\preccurlyeq_2$ is a total ordering on $S_2$.

$(2): \quad$ Let $\tuple {x_1, x_2}, \tuple {y_1, y_2} \in S_1 \times S_2$ such that $x_1 \ne x_2$.
As $\preccurlyeq_l$ is a total ordering it follows that one of the following holds:

$\tuple {x_1, x_2} \preccurlyeq_l \tuple {y_1, y_2}$ in which case $x_1 \preccurlyeq_1 y_1$
$\tuple {y_1, y_2} \preccurlyeq_l \tuple {x_1, x_2}$ in which case $y_1 \preccurlyeq_1 x_1$
by definition of the lexicographic order on $S_1 \times S_2$.
As the above holds for all $x_1, y_1 \in S_1$, it follows that $\preccurlyeq_1$ is a total ordering on $S_1$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.19 \ \text{(b)}$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 3$: Relations: Exercise $3.9$




