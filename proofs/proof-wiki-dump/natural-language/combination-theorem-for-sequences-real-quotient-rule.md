# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Sequences/Real/Quotient_Rule



Theorem
Let $\sequence {x_n}$ and $\sequence {y_n}$ be sequences in $\R$.
Let $\sequence {x_n}$ and $\sequence {y_n}$ be convergent to the following limits:

$\ds \lim_{n \mathop \to \infty} x_n = l$
$\ds \lim_{n \mathop \to \infty} y_n = m$

Then:

$\ds \lim_{n \mathop \to \infty} \frac {x_n} {y_n} = \frac l m$
provided that $m \ne 0$.


Corollary
Let $\sequence {x_n}$ be convergent to the following limit:

$\ds \lim_{n \mathop \to \infty} x_n = l$
Then:

$\ds \lim_{n \mathop \to \infty} \frac 1 {x_n} = \frac 1 l$
provided that $l \ne 0$.


Proof
As $y_n \to m$ as $n \to \infty$, it follows from Modulus of Limit that $\size {y_n} \to \size m$ as $n \to \infty$.
As $m \ne 0$, it follows from the definition of the modulus of $m$ that $\size m > 0$.

As the statement is given, it is possible that $y_n = 0$ for some $n$.
At such $n$, the terms $\dfrac {x_n} {y_n}$ are not defined.
However, from Sequence Converges to Within Half Limit, we have:

$\exists N: \forall n > N: \size {y_n} > \dfrac {\size m} 2$
Hence for all $n > N$ we have that $y_n \ne 0$.
Thus we may restrict our attention to the domain of $\sequence {y_n}$ such that $n > N$, knowing that $\dfrac {x_n} {y_n}$ will be defined in that domain.

So, for $n > N$, consider:














\(\ds \size {\frac {x_n} {y_n} - \frac l m}\)

\(=\)







\(\ds \size {\frac {m x_n - y_n l} {m y_n} }\)




















\(\ds \)

\(<\)







\(\ds \frac 2 {\size m^2} \size {m x_n - y_n l}\)









By the above, $m x_n - y_n l \to m l - m l = 0$ as $n \to \infty$.
The result follows by the Squeeze Theorem for Real Sequences.
$\blacksquare$


Also presented as
Some treatments of this subject specifically exclude all sequences where the denominators are zero at any point in their domain.
Thus, for example, this is how it is presented in 1960: Walter Ledermann: Complex Numbers:

If $z_n \to c$ and $w_m \to d$, then
... $\text{(iv)} \ z_n / w_n \to c / d$, where ... $w_n \ne 0$ for all $n$ and $d \ne 0$.
However, it is demonstrated within the proof that past a certain $N \in \R$, which is bound to exist, $w_n$ is guaranteed to be non-zero.
The behaviour of the sequence $S = \sequence {\dfrac {z_n} {w_n} }$ in the limit is not dependent upon the existence or otherwise of its terms for $n < N$.
Thus it is not necessary to state that $w_n \ne 0$ for all $n$, and in fact such a statement would unnecessarily restrict the applicability of the theorem to exclude otherwise well-behaved cases where it is desirable that the theorem does apply.
Hence this restriction is not supported on $\mathsf{Pr} \infty \mathsf{fWiki}$.


Sources
1953: Walter Rudin: Principles of Mathematical Analysis: $3.3 \ \text{d}$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: $\S 4.8 \ \text{(iii)}$: Criteria for convergence
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): Appendix: $\S 18.3$: Combination theorem




