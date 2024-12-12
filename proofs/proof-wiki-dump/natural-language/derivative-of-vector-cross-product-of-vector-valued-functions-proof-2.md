# 

Source: https://proofwiki.org/wiki/Derivative_of_Vector_Cross_Product_of_Vector-Valued_Functions/Proof_2

Theorem
Let $\mathbf a: \R \to \R^3$ and $\mathbf b: \R \to \R^3$ be differentiable vector-valued functions in Cartesian $3$-space.

The derivative of their vector cross product is given by:

$\map {\dfrac \d {\d x} } {\mathbf a \times \mathbf b} = \dfrac {\d \mathbf a} {\d x} \times \mathbf b + \mathbf a \times \dfrac {\d \mathbf b} {\d x}$


Proof
Let $\mathbf v = \mathbf a \times \mathbf b$.
Then:














\(\ds \dfrac {\d \mathbf v} {\d x}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \dfrac {\map {\mathbf v} {x + h} - \map {\mathbf v} x} h\)





Definition of Derivative of Vector-Valued Function














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \dfrac {\map {\mathbf a} {x + h} \times \map {\mathbf b} {x + h} - \map {\mathbf a} x \times \map {\mathbf b} x} h\)





Definition of $\mathbf v$














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \dfrac {\map {\mathbf a} {x + h} \times \map {\mathbf b} {x + h} - \map {\mathbf a} {x + h} \times \map {\mathbf b} x + \map {\mathbf a} {x + h} \times \map {\mathbf b} x - \map {\mathbf a} x \times \map {\mathbf b} x} h\)





rearranging














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \map {\mathbf a} {x + h} \times \dfrac {\map {\mathbf b} {x + h} - \map {\mathbf b} x} h + \lim_{h \mathop \to 0} \dfrac {\map {\mathbf a} {x + h} - \map {\mathbf a} x} h \times \map {\mathbf b} x\)





rearranging














\(\ds \)

\(=\)







\(\ds \mathbf a \times \dfrac {\d \mathbf b} {\d x} + \dfrac {\d \mathbf a} {\d x} \times \mathbf b\)





Definition of Derivative of Vector-Valued Function



$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {III}$: The Differentiation of Vectors: $2$. Differentiation of Sums and Products: $(3.4)$




