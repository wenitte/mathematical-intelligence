# 

Source: https://proofwiki.org/wiki/Antilexicographic_Product_of_Totally_Ordered_Sets_is_Totally_Ordered



Theorem
Let $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ be totally ordered sets.
Let $S_1 \otimes^a S_2 = \struct {S_1 \times S_2, \preccurlyeq_a}$ be the antilexicographic product of $S_1$ and $S_2$.

Then $\struct {S_1 \times S_2, \preccurlyeq_a}$ is itself a totally ordered set.


General Result
Let $S_1, S_2, \ldots, S_n$ all be totally ordered sets.
Let $T_n$ be the antilexicographic product of $S_1, S_2, \ldots, S_n$:

$\forall n \in \N_{>0}: T_n = \begin {cases}
S_1 & : n = 1 \\
T_{n - 1} \otimes^a S_n & : n > 1
\end {cases}$
Then $T_n$ is a totally ordered set.


Proof
From Antilexicographic Order is Ordering, we have that $\preccurlyeq_a$ is an ordering.
It remains to be shown that $\preccurlyeq_a$ is connected.

By definition of antilexicographic product, we have that:

$\tuple {a, b} \preccurlyeq_a \tuple {c, d} \iff \tuple {c \prec_2 d} \lor \paren {c = d \land a \preccurlyeq_1 b}$
We note that as $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ are both totally ordered sets, then $\preccurlyeq_1$ and $\preccurlyeq_2$ are both connected.
Hence either:

$c \prec_2 d$ or $d \prec_2 c$ or $c = d$
and also either 

$a \preccurlyeq_2 b$ or $b \preccurlyeq_2 a$
If $c \prec_2 d$ or $d \prec_2 c$, it follows directly that:

$\tuple {a, b} \preccurlyeq_a \tuple {c, d}$ or $\tuple {c, d} \preccurlyeq_a \tuple {a, b}$
Suppose $c = d$.
We have that either:

$a \preccurlyeq_2 b$ or $b \preccurlyeq_2 a$
and so it follows that:

$\tuple {a, b} \preccurlyeq_a \tuple {c, d}$ or $\tuple {c, d} \preccurlyeq_a \tuple {a, b}$

Hence, by definition, $\preccurlyeq_a$ is connected.

So we have shown that:

$\preccurlyeq_a$ is connected
$\preccurlyeq_a$ is reflexive, transitive and antisymmetric.
Thus by definition, $\preccurlyeq_a$ is a total ordering and so $\struct {S_1 \times S_2, \preccurlyeq_a}$ is a totally ordered set.
$\blacksquare$


Sources
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 3.4$: Ordered sums and products of ordered sets
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $31 \ \text{(a)}$




