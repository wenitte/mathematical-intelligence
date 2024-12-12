# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Sequences/Complex/Multiple_Rule

Theorem
Let $\sequence {z_n}$ be a sequence in $\C$.
Let $\sequence {z_n}$ be convergent to the following limit:

$\ds \lim_{n \mathop \to \infty} z_n = c$

Let $\lambda \in \C$.

Then:

$\ds \lim_{n \mathop \to \infty} \paren {\lambda z_n} = \lambda c$


Proof
Let $\epsilon > 0$.
We need to find $N$ such that:

$\forall n > N: \cmod {\lambda z_n - \lambda c} < \epsilon$
If $\lambda = 0$ the result is trivial.

So, assume $\lambda \ne 0$.
Then $\cmod \lambda > 0$ from the definition of the modulus of $\lambda$.
Hence $\dfrac \epsilon {\cmod \lambda} > 0$.

We have that $z_n \to c$ as $n \to \infty$.
Thus it follows that:

$\exists N: \forall n > N: \cmod {z_n - c} < \dfrac \epsilon {\cmod \lambda}$
That is:

$\forall n > N: \cmod \lambda \cmod {z_n - c} < \epsilon$

But we have:














\(\ds \cmod \lambda \cmod {z_n - c}\)

\(=\)







\(\ds \cmod {\lambda \paren {z_n - c} }\)





Complex Modulus of Product of Complex Numbers














\(\ds \)

\(=\)







\(\ds \cmod {\lambda x_n - \lambda l}\)









Hence:

$\ds \lim_{n \mathop \to \infty} \paren {\lambda x_n} = \lambda c$
$\blacksquare$





