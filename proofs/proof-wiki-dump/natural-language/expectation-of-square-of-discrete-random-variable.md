# 

Source: https://proofwiki.org/wiki/Expectation_of_Square_of_Discrete_Random_Variable

Theorem
Let $X$ be a discrete random variable whose probability generating function is $\map {\Pi_X} s$.

Then the square of the expectation of $X$ is given by the expression:

$\expect {X^2} = \map { {\Pi_X}} 1 + \map { {\Pi_X}'} 1$
where $\map { {\Pi_X}} 1$ and $\map { {\Pi_X}'} 1$ denote the second and first derivative respectively of the PGF $\map {\Pi_X} s$ evaluated at $1$.


Proof
From Derivatives of Probability Generating Function at One:

$\map { {\Pi_X}} 1 = \expect {X \paren {X - 1} }$
and from Expectation of Discrete Random Variable from PGF:

$\map { {\Pi_X}'} 1 = \expect X$
So:














\(\ds \expect {X^2}\)

\(=\)







\(\ds \expect {X \paren {X - 1} + X}\)





Algebra: $X \paren {X - 1} + X = X^2 - X + X$














\(\ds \)

\(=\)







\(\ds \expect {X \paren {X - 1} } + \expect X\)





Expectation is Linear














\(\ds \)

\(=\)







\(\ds \map { {\Pi_X}} 1 + \map { {\Pi_X}'} 1\)





from above



$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.3$: Moments: $(19)$




