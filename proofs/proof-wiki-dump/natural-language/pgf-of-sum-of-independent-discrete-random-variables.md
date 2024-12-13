# 

Source: https://proofwiki.org/wiki/PGF_of_Sum_of_Independent_Discrete_Random_Variables



Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ and $Y$ be independent discrete random variables on $\struct {\Omega, \Sigma, \Pr}$.
Let $Z$ be a discrete random variable such that $Z = X + Y$.
Then:

$\map {\Pi_Z} s = \map {\Pi_X} s \, \map {\Pi_Y} s$
where $\map {\Pi_Z} s$ is the probability generating function of $Z$.


General Result
Let:

$Z = X_1 + X_2 + \cdots + X_n$
where each of $X_1, X_2, \ldots, X_n$ are independent discrete random variables with PGFs $\map {\Pi_{X_1} } s, \map {\Pi_{X_2} } s, \ldots, \map {\Pi_{X_n} } s$.

Then:

$\ds \map {\Pi_Z} s = \prod_{j \mathop = 1}^n \map {\Pi_{X_j} } s$


Proof













\(\ds \map {\Pi_Z} s\)

\(=\)







\(\ds \expect {s^Z}\)





Definition of Probability Generating Function














\(\ds \)

\(=\)







\(\ds \expect {s^{X + Y} }\)





Definition of $Z$ (see above)














\(\ds \)

\(=\)







\(\ds \expect {s^X s^Y}\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \expect {s^X} \expect {s^Y}\)





Condition for Independence from Product of Expectations














\(\ds \)

\(=\)







\(\ds \map {\Pi_X} s \, \map {\Pi_Y} s\)





Definition of Probability Generating Function



$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.4$: Sums of independent random variables: Theorem $4 \ \text{C}$




