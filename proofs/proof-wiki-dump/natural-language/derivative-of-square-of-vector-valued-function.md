# 

Source: https://proofwiki.org/wiki/Derivative_of_Square_of_Vector-Valued_Function

Theorem
Let $\mathbf a: \R \to \R^n$ be a differentiable vector-valued function.

The derivative of its square is given by:

$\map {\dfrac \d {\d x} } {\mathbf a^2} = 2 \mathbf a \cdot \dfrac {\d \mathbf a} {\d x} = 2 a \dfrac {\d a} {\d x}$
where $a = \norm {\mathbf a}$ is the magnitude of $\mathbf a$.


Proof













\(\ds \map {\dfrac \d {\d x} } {\mathbf a \cdot \mathbf b}\)

\(=\)







\(\ds \dfrac {\d \mathbf a} {\d x} \cdot \mathbf b + \mathbf a \cdot \dfrac {\d \mathbf b} {\d x}\)





Derivative of Dot Product of Vector-Valued Functions








\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \d {\d x} } {\mathbf a \cdot \mathbf a}\)

\(=\)







\(\ds \dfrac {\d \mathbf a} {\d x} \cdot \mathbf a + \mathbf a \cdot \dfrac {\d \mathbf a} {\d x}\)





setting $\mathbf a = \mathbf b$








\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \d {\d x} } {\mathbf a^2}\)

\(=\)







\(\ds \dfrac {\d \mathbf a} {\d x} \cdot \mathbf a + \mathbf a \cdot \dfrac {\d \mathbf a} {\d x}\)





Definition of Square of Vector Quantity








\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \d {\d x} } {\mathbf a^2}\)

\(=\)







\(\ds 2 \mathbf a \cdot \dfrac {\d \mathbf a} {\d x}\)





Dot Product Operator is Commutative














\(\ds \)

\(=\)







\(\ds 2 a \dfrac {\d a} {\d x}\)





Dot Product of Vector-Valued Function with its Derivative



$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {III}$: The Differentiation of Vectors: $2$. Differentiation of Sums and Products: $(3.3 a)$




