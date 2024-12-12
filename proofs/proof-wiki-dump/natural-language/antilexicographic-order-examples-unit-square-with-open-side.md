# 

Source: https://proofwiki.org/wiki/Antilexicographic_Order/Examples/Unit_Square_with_Open_Side

Example of Antilexicographic Order
Consider the antilexicographic product of the real intervals $\hointr 0 1$ and $\closedint 0 1$ under the usual ordering:

$\struct {T, \preccurlyeq_a} := \struct {\hointr 0 1, \le} \otimes^a \struct {\closedint 0 1, \le}$

$\struct {T, \preccurlyeq_a}$ has one minimal element:

$\tuple {0, 0}$
which is also the smallest element: of $\struct {T, \preccurlyeq_l}$.

$\struct {T, \preccurlyeq_a}$ has no greatest element and no maximal elements.


Proof
Recall the definition of the antilexicographic order:

$\tuple {a, b} \preccurlyeq_a \tuple {c, d} \iff \tuple {c \prec_2 d} \lor \paren {c = d \land a \preccurlyeq_1 b}$

Let $\tuple {a, b} \in T$ be a minimal element of $T$.

$\forall \tuple {x, y} \in T: \tuple {x, y} \preccurlyeq_l \tuple {a, b} \implies \tuple {x, y} = \tuple {a, b}$
Suppose $a \ne 0$.
Then:

$\tuple {0, b} \preccurlyeq_a \tuple {a, b}$ but $\tuple {0, b} \ne \tuple {a, b}$
Similarly, suppose $b \ne 0$.
Then:

$\tuple {a, 0} \preccurlyeq_a \tuple {a, b}$ but $\tuple {a, 0} \ne \tuple {a, b}$
Hence if $\tuple {a, b}$ is a minimal element of $T$ it follows that:

$\tuple {a, b} = \tuple {0, 0}$
$\Box$

Next we note that:

$\forall \tuple {c, d} \in T: 0 \le c, 0 \le d$
and so:

$\forall \tuple {c, d} \in T: \tuple {0, 0} \preccurlyeq_a \tuple {c, d}$
Hence by definition $\tuple {0, 0}$ is a smallest element of $T$.
By Smallest Element is Unique, $\tuple {0, 0}$ is then the smallest element of $T$.
$\Box$

Aiming for a contradiction, suppose $T$ has a maximal element $\tuple {u, v}$.
Then we have:

$\tuple {u, v} \preccurlyeq_a \tuple {x, y} \implies \tuple {u, v} = \tuple {x, y}$
and in particular:

$\tuple {u, v} \preccurlyeq_a \tuple {x, v} \implies \tuple {u, v} = \tuple {x, v}$
That is:

$u \le x \implies u = x$
But we have that:

$u \in \hointr 0 1$
and so:

$u < 1$
So take:

$x = \dfrac u 1 + \dfrac 1 1 = \dfrac {u + 1} 2$
Hence from Mediant is Between:

$u < x$
and so it is not the case that $u \le x \implies u = x$.
Hence it is not the case that:

$\tuple {u, v} \preccurlyeq_a \tuple {x, v} \implies \tuple {u, v} = \tuple {x, v}$
and so $\tuple {u, v}$ is not a maximal element of $T$.
So by Proof by Contradiction it follows that there is no maximal element of $T$.
$\Box$

Aiming for a contradiction, suppose $\tuple {u, v}$ is a greatest element of $T$.
From Greatest Element is Maximal, $\tuple {u, v}$ would have to be a maximal element of $T$.
But from above $T$ has no maximal element.
Hence by Proof by Contradiction it follows that there is no greatest element of $T$.
$\Box$

Hence the result.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $31$




