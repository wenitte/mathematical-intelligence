# 

Source: https://proofwiki.org/wiki/Limit_of_Real_Function/Examples/e%5E-1_over_size_x_at_0

Example of Limit of Real Function
$\ds \lim_{x \mathop \to 0} e^{-1 / \size x} = 0$


Proof
  
By definition of the limit of a real function:

$\ds \lim_{x \mathop \to a} \map f x = A$
if and only if:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in \R: 0 < \size {x - a} < \delta \implies \size {\map f x - A} < \epsilon$

Let $\epsilon \in \R_{>0}$ be chosen arbitrarily.
Then we have:














\(\ds e^{-1 / \size x}\)

\(<\)







\(\ds \epsilon\)














\(\ds \leadstoandfrom \ \ \)





\(\ds -1 / \size x\)

\(<\)







\(\ds \ln \epsilon\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 1 / \size x\)

\(>\)







\(\ds -\ln \epsilon\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 1 \epsilon}\)





Logarithm of Reciprocal








\(\ds \leadstoandfrom \ \ \)





\(\ds \size x\)

\(<\)







\(\ds \dfrac 1 {\map \ln {1 / \epsilon} }\)









So, having been given an arbitrary $\epsilon \in \R_{>0}$, let $\delta = \dfrac 1 {\map \ln {1 / \epsilon} }$.
Then:

$0 < \size x < \delta \implies \size {e^{-1 / \size x} } < \epsilon$
Hence by definition of limit of a real function:

$\ds \lim_{x \mathop \to 0} e^{-1 / \size x} = 0$
$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 2$. Functions of One Variable: Exercise $1 \, \text {(a)}$




