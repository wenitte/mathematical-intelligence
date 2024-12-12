# 

Source: https://proofwiki.org/wiki/Gradient_Operator_Distributes_over_Addition

Theorem
Let $\mathbf V$ be a vector space of $n$ dimensions.
Let $\tuple {\mathbf e_1, \mathbf e_2, \ldots, \mathbf e_n}$ be the standard ordered basis of $\mathbf V$.
Let $\map f {x_1, x_2, \ldots, x_n}, \map g {x_1, x_2, \ldots, x_n}: \mathbf V \to \R$ be differentiable real-valued functions on $\mathbf V$.
Let $\nabla f$ denote the gradient of $f$.

Then:

$\nabla \paren {f + g} = \nabla f + \nabla g$


Proof













\(\ds \nabla \paren {f + g}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \frac {\partial \paren {f + g} } {\partial x_k} \mathbf e_k\)





Definition of Gradient Operator














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {\frac {\partial f} {\partial x_k} \mathbf e_k + \frac {\partial g} {\partial x_k} \mathbf e_k}\)





Linear Combination of Partial Derivatives














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \frac {\partial f} {\partial x_k} \mathbf e_k + \sum_{k \mathop = 1}^n \frac {\partial g} {\partial x_k} \mathbf e_k\)





Sum of Summations equals Summation of Sum














\(\ds \)

\(=\)







\(\ds \nabla f + \nabla g\)





Definition of Gradient Operator



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: Miscellaneous Formulas involving $\nabla$: $22.35$




