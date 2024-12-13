# 

Source: https://proofwiki.org/wiki/Order_Sum_of_Well-Founded_Orderings_is_Well-Founded_Ordering

Theorem
Let $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ be ordered sets.
Let $\preccurlyeq_1$ and $\preccurlyeq_2$ be well-founded.

Then the order sum $\struct {S_1, \preccurlyeq_1} \oplus \struct {S_2, \preccurlyeq_2}$ of $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ is also well-founded.


Proof
Let $\struct {S, \preccurlyeq} := \struct {S_1, \preccurlyeq_1} \oplus \struct {S_2, \preccurlyeq_2}$.
Let $T \subseteq S$ such that $T \ne \O$.
Let $T = T_1 \sqcup T_2$ where $T_1 \subseteq S_1$ and $T_2 \subseteq S_2$.

Let $T_1 \ne \O$.
Then:

$\exists x \in T_1: \forall y \in T_1: y \preccurlyeq x \implies y = x$
That is, $T_1$ has a minimal element $x$ of $T_1$.
Thus we have:

$\forall y \in T_1: \tuple {y, 0} \preccurlyeq \tuple {x, 0} \implies \tuple {y, 0} = \tuple {x, 0}$
by definition of order sum.
Also by definition of order sum:

$\forall \tuple {z, 1} \in T: \tuple {x, 0} \preccurlyeq \tuple {z, 1}$
and so vacuously:

$\forall \tuple {z, 1} \in T: \tuple {z, 1} \preccurlyeq \tuple {x, 0} \implies \tuple {z, 1} = {x, 0}$
and so $\tuple {x, 0}$ is seen to be a minimal element of $T$.
So if $T_1 \ne \O$ it follows that $T$ has a minimal element.

Let $T_1 = \O$.
Then $T$ consists completely of elements of the form $\tuple {t, 1}$ where $t \in T_2$.
So, let $x \in T_2$ be a minimal element $T_2$.
Then:

$\forall y \in T_2: y \preccurlyeq x \implies y = x$
Thus we have:

$\forall y \in T_2: \tuple {y, 1} \preccurlyeq \tuple {x, 1} \implies \tuple {y, 1} = \tuple {x, 1}$
by definition of order sum.
So $\tuple {x, 1}$ is seen to be a minimal element of $T$.
So if $T_1 = \O$ it follows that $T$ has a minimal element.

In both cases it is seen that an arbitrary non-empty subset of $T$ has a minimal element.
Hence the result by definition of well-founded.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $26 \ \text {(a)}$




