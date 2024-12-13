# 

Source: https://proofwiki.org/wiki/P-adic_Norm_of_p-adic_Number_is_Power_of_p/Proof_2


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


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


Proof
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


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.4$ The field of $p$-adic numbers $\Q_p$




