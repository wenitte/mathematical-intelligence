# 

Source: https://proofwiki.org/wiki/Characterisation_of_Cauchy_Sequence_in_Non-Archimedean_Norm/Sufficient_Condition

Theorem
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring with non-Archimedean norm $\norm {\,\cdot\,}$.
Let $\sequence {x_n}$ be a sequence in $R$.
Let $\ds \lim_{n \mathop \to \infty} \norm {x_{n + 1} - x_n} = 0$.

Then:

$\sequence {x_n}$ is a Cauchy sequence.


Proof
Let $\epsilon > 0$ be given.
By assumption $\exists N \in \N$ such that:

$(1) \quad  \forall n > N: \norm {x_{n + 1} - x_n} < 0$

Suppose $n, m > N$, and $m = n + r > n$.
Then:














\(\ds \norm {x_m - x_n}\)

\(=\)







\(\ds \norm {x_{n + r} - x_{n + r - 1} + x_{n + r - 1} - x_{n + r - 2} + \dotsb + x_{n + 1} - x_n}\)




















\(\ds \)

\(=\)







\(\ds \max \set {\norm {x_{n + r} - x_{n + r - 1} }, \norm {x_{n + r - 1} - x_{n + r - 2} }, \dotsc, \norm {x_{n + 1} - x_n} }\)





as $\norm {\,\cdot\,}$ is non-Archimedean














\(\ds \)

\(=\)







\(\ds \norm {x_{n + s} - x_{n + s - 1} }\)





for some $s$: $0 < s \le r$














\(\ds \)

\(<\)







\(\ds \epsilon\)





by $(1)$



It follows that:

$\sequence {x_n}$ is a Cauchy sequence.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.2$: Completions, Lemma $3.2.2$




