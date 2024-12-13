# 

Source: https://proofwiki.org/wiki/Quadratic_Integers_over_3_form_Integral_Domain

Theorem
Let $\R$ denote the set of real numbers.
Let $\Z \sqbrk {\sqrt 3} \subseteq \R$ denote the  set of quadratic integers over $3$:

$\Z \sqbrk {\sqrt 3} = \set {a + b \sqrt 3: a, b \in \Z}$

Then $\struct {\Z \sqbrk {\sqrt 3}, +, \times}$ is an integral domain.


Proof
From Real Numbers form Integral Domain we have that $\struct {\R, +, \times}$ is an integral domain.
Hence to demonstrate that $\struct {\Z \sqbrk {\sqrt 3}, +, \times}$ is an integral domain, we can use the Subdomain Test.

We have that the unity of $\struct {\R, +, \times}$ is $1$.
Then we note:

$1 = 1 + 0 \times \sqrt 3$
and so $1 \in S$.
Thus property $(2)$ of the Subdomain Test is fulfilled.

It remains to demonstrate that $\struct {\Z \sqbrk {\sqrt 3}, +, \times}$ is a subring of $\struct {\R, +, \times}$, so fulfilling property $(2)$ of the Subdomain Test.

Hence we use the Subring Test.
We note that $\Z \sqbrk {\sqrt 3} \ne \O$ as $1 \in \Z \sqbrk {\sqrt 3}$.
This fulfils property $(1)$ of the Subring Test.

Let $x, y \in \Z \sqbrk {\sqrt 3}$ such that:

$x = a + b \sqrt 3$
$y = c + d \sqrt 3$

Then:














\(\ds x + \paren {-y}\)

\(=\)







\(\ds \paren {a + b \sqrt 3} - \paren {c + d \sqrt 3}\)




















\(\ds \)

\(=\)







\(\ds \paren {a - c} + \paren {b \sqrt 3 - d \sqrt 3}\)





Definition of Real Addition














\(\ds \)

\(=\)







\(\ds \paren {a - c} + \paren {b - d} \sqrt 3\)




















\(\ds \)

\(\in\)







\(\ds \Z \sqbrk {\sqrt 3}\)









This fulfils property $(2)$ of the Subring Test.

Then: 














\(\ds x \times y\)

\(=\)







\(\ds \paren {a + b \sqrt 3} \paren {c + d \sqrt 3}\)




















\(\ds \)

\(=\)







\(\ds a c + a d \sqrt 3 + b c \sqrt 3 + 3 b d\)





Definition of Real Multiplication














\(\ds \)

\(=\)







\(\ds \paren {a c + 3 b d} + \paren {a d + b c} \sqrt 3\)




















\(\ds \)

\(\in\)







\(\ds \Z \sqbrk {\sqrt 3}\)









This fulfils property $(3)$ of the Subring Test.

Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Exercise $6.7 \ \text {(a)}$
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous): Exercises: Chapter $1$: Exercise $1 \ \text{(iv)}$




