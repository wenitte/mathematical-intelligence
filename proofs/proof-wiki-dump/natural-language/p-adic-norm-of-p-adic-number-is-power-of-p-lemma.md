# 

Source: https://proofwiki.org/wiki/P-adic_Norm_of_p-adic_Number_is_Power_of_p/Lemma

Theorem
Let $p$ be a prime number.
Let $\norm {\,\cdot\,}_p$ be the $p$-adic norm on the rationals $\Q$ for some prime $p$.
Let $\sequence {x_n}$ be a Cauchy sequence in $\struct{\Q, \norm {\,\cdot\,}_p}$ such that $\sequence {x_n}$ does not converge to $0$.

Then:

$\exists v \in \Z: \ds \lim_{n \mathop \to \infty} \norm{x_n}_p = p^{-v}$


Proof
From P-adic Norm on Rational Numbers is Non-Archimedean Norm, $p$-adic norm is a non-Archimedean norm on the rationals $\Q$.

Since $\sequence {x_n}$ does not converge to $0$, from Non-Null Cauchy Sequence in Non-Archimedean Norm is Eventually Stationary:

$\exists N \in \N: \forall n, m > N: \norm {x_n}_p = \norm {x_m}_p$
By definition of the $p$-adic norm on $\Q$:

$\exists v \in \Z: \norm {x_{N + 1} }_p = p^{-v}$
Therefore:

$\forall n > N: \norm {x_n}_p = \norm {x_{N + 1} }_p = p^{-v}$

Let $\sequence {y_n}$ be the subsequence of $\sequence {\norm {x_n}}$ defined by:

$\forall n: y_n = \norm {x_{N + n} }_p$
Then $\sequence {y_n}$ is the constant sequence $\tuple {p^{-v}, p^{-v}, p^{-v}, \dotsc}$.

Therefore:














\(\ds \lim_{n \mathop \to \infty} \norm {x_n}_p\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} y_n\)





Limit of Subsequence equals Limit of Real Sequence














\(\ds \)

\(=\)







\(\ds p^{-v}\)





Constant Sequence Converges to Constant in Normed Division Ring



$\blacksquare$





