# 

Source: https://proofwiki.org/wiki/Rational_Numbers_with_Denominator_Power_of_Two_form_Integral_Domain

Theorem
Let $\Q$ denote the set of rational numbers.
Let $S \subseteq \Q$ denote the set of set of rational numbers of the form $\dfrac p q$ where $q$ is a power of $2$:

$S = \set {\dfrac p q: p \in \Z, q \in \set {2^m: m \in \Z_{\ge 0} } }$

Then $\struct {S, +, \times}$ is an integral domain.


Proof
From Rational Numbers form Integral Domain we have that $\struct {\Q, +, \times}$ is an integral domain.
Hence to demonstrate that $\struct {S, +, \times}$ is an integral domain, we can use the Subdomain Test.

We have that the unity of $\struct {\Q, +, \times}$ is $1$.
Then we note:

$1 = \dfrac 1 1$
and:

$1 = 2^0$
and so $1 \in S$.
Thus property $(2)$ of the Subdomain Test is fulfilled.

It remains to demonstrate that $\struct {S, +, \times}$ is a subring of $\struct {\Q, +, \times}$, so fulfilling property $(2)$ of the Subdomain Test.

Hence we use the Subring Test.
We note that $S \ne \O$ as $1 \in S$.
This fulfils property $(1)$ of the Subring Test.

Let $x, y \in S$.
Then:














\(\ds x + \paren {-y}\)

\(=\)







\(\ds \dfrac a {2^p} + \dfrac b {2^q}\)





for some $a, b \in \Z$ and $p, q \in \Z_{\ge 0}$














\(\ds \)

\(=\)







\(\ds \dfrac {a 2^q - b 2^p} {2^p 2^q}\)





Definition of Rational Addition














\(\ds \)

\(=\)







\(\ds \dfrac {a 2^q - b 2^p} {2^{p + q} }\)




















\(\ds \)

\(\in\)







\(\ds S\)









This fulfils property $(2)$ of the Subring Test.

Then: 














\(\ds x \times y\)

\(=\)







\(\ds \dfrac a {2^p} \times \dfrac b {2^q}\)





for some $a, b \in \Z$ and $p, q \in \Z_{\ge 0}$














\(\ds \)

\(=\)







\(\ds \dfrac {a b} {2^p 2^q}\)





Definition of Rational Multiplication














\(\ds \)

\(=\)







\(\ds \dfrac {a b} {2^{p + q} }\)




















\(\ds \)

\(\in\)







\(\ds S\)









This fulfils property $(3)$ of the Subring Test.

Hence the result.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Exercises: Chapter $1$: Exercise $1 \ \text{(iii)}$




