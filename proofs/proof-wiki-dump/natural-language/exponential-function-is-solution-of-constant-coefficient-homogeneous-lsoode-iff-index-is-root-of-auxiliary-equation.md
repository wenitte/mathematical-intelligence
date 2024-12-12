# 

Source: https://proofwiki.org/wiki/Exponential_Function_is_Solution_of_Constant_Coefficient_Homogeneous_LSOODE_iff_Index_is_Root_of_Auxiliary_Equation



Theorem
Let:

$(1): \quad y' ' + p y' + q y = 0$
be a constant coefficient homogeneous linear second order ODE.

Then:

$y = e^{m_1 x}$ is a solution to $(1)$
if and only if

$m_1$ is a root of the auxiliary equation $m^2 + p m + q = 0$


Proof
Consider the equation:

$y = e^{m_1 x}$
Differentiating with respect to $x$:














\(\ds y\)

\(=\)







\(\ds e^{m_1 x}\)




















\(\ds y'\)

\(=\)







\(\ds m_1 e^{m_1 x}\)




















\(\ds y' '\)

\(=\)







\(\ds {m_1}^2 e^{m_1 x}\)











Sufficient Condition
Let $y = e^{m_1 x}$ be a solution to $(1)$.
Substituting for $y$ and its derivatives in $(1)$:














\(\ds y' ' + p y' + q y\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds {m_1}^2 e^{m_1 x} + p m_1 e^{m_1 x} + q e^{m_1 x}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren { {m_1}^2 + p m_1 + q} e^{m_1 x}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds {m_1}^2 + p m_1 + q\)

\(=\)







\(\ds 0\)





as $e^{m_1 x}$ is never zero



That is, by definition, $m_1$ is a root of $m^2 + p m + q = 0$.
$\Box$


Necessary Condition
Let $m_1$ be a root of $m^2 + p m + q = 0$.
Thus:














\(\ds {m_1}^2 + p m_1 + q\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren { {m_1}^2 + p m_1 + q} e^{m_1 x}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds {m_1}^2 e^{m_1 x} + p m_1 e^{m_1 x} + q e^{m_1 x}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds y' ' + p y' + q y\)

\(=\)







\(\ds 0\)





substituting for $y$ and its derivatives



Thus $y = e^{m_1 x}$ satisfies $(1)$.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.17$: The Homogeneous Equation with Constant Coefficients




