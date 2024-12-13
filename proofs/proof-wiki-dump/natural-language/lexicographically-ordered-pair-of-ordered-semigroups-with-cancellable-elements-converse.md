# 

Source: https://proofwiki.org/wiki/Lexicographically_Ordered_Pair_of_Ordered_Semigroups_with_Cancellable_Elements/Converse

Theorem
Let $\struct {S_1, \circ_1, \preccurlyeq_1}$ and $\struct {S_2, \circ_2, \preccurlyeq_2}$ be ordered semigroups.

Let $\struct {S_1 \times S_2, \odot} := \struct {S_1, \circ_1} \times \struct {S_2, \circ_2}$ denote the external direct product of $\struct {S_1, \circ_1}$ and $\struct {S_2, \circ_2}$.
Let $\struct {S_1 \times S_2, \preccurlyeq_l} := \struct {S_1, \preccurlyeq_1} \otimes^l \struct {S_2, \preccurlyeq_2}$ denote the lexicographic order of $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$:

$\tuple {x_1, x_2} \preccurlyeq_l \tuple {y_1, y_2} \iff \paren {x_1 \prec_1 y_1} \lor \paren {x_1 = y_1 \land x_2 \preccurlyeq_2 y_2}$
If $\circ_1$ is not a cancellable operation, then it may not necessarily be the case that $\preccurlyeq_l$ is compatible with $\odot$.


Proof
Recall from Lexicographically Ordered Pair of Ordered Semigroups with Cancellable Elements that if $\circ_1$ is cancellable, then $\preccurlyeq_l$ is compatible with $\odot$.
Let $\Z_2$ denote the set of integers modulo $2$:

$\Z_2 = \set {0, 1}$
Let $\vee_2$ be the operation on $\Z_2$ defined as:

$\forall a, b \in \Z_2: a \vee_2 b = \max \set {a, b}$
From Integers Modulo m under Max Operation form Ordered Semigroup, the ordered algebraic structure $\struct {\Z_2, \vee_2, \le}$ is an ordered semigroup.

Let $\struct {\Z_2 \times \Z_2, \odot, \le_l}$ be the external direct product of $\struct {\Z_2, \vee_2, \le}$ with itself, such that:

$\odot$ is the operation defined as:
$\forall \tuple {x_1, y_1}, \tuple {x_2, y_2} \in \Z_2 \times \Z_2: \tuple {x_1, y_1} \odot \tuple {x_2, y_2} := \tuple {x_1 \vee_2 x_2, y_1 \vee_2, y_2}$
$\le_l$ is the lexicographic ordering defined as:
$\tuple {x_1, x_2} \le_l \tuple {y_1, y_2} \iff \paren {x_1 < y_1} \lor \paren {x_1 = y_1 \land x_2 \le y_2}$

From Lexicographic Order is Ordering we have that $\struct {S_1 \times S_2, \preccurlyeq_l}$ is an ordered set.
From External Direct Product of Semigroups, $\struct {S_1 \times S_2, \odot}$ is a semigroup.
However, we note that $\vee_2$ is not cancellable:

$0 \vee_2 1 = 1 \vee_2 1$
but:

$0 \ne 1$

We are now to demonstrate that $\le_l$ is not compatible with $\odot$.

Indeed:














\(\ds \tuple {0, 1}\)

\(\le_l\)







\(\ds \tuple {1, 0}\)




















\(\ds \tuple {0, 1} \odot \tuple {1, 0}\)

\(=\)







\(\ds \tuple {1, 1}\)




















\(\ds \tuple {1, 0} \odot \tuple {1, 0}\)

\(=\)







\(\ds \tuple {1, 0}\)









Thus we have that:














\(\ds \tuple {1, 0} \odot \tuple {1, 0}\)

\(\le_l\)







\(\ds \tuple {0, 1} \odot \tuple {1, 0}\)









Hence and so.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Exercise $15.6$




