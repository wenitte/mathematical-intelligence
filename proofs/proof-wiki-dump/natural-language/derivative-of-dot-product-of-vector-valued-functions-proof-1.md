# 

Source: https://proofwiki.org/wiki/Derivative_of_Dot_Product_of_Vector-Valued_Functions/Proof_1

Theorem
Let $\mathbf a: \R \to \R^n$ and $\mathbf b: \R \to \R^n$ be differentiable vector-valued functions.

The derivative of their dot product is given by:

$\map {\dfrac \d {\d x} } {\mathbf a \cdot \mathbf b} = \dfrac {\d \mathbf a} {\d x} \cdot \mathbf b + \mathbf a \cdot \dfrac {\d \mathbf b} {\d x}$


Proof
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


Sources
1957: D.E. Rutherford: Vector Methods (9th ed.) ... (previous) ... (next): Chapter $\text I$: Vector Algebra: $\S 7$
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): $\S 12.2$




