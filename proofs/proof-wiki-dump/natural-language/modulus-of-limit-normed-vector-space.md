# 

Source: https://proofwiki.org/wiki/Modulus_of_Limit/Normed_Vector_Space

Theorem
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space.
Let $\sequence {x_n}$ be a convergent sequence in $R$ to the limit $x$.
That is, let $\ds \lim_{n \mathop \to \infty} x_n = x$.

Then:

$\ds \lim_{n \mathop \to \infty} \norm {x_n} = \norm x$
where $\sequence {\norm {x_n} }$ is a real sequence.


Proof
By the Reverse Triangle Inequality:

$\cmod {\norm {x_n} - \norm x} \le \norm {x_n - x}$
Hence by the Squeeze Theorem and Convergent Sequence Minus Limit:

$\norm {x_n} \to \norm x$
as $n \to \infty$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




