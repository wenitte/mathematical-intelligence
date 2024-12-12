# 

Source: https://proofwiki.org/wiki/Dot_Product_of_Constant_Magnitude_Vector-Valued_Function_with_its_Derivative_is_Zero



Theorem
Let:

$\map {\mathbf f} x = \ds \sum_{k \mathop = 1}^n \map {f_k} x \mathbf e_k$
be a differentiable vector-valued function.

Let $\map {\mathbf f} x$ be such that its magnitude is constant:

$\size {\map {\mathbf f} x} = c$
for some $c \in \R$.

Then the dot product of $\mathbf f$ with its derivative is zero:

$\map {\mathbf f} x \cdot \dfrac {\d \map {\mathbf f} x} {\d x} = 0$


Proof 1













\(\ds \map {\mathbf f} x \cdot \dfrac {\d \map {\mathbf f} x} {\d x}\)

\(=\)







\(\ds \size {\map {\mathbf f} x} \dfrac {\d \left\lvert{\map {\mathbf f} x}\right\rvert} {\d x}\)





Dot Product of Vector-Valued Function with its Derivative














\(\ds \)

\(=\)







\(\ds \size {\map {\mathbf f} x} \dfrac {\d c} {\d x}\)





Magnitude of $\mathbf f$ is constant














\(\ds \)

\(=\)







\(\ds \size {\map {\mathbf f} x} \times 0\)





Derivative of Constant




Hence the result.
$\blacksquare$


Proof 2













\(\ds \map {\mathbf f} x \cdot \map {\mathbf f} x\)

\(=\)







\(\ds c^2\)





Given assumption














\(\ds \dfrac {\d f} {\d x} \paren {\map {\mathbf f} x \cdot \map {\mathbf f} x}\)

\(=\)







\(\ds 0\)





Derivative of Constant














\(\ds \dfrac {\d \map {\mathbf f} x} {\d x} \cdot \map {\mathbf f} x + \map {\mathbf f} x \cdot \dfrac {\d \map {\mathbf f} x} {\d x}\)

\(=\)







\(\ds 0\)





Derivative of Dot Product of Vector-Valued Functions














\(\ds 2 \map {\mathbf f} x \cdot \dfrac {\d \map {\mathbf f} x} {\d x}\)

\(=\)







\(\ds 0\)





Dot Product Operator is Commutative














\(\ds \map {\mathbf f} x \cdot \dfrac {\d \map {\mathbf f} x} {\d x}\)

\(=\)







\(\ds 0\)









$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {III}$: The Differentiation of Vectors: $2$. Differentiation of Sums and Products
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: Formulas involving Derivatives: $22.27$




