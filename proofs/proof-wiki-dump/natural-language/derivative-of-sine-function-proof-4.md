# 

Source: https://proofwiki.org/wiki/Derivative_of_Sine_Function/Proof_4

Theorem
$\map {\dfrac \d {\d x} } {\sin x} = \cos x$


Proof













\(\ds \map {\frac \d {\d x} } {\sin x}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \sin {x + h} - \sin x} h\)





Definition of Derivative of Real Function at Point














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \sin {\paren {x + \frac h 2} + \frac h 2} - \map \sin {\paren {x + \frac h 2} - \frac h 2} } h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {2 \map \cos {x + \frac h 2} \map \sin {\frac h 2} } h\)





Werner Formula for Cosine by Sine














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \map \cos {x + \frac h 2} \lim_{h \mathop \to 0} \frac {\map \sin {\frac h 2} } {\frac h 2}\)





Multiple Rule for Limits of Real Functions and Product Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \cos x \times 1\)





Cosine Function is Continuous and Limit of $\dfrac {\sin x} x$ at Zero














\(\ds \)

\(=\)







\(\ds \cos x\)









$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation: Standard Differential Coefficients




