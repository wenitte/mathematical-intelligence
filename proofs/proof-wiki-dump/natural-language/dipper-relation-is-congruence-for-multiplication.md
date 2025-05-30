# 

Source: https://proofwiki.org/wiki/Dipper_Relation_is_Congruence_for_Multiplication

Theorem
Let $m \in \N$ be a natural number.
Let $n \in \N_{>0}$ be a non-zero natural number.

Let $\RR_{m, n}$ be the dipper relation on $\N$:

$\forall x, y \in \N: x \mathrel {\RR_{m, n} } y \iff \begin {cases} x = y \\ m \le x < y \text { and } n \divides \paren {y - x} \\  m \le y < x \text { and } n \divides \paren {x - y} \end {cases}$

Then $\RR_{m, n}$ is a congruence relation for multiplication.


Proof
From Dipper Relation is Equivalence Relation we have that $\RR_{m, n}$ is an equivalence relation.
From Equivalence Relation is Congruence iff Compatible with Operation, it is sufficient to show that:

$\forall x, y, z \in \N: x \mathrel {\RR_{m, n} } y \implies \paren {x z} \mathrel {\RR_{m, n} } \paren {y z}$
and:

$\forall x, y, z \in \N: x \mathrel {\RR_{m, n} } y \implies \paren {z x} \mathrel {\RR_{m, n} } \paren {z y}$
Furthermore, because Natural Number Addition is Commutative, it is sufficient to demonstrate the first of these only.

First let $x = y$.
We have that:

$x = y \implies x z = y z$
and so:

$\paren {x z} \mathrel {\RR_{m, n} } \paren {y z}$

Otherwise, we have that:

$x \ne y$ and $x, y \ge m$
Without loss of generality, let $x < y$.
If not, then as $\RR_{m, n}$ is symmetric we can rename $x$ and $y$ as necessary.

First note that if $z = 0$, then:

$\paren {x z} = \paren {y z}=  0$
and so:

$\paren {x z} \mathrel {\RR_{m, n} } \paren {y z}$

Otherwise we have that $z \ge 1$ and so both $x z \ge m$ and $y  z \ge m$.

Then:














\(\ds x\)

\(\RR_{m, n}\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(\divides\)







\(\ds \paren {y - x}\)





Definition of $\RR_{m, n}$








\(\ds \leadsto \ \ \)

\(\ds \exists k \in \N_{>0}: \, \)



\(\ds k n\)

\(=\)







\(\ds \paren {y - x}\)





Definition of Divisor of Integer








\(\ds \leadsto \ \ \)

\(\ds \exists k \in \N_{>0}: \, \)



\(\ds k z n\)

\(=\)







\(\ds \paren {y z - x z}\)





as $z \in \N_{>0}$








\(\ds \leadsto \ \ \)





\(\ds n\)

\(\divides\)







\(\ds \paren {y z - x z}\)





Definition of Divisor of Integer














\(\ds \paren {x z}\)

\(\RR_{m, n}\)







\(\ds \paren {y z}\)





Definition of $\RR_{m, n}$



Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.6 \ \text {(a)}$




