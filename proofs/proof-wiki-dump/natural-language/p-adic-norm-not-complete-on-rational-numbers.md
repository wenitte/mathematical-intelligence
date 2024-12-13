# 

Source: https://proofwiki.org/wiki/P-adic_Norm_not_Complete_on_Rational_Numbers



Theorem
Let $\norm {\,\cdot\,}_p$ be the $p$-adic norm on the rationals $\Q$ for some prime $p$.
Then:

the valued field $\struct {\Q, \norm {\,\cdot\,}_p}$ is not complete.

That is, there exists a Cauchy sequence in $\struct {\Q, \norm{\,\cdot\,}_p}$ which does not converge to a limit in $\Q$.


Proof 1
Case: $p \gt 3$
Let $p > 3$.
Then there exists $a \in \Z: 1 < a < p-1$.
Consider the sequence $\sequence {x_n} \subseteq \Q$ where $x_n = a^{p^n}$ for some $a \in \Z: 1 < a < p-1$.
Let $n \in \N$.
Then:

$\norm {a^{p^{n + 1} } - a^{p^n} }_p = \norm {a^{p^n} (a^{p^n \paren {p - 1} } - 1) }_p$
From Euler's Theorem (Number Theory): Corollary $1$:

$a^{p^n \paren {p - 1} } - 1 \equiv 0 \pmod {p^n}$
so:

$\norm {a^{p^n} \paren {a^{p^n \paren {p - 1} } - 1} }_p \le p^{-n} \xrightarrow {n \to \infty} 0$

That is:

$\ds \lim_{n \mathop \to \infty} \norm {x_{n + 1} - x_n}_p = 0$
By Characterisation of Cauchy Sequence in Non-Archimedean Norm

$\sequence {x_n }$ is a cauchy sequence in $\struct {\Q, \norm {\,\cdot\,}_p }$.

Aiming for a contradiction, suppose $\sequence {x_n}$ converges to some $x \in \Q$.
That is:

$x = \ds \lim_{n \mathop \to \infty} x_n$
By Modulus of Limit on a Normed Division Ring:

$\ds \lim_{n \mathop \to \infty} \norm {x_n }_p = \norm {x }_p$
Since $\forall n, p \nmid a^{p^n} = x_n$, then:

$ \norm {x_n }_p = 1$
So:

$\norm x_p =  \ds \lim_{n \mathop \to \infty} \norm {x_n}_p = 1$
By Axiom (N1) of a norm on a division ring then:

$x \ne 0$.

Since:














\(\ds x\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} x_n\)





Definition of $x$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} x_{n + 1}\)





Limit of Subsequence equals Limit of Sequence














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {x_n}^p\)





Definition of $x_n$














\(\ds \)

\(=\)







\(\ds \paren {\lim_{n \mathop \to \infty} x_n}^p\)





Product Rule for Sequences in Normed Division Ring














\(\ds \)

\(=\)







\(\ds x^p\)





Definition of $x$



and $x \ne 0$ then:

$x^{p-1} = 1$
So:

$x = 1$ or $x = -1$
and so $a-x$ is an integer:

$0 < a - x < p$
It follows that:

$p \nmid \paren {a - x}$
and so:

$\norm {x - a}_p = 1$

Since $x_n \to x$ as $n \to \infty$ then:

$\exists N: \forall n > N: \norm {x_n - x}_p < \norm {x - a}_p$
That is:

$\exists N: \forall n > N: \norm {a^{p^n} - x}_p < \norm {x - a}_p$
Let $n > N$:














\(\ds \norm {x - a}_p\)

\(=\)







\(\ds \norm {x - a^{p^n} + a^{p^n} - a}_p\)




















\(\ds \)

\(\le\)







\(\ds \max \set {\norm {x - a^{p^n} }_p, \norm {a^{p^n} - a}_p}\)





P-adic Norm on Rational Numbers is Non-Archimedean Norm




As $\norm {x - a^{p^n} }_p < \norm {x - a}_p$:














\(\ds \norm {x - a}_p\)

\(=\)







\(\ds \norm {a^{p^n} - a}_p\)





Three Points in Ultrametric Space have Two Equal Distances














\(\ds \)

\(=\)







\(\ds \norm a_p \norm {a^{p^n - 1} - 1}_p\)





Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(=\)







\(\ds \norm {a^{p^n - 1} - 1}_p\)





as $\norm a_p = 1$














\(\ds \)

\(<\)







\(\ds 1\)





Fermat's Little Theorem: Corollary $4$



This contradicts the earlier assertion that $\norm {x - a}_p = 1$.
In conclusion:

$\sequence {x_n}$ is a Cauchy sequence that does not converge in $\struct {\Q, \norm {\,\cdot\,}_p }$.
$\Box$


Case: $p = 2$ or $3$

Work In ProgressYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
$\blacksquare$


Proof 2
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


Proof 3
By Rational Numbers are Countably Infinite, the set of rational numbers is countably infinite.
By P-adic Numbers are Uncountable, the set of $p$-adic numbers $\Q_p$ is uncountably infinite.
Let $\CC$ be the commutative ring of Cauchy sequences over $\struct {\Q, \norm {\,\cdot\,}_p}$.
Let $\NN$ be the set of null sequences in $\struct {\Q, \norm {\,\cdot\,}_p}$.
The $p$-adic numbers $\Q_p$ is the quotient ring $\CC \, \big / \NN$ by definition.
By Embedding Division Ring into Quotient Ring of Cauchy Sequences, the mapping $\phi: \Q \to \Q_p$ defined by:

$\map \phi r = \sequence {r, r, r, \dotsc} + \NN$
where $\sequence {r, r, r, \dotsc} + \NN$ is the left coset in $\CC \, \big / \NN$ that contains the constant sequence $\sequence {r, r, r, \dotsc}$, is a distance-preserving monomorphism.
By Corollary to Surjection from Natural Numbers iff Countable then $\phi$ is not a surjection.
Hence:

$\exists \sequence {x_n} \in \CC: \sequence {x_n} + \NN \not \in \map \phi \Q$
By Cauchy Sequence Converges Iff Equivalent to Constant Sequence then $\sequence {x_n}$ is not convergent in $\struct {\Q, \norm {\,\cdot\,}_p}$.
The result follows.
$\blacksquare$





