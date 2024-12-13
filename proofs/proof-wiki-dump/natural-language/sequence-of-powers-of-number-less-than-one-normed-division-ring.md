# 

Source: https://proofwiki.org/wiki/Sequence_of_Powers_of_Number_less_than_One/Normed_Division_Ring

Theorem
Let $\struct {R, \norm {\,\cdot\,}}$ be a normed division ring
Let $x \in R$.
Let $\sequence {x_n}$ be the sequence in $R$ defined as $x_n = x^n$.

Then:

$\norm x < 1$ if and only if $\sequence {x_n}$ is a null sequence.


Proof
Let $0_R$ be the zero of $R$.
By the definition of convergence:

$\ds \lim_{n \mathop \to \infty} x_n = 0_R \iff \lim_{n \mathop \to \infty} \norm {x_n} = 0$
By Norm Axiom $\text N 2$: Multiplicativity then for each $n \in \N$:

$\norm {x_n} = \norm {x^n} = \norm x^n$.
So:

$\ds \lim_{n \mathop \to \infty} \norm {x_n} = 0 \iff \lim_{n \mathop \to \infty} \norm x^n = 0$
Since $\norm x \in \R_{\ge 0}$, by Sequence of Powers of Number less than One:

$\ds \lim_{n \mathop \to \infty} \norm x^n = 0 \iff \norm x < 1$
The result follows.
$\blacksquare$


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.2$: Normed fields: Proposition $1.8$




