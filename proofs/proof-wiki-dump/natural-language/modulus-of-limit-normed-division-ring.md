# 

Source: https://proofwiki.org/wiki/Modulus_of_Limit/Normed_Division_Ring

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $\sequence {x_n}$ be a convergent sequence in $R$ to the limit $l$.
That is, let $\ds \lim_{n \mathop \to \infty} x_n = l$.

Then

$\ds \lim_{n \mathop \to \infty} \norm {x_n} = \norm l$
where $\sequence {\norm {x_n} }$ is a real sequence.


Proof
By the Reverse Triangle Inequality, we have:

$\cmod {\norm {x_n} - \norm l} \le \norm {x_n - l}$
Hence by the Squeeze Theorem and Convergent Sequence Minus Limit, $\norm {x_n} \to \norm l$ as $n \to \infty$.
$\blacksquare$


Sources




