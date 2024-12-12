# 

Source: https://proofwiki.org/wiki/Characterisation_of_Cauchy_Sequence_in_Non-Archimedean_Norm/Necessary_Condition

Theorem
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring with non-Archimedean norm $\norm {\,\cdot\,}$.
Let $\sequence {x_n}$ be a Cauchy sequence in $R$.
Then:

$\lim_{n \mathop \to \infty} \norm {x_{n + 1} - x_n} = 0$


Proof
Let $\epsilon > 0$ be given.
By the definition of a Cauchy sequence:

$\exists N: \forall n, m > N: \norm {x_n - x_m} < \epsilon$
So

$\exists N: \forall n > N: \norm {x_{n + 1} - x_n} < \epsilon$
Hence the result follows:

$\lim_{n \mathop \to \infty} \norm {x_{n + 1} - x_n} = 0$.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.2$: Completions, Lemma $3.2.2$




