# 

Source: https://proofwiki.org/wiki/Linear_First_Order_ODE/dy_%3D_f(x)_dx



Theorem
Let $f: \R \to \R$ be an integrable real function.
The linear first order ODE:

$(1): \quad \dfrac {\d y} {\d x} = \map f x$
has the general solution:

$y = \ds \int \map f x \rd x + C$
where $\ds \int \map f x \rd x$ denotes the primitive of $f$.


Initial Condition
Consider the linear first order ODE:

$(1): \quad \dfrac {\d y} {\d x} = \map f x$
subject to the initial condition:

$y = y_0$ when $x = x_0$

$(1)$ has the particular solution:

$y = y_0 + \ds \int_{x_0}^x \map f \xi \rd \xi$
where $\ds \int \map f x \rd x$ denotes the primitive of $f$.


Proof













\(\ds \dfrac {\d y} {\d x}\)

\(=\)







\(\ds \map f x\)














\(\ds \leadsto \ \ \)





\(\ds \int \d y\)

\(=\)







\(\ds \int \map f x \rd x\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \int \map f x \rd x\)





Primitive of Constant



$\blacksquare$


Examples
Example: $y' = e^{-x^2}$
The linear first order ODE:

$(1): \quad \dfrac {\d y} {\d x} = e^{-x^2}$
has the general solution:

$y = \dfrac {\sqrt \pi} 2 \map {\erf} x + C$
where $\erf$ denotes the error function.


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 1$. The first order equation: $\S 1.1$ Introduction: $(2)$




