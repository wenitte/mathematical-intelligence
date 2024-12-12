# 

Source: https://proofwiki.org/wiki/Distributional_Partial_Derivatives_Commute

Theorem
Let $T \in \map {\DD'} {\R^d}$ be a distribution.

Then in the distributional sense:

$\dfrac {\partial^2 T} {\partial x_i \partial x_j} = \dfrac {\partial^2 T} {\partial x_j \partial x_i}$
where:

$i, j \in \N : 1 \le i, j \le d$


Proof
Let $\phi \in \map \DD {\R^d}$ be a test function.














\(\ds \map {\dfrac {\partial^2 T} {\partial x_i \partial x_j} } \phi\)

\(=\)







\(\ds -\map {\dfrac {\partial T} {\partial x_j} } {\dfrac {\partial \phi} {\partial x_i} }\)





Definition of Distributional Partial Derivative














\(\ds \)

\(=\)







\(\ds \map T {\dfrac {\partial^2 \phi} {\partial x_j \partial x_i} }\)





Definition of Distributional Partial Derivative














\(\ds \)

\(=\)







\(\ds \map T {\dfrac {\partial^2 \phi} {\partial x_i \partial x_j} }\)





Clairaut's Theorem, Definition of Test Function














\(\ds \)

\(=\)







\(\ds - \map {\dfrac {\partial T} {\partial x_i} } {\dfrac {\partial \phi} {\partial x_j} }\)





Definition of Distributional Partial Derivative














\(\ds \)

\(=\)







\(\ds \map {\dfrac {\partial^2 T} {\partial x_j \partial x_i} } \phi\)





Definition of Distributional Partial Derivative



$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis: Chapter $\S 6.2$: A glimpse of distribution theory. Derivatives in the distributional sense




