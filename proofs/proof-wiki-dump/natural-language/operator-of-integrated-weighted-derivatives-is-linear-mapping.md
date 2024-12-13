# 

Source: https://proofwiki.org/wiki/Operator_of_Integrated_Weighted_Derivatives_is_Linear_Mapping



Theorem
Let $n \in \N$.
Let $I := \closedint a b$ be a closed real interval.
Let $\map {a_i} x : I \to \R$ be Riemann integrable functions.
Let $f, g \in \map {C^n} I$ be Riemann integrable real-valued functions of differentiability class $k$.
Let $L : \map {C^n} I \to \R$ be the operator of integrated weighted derivatives.

Then $L$ is a linear mapping.


Proof
Distributivity













\(\ds \map L {f + g}\)

\(=\)







\(\ds \int_a^b \sum_{i \mathop = 0}^n \map {a_i} x \dfrac {\d^i}{ {\d x}^i} \paren{\map f x + \map g x} \rd x\)





Definition of Operator of Integrated Weighted Derivatives














\(\ds \)

\(=\)







\(\ds \int_a^b \sum_{i \mathop = 0}^n \map {a_i} x \paren{\map {f^{\paren i} } x + \map {g^{\paren i} } x} \rd x\)





Linear Combination of Derivatives














\(\ds \)

\(=\)







\(\ds \int_a^b \sum_{i \mathop = 0}^n \map {a_i} x \map {f^{\paren i} } x \rd x + \int_a^b \sum_{i \mathop = 0}^n \map {a_i} x \map {g^{\paren i} } x \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \map L f + \map L g\)





Definition of Operator of Integrated Weighted Derivatives



$\Box$


Positive homogenity













\(\ds \map L {\alpha f}\)

\(=\)







\(\ds \int_a^b \sum_{i \mathop = 0}^n \map {a_i} x \dfrac {\d^i}{ {\d x}^i} \paren {\alpha \map f x} \rd x\)





Definition of Riemann Integral Operator














\(\ds \)

\(=\)







\(\ds \int_a^b \sum_{i \mathop = 0}^n \map {a_i} x \alpha \map {f^{\paren i} } x \rd x\)





Linear Combination of Derivatives














\(\ds \)

\(=\)







\(\ds \alpha \int_a^b \sum_{i \mathop = 0}^n \map {a_i} x \map {f^{\paren i} } x \rd x\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \alpha \map L f\)





Definition of Riemann Integral Operator



$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.1$: Continuous and linear maps. Linear transformations




