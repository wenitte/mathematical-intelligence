# 

Source: https://proofwiki.org/wiki/Conditions_for_Lexicographic_Order_on_Pair_of_Ordered_Sets_to_be_Lattice/Lemma_1

Theorem
Let $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ be ordered sets.
Let $\preccurlyeq_l$ denote the lexicographic order on $S_1 \times S_2$:

$\tuple {x_1, x_2} \preccurlyeq_l \tuple {y_1, y_2} \iff \tuple {x_1 \prec_1 y_1} \lor \tuple {x_1 = y_1 \land x_2 \preccurlyeq_2 y_2}$

Let $\tuple {x_1, x_2} \preccurlyeq_l \tuple {y_1, y_2}$.
Then:

$x_1 \preccurlyeq_1 y_1$


Proof
Recall the definition of lexicographic order:
Let $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ be ordered sets.
The lexicographic order $\struct {S_1, \preccurlyeq_1} \otimes^l \struct {S_2, \preccurlyeq_2}$ on $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ is the ordered set $\struct {T, \preccurlyeq_l}$ where:

$T := S_1 \times S_2$, that is, the Cartesian product of $S_1$ and $S_2$
$\preccurlyeq_l$ is the relation defined on $T$ as:
$\tuple {x_1, x_2} \preccurlyeq_l \tuple {y_1, y_2} \iff \tuple {x_1 \prec_1 y_1} \lor \paren {x_1 = y_1 \land x_2 \preccurlyeq_2 y_2}$

Then:














\(\ds \tuple {x_1, x_2}\)

\(\preccurlyeq_l\)







\(\ds \tuple {y_1, y_2}\)





Definition of Upper Bound of Set








\(\ds \leadsto \ \ \)





\(\ds x_1\)

\(\prec_1\)







\(\ds y_1\)





Definition of Lexicographic Order












\(\, \ds \lor \, \)

\(\ds \leftparen {x_1 = y_1}\)

\(\land\)







\(\ds \rightparen {x_2 \preccurlyeq_2 y_2}\)














\(\ds \leadsto \ \ \)





\(\ds x_1\)

\(\prec_1\)







\(\ds y_1\)


















\(\, \ds \lor \, \)

\(\ds x_1\)

\(=\)







\(\ds y_1\)














\(\ds \leadsto \ \ \)





\(\ds x_1\)

\(\preccurlyeq_1\)







\(\ds y_1\)





Definition of $\preccurlyeq_1$



$\blacksquare$





