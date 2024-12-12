# 

Source: https://proofwiki.org/wiki/Derivative_of_Cosine_Function/Proof_2

Theorem
$\map {\dfrac \d {\d x} } {\cos x} = -\sin x$


Proof













\(\ds \map {\frac \d {\d x} } {\cos x}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \cos {x + h} - \cos x} h\)





Definition of Derivative of Real Function at Point














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\cos x \cos h - \sin x \sin h - \cos x} h\)





Cosine of Sum














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\cos x \cos h - \cos x} h + \lim_{h \mathop \to 0} \frac {-\sin x \sin h} h\)





Sum Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \cos x \lim_{h \mathop \to 0} \frac {\cos h - 1} h - \sin x \lim_{h \mathop \to 0} \frac {\sin h} h\)





Multiple Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \cos x \times 0 - \sin x \times 1\)





Limit of $\dfrac {\cos x - 1} x$ at Zero and Limit of $\dfrac {\sin x} x$ at Zero














\(\ds \)

\(=\)







\(\ds -\sin x\)









$\blacksquare$





