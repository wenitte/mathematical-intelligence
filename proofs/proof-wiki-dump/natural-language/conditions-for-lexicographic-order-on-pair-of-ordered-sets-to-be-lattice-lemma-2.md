# 

Source: https://proofwiki.org/wiki/Conditions_for_Lexicographic_Order_on_Pair_of_Ordered_Sets_to_be_Lattice/Lemma_2

Theorem
Let $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ be ordered sets.
Let $\preccurlyeq_l$ denote the lexicographic order on $S_1 \times S_2$:

$\tuple {x_1, x_2} \preccurlyeq_l \tuple {y_1, y_2} \iff \tuple {x_1 \prec_1 y_1} \lor \tuple {x_1 = y_1 \land x_2 \preccurlyeq_2 y_2}$

Let $x_1$ and $y_1$ be non-comparable elements in $S_1$:

$\lnot \paren {x_1 \preccurlyeq_1 y_1}$ and $\lnot \paren {y_1 \preccurlyeq_1 x_1}$
Then $\tuple {x_1, x_2}$ and $\tuple {y_1, y_2}$ are non-comparable elements in $S_1 \times S_2$:

$\lnot \paren {\tuple {x_1, x_2} \preccurlyeq_l \tuple {y_1, y_2} }$ and $\lnot \paren {\tuple {y_1, y_2} \preccurlyeq_l \tuple {x_1, x_2} }$


Proof
Suppose $x_1$ and $y_1$ are non-comparable elements in $S_1$:

$\lnot \paren {x_1 \preccurlyeq_1 y_1}$ and $\lnot \paren {y_1 \preccurlyeq_1 x_1}$

Aiming for a contradiction, suppose that:

$\tuple {x_1, x_2} \preccurlyeq_l \tuple {y_1, y_2}$ or $\tuple {y_1, y_2} \preccurlyeq_l \tuple {x_1, x_2}$
Then from Lemma $1$:

$x_1 \preccurlyeq_1 y_1$ or $y_1 \preccurlyeq_1 x_1$
This contradicts our assumption.

Hence the result by Proof by Contradiction.
$\blacksquare$





