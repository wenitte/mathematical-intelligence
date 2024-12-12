# 

Source: https://proofwiki.org/wiki/Derivative_of_Exponential_Function/Proof_1

Theorem
Let $\exp$ be the exponential function.
Then:

$\map {\dfrac \d {\d x} } {\exp x} = \exp x$


Proof













\(\ds \map {\frac \d {\d x} } {\exp x}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \exp {x + h} - \exp x} h\)





Definition of Derivative














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\exp x \cdot \exp h - \exp x} h\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\exp x \paren {\exp h - 1} } h\)




















\(\ds \)

\(=\)







\(\ds \exp x \paren {\lim_{h \mathop \to 0} \frac {\exp h - 1} h}\)





Multiple Rule for Limits of Real Functions, as $\exp x$ is constant














\(\ds \)

\(=\)







\(\ds \exp x\)





Derivative of Exponential at Zero



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation: Standard Differential Coefficients




