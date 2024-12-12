# 

Source: https://proofwiki.org/wiki/Dirichlet%27s_Approximation_Theorem

Theorem
Let $\alpha, x \in \R$.

Then there exist integers $a, q$ such that:

$\gcd \set {a, q} = 1$, $1 \le q \le x$
and:

$\size {\alpha - \dfrac a q} \le \dfrac 1 {q x}$


Proof
It is sufficient to find $a, q$ not necessarily coprime.
Once such an $a, q$ have been found, then a coprime pair can be found by dividing numerator and denominator of $\dfrac a q$ by the GCD of $a$ and $q$.

Let $X = \floor x$ be the integer part of $x$.
Let $\alpha_q = \alpha q - \floor {\alpha q} \in \hointr 0 1$ for $q = 1, \ldots, X$.
Consider the disjoint real intervals:

$I_k = \hointr {\dfrac{k-1} {X + 1} } {\dfrac k {X + 1} }, \quad k = 1, \ldots, X + 1$

Suppose there exists $q$ such that:

$\alpha_q \in \hointr 0 {\dfrac 1 {X + 1} }$
Then:

$0 \le \alpha q - \floor {\alpha q} < \dfrac 1 {X + 1}$
Hence:

$\size {\alpha - \dfrac {\floor {\alpha q} } q} < \dfrac 1 {q \paren {X + 1} } < \dfrac 1 {q x}$
Taking $a = \floor {\alpha q}$, the construction is complete.
$\Box$

Suppose that not to be the case, but suppose that there exists $q$ such that:

$\alpha_q \in \hointr {\dfrac X {X + 1} } 1$
Then similarly:

$\dfrac X {X + 1} < \alpha q - \floor {\alpha q} < 1$
so:

$-\dfrac 1 {X + 1} < \alpha q - \floor {\alpha q} - 1 < 0$
and:

$\size {\alpha - \dfrac {\floor {\alpha q} + 1} q} < \dfrac 1 {q \paren {X + 1} } < \dfrac 1 {q x}$
Taking $a = \floor {\alpha q} + 1$, again the construction is complete.
$\Box$

If neither of the above cases holds, then the $X - 1$ remaining intervals $I_k$ contain the $X$ values of $\alpha_q$.
Therefore, by the Pigeonhole Principle, there are $k_0 \in \set {2, \ldots, X}$ and $q_1 < q_2$ such that: :$\alpha_{q_1}, \alpha_{q_2} \in I_{k_0}$
Then for $i = 1, 2$:

$\dfrac {k_0 - 1} {X + 1} \le \alpha q_i - \floor {\alpha q_i} < \dfrac {k_0} {X + 1}$
Therefore:

$\size {\alpha q_2 - \alpha q_1 - \floor {\alpha q_2} + \floor {\alpha q_1} } < \dfrac 1 {X + 1}$
and therefore:

$\size {\alpha - \dfrac{\floor {\alpha q_2} - \floor {\alpha q_1} } {q_2 - q_1} } < \dfrac 1 {\paren {X + 1} \paren {q_2 - q_1} } < \dfrac 1 {x \paren {q_2 - q_1} }$
Taking $a = \floor {\alpha q_2} - \floor {\alpha q_1}$ and $q = q_2 - q_1$ the construction is complete.
$\blacksquare$


Source of Name
This entry was named for Johann Peter Gustav Lejeune Dirichlet.





