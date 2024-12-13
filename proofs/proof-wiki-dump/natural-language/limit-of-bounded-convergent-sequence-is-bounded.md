# 

Source: https://proofwiki.org/wiki/Limit_of_Bounded_Convergent_Sequence_is_Bounded

Theorem
Let $\sequence {x_n}$, $\sequence {a_n}$, and $\sequence {b_n}$ be convergent sequences in $\R$.
Let $\sequence {x_n}$, $\sequence {a_n}$, and $\sequence {b_n}$ converge to $x, a, b \in \R$, respectively.
Suppose that:

$\exists N \in \N: n \ge N \implies a_n \le x_n \le b_n$
Then:

$a \le x \le b$


Proof
Aiming for a contradiction, suppose that $x < a$.
Let $\epsilon = \dfrac {a - x} 2 > 0$
From the convergence of $\sequence {x_n}$:

$\exists M_1 \in \N : n \ge M \implies x - \epsilon < x_n < x + \epsilon$
Or, equivalently:

$\exists M_1 \in \N : n \ge M \implies \dfrac {3 x - a} 2 < x_n < \dfrac {x + a} 2$
From the convergence of $\sequence {a_n}$:

$\exists M_2 \in \N : n \ge M \implies a - \epsilon < a_n < a + \epsilon$
Or, equivalently:

$\exists M_2 \in \N : n \ge M \implies \dfrac {x + a} 2 < a_n < \dfrac {3 a - x} 2$
Let $M = \max \set {N, M_1, M_2}$
Then, for any $n \ge M$:














\(\ds x_n\)

\(<\)







\(\ds \dfrac {x + a} 2\)




















\(\ds \)

\(<\)







\(\ds a_n\)









This contradicts the hypothesis that:

$\forall n \ge N : a_n \le x_n$

The same argument, mutatis mutandis, brings us to a contradiction if we suppose $x > b$.
Hence the result, by Proof by Contradiction.
$\blacksquare$





