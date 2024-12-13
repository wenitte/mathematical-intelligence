# 

Source: https://proofwiki.org/wiki/P-adic_Norm_of_p-adic_Number_is_Power_of_p



Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $x \in \Q_p: x \ne 0$.

Then:

$\exists v \in \Z: \norm x_p = p^{-v}$


Lemma
Let $\norm {\,\cdot\,}_p$ be the $p$-adic norm on the rationals $\Q$ for some prime $p$.
Let $\sequence {x_n}$ be a Cauchy sequence in $\struct{\Q, \norm {\,\cdot\,}_p}$ such that $\sequence {x_n}$ does not converge to $0$.

Then:

$\exists v \in \Z: \ds \lim_{n \mathop \to \infty} \norm{x_n}_p = p^{-v}$
$\Box$


Proof 1
From Rational Numbers are Dense Subfield of P-adic Numbers $\Q$ is dense in $\Q_p$.
By the definition of a dense subset then $\map \cl \Q = \Q_p$.
By Closure of Subset of Metric Space by Convergent Sequence then:

there exists a sequence $\sequence {x_n} \subseteq \Q$ that converges to $x$.
That is:

$\ds \lim_{n \mathop \to \infty} x_n = x$
From Modulus of Limit:

$\ds \lim_{n \mathop \to \infty} \norm{x_n}_p = \norm x_p$

By Convergent Sequence in Normed Division Ring is Cauchy Sequence, $\sequence {x_n}$ is a Cauchy sequence in $\struct {\Q_p, \norm {\,\cdot\,}_p}$.
From Sequence is Cauchy in P-adic Norm iff Cauchy in P-adic Numbers, $\sequence {x_n}$ is a Cauchy sequence in $\struct {\Q, \norm {\,\cdot\,}_p}$.
From Lemma:

$\exists v \in \Z: \norm x_p = \lim_{n \mathop \to \infty} \norm{x_n}_p = p^{-v}$
$\blacksquare$


Proof 2
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
That is, $\Q_p$ is the quotient ring $\CC \, \big / \NN$ where:

$\CC$ denotes the commutative ring of Cauchy sequences over $\struct {\Q, \norm {\,\cdot\,}_p}$
$\NN$ denotes the set of null sequences in $\struct {\Q, \norm {\,\cdot\,}_p}$.
Then $x$ is a left coset in $\CC \, \big / \NN$.
Let $\sequence{x_n}$ be any Cauchy sequence in $x$.
From Lemma:

$\exists v \in \Z: \ds \lim_{n \mathop \to \infty} \norm{x_n}_p = p^{-v}$
By definition of the $p$-adic norm on the $p$-adic numbers:

$\norm x_p = \ds \lim_{n \mathop \to \infty} \norm{x_n}_p = p^{-v}$
$\blacksquare$





