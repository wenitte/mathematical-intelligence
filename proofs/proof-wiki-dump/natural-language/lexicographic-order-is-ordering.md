# 

Source: https://proofwiki.org/wiki/Lexicographic_Order_is_Ordering



Theorem
Let $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ be ordered sets.
Let $\preccurlyeq_l$ be the lexicographic order on $S_1 \times S_2$:

$\tuple {x_1, x_2} \preccurlyeq_l \tuple {y_1, y_2} \iff \paren {x_1 \prec_1 y_1} \lor \paren {x_1 = y_1 \land x_2 \preccurlyeq_2 y_2}$

Then $\preccurlyeq_l$ is an ordering on $S_1 \times S_2$.


Proof
In the following, $\tuple {x_1, x_2}, \tuple {y_1, y_2}, \tuple {z_1, z_2} \in S_1 \times S_2$.
Checking in turn each of the criteria for an ordering:


Reflexivity
From Equality of Ordered Pairs:

$x_1 = x_2 \land y_1 = y_2 \iff \tuple {x_1, x_2} = \tuple {y_1, y_2}$
Thus:

$\tuple {x_1, x_2} = \tuple {x_1, x_2}$
and so:

$\tuple {x_1, x_2} \preccurlyeq_l \tuple {x_1, x_2}$
by definition of lexicographic order on $S_1 \times S_2$.
So $\preccurlyeq_l$ has been shown to be reflexive.
$\Box$


Transitivity
Let:

$\tuple {x_1, x_2} \preccurlyeq_l \tuple {y_1, y_2}$
and:

$\tuple {y_1, y_2} \preccurlyeq_l \tuple {z_1, z_2}$

$(1): \quad$ Let $x_1 = y_1 = z_1$.
Then by definition of lexicographic order on $S_1 \times S_2$:

$x_2 \preccurlyeq_2 y_2$
and:

$y_2 \preccurlyeq_2 z_2$
As $\preccurlyeq_2$ is an ordering, it is transitive.
Thus:

$x_2 \preccurlyeq_2 z_2$
and it follows by definition of lexicographic order on $S_1 \times S_2$ that:

$\tuple {x_1, x_2} \preccurlyeq_l \tuple {z_1, z_2}$

$(2): \quad$ Let $x_1 = y_1$ and $y_1 \ne z_1$.
Then by definition of lexicographic order on $S_1 \times S_2$:

$y_1 \prec z_1$
But as $x_1 = y_1$:

$x_1 \prec z_1$
and so by definition of lexicographic order on $S_1 \times S_2$:

$\tuple {x_1, x_2} \preccurlyeq_l \tuple {z_1, z_2}$

$(3): \quad$ Let $x_1 \ne y_1$ and $y_1 = z_1$.
Then by definition of lexicographic order on $S_1 \times S_2$:

$x_1 \prec y_1$
But as $y_1 = z_1$:

$x_1 \prec z_1$
and so by definition of lexicographic order on $S_1 \times S_2$:

$\tuple {x_1, x_2} \preccurlyeq_l \tuple {z_1, z_2}$

$(4): \quad$ Let $x_1 \ne y_1$ and $y_1 \ne z_1$.
Then by definition of lexicographic order on $S_1 \times S_2$:

$x_1 \prec y_1$
and:

$y_1 \prec z_1$
As $\preccurlyeq_1$ is an ordering, it is transitive.

$x_1 \prec z_1$
So by definition of lexicographic order on $S_1 \times S_2$:

$\tuple {x_1, x_2} \preccurlyeq_l \tuple {z_1, z_2}$

Thus in all cases it can be seen that:

$\tuple {x_1, x_2} \preccurlyeq_l \tuple {z_1, z_2}$

So $\preccurlyeq_l$ has been shown to be transitive.
$\Box$


Antisymmetry
Suppose that:

$\tuple {x_1, x_2} \preccurlyeq_l \tuple {y_1, y_2}$
and:

$\tuple {y_1, y_2} \preccurlyeq_l \tuple {x_1, x_2}$

Suppose $x_1 \ne y_1$.
Then by definition of lexicographic order on $S_1 \times S_2$:

$x_1 \preccurlyeq_1 y_1$
and:

$y_1 \preccurlyeq_1 x_1$
But $\preccurlyeq_1$ is an ordering and so $x_1 = y_1$.
From that contradiction it follows that $x_1 = y_1$.

Then by definition of lexicographic order on $S_1 \times S_2$:

$x_2 \preccurlyeq_2 y_2$
and:

$y_2 \preccurlyeq_2 x_2$
As $\preccurlyeq_2$ is an ordering, it is antisymmetric.
Therefore:

$x_2 = y_2$
and so:

$\tuple {x_1, x_2} = \tuple {y_1, y_2}$
So $\preccurlyeq_l$ has been shown to be antisymmetric.
$\Box$

$\preccurlyeq_l$ has been shown to be reflexive, transitive and antisymmetric.
Hence by definition it is an ordering.
$\blacksquare$





