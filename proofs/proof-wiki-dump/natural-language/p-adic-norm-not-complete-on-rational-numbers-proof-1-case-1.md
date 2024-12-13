# 

Source: https://proofwiki.org/wiki/P-adic_Norm_not_Complete_on_Rational_Numbers/Proof_1/Case_1

Theorem
Let $\norm {\,\cdot\,}_p$ be the $p$-adic norm on the rationals $\Q$ for some prime $p > 3$.
 
Then:

$\struct {\Q, \norm {\,\cdot\,}_p}$ is not a complete normed division ring.

That is, there exists a Cauchy sequence in $\struct {\Q, \norm{\,\cdot\,}_p}$ which does not converge to a limit in $\Q$.


Proof
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
$\blacksquare$





