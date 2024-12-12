# 

Source: https://proofwiki.org/wiki/Conversion_of_Cauchy-Euler_Equation_to_Constant_Coefficient_Linear_ODE



Theorem
Consider the Cauchy-Euler equation:

$(1): \quad x^2 \dfrac {\d^2 y} {\d x^2} + p x \dfrac {\d y} {\d x} + q y = 0$
By making the substitution:

$x = e^t$
it is possible to convert $(1)$ into a constant coefficient homogeneous linear second order ODE:

$\dfrac {\d^2 y} {\d t^2} + \paren {p - 1} \dfrac {\d y} {\d t} + q y = 0$


General Result
Let $n \in \Z_{>0}$ be a strictly positive integer.
The ordinary differential equation:

$a_n x^n \, \map {f^{\paren n} } x + \dotsb + a_1 x \, \map {f'} c + a_0 \, \map f x = 0$
can be transformed to a linear differential equation with constant coefficients by substitution $x = e^t$.


Proof
We have:














\(\ds x\)

\(=\)







\(\ds e^t\)





Derivative of Exponential Function








\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d t}\)

\(=\)







\(\ds e^t\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d t} {\d x}\)

\(=\)







\(\ds \frac 1 x\)





Derivative of Inverse Function




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds e^{-t}\)










Then:














\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \frac {\d y} {\d t} \frac {\d t} {\d x}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {\d y} {\d t} e^{-t}\)





from $(2)$



and:














\(\ds \frac {\d^2 y} {\d x^2}\)

\(=\)







\(\ds \frac {\d} {\d x} \paren {\frac {\d y} {\d x} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\d} {\d t} \paren {\frac {\d y} {\d x} } \frac {\d t} {\d x}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {\d} {\d t} \paren {\frac {\d y} {\d t} e^{-t} } e^{-t}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds e^{-t} \paren {e^{-t} \frac {\d^2 y} {\d t^2} - e^{-t} \frac {\d y} {\d t} }\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds e^{- 2 t} \paren {\frac {\d^2 y} {\d t^2} - \frac {\d y} {\d t} }\)










Substituting back into $(1)$:














\(\ds x^2 \dfrac {\d^2 y} {\d x^2} + p x \dfrac {\d y} {\d x} + q y\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds e^{2 t} \paren {e^{- 2 t} \paren {\frac {\d^2 y} {\d t^2} - \frac {\d y} {\d t} } } + p e^t \paren {\frac {\d y} {\d t} e^{-t} } + q y\)

\(=\)







\(\ds 0\)




















\(\ds \frac {\d^2 y} {\d t^2} - \frac {\d y} {\d t} + p \frac {\d y} {\d t} + q y\)

\(=\)







\(\ds 0\)




















\(\ds \frac {\d^2 y} {\d t^2} + \paren {p - 1} \frac {\d y} {\d t} + q y\)

\(=\)







\(\ds 0\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 18$: Basic Differential Equations and Solutions: $18.9$: Euler or Cauchy Equation
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.17$: Problem $4$




