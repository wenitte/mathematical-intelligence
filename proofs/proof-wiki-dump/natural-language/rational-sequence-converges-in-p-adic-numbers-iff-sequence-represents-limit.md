# 

Source: https://proofwiki.org/wiki/Rational_Sequence_Converges_in_P-adic_Numbers_iff_Sequence_Represents_Limit


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $a$ be a $p$-adic number, that is left coset, in $\Q_p$.
Let $\sequence{x_n}$ be a rational sequence.

Then:

$\sequence{x_n}$ converges to $a$ if and only if $\sequence{x_n}$ is a representative of $a$


Corollary
Let $\ds \sum_{n \mathop = m}^\infty d_n p^n$ be a $p$-adic expansion.

Then:

$\ds \sum_{n \mathop = m}^\infty d_n p^n$ converges to $a$ if and only if $\ds \sum_{n \mathop = m}^\infty d_n p^n$ is a representative of $a$


Proof
Let $\norm {\,\cdot\,}^\Q_p$ be the p-adic norm on the rationals $\Q$.
By definition of the $p$-adic numbers:

$\Q_p$ is the quotient ring $\CC \, \big / \NN$
where:

$\CC$ is the commutative ring of Cauchy sequences over $\struct {\Q, \norm {\,\cdot\,}^\Q_p}$.
and

$\NN$ is the set of null sequences in $\struct {\Q, \norm {\,\cdot\,}^\Q_p}$.

By definition of the $p$-adic numbers, $\norm {\, \cdot \,}_p:\Q_p \to \R_{\ge 0}$ is the norm on the quotient ring $\Q_p$ defined by:

$\ds \forall \sequence {x_n} + \NN: \norm {\sequence {x_n} + \NN }_p = \lim_{n \mathop \to \infty} \norm{x_n}_p$

From Rational Numbers are Dense Subfield of P-adic Numbers, the mapping $\phi: \Q \to \Q_p$ defined by:

$\map \phi r = \tuple {r, r, r, \dotsc} + \NN$
where $\tuple {r, r, r, \dotsc}$ is the constant sequence
embeds $\Q$ as a dense subfield of $\Q_p$.

The theorem follows immediately from Normed Division Ring Sequence Converges in Completion iff Sequence Represents Limit.
$\blacksquare$





