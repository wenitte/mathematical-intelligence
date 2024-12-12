# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Sequences/Complex/Quotient_Rule



Theorem
Let $\sequence {z_n}$ and $\sequence {w_n}$ be sequences in $\C$.
Let $\sequence {z_n}$ and $\sequence {w_n}$ be convergent to the following limits:

$\ds \lim_{n \mathop \to \infty} z_n = c$
$\ds \lim_{n \mathop \to \infty} w_n = d$

Then:

$\ds \lim_{n \mathop \to \infty} \frac {z_n} {w_n} = \frac c d$
provided that $d \ne 0$.


Proof
As $z_n \to c$ as $n \to \infty$, it follows from Modulus of Limit that $\size {w_n} \to \size d$ as $n \to \infty$.
As $d \ne 0$, it follows from the definition of the modulus of $d$ that $\size d > 0$.
From Sequence Converges to Within Half Limit, we have $\exists N: \forall n > N: \size {w_n} > \dfrac {\size d} 2$.
Now, for $n > N$, consider:














\(\ds \size {\frac {z_n} {w_n} - \frac c d}\)

\(=\)







\(\ds \size {\frac {d z_n - w_n c} {d w_n} }\)




















\(\ds \)

\(<\)







\(\ds \frac 2 {\size m^2} \size {d z_n - w_n c}\)









By the above, $d z_n - w_n c \to d c - d c = 0$ as $n \to \infty$.
The result follows by the Squeeze Theorem for Complex Sequences (which applies as well to real as to complex sequences).
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
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.2$. Sequences: Rules. $\text {(iv)}$




