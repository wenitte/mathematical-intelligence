# 

Source: https://proofwiki.org/wiki/Derivative_of_Sine_Function/Proof_2

Theorem
$\map {\dfrac \d {\d x} } {\sin x} = \cos x$


Proof













\(\ds \map {\frac \d {\d x} } {\sin x}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \sin {x + h} - \sin x} h\)





Definition of Derivative of Real Function at Point














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\sin x \cos h + \sin h \cos x - \sin x} h\)





Sine of Sum














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\sin x \paren {\cos h - 1} + \sin h \cos x} h\)





collecting terms containing $\map \sin x$ and factoring














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\sin x \paren {\cos h - 1} } h + \lim_{h \mathop \to 0} \frac {\sin h \cos x} h\)





Sum Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \map \sin x \times 0 + 1 \times \cos x\)





Limit of $\dfrac {\sin x} x$ at Zero and Limit of $\dfrac {\cos x - 1} x$ at Zero














\(\ds \)

\(=\)







\(\ds \cos x\)









$\blacksquare$





