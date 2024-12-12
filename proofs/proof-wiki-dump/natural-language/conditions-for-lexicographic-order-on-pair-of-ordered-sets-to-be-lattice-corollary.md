# 

Source: https://proofwiki.org/wiki/Conditions_for_Lexicographic_Order_on_Pair_of_Ordered_Sets_to_be_Lattice/Corollary



Theorem
Let $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ be ordered sets.
Let $\preccurlyeq_l$ denote the lexicographic order on $S_1 \times S_2$:

$\tuple {x_1, x_2} \preccurlyeq_l \tuple {y_1, y_2} \iff \tuple {x_1 \prec_1 y_1} \lor \tuple {x_1 = y_1 \land x_2 \preccurlyeq_2 y_2}$

Let $\struct {S_2, \preccurlyeq_2}$ have neither a greatest element nor a smallest element.
Then:

$\preccurlyeq_l$ is a lattice ordering
if and only if:

$\preccurlyeq_1$ is a total ordering
and:

$\preccurlyeq_2$ is a lattice ordering.


Proof
Sufficient Condition
Let $\preccurlyeq_l$ be a lattice ordering.
We are given that $\struct {S_2, \preccurlyeq_2}$ has neither a greatest element nor a smallest element.
From Condition $(2)$ of Conditions for Lexicographic Order on Pair of Ordered Sets to be Lattice, it follows that $\preccurlyeq_1$ is a total ordering.
Because $\struct {S_2, \preccurlyeq_2}$ has no smallest element, it follows from Condition $(4)$ of Conditions for Lexicographic Order on Pair of Ordered Sets to be Lattice that every doubleton subset of $S_2$ admits a supremum.
Because $\struct {S_2, \preccurlyeq_2}$ has no greatest element, it follows from Condition $(5)$ of Conditions for Lexicographic Order on Pair of Ordered Sets to be Lattice that every doubleton subset of $S_2$ admits an infimum.
Thus every doubleton subset of $S_2$ admits a supremum and an infimum.
That is, $\preccurlyeq_2$ is a lattice ordering.
$\Box$


Necessary Condition
Let:

$\preccurlyeq_1$ be a total ordering
and:

$\preccurlyeq_2$ be a lattice ordering.

From Totally Ordered Set is Lattice, $\preccurlyeq_1$ is a lattice ordering.
Thus Condition $(1)$ of Conditions for Lexicographic Order on Pair of Ordered Sets to be Lattice holds.

We are given that $\preccurlyeq_1$ be a total ordering.
Thus Condition $(2)$ of Conditions for Lexicographic Order on Pair of Ordered Sets to be Lattice holds.

We are given that $\preccurlyeq_2$ is a lattice ordering.
Hence every doubleton subset of $S_2$ admits a supremum and an infimum.
Thus Conditions $(3)$, $(4)$ and $(5)$ of Conditions for Lexicographic Order on Pair of Ordered Sets to be Lattice hold.

Hence from Conditions for Lexicographic Order on Pair of Ordered Sets to be Lattice:

$\preccurlyeq_l$ is a lattice ordering.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.19 \ \text{(c)}$




