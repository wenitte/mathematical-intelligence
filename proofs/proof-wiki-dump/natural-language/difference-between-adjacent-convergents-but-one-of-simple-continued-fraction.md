# 

Source: https://proofwiki.org/wiki/Difference_between_Adjacent_Convergents_But_One_of_Simple_Continued_Fraction

Theorem
Let $n \in \N \cup \set \infty$ be an extended natural number.
Let $\sqbrk {a_0, a_1, a_2, \ldots}$ be a continued fraction in $\R$ of length $n$.
Let $p_0, p_1, p_2, \ldots$ and $q_0, q_1, q_2, \ldots$ be its numerators and denominators.
Let $C_0, C_1, C_2, \ldots$ be the convergents of $\sqbrk {a_0, a_1, a_2, \ldots}$.

For $k \ge 2$:

$p_k q_{k - 2} - p_{k - 2} q_k = \paren {-1}^k a_k$
That is:

$C_k - C_{k-2} = \dfrac {p_k} {q_k} - \dfrac {p_{k - 2} } {q_{k - 2} } = \dfrac {\paren {-1}^k a_k} {q_k q_{k - 2} }$


Proof
Let $k \ge 2$.














\(\ds p_k q_{k - 2} - p_{k - 2} q_k\)

\(=\)







\(\ds \paren {a_k p_{k - 1} + p_{k - 2} } q_{k - 2} - p_{k - 2} \paren {a_k q_{k - 1} + q_{k - 2} }\)





Definition of Numerators and Denominators of Continued Fraction














\(\ds \)

\(=\)







\(\ds a_k \paren {p_{k - 1} q_{k - 2} - p_{k - 2} q_{k - 1} }\)




















\(\ds \)

\(=\)







\(\ds a_k \paren {-1}^k\)





Difference between Adjacent Convergents of Simple Continued Fraction



$\blacksquare$





