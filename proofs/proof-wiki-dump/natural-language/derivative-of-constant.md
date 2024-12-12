# 

Source: https://proofwiki.org/wiki/Derivative_of_Constant



Theorem
Let $\map {f_c} x$ be the constant function on $\R$, where $c \in \R$.

Then:

$\map { {f_c}'} x = 0$


Complex Domain
Let $\map {f_c} z$ be the constant function on an open domain $D \in \C$, where $c \in \C$.

Then:

$\forall z \in D : \map { {f_c}'} z = 0$


Proof
The function $f_c: \R \to \R$ is defined as:

$\forall x \in \R: \map {f_c} x = c$
Thus:














\(\ds \map { {f_c}'} x\)

\(=\)







\(\ds \lim_{\delta x \mathop \to 0} \frac {\map {f_c} {x + \delta x} - \map {f_c} x} {\delta x}\)





Definition of Differentiation














\(\ds \)

\(=\)







\(\ds \lim_{\delta x \mathop \to 0} \frac {c - c} {\delta x}\)




















\(\ds \)

\(=\)







\(\ds \lim_{\delta x \mathop \to 0} \frac 0 {\delta x}\)




















\(\ds \)

\(=\)







\(\ds 0\)









$\blacksquare$


Also see
This is the converse of Zero Derivative implies Constant Function.
Thus we see that $f$ is the constant function if and only if $\forall x: \map {f'} x = 0$.


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation: Standard Differential Coefficients
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 13$: General Rules of Differentiation: $13.2$
1974: Murray R. Spiegel: Theory and Problems of Advanced Calculus (SI ed.) ... (previous) ... (next): Chapter $4$. Derivatives: Derivatives of Special Functions: $1$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $5$. Differential Calculus: Appendix: Derivatives of fundamental functions: $1.$ Constant factor
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $6$: Derivatives
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $7$: Derivatives




