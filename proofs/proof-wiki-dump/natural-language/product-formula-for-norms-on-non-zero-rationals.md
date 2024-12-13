# 

Source: https://proofwiki.org/wiki/Product_Formula_for_Norms_on_Non-zero_Rationals



Theorem
Let $\Q_{\ne 0}$ be the set of non-zero rational numbers.
Let  $\Bbb P$ denote the set of prime numbers.
Let $a \in \Q_{\ne 0}$.

Then the following infinite product converges:

$\size a \times \ds \prod_{p \mathop \in \Bbb P}^{} \norm a_p = 1$
where:

$\size {\,\cdot\,}$ is the absolute value on $\Q$
$\norm {\,\cdot\,}_p$ is the $p$-adic norm on $\Q$ for prime number $p$


Proof
Lemma
Let $z \in \Z_{\ne 0}$.

Then the following infinite product converges:

$\size z \times \ds \prod_{p \mathop \in \Bbb P}^{} \norm z_p = 1$
$\Box$

Let $a = \dfrac b c$, where $b, c \in \Z_{\ne 0}$.
From the Lemma, the following infinite products converge:

$\size b \ds \times \prod_{p \mathop \in \Bbb P} \norm b_p = 1$
$\size c \ds \times \prod_{p \mathop \in \Bbb P} \norm c_p = 1$
From Quotient Rule for Real Sequences, the following infinite product converges:

$\ds \dfrac {\size b} {\size c} \times \prod_{p \mathop \in \Bbb P } \dfrac {\norm b_p} {\norm c_p} = \dfrac 1 1 = 1 $

We have:














\(\ds \size a \times \mathop \prod_{p \mathop \in \Bbb P} \norm a_p\)

\(=\)







\(\ds \size {\dfrac b c} \times \prod_{p \mathop \in \Bbb P} \norm {\dfrac b c}_p\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\size b} {\size c} \times \prod_{p \mathop \in \Bbb P} \dfrac {\norm b_p} {\norm c_p}\)





Norm of Quotient














\(\ds \)

\(=\)







\(\ds 1\)









$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.1$ Absolute Values on $\Q$: Proposition $3.1.4$
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.9$ Metrics and norms on the rational numbers. Ostrowski’s Theorem: Proposition $1.51$




