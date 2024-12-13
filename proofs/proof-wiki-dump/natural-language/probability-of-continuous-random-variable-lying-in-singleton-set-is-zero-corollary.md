# 

Source: https://proofwiki.org/wiki/Probability_of_Continuous_Random_Variable_Lying_in_Singleton_Set_is_Zero/Corollary

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space. 
Let $X$ be a continuous real variable on $\struct {\Omega, \Sigma, \Pr}$.
Let $C$ be a countable subset of $\R$. 

Then: 

$\map \Pr {X \in C} = 0$


Proof
Since $C$ is countable, there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ of distinct real numbers such that: 

$C = \set {x_n : n \mathop \in \N}$
That is: 

$\ds C = \bigcup_{n \mathop = 1}^\infty \set {x_n}$
where $\set {\set {x_1}, \set {x_2}, \ldots}$ is pairwise disjoint.
We then have: 














\(\ds \map \Pr {X \in C}\)

\(=\)







\(\ds \map {P_X} C\)




















\(\ds \)

\(=\)







\(\ds \map {P_X} {\bigcup_{n \mathop = 1}^\infty \set {x_n} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map {P_X} {\set {x_n} }\)





using the countable additivity of $P_X$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map \Pr {X \in \set {x_n} }\)





Definition of Probability Distribution














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map \Pr {X = x_n}\)




















\(\ds \)

\(=\)







\(\ds 0\)





Probability of Continuous Random Variable Lying in Singleton Set is Zero



$\blacksquare$





