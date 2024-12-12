# 

Source: https://proofwiki.org/wiki/Derivative_of_Dot_Product_of_Vector-Valued_Functions/Proof_2

Theorem
Let $\mathbf a: \R \to \R^n$ and $\mathbf b: \R \to \R^n$ be differentiable vector-valued functions.

The derivative of their dot product is given by:

$\map {\dfrac \d {\d x} } {\mathbf a \cdot \mathbf b} = \dfrac {\d \mathbf a} {\d x} \cdot \mathbf b + \mathbf a \cdot \dfrac {\d \mathbf b} {\d x}$


Proof
Let $\mathbf v = \mathbf a \cdot \mathbf b$.
Then:














\(\ds \dfrac {\d \mathbf v} {\d x}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \dfrac {\map {\mathbf v} {x + h} - \map {\mathbf v} x} h\)





Definition of Derivative of Vector-Valued Function














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \dfrac {\map {\mathbf a} {x + h} \cdot \map {\mathbf b} {x + h} - \map {\mathbf a} x \cdot \map {\mathbf b} x} h\)





Definition of $\mathbf v$














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \dfrac {\map {\mathbf a} {x + h} \cdot \map {\mathbf b} {x + h} - \map {\mathbf a} {x + h} \cdot \map {\mathbf b} x + \map {\mathbf a} {x + h} \cdot \map {\mathbf b} x - \map {\mathbf a} x \cdot \map {\mathbf b} x} h\)





rearranging














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \map {\mathbf a} {x + h} \cdot \dfrac {\map {\mathbf b} {x + h} - \map {\mathbf b} x} h + \lim_{h \mathop \to 0} \dfrac {\map {\mathbf a} {x + h} - \map {\mathbf a} x} h \cdot \map {\mathbf b} x\)





rearranging














\(\ds \)

\(=\)







\(\ds \mathbf a \cdot \dfrac {\d \mathbf b} {\d x} + \dfrac {\d \mathbf a} {\d x} \cdot \mathbf b\)





Definition of Derivative of Vector-Valued Function



$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {III}$: The Differentiation of Vectors: $2$. Differentiation of Sums and Products: $(3.3)$




