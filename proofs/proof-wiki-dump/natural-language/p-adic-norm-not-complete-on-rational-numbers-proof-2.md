# 

Source: https://proofwiki.org/wiki/P-adic_Norm_not_Complete_on_Rational_Numbers/Proof_2



Theorem
Let $\norm {\,\cdot\,}_p$ be the $p$-adic norm on the rationals $\Q$ for some prime $p$.
Then:

the valued field $\struct {\Q, \norm {\,\cdot\,}_p}$ is not complete.

That is, there exists a Cauchy sequence in $\struct {\Q, \norm{\,\cdot\,}_p}$ which does not converge to a limit in $\Q$.


Proof
Hensel's Lemma is used to prove the existence of a Cauchy sequence that does not converge.


Lemma 1
$\exists x \in \Z_{>0}:  p \nmid x, x \ge \dfrac {p + 1} 2$
$\Box$

Let $x_1 \in \Z_{>0}: p \nmid x_1, x_1 \ge \dfrac {p + 1} 2$

Let $k$ be a positive integer such that $k \ge 2, p \nmid k$.

Let $a = x_1^k + p$.


Lemma 2
$a \in \Z_{> 0}: \nexists \,c \in \Z : c^k = a$
$\Box$

Let $\map f X \in \Z \sqbrk X$ be the polynomial:

$X^k - a$


Lemma 3
$\map f {x_1} \equiv 0 \pmod p$
$\Box$

Let $\map {f'} X \in \Z \sqbrk X$ be the formal derivative of $\map f X$.


Lemma 4
$\map {f'} {x_1} \not \equiv 0 \pmod p$
$\Box$

From Hensel's Lemma there exists a sequence of integers $\sequence {x_n}$ such that:

$(1) \quad \forall n: \map f {x_n} \equiv 0 \pmod {p^n}$
$(2) \quad \forall n: x_{n + 1} \equiv x_n \pmod {p^n}$


Lemma 5
$\ds \lim_{n \mathop \to \infty} {x_n}^k = a$ in $\struct {\Q, \norm {\,\cdot\,}_p}$
$\Box$

From Sequence of Consecutive Integers Modulo Power of p is Cauchy in P-adic Norm then:

$\sequence {x_n}$ is a Cauchy sequence in $\struct {\Q, \norm {\,\cdot\,}_p}$

Aiming for a contradiction, suppose $\sequence {x_n}$ is a sequence such that for some $c \in \Q$:

$\ds \lim_{n \mathop \to \infty} x_n = c$
in $\struct {\Q, \norm {\,\cdot\,}_p}$
From Product Rule for Sequences in Normed Division Ring then:

$\ds \lim_{n \mathop \to \infty} x_n^k = c^k$
Hence:

$c^k = a \in \Z$.
From Nth Root of Integer is Integer or Irrational then:

$c \in \Z$
This contradicts Lemma 2.
So the sequence $\sequence {x_n}$ does not converge in $\struct {\Q, \norm{\,\cdot\,}_p}$.
The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.2$ Completions: Lemma $3.2.3$




