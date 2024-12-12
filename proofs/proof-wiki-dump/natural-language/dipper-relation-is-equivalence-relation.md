# 

Source: https://proofwiki.org/wiki/Dipper_Relation_is_Equivalence_Relation



Theorem
Let $m \in \N$ be a natural number.
Let $n \in \N_{>0}$ be a non-zero natural number.

Let $\RR_{m, n}$ be the dipper relation on $\N$:

$\forall x, y \in \N: x \mathrel {\RR_{m, n} } y \iff \begin {cases} x = y \\ m \le x < y \text { and } n \divides \paren {y - x} \\  m \le y < x \text { and } n \divides \paren {x - y} \end {cases}$

Then $\RR_{m, n}$ is an equivalence relation.


Proof
First let it be noted that $\RR_{m, n}$ can be written as:

$\forall x, y \in \N: x \mathrel {\RR_{m, n} } y \iff \begin {cases} x = y \\ m \le x, y \text { and } n \divides \size {x - y} \end {cases}$
where $\size {x - y}$ denotes the absolute value of $x - y$.

Checking in turn each of the criteria for equivalence:


Reflexivity
We have that:

$\forall x \in \N: x = x$
and so:

$x \mathrel {\RR_{m, n} } x$
Thus $\RR_{m, n}$ is seen to be reflexive.
$\Box$


Symmetry
Let $x, y \in \N$ such that $x \mathrel {\RR_{m, n} } y$.
If $x = y$ then trivially $y = x$ and so:

$y \mathrel {\RR_{m, n} } x$

Otherwise note that:

$n \divides \size {x - y} \iff n \divides \size {y - x}$
and it follows directly that:

$y \mathrel {\RR_{m, n} } x$

Thus $\RR_{m, n}$ is seen to be symmetric.
$\Box$


Transitivity
Let $x, y, z \in \N$ such that $x \mathrel {\RR_{m, n} } y$ and $y \mathrel {\RR_{m, n} } z$.

First suppose $x = y$ or $y = z$ or $x = z$.
Then trivially $x \mathrel {\RR_{m, n} } z$.

Otherwise we have that:

$x \ne y \ne z \ne x$
and:

$x, y, z \ge m$
Without loss of generality, let $x < y < z$.
If not, then as $\RR_{m, n}$ is symmetric we can rename $x$, $y$ and $z$ as necessary.

Then:














\(\ds x\)

\(\RR_{m, n}\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(\divides\)







\(\ds \paren {y - x}\)





Definition of $\RR_{m, n}$




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)

\(\ds \exists k_1 \in \N_{>0}: \, \)



\(\ds k_1 n\)

\(=\)







\(\ds \paren {y - x}\)





Definition of Divisor of Integer














\(\ds y\)

\(\RR_{m, n}\)







\(\ds z\)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(\divides\)







\(\ds \paren {z - y}\)





Definition of $\RR_{m, n}$




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)

\(\ds \exists k_2 \in \N_{>0}: \, \)



\(\ds k_2 n\)

\(=\)







\(\ds \paren {z - y}\)





Definition of Divisor of Integer








\(\ds \leadsto \ \ \)





\(\ds \paren {k_1 + k_2} n\)

\(=\)







\(\ds \paren {y - x} + \paren {z - y}\)





from $(1)$ and $(2)$








\(\ds \leadsto \ \ \)

\(\ds \exists k_3 \in \N_{>0}: \, \)



\(\ds k_3 n\)

\(=\)







\(\ds \paren {z - x}\)





where $k_3 = k_1 + k_2$








\(\ds \leadsto \ \ \)





\(\ds n\)

\(\divides\)







\(\ds \paren {z - x}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\RR_{m, n}\)







\(\ds z\)









Thus $\RR_{m, n}$ is seen to be transitive.
$\Box$

Thus $\RR_{m, n}$ has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.6 \ \text {(a)}$




