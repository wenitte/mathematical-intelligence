# 

Source: https://proofwiki.org/wiki/Order_Sum_of_Totally_Ordered_Sets_is_Totally_Ordered

Theorem
Let $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ be totally ordered sets.

Then the order sum $\struct {S_1, \preccurlyeq_1} \oplus \struct {S_2, \preccurlyeq_2}$ of $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ is also a totally ordered set.


Proof
Let $\struct {S, \preccurlyeq} := \struct {S_1, \preccurlyeq_1} \oplus \struct {S_2, \preccurlyeq_2}$.

From Order Sum of Ordered Sets is Ordered, $\struct {S, \preccurlyeq}$ is an ordered set.
It remains to be shown that $\tuple {a, b}$ and $\tuple {c, d}$ are comparable for all $\tuple {a, b}, \tuple {c, d} \in S$.

Let $\tuple {a, b}, \tuple {c, d} \in S$ be arbitrary.
By definition:

$\forall \tuple {a, b}, \tuple {c, d} \in S: \tuple {a, b} \preccurlyeq \tuple {c, d} \iff \begin {cases} b = 0 \text { and } d = 1 \\ b = d = 0 \text { and } a \preccurlyeq_1 c \\ b = d = 1 \text { and } a \preccurlyeq_2 c \end {cases}$

Let $a, c \in S_1$.
Then as $\preccurlyeq_1$ is a total ordering, $a$ and $c$ are comparable.
Hence by definition of $\oplus$ it follows that $\tuple {a, b}$ and $\tuple {c, d}$ are comparable.

Let $a, c \in S_2$.
Then as $\preccurlyeq_2$ is a total ordering, $a$ and $c$ are comparable.
Hence by definition of $\oplus$ it follows that $\tuple {a, b}$ and $\tuple {c, d}$ are comparable.
Finally, let $a \in S_1$ and $c \in S_2$.
Then $\tuple {a, 0} \in S$ and $\tuple {c, 1} \in S$.
Hence by definition of $\oplus$ it follows that $\tuple {a, b} \preccurlyeq \tuple {c, d}$ and so are comparable.

In all cases, $\tuple {a, b}$ and $\tuple {c, d}$ are comparable.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $26 \ \text {(b)}$




