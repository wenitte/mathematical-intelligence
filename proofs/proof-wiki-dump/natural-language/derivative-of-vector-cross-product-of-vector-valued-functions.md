# 

Source: https://proofwiki.org/wiki/Derivative_of_Vector_Cross_Product_of_Vector-Valued_Functions



Theorem
Let $\mathbf a: \R \to \R^3$ and $\mathbf b: \R \to \R^3$ be differentiable vector-valued functions in Cartesian $3$-space.

The derivative of their vector cross product is given by:

$\map {\dfrac \d {\d x} } {\mathbf a \times \mathbf b} = \dfrac {\d \mathbf a} {\d x} \times \mathbf b + \mathbf a \times \dfrac {\d \mathbf b} {\d x}$


Proof 1
Let:

$\mathbf a: x \mapsto \begin {bmatrix} a_1 \\ a_2 \\ a_3 \end {bmatrix}$
$\mathbf b: x \mapsto \begin {bmatrix} b_1 \\ b_2 \\ b_3 \end {bmatrix}$

Then:














\(\ds \mathbf a \times \mathbf b\)

\(=\)







\(\ds \begin {bmatrix} a_1 \\ a_2 \\ a_3 \end {bmatrix} \times \begin {bmatrix} b_1 \\ b_2 \\ b_3 \end {bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {bmatrix} a_2 b_3 - a_3 b_2 \\ a_3 b_1 - a_1 b_3 \\ a_1 b_2 - a_2 b_1 \end {bmatrix}\)





Definition of Vector Cross Product








\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \d {\d x} } {\mathbf a \times \mathbf b}\)

\(=\)







\(\ds \begin {bmatrix} \map {\dfrac \d {\d x} } {a_2 b_3 - a_3 b_2} \\ \map {\dfrac \d {\d x} } {a_3 b_1 - a_1 b_3} \\ \map {\dfrac \d {\d x} } {a_1 b_2 - a_2 b_1} \end {bmatrix}\)





Differentiation of Vector-Valued Function Componentwise














\(\ds \)

\(=\)







\(\ds \begin {bmatrix} \dfrac {\d a_2} {\d x} b_3 + a_2 \dfrac {\d b_3} {\d x} - \dfrac {\d a_3} {\d x} b_2 - a_3 \dfrac {\d b_2} {\d x} \\ \dfrac {\d a_3} {\d x} b_1 + a_3 \dfrac {\d b_1} {\d x} - \dfrac {\d a_1} {\d x} b_3 - a_1 \dfrac {\d b_3} {\d x} \\ \dfrac {\d a_1} {\d x} b_2 + a_1 \dfrac {\d b_2} {\d x} - \dfrac {\d a_2} {\d x} b_1 - a_2 \dfrac {\d b_1} {\d x} \end {bmatrix}\)





Product Rule for Derivatives, Linear Combination of Derivatives














\(\ds \dfrac {\d \mathbf a} {\d x} \times \mathbf b + \mathbf a \times \dfrac {\d \mathbf b} {\d x}\)

\(=\)







\(\ds \begin {bmatrix} \dfrac {\d a_1} {\d x} \\ \dfrac {\d a_2} {\d x} \\ \dfrac {\d a_3} {\d x} \end {bmatrix} \times \begin {bmatrix} b_1 \\ b_2 \\ b_3 \end {bmatrix} + \begin {bmatrix} a_1 \\ a_2 \\ a_3 \end {bmatrix} \times \begin {bmatrix} \dfrac {\d b_1} {\d x} \\ \dfrac {\d b_2} {\d x} \\ \dfrac {\d b_3} {\d x} \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {bmatrix} \dfrac {\d a_2} {\d x} b_3 - \dfrac {\d a_3} {\d x} b_2 \\ \dfrac {\d a_3} {\d x} b_1 - \dfrac {\d a_1} {\d x} b_3 \\ \dfrac {\d a_1} {\d x} b_2 - \dfrac {\d a_2} {\d x} b_1 \end {bmatrix} + \begin {bmatrix} a_2 \dfrac {\d b_3} {\d x} - a_3 \dfrac {\d b_2} {\d x} \\ a_3 \dfrac {\d b_1} {\d x} - a_1 \dfrac {\d b_3} {\d x} \\ a_1 \dfrac {\d b_2} {\d x} - a_2 \dfrac {\d b_1} {\d x} \end {bmatrix}\)





Definition of Vector Cross Product














\(\ds \)

\(=\)







\(\ds \begin {bmatrix} \dfrac {\d a_2} {\d x} b_3 - \dfrac {\d a_3} {\d x} b_2 + a_2 \dfrac {\d b_3} {\d x} - a_3 \dfrac {\d b_2} {\d x} \\ \dfrac {\d a_3} {\d x} b_1 - \dfrac {\d a_1} {\d x} b_3 + a_3 \dfrac {\d b_1} {\d x} - a_1 \dfrac {\d b_3} {\d x} \\ \dfrac {\d a_1} {\d x} b_2 - \dfrac {\d a_2} {\d x} b_1 + a_1 \dfrac {\d b_2} {\d x} - a_2 \dfrac {\d b_1} {\d x} \end {bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {bmatrix} \dfrac {\d a_2} {\d x} b_3 + a_2 \dfrac {\d b_3} {\d x} - \dfrac {\d a_3} {\d x} b_2 - a_3 \dfrac {\d b_2} {\d x} \\ \dfrac {\d a_3} {\d x} b_1 + a_3 \dfrac {\d b_1} {\d x} - \dfrac {\d a_1} {\d x} b_3 - a_1 \dfrac {\d b_3} {\d x} \\ \dfrac {\d a_1} {\d x} b_2 + a_1 \dfrac {\d b_2} {\d x} - \dfrac {\d a_2} {\d x} b_1 - a_2 \dfrac {\d b_1} {\d x} \end {bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\mathbf a \times \mathbf b}\)









$\blacksquare$


Proof 2
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


Also see
Derivative of Dot Product of Vector-Valued Functions
Derivative of Product of Real Function and Vector-Valued Function


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: Formulas involving Derivatives: $22.24$




