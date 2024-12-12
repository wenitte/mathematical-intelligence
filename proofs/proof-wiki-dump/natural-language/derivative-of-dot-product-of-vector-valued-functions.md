# 

Source: https://proofwiki.org/wiki/Derivative_of_Dot_Product_of_Vector-Valued_Functions



Theorem
Let $\mathbf a: \R \to \R^n$ and $\mathbf b: \R \to \R^n$ be differentiable vector-valued functions.

The derivative of their dot product is given by:

$\map {\dfrac \d {\d x} } {\mathbf a \cdot \mathbf b} = \dfrac {\d \mathbf a} {\d x} \cdot \mathbf b + \mathbf a \cdot \dfrac {\d \mathbf b} {\d x}$


Proof 1
Let:

$\mathbf a: x \mapsto \tuple {\map {a_1} x, \map {a_2} x, \ldots, \map {a_n} x}$
$\mathbf b: x \mapsto \tuple {\map {b_1} x, \map {b_2} x, \ldots, \map {b_n} x}$

Then:














\(\ds \map {\frac \d {\d x} } {\mathbf a \cdot \mathbf b}\)

\(=\)







\(\ds \map {\frac \d {\d x} } {\sum_{i \mathop = 1}^n a_i b_i}\)





Definition of Dot Product














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \map {\frac \d {\d x} } {a_i b_i}\)





Sum Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \paren {\map {\frac \d {\d x} } {a_i} b_i + a_i \map {\frac \d {\d x} } {b_i} }\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \map {\frac \d {\d x} } {a_i} b_i + \sum_{i \mathop = 1}^n a_i \map {\frac \d {\d x} } {b_i}\)





Summation is Linear














\(\ds \)

\(=\)







\(\ds \dfrac {\d \mathbf a} {\d x} \cdot \mathbf b + \mathbf a \cdot \dfrac {\d \mathbf b} {\d x}\)





Definition of Dot Product



$\blacksquare$


Proof 2
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


Also see
Derivative of Vector Cross Product of Vector-Valued Functions
Derivative of Product of Real Function and Vector-Valued Function


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: Formulas involving Derivatives: $22.23$




