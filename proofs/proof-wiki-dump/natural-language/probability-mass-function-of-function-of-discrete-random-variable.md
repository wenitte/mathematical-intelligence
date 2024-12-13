# 

Source: https://proofwiki.org/wiki/Probability_Mass_Function_of_Function_of_Discrete_Random_Variable

Theorem
Let $X$ be a discrete random variable.
Let $Y = \map g X$, where $g: \R \to \R$ is a real function.

Then the probability mass function of $Y$ is given by:

$\ds \map {p_Y} y = \sum_{x \mathop \in \inv g y} \map \Pr {X = x}$


Proof
By Function of Discrete Random Variable‎ we have that $Y$ is itself a discrete random variable.

Thus:














\(\ds \map {p_Y} y\)

\(=\)







\(\ds \map \Pr {Y = y}\)




















\(\ds \)

\(=\)







\(\ds \map \Pr {\map g X = y}\)




















\(\ds \)

\(=\)







\(\ds \map \Pr {X \in \inv g y}\)




















\(\ds \)

\(=\)







\(\ds \sum_{x \mathop \in \inv g y} \map \Pr {X = x}\)









$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 2.3$: Functions of discrete random variables: $(18)$




