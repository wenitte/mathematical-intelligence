# 

Source: https://proofwiki.org/wiki/PGF_of_Sum_of_Random_Number_of_Independent_Discrete_Random_Variables

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let:

$N, X_1, X_2, \ldots$
be independent discrete random variables such that the $X$'s have the same probability distribution.
Let:

$\map {\Pi_N} s$ be the PGF of $N$
$\map {\Pi_X} s$ be the PGF of each of the $X$'s.
Let:

$Z = X_1 + X_2 + \ldots + X_N$

Then:

$\map {\Pi_Z} s = \map {\Pi_N} {\map {\Pi_X} s}$


Proof













\(\ds \map {\Pi_Z} s\)

\(=\)







\(\ds \expect {s^{X_1 + X_2 + \cdots + X_N} }\)





Definition of Probability Generating Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} \expect {s^{X_1 + X_2 + \cdots + X_N} \mid N = n} \map \Pr {N = n}\)





Total Expectation Theorem














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} \expect {s^{X_1 + X_2 + \cdots + X_n} } \map \Pr {N = n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} \map {\Pi_X} s^n \map \Pr {N = n}\)





PGF of Sum of Independent Discrete Random Variables














\(\ds \)

\(=\)







\(\ds \map {\Pi_N} {\map {\Pi_X} s}\)





Definition of $\map {\Pi_N} s$



$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.4$: Sums of independent random variables: Theorem $4 \text{D}$




