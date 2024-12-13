# 

Source: https://proofwiki.org/wiki/Real_Null_Sequence/Examples/n%5Ealpha_x%5En



Example of Real Null Sequence
Let $\alpha \in \Q$ be a (strictly) positive rational number.
Let $x \in \R$ be a real number such that $\size x < 1$.
Let $\sequence {a_n}_{n \mathop \ge 1}$ be the real sequence defined as:

$\forall n \in \Z_{>0}: a_n = n^\alpha x^n$

Then $\sequence {a_n}$ is a null sequence:

$\ds \lim_{n \mathop \to \infty} n^\alpha x^n  = 0$


Proof
First a lemma:

Lemma
There exists $N \in \N$ such that:

$\paren {1 + \dfrac 1 N}^{\alpha + 1} \, \size x \le 1$
$\Box$

Let $x \ne 0$.
Consider the expression:

$\size {\dfrac {\paren {n + 1}^{\alpha + 1} x^{n + 1} } {n^{\alpha + 1} x^n} } = \paren {1 - \dfrac 1 n}^{\alpha + 1} \size x$
For all $n \ge N$, we have:

$\size {\paren {n + 1}^{\alpha + 1} x^{n + 1} } \le \size {n^{\alpha + 1} x^n}$
Hence for all $n \ge N$:

$\size {n^{\alpha + 1} x^n} \le \size {N^{\alpha + 1} x^n}$
So for $n \ge N$:

$\size {n^\alpha x^n} \le \dfrac 1 N \size {N^{\alpha + 1} x^N}$
The result follows from the Squeeze Theorem for Real Sequences.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: Exercise $\S 4.20 \ (5)$




