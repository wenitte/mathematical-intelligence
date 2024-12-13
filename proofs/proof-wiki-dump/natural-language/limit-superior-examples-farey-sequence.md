# 

Source: https://proofwiki.org/wiki/Limit_Superior/Examples/Farey_Sequence

Example of Limit Superior
Consider the Farey sequence:

$\sequence {a_n} = \dfrac 1 2, \dfrac 1 3, \dfrac 2 3, \dfrac 1 4, \dfrac 2 4, \dfrac 3 4, \dfrac 1 5, \dfrac 2 5, \dfrac 3 5, \dfrac 4 5, \dfrac 1 6, \ldots$

The limit superior of $\sequence {a_n}$ is given by:

$\ds \map {\limsup_{n \mathop \to \infty} } {a_n} = 1$


Proof
Let $L$ be the set of all real numbers which are the limit of some subsequence of $\sequence {a_n}$.
From the definition of $F$ we have that:

$\forall n \in \N_{>0}: 0 < a_n < 1$
From Lower and Upper Bounds for Sequences we have that:

$L \subseteq \closedint 0 1$
Consider the subsequences:

$(1): \quad \sequence {a_{n_r} } = \dfrac 1 2, \dfrac 1 3, \dfrac 1 4, \dfrac 1 5 \to 0$ as $n \to \infty$
$(2): \quad \sequence {a_{n_s} } = \dfrac 1 2, \dfrac 2 3, \dfrac 3 4, \dfrac 4 5 \to 1$ as $n \to \infty$
Hence by definition of limit superior:

$\ds \map {\limsup_{n \mathop \to \infty} } {a_n} = 1$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Lim sup and lim inf: $\S 5.14$: Example $\text {(iii)}$




