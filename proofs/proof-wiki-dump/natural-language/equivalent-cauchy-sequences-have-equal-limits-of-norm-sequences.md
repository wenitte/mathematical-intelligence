# 

Source: https://proofwiki.org/wiki/Equivalent_Cauchy_Sequences_have_Equal_Limits_of_Norm_Sequences

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $\sequence {x_n}$ and $\sequence {y_n}$ be Cauchy sequences in $R$.
Let $\ds \lim_{n \mathop \to \infty} {x_n - y_n} = 0$.
Then:

$\ds \lim_{n \mathop \to \infty} \norm {x_n} = \lim_{n \mathop \to \infty} \norm {y_n}$


Proof
Let:

$l = \ds \lim_{n \mathop \to \infty} \norm {x_n}$
and:

$m = \ds \lim_{n \mathop \to \infty} \norm {y_n}$
By Norm Sequence of Cauchy Sequence has Limit, both of these limits exist.

Then:














\(\ds \lim_{n \mathop \to \infty } \paren {\norm {x_n} - \norm {y_n} }\)

\(=\)







\(\ds l - m\)





Difference Rule for Real Sequences








\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} \size {\norm {x_n} - \norm {y_n} }\)

\(=\)







\(\ds \size {l - m}\)





Modulus of Limit



By Reverse Triangle Inequality on Normed Division Ring, for $n \in \N$:

$l = \size {\norm {x_n} - \norm {y_n} } \le \norm {x_n - y_n} = \to 0$
as $n \to \infty$.

By the Squeeze Theorem:

$\ds \lim_{n \mathop \to \infty} \paren {\size {\norm {x_n} - \norm {y_n} } } = 0$
So:

$\size {l - m} = 0$
and therefore:
$l = m$
$\blacksquare$





