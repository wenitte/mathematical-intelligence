# 

Source: https://proofwiki.org/wiki/Riemann_Integral_Operator_is_Linear_Mapping



Theorem
Let $C \closedint a b$ be the space of continuous Riemann integrable functions.
Let $\R$ be the set of real numbers.
Let $I : C \closedint a b \to \R$ be the Riemann integral operator.

Then $I$ is a linear mapping.


Proof
Let $x, y \in C \closedint a b$ be Riemann integrable.
Let $\alpha \in \R$.


Distributivity













\(\ds \map I {x + y}\)

\(=\)







\(\ds \int_a^b \paren{\map x t + \map y t} \rd t\)





Definition of Riemann Integral Operator














\(\ds \)

\(=\)







\(\ds \int_a^b \map x t \rd t + \int_a^b \map y t \rd t\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \map I x + \map I y\)





Definition of Riemann Integral Operator



$\Box$


Positive homogenity













\(\ds \map I {\alpha x}\)

\(=\)







\(\ds \int_a^b \alpha \map x t \rd t\)





Definition of Riemann Integral Operator














\(\ds \)

\(=\)







\(\ds \alpha \int_a^b \map x t \rd t\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \alpha \map I x\)





Definition of Riemann Integral Operator



$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.1$: Continuous and linear maps. Linear transformations




