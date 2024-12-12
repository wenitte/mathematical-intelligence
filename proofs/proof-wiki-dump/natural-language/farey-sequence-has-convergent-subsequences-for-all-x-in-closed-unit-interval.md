# 

Source: https://proofwiki.org/wiki/Farey_Sequence_has_Convergent_Subsequences_for_all_x_in_Closed_Unit_Interval

Theorem
Consider the Farey sequence:

$\sequence {a_n} = \dfrac 1 2, \dfrac 1 3, \dfrac 2 3, \dfrac 1 4, \dfrac 2 4, \dfrac 3 4, \dfrac 1 5, \dfrac 2 5, \dfrac 3 5, \dfrac 4 5, \dfrac 1 6, \ldots$

Every element of the closed real interval $\closedint 0 1$ is the limit of a subsequence of $\sequence {a_n}$.


Proof
We have that every rational number $\dfrac p q$ between $0$ and $1$ occurs infinitely often in $\sequence {a_n}$:

$\dfrac p q, \dfrac {2 p} {2 q}, \dfrac {3 p} {3 q}, \ldots$
Let $x \in \closedint 0 1$.
From Between two Real Numbers exists Rational Number, a term $a_{n_1}$ of $\sequence {a_n}$ can be found such that:

$x - 1 < a_{n_1} < x + 1$
Then a term $a_{n_2}$ of $\sequence {a_n}$ such that $n_2 > n_1$ can be found such that:

$x - \dfrac 1 2 < a_{n_2} < x + \dfrac 1 2$
Hence we can create a subsequence $\sequence {a_{n_k} }$ such that:

$x - \dfrac 1 k < a_{n_k} < x + \dfrac 1 k$
and so by the Squeeze Theorem for Real Sequences:

$r_{n_k} \to x$ as $k \to \infty$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Lim sup and lim inf: Exercise $\S 5.15 \ (2)$




