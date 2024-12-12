# 

Source: https://proofwiki.org/wiki/Countably_Additive_Function_also_Finitely_Additive

Theorem
Let $\AA$ be a $\sigma$-algebra.
Let $\overline \R$ denote the extended set of real numbers.
Let $f: \AA \to \overline \R$ be a countably additive function.

Then $f$ is a finitely additive function.


Proof
We have that $f$ is defined as countably additive if and only if:

$\ds \map f {\bigcup_{i \mathop \ge 1} A_i} = \sum_{i \mathop \ge 1} \map f {A_i}$
where $\sequence {A_i}$ is any sequence of pairwise disjoint elements of $\AA$.

We need to show that:

$\ds \forall n \in \N: \map f {\bigcup_{i \mathop = 1}^n A_i} = \sum_{i \mathop = 1}^n \map f {A_i}$

The claim is trivial if $f=+\infty$ or $f=-\infty$, constantly.
Thus we assume $\map f \O = 0$ by Countably Additive Function Dichotomy by Empty Set.

Let $n \in \N$ be any arbitrary natural number.
Let $\sequence {B_i}$ be the sequence of pairwise disjoint elements of $\AA$ defined as:

$B_i = \begin{cases}
A_i & : i \le n \\
\O & : i > n
\end{cases}$
It follows that:

$\ds \bigcup_{i \mathop \ge 1} B_i = \bigcup_{i \mathop = 1}^n A_i$

Thus:














\(\ds \map f {\bigcup_{i \mathop = 1}^n A_i}\)

\(=\)







\(\ds \map f {\bigcup_{i \mathop \ge 1} B_i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \ge 1} \map f {B_i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \map f {A_i} + \sum_{i \mathop > n} \map f \O\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \map f {A_i}\)





as $\map f \O = 0$



Hence the result.
$\blacksquare$





