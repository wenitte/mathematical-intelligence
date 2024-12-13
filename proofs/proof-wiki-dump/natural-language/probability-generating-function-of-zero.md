# 

Source: https://proofwiki.org/wiki/Probability_Generating_Function_of_Zero

Theorem
Let $X$ be a discrete random variable whose codomain, $\Omega_X$, is a subset of the natural numbers $\N$.
Let $p_X$ be the probability mass function for $X$.
Let $\map {\Pi_X} s$ be the probability generating function for $X$.
Then:

$\map {\Pi_X} 0 = \map {p_X} 0$


Proof













\(\ds \map {\Pi_X} 0\)

\(=\)







\(\ds \map {p_X} 0 + 0^1 \cdot \map {p_X} 1 + 0^2 \cdot \map {p_X} 2 + \cdots\)





Definition of Probability Generating Function














\(\ds \)

\(=\)







\(\ds \map {p_X} 0 + 0 + 0 + \cdots\)





as $\forall n \in \N_{>0}: s^n = 0$














\(\ds \)

\(=\)







\(\ds \map {p_X} 0\)









$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.2$: Integer-valued random variables: $(6)$




