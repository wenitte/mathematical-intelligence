# 

Source: https://proofwiki.org/wiki/Partial_Derivatives_of_x%5Eu_%2B_u%5Ey

Theorem
Let:

$u = x^u + u^y$
Then:














\(\ds \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds \frac {u^2} {x \paren {1 - u \ln x - y} }\)




















\(\ds \dfrac {\partial u} {\partial y}\)

\(=\)







\(\ds \frac {u \ln u} {1 - u \ln x - y}\)











Proof













\(\ds u\)

\(=\)







\(\ds x^u + u^y\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \ln u\)

\(=\)







\(\ds u \ln x + y \ln u\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 u \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds \frac u x + \ln x \dfrac {\partial u} {\partial x} + \frac y u \dfrac {\partial u} {\partial x}\)





Derivative of Natural Logarithm, Chain Rule for Derivatives keeping $y$ constant








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial u} {\partial x} \paren {\frac 1 u - \ln x - \frac y u}\)

\(=\)







\(\ds \frac u x\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial u} {\partial x} \paren {\frac {1 - u \ln x - y} u}\)

\(=\)







\(\ds \frac u x\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds \frac {u^2} {x \paren {1 - u \ln x - y} }\)





rearranging



$\Box$















\(\ds \ln u\)

\(=\)







\(\ds u \ln x + y \ln u\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds \frac 1 u \dfrac {\partial u} {\partial y}\)

\(=\)







\(\ds \ln x \dfrac {\partial u} {\partial y} + \ln u + \frac y u \dfrac {\partial u} {\partial y}\)





Derivative of Natural Logarithm, Product Rule for Derivatives, Chain Rule for Derivatives keeping $x$ constant








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial u} {\partial y} \paren {\frac 1 u - \ln x - \frac y u}\)

\(=\)







\(\ds \ln u\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial u} {\partial y} \paren {\frac {1 - u \ln x - y} u}\)

\(=\)







\(\ds \ln u\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial u} {\partial y}\)

\(=\)







\(\ds \frac {u \ln u} {1 - u \ln x - y}\)





rearranging



$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 1$. Introduction: Exercise $9$




