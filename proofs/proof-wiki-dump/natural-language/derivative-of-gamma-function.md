# 

Source: https://proofwiki.org/wiki/Derivative_of_Gamma_Function

Theorem
$\ds \map {\Gamma'} x = \int_0^\infty t^{x - 1} \ln t \, e^{-t} \rd t$
where $\map {\Gamma'} x$ denotes the derivative of the Gamma function evaluated at $x$. 


Proof













\(\ds \map {\Gamma'} x\)

\(=\)







\(\ds \frac \d {\d x} \int_0^\infty t^{x - 1} e^{-t} \rd t\)





Definition of Gamma Function














\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {\partial} {\partial x} t^{x - 1} e^{-t} \rd t\)





Leibniz's Integral Rule














\(\ds \)

\(=\)







\(\ds \int_0^\infty t^{x-1} \ln t \, e^{-t} \rd t\)





Derivative of Power of Constant



$\blacksquare$





