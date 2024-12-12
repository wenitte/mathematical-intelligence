# 

Source: https://proofwiki.org/wiki/Antilexicographic_Product_on_Pair_of_Well-Ordered_Sets_is_Well-Ordered

Theorem
Let $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ be well-ordered sets.
Let $S_1 \otimes^a S_2 = \struct {S_1 \times S_2, \preccurlyeq_a}$ be the antilexicographic product of $S_1$ and $S_2$.

Then $\struct {S_1 \times S_2, \preccurlyeq_a}$ is itself a well-ordered set.


Proof
By definition, a well-ordered set is a totally ordered set which is well-founded.
From Antilexicographic Product of Totally Ordered Sets is Totally Ordered, we have that $\preccurlyeq_a$ is a totally ordered set.

It remains to be shown that $\preccurlyeq_a$ is a well-founded relation.

Let $T = S_1 \times S_2$.
Let $A$ be a non-empty subset of $T$.
Let $A_2$ be the set of all of the second cooordinates of the ordered pairs that comprise $A$:

$A_2 = \set {b \in S_2: \tuple {a, b} \in A}$
We have that:

$A_2$ is a non-empty subset of $S_2$
$S_2$ is well-ordered by $\preccurlyeq_2$
Hence $A_2$ contains a minimal element $y$ by $\preccurlyeq_a$.
Let $A_y$ be the subset of $A$ in which the second cooordinate equals $y$.

$A_y = \set {\tuple {a, b} \in A: b = y}$
Let $A_x$ be the set of first cooordinates of $A_y$.

$A_x = \set {a \in S_1: \tuple {a, y} \in A}$
Then:

$A_x$ is a non-empty subset of $S_1$
$S_1$ is well-ordered by $\preccurlyeq_1$
So $A_x$ contains a minimal element $x$.
Thus we have constructed $\tuple {x, y}$, which is the minimal element of $A$ by $\preccurlyeq_a$.

As $A$ is arbitrary, it follows that every non-empty subset of $T$ has a minimal element by $\preccurlyeq_a$.
That is, $\preccurlyeq_a$ is a well-founded relation.

Hence, by definition, $T$ is well-ordered by $\preccurlyeq_a$.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $31 \ \text{(b)}$




