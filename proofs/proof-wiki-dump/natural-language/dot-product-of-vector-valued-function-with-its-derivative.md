# 

Source: https://proofwiki.org/wiki/Dot_Product_of_Vector-Valued_Function_with_its_Derivative

Theorem
Let:

$\map {\mathbf f} x = \ds \sum_{k \mathop = 1}^n \map {f_k} x \mathbf e_k$
be a differentiable vector-valued function.

The dot product of $\mathbf f$ with its derivative is given by:

$\map {\mathbf f} x \cdot \dfrac {\map {\d \mathbf f} x} {\d x} = \size {\map {\mathbf f} x} \dfrac {\d \size {\map {\mathbf f} x} } {\d x}$
where $\size {\map {\mathbf f} x} \ne 0$.


Proof













\(\ds \map {\mathbf f} x \cdot \dfrac {\map {\d \mathbf f} x} {\d x}\)

\(=\)







\(\ds \map {\mathbf f} x \cdot \sum_{k \mathop = 0}^n \dfrac {\map {\d f_k} x} {\d x} \mathbf e_k\)





Definition of Derivative of Vector-Valued Function














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \map {f_k} x \dfrac {\map {\d f_k} x} {\d x}\)





Definition of Dot Product




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \map {f_k} x \dfrac {\map {\d f_k} x} {\d x}\)





Definition of Dot Product




Then:














\(\ds \dfrac {\d \size {\map {\mathbf f} x} } {\d x}\)

\(=\)







\(\ds \dfrac \d {\d x} \sqrt {\sum_{k \mathop = 0}^n \paren {\map {f_k} x}^2}\)





Definition of Vector Length














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \sqrt {\ds \sum_{k \mathop = 0}^n \paren {\map {f_k} x}^2} } \dfrac \d {\d x} \sum_{k \mathop = 0}^n \paren {\map {f_k} x}^2\)





Chain Rule for Derivatives, Derivative of Power














\(\ds \)

\(=\)







\(\ds \frac 1 {\size {\map {\mathbf f} x} } \frac 1 2 \sum_{k \mathop = 0}^n \dfrac \d {\d x} \paren {\paren {\map {f_k} x}^2}\)





Definition of Vector Length, Sum Rule for Derivatives: General Result














\(\ds \)

\(=\)







\(\ds \frac 1 {\size {\map {\mathbf f} x} } \frac 1 2 \sum_{k \mathop = 0}^n 2 \map {f_k} x \dfrac {\map {\d f_k} x} {\d x}\)





Chain Rule for Derivatives, Derivative of Power














\(\ds \)

\(=\)







\(\ds \frac 1 {\size {\map {\mathbf f} x} } \map {\mathbf f} x \cdot \dfrac {\map {\d \mathbf f} x} {\d x}\)





simplification, and from $(1)$



Hence the result.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: Formulas involving Derivatives: $22.26$




