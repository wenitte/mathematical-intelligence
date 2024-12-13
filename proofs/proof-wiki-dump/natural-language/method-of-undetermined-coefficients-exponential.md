# 

Source: https://proofwiki.org/wiki/Method_of_Undetermined_Coefficients/Exponential

Proof Technique
Consider the nonhomogeneous linear second order ODE with constant coefficients:

$(1): \quad y' ' + p y' + q y = \map R x$
Let $\map R x$ be of the form of an exponential function:

$\map R x = K e^{a x}$

The Method of Undetermined Coefficients can be used to solve $(1)$ in the following manner.


Method and Proof
Let $\map {y_g} x$ be the general solution to:

$y' ' + p y' + q y = 0$
From Solution of Constant Coefficient Homogeneous LSOODE, $\map {y_g} x$ can be found systematically.
Let $\map {y_p} x$ be a particular solution to $(1)$.
Then from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$\map {y_g} x + \map {y_p} x$
is the general solution to $(1)$.

It remains to find $\map {y_p} x$.

Let $\map R x = K e^{a x}$.

Consider the auxiliary equation to $(1)$:

$(2): \quad m^2 + p m + q = 0$

There are three cases to consider.


$a$ is not a root of $(2)$
Assume that there is a particular solution to $(1)$ of the form:

$y_p = A e^{a x}$
We have:














\(\ds \frac {\d} {\d x} y_p\)

\(=\)







\(\ds a A e^{a x}\)





Derivative of Exponential Function














\(\ds \frac {\d^2} {\d x^2} y_p\)

\(=\)







\(\ds a^2 A e^{a x}\)





Derivative of Exponential Function



Inserting into $(1)$:














\(\ds a^2 A e^{a x} + a p A e^{a x} + q A e^{a x}\)

\(=\)







\(\ds K e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds A \left({a^2 + p a + q}\right) e^{a x}\)

\(=\)







\(\ds K e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac K {a^2 + p a + q}\)









Hence:

$y_p = \dfrac {K e^{a x} } {a^2 + p a + q}$

From Solution of Constant Coefficient Homogeneous LSOODE, $y_g$ depends on whether $(2)$ has equal or unequal roots.
Let $m_1$ and $m_2$ be the roots of $(2)$.
Then:

$y = \begin{cases} C_1 e^{m_1 x} + C_2 e^{m_2 x} + \dfrac {K e^{a x} } {a^2 + p a + q} & : m_1 \ne m_2: m_1, m_2 \in \R \\ C_1 e^{m_1 x} + C_2 x e^{m_1 x} + \dfrac {K e^{a x} } {a^2 + p a + q} & : m_1 = m_2 \\ e^{r x} \paren {C_1 \cos s x + C_2 \sin s x} + \dfrac {K e^{a x} } {a^2 + p a + q} & : m_1 = r + i s, m_2 = r - i s \end{cases}$
is the general solution to $(1)$.
$\Box$


$a$ is a root of $(2)$
If $a$ is a root of $(2)$, then $a^2 + p a + q = 0$ and so $\dfrac {K e^{a x} } {a^2 + p a + q}$ is undefined.

Let the auxiliary equation to $(2)$ have two unequal real roots $a$ and $b$.

Assume that there is a particular solution to $(1)$ of the form:

$y_p = A x e^{a x}$
We have:














\(\ds \frac {\d} {\d x} y_p\)

\(=\)







\(\ds a A x e^{a x} + A e^{a x}\)





Product Rule for Derivatives and Derivative of Exponential Function














\(\ds \frac {\d^2} {\d x^2} y_p\)

\(=\)







\(\ds a^2 A x e^{a x} + a A e^{a x} + a A e^{a x}\)





Product Rule for Derivatives and Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds a^2 A x e^{a x} + 2 a A e^{a x}\)









Inserting into $(1)$:














\(\ds a^2 A x e^{a x} + 2 a A e^{a x} + p \paren {a A x e^{a x} + A e^{a x} } + q A x e^{a x}\)

\(=\)







\(\ds K e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds A \paren {a^2 + p a + q} x e^{a x} + A \paren {2 a + p} e^{a x}\)

\(=\)







\(\ds K e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds A \paren {2 a + p} e^{a x}\)

\(=\)







\(\ds K e^{a x}\)





as $a^2 + p a + q = 0$








\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac K {2 a + p}\)









Hence:

$y_p = \dfrac {K x e^{a x} } {2 a + p}$
and so from Solution of Constant Coefficient Homogeneous LSOODE:

$y = C_1 e^{a x} + C_2 e^{b x} + \dfrac {K x e^{a x} } {2 a + p}$
is the general solution to $(1)$.
$\Box$


$a$ is a repeated root of $(2)$
If the auxiliary equation to $(2)$ has two equal real roots $a$, then:

$a = - \dfrac p 2$
and so not only:

$a^2 + p a + q = 0$
but also:

$2 a + p = 0$
and so neither of the above expressions involving $e^{a x}$ and $x e^{a x}$ will work as particular solution to $(1)$.

So, assume that there is a particular solution to $(1)$ of the form:

$y_p = A x^2 e^{a x}$
We have:














\(\ds \frac {\d} {\d x} y_p\)

\(=\)







\(\ds a A x^2 e^{a x} + 2 A x e^{a x}\)





Product Rule for Derivatives and Derivative of Exponential Function














\(\ds \frac {\d^2} {\d x^2} y_p\)

\(=\)







\(\ds a^2 A x^2 e^{a x} + 2 a x A e^{a x} + 2 a x A e^{a x} + 2 A e^{a x}\)





Product Rule for Derivatives and Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds a^2 A x e^{a x} + 4 a x A e^{a x} + 2 A e^{a x}\)





Derivative of Exponential Function



Inserting into $(1)$:














\(\ds a^2 A x e^{a x} + 4 a x A e^{a x} + 2 A e^{a x} + p \paren {a A x^2 e^{a x} + 2 A x e^{a x} } + q A x^2 e^{a x}\)

\(=\)







\(\ds K e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds A \paren {a^2 + p a + q} x e^{a x} + 2 A \paren {2 a + p} x e^{a x} + 2 A e^{a x}\)

\(=\)







\(\ds K e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds 2 A e^{a x}\)

\(=\)







\(\ds K e^{a x}\)





as $a^2 + p a + q = 0$ and $2 a + p = 0$








\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac K 2\)









Hence:

$y_p = \dfrac {K x^2 e^{a x} } 2$
and so:

$y = y_g + \dfrac {K x^2 e^{a x} } 2$
and so from Solution of Constant Coefficient Homogeneous LSOODE:

$y = C_1 e^{a x} + C_2 x e^{a x} + \dfrac {K x^2 e^{a x} } 2$
is the general solution to $(1)$.
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 2$. The second order equation: $\S 2.4$ Particular solution: exponential $\map f x$
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.18$: The Method of Undetermined Coefficients




