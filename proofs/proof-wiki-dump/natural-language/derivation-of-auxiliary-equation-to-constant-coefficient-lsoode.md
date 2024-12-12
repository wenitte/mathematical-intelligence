# 

Source: https://proofwiki.org/wiki/Derivation_of_Auxiliary_Equation_to_Constant_Coefficient_LSOODE

Theorem
Consider the linear Second Order ODE with Constant Coefficients:

$(1): \quad \dfrac {\d^2 y} {\d x^2} + p \dfrac {\d y} {\d x} + q y = \map R x$
and its auxiliary equation:

$(2): \quad m^2 + p m + q = 0$

The fact that the solutions of $(2)$ dictate the general solution of $(1)$ can be derived.


Proof
Let the reduced equation of $(1)$ be expressed in the form:

$(3): \quad D^2 y + p D y + q y = 0$
where $D$ denotes the derivative operator with respect to $x$:

$D := \dfrac \d {\d x}$
Thus:

$D^2 := \dfrac {\d^2} {\d x^2}$
We can express $(3)$ in the form:

$(4): \quad \paren {D^2 + p y + q} y = 0$

Consider the expression:

$(5): \quad \paren {D - k_1} \paren {D - k_2} y$
for constants $k_1$ and $k_2$ (not necessarily real).
We have:














\(\ds \paren {D - k_1} \paren {D - k_2} y\)

\(=\)







\(\ds \paren {D - k_1} \paren {D y - k_2 y}\)




















\(\ds \)

\(=\)







\(\ds \paren {D - k_1} \paren {\dfrac {\d y} {\d x} - k_2 y}\)




















\(\ds \)

\(=\)







\(\ds D \paren {\dfrac {\d y} {\d x} - k_2 y} - k_1 \paren {\dfrac {\d y} {\d x} - k_2 y}\)




















\(\ds \)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\dfrac {\d y} {\d x} - k_2 y} - k_1 \paren {\dfrac {\d y} {\d x} - k_2 y}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\d^2 y} {\d x^2} - k_2 \dfrac {\d y} {\d x} - k_1 \dfrac {\d y} {\d x} + k_1 k_2 y\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\d^2 y} {\d x^2} - \paren {k_1 + k_2} \dfrac {\d y} {\d x} + k_1 k_2 y\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\d^2 y} {\d x^2} + p \dfrac {\d y} {\d x} + q y\)





where $p = -\paren {k_1 + k_2}$ and $q = k_1 k_2$



Thus $(3)$ can be written:

$(6): \quad \paren {D - k_1} \paren {D - k_2} y = 0$

From Sum of Roots of Quadratic Equation and Product of Roots of Quadratic Equation, we recognise that $k_1$ and $k_2$ are the solutions of $(2)$.

Let $z := \paren {D - k_2} y$.
Then from $(6)$ we have:

$\paren {D - k_1} z = 0$
That is:

$(7): \quad \dfrac {\d z} {\d x} - k_1 z = 0$
From Solution to Linear First Order ODE with Constant Coefficients, $(7)$ has the general solution:

$z = C e^{k_1 x}$
Thus we have:

$\dfrac {\d y} {\d x} - k_2 y = z = C_1 e^{k_1 x}$
From Solution to Linear First Order ODE with Constant Coefficients:

$(8): \quad y e^{-k_1 x} = C_2 \ds \int e^{\paren {k_1 - k_2} x} \rd x + C_2$

Suppose $k_1 \ne k_2$.
Then the right hand side of $(8)$ evaluates to:

$\dfrac C {k_1 - k_2} e^{\paren {k_1 - k_2} x}$
If $k_1 = k_2$ then it is merely:

$\ds \int C e^{0 \cdot x} \rd x = \int C \rd x = C x$
We can of course replace $\dfrac C {k_1 - k_2}$ with another constant.

It follows that the general solution of $(3)$ can be expressed as a linear combination of :

$e^{k_1 x}$ and $e^{k_2 x}$
if $k_1 \ne k_2$, and:

$e^{k_1 x}$ and $x e^{k_1 x}$
if $k_1 = k_2$.

If $k_1$ and $k_2$ are complex conjugates, we have that:

$k_1 = \alpha + i \omega$
$k_2 = \alpha - i \omega$
for some real $\alpha$ and $\omega$.
This leads to the corresponding solutions:

$e^{\paren {\alpha \pm i \omega} x} = e^{\alpha x} \paren {\cos \omega x \pm i \sin \omega x}$
Hence any linear combination of $e^{\alpha x} \paren {\cos \omega x \pm i \sin \omega x}$ can be expressed as:

$e^{\alpha x} \paren {A \cos \omega x + B \sin \omega x}$
and the task is complete.
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 2$. The second order equation: $\S 2.1$ The reduced equation




