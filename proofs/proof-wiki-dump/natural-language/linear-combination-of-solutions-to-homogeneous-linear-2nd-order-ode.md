# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Solutions_to_Homogeneous_Linear_2nd_Order_ODE

Theorem
Let $c_1$ and $c_2$ be real numbers.
Let $\map {y_1} x$ and $\map {y_2} x$ be particular solutions to the homogeneous linear second order ODE:

$(1): \quad \dfrac {\d^2 y} {\d x^2} + \map P x \dfrac {\d y} {\d x} + \map Q x y = 0$

Then:

$c_1 \, \map {y_1} x + c_2 \, \map {y_2} x$
is also a particular solution to $(1)$.

That is, a linear combination of particular solutions to a homogeneous linear second order ODE is also a particular solution to that ODE.


Proof













\(\ds \)

\(\)







\(\ds \paren {c_1 \, \map {y_1} x + c_2 \, \map {y_2} x} + \map P x \paren {c_1 \, \map {y_1} x + c_2 \, \map {y_2} x}' + \map Q x \paren {c_1 \, \map {y_1} x + c_2 \, \map {y_2} x}\)




















\(\ds \)

\(=\)







\(\ds \paren {c_1 \, \map {y_1} x + c_2 \, \map {y_2} x} + \map P x \paren {c_1 \, \map {y_1'} x + c_2 \, \map {y_2'} x} + \map Q x \paren {c_1 \, \map {y_1} x + c_2 \, \map {y_2} x}\)





Linear Combination of Derivatives














\(\ds \)

\(=\)







\(\ds c_1 \paren {\map {y_1} x + \map P x \, \map {y_1'} x + \map Q x \, \map {y_1} x} + c_2 \paren {\map {y_2} x + \map P x \, \map {y_2'} x + \map Q x \, \map {y_2} x}\)




















\(\ds \)

\(=\)







\(\ds c_1 \cdot 0 + c_2 \cdot 0\)




















\(\ds \)

\(=\)







\(\ds 0\)









Hence the result.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.14$: Second Order Linear Equations: Introduction: Theorem $\text{C}$




