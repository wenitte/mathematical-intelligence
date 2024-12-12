# 

Source: https://proofwiki.org/wiki/Complex_Numbers_cannot_be_Extended_to_Algebra_in_Three_Dimensions_with_Real_Scalars

Theorem
It is not possible to extend the complex numbers to an algebra of $3$ dimensions with real scalars.


Proof
Aiming for a contradiction, suppose that $\set {1, i, j}$ forms a basis for an algebra of $3$ dimensions with real scalars.
Let $1$ and $i$ have their usual properties as they do as complex numbers:

$\forall a: 1 a = a 1 = a$
$i \cdot i = -1$
Then:

$i j = a_1 + a_2 i + a_3 j$
for some $a_1, a_2, a_3 \in \R$.

Multiplying through by $i$:

$(1): \quad i \paren {i j} = \paren {i i} j = -j$
and:














\(\ds i \paren {a_1 + a_2 i + a_3 j}\)

\(=\)







\(\ds a_1 i - a_2 + a_3 i j\)




















\(\ds \)

\(=\)







\(\ds a_1 i - a_2 + a_3 \paren {a_1 + a_2 i + a_3 j}\)




















\(\ds \)

\(=\)







\(\ds a_1 i - a_2 + a_1 a_3 + a_2 a_3 i + {a_3}^2 j\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds \paren {a_1 a_3 - a_2} + \paren {a_1 + a_2 a_3} i + \paren { {a_3}^2 + 1} j\)





from $(1)$




But this implies that ${a_3}^2 = -1$, which contradicts our supposition that $a_3 \in \R$.
Hence the result by Proof by Contradiction.
$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.26$: Extensions of the Complex Number System. Algebras, Quaternions, and Lagrange's Four Squares Theorem




