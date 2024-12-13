# 

Source: https://proofwiki.org/wiki/Probability_Generating_Function_of_One

Theorem
Let $X$ be a discrete random variable whose codomain, $\Omega_X$, is a subset of the natural numbers $\N$.
Let $p_X$ be the probability mass function for $X$.
Let $\map {\Pi_X} s$ be the probability generating function for $X$.

Then:

$\map {\Pi_X} 1 = 1$


Proof













\(\ds \map {\Pi_X} 1\)

\(=\)







\(\ds \map {p_X} 0 + 1^1 \cdot \map {p_X} 1 + 1^2 \cdot \map {p_X} 2 + \cdots\)





Definition of Probability Generating Function














\(\ds \)

\(=\)







\(\ds \map {p_X} 0 + \map {p_X} 1 + \map {p_X} 2 + \cdots\)





as $\forall n \in \N_{>0}: s^n = 1$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \map {p_X} n\)




















\(\ds \)

\(=\)







\(\ds \sum_{x \mathop \in \Omega_X} \map {p_X} x\)





by definition of $\Omega_X$














\(\ds \)

\(=\)







\(\ds 1\)





Definition of Probability Mass Function



$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.2$: Integer-valued random variables: $(6)$




