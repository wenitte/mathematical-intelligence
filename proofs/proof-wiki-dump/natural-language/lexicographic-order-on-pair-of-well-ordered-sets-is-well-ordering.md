# 

Source: https://proofwiki.org/wiki/Lexicographic_Order_on_Pair_of_Well-Ordered_Sets_is_Well-Ordering



Theorem
Let $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ be ordered sets.
Let $\preccurlyeq_l$ denote the lexicographic order on $S_1 \times S_2$:

$\tuple {x_1, x_2} \preccurlyeq_l \tuple {y_1, y_2} \iff \tuple {x_1 \prec_1 y_1} \lor \tuple {x_1 = y_1 \land x_2 \preccurlyeq_2 y_2}$

Then:

$\preccurlyeq_l$ is a well-ordering on $S_1 \times S_2$
if and only if

both $\preccurlyeq_1$ and $\preccurlyeq_2$ are well-orderings.


Proof
From Lexicographic Order is Ordering we have that $\struct {S_1 \times S_2, \preccurlyeq_l}$ is an ordered set.


Necessary Condition
Let $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ be well-ordered sets.
By definition of well-ordering we have that $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ are totally ordered sets.
From Lexicographic Order on Pair of Totally Ordered Sets is Total Ordering it follows that $\struct {S_1 \times S_2, \preccurlyeq_l}$ is a totally ordered set.
It remains to be shown that the Cartesian product of arbitrary non-empty subsets of $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ has a smallest element under $\preccurlyeq_l$.

Let $T_1 \subseteq S_1$ and $T_2 \subseteq S_2$ be instances of those arbitrary non-empty subsets.

As both $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ are well-ordered sets it follows that both $\struct {T_1, \preccurlyeq_1}$ and $\struct {T_2, \preccurlyeq_2}$ have smallest elements.
Let those smallest elements be $m_1$ and $m_2$ respectively.
Consider the element $\tuple {m_1, m_2} \in T_1 \times T_2$.
Let $\tuple {x_1, x_2} \in T_1 \times T_2$.
We have that:

$m_1 \preccurlyeq_1 x_1$
and:

$m_2 \preccurlyeq_2 x_2$

The following cases are to be examined:

$(1): \quad m_1 \ne x_1$
By defiinition of $m_1$ as the smallest element of $T_1$:

$m_1 \preccurlyeq_1 x_1$
Thus by definition of the lexicographic order on $S_1 \times S_2$:

$\tuple {m_1, m_2} \preccurlyeq_l \tuple {x_1, x_2}$

$(2): \quad m_1 = x_1$
By definition of $m_2$ as the smallest element of $T_2$:

$m_2 \preccurlyeq_2 x_2$
Thus by definition of the lexicographic order on $S_1 \times S_2$:

$\tuple {m_1, m_2} \preccurlyeq_l \tuple {x_1, x_2}$

Thus it follows that $T_1 \times T_2$ has a smallest element $\tuple {m_1, m_2}$.
As $T_1 \times T_2$ is the Cartesian product of arbitrary non-empty subsets of $S_1$ and $S_2$, it follows that $\struct {S_1 \times S_2, \preccurlyeq_l}$ is a well-ordered set.
$\Box$


Sufficient Condition
Let $\struct {S_1 \times S_2, \preccurlyeq_l}$ be a well-ordered set.
By definition of well-ordering we have that $\struct {S_1 \times S_2, \preccurlyeq_l}$ is a totally ordered set.
From Lexicographic Order on Pair of Totally Ordered Sets is Total Ordering $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ are totally ordered sets.

It remains to be shown that arbitrary non-empty subsets of $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ have a smallest element.

Let $T_1 \subseteq S_1$ and $T_2 \subseteq S_2$.
Then $T_1 \times T_2 \subseteq S_1 \times S_2$.
We have that $\struct {S_1 \times S_2, \preccurlyeq_l}$ is a well-ordered set.
Hence, by definition of well-ordering, $\struct {T_1 \times T_2, \preccurlyeq_l}$ has a smallest element.

Let $\tuple {m_1, m_2} \in T_1 \times T_2$ be that smallest element of $T_1 \times T_2$.

Thus:

$\forall \tuple {x_1, x_2} \in T_1 \times T_2: \tuple {m_1, m_2} \preccurlyeq_l \tuple {x_1, x_2}$

There are two cases to address:

$(1): \quad$ Let $m_1 = x_1$.
Thus by definition of the lexicographic order on $S_1 \times S_2$:

$m_2 \preccurlyeq_2 x_2$
This is the case for all $\tuple {x_1, x_2} \in T_1 \times T_2$ such that $m_1 = x_1$.
Therefore:

$\forall x_2 \in T_2: m_2 \preccurlyeq_2 x_2$
Thus by definition, $m_2$ is the smallest element of $\struct {T_2, \preccurlyeq_2}$.
We have that $T_2$ is an arbitrary non-empty subset of $S_2$.
Therefore, by definition, $\struct {S_2, \preccurlyeq_2}$ is a well-ordered set.

$(2): \quad$ Let $m_1 \ne x_1$.
Thus by definition of the lexicographic order on $S_1 \times S_2$:

$m_1 \prec_1 x_1$
This is the case for all $\tuple {x_1, x_2} \in T_1 \times T_2$ such that $m_1 \ne x_1$.
Therefore:

$\forall x_1 \in T_1: m_1 \preccurlyeq_1 x_1$
Thus, by definition, $m_1$ is the smallest element of $\struct {T_1, \preccurlyeq_1}$.
We have that $T_1$ is an arbitrary non-empty subset of $S_1$.
Therefore, by definition, $\struct {S_1, \preccurlyeq_1}$ is a well-ordered set.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.19 \ \text{(b)}$




