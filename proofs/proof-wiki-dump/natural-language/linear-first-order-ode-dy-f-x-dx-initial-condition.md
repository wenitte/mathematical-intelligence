# 

Source: https://proofwiki.org/wiki/Linear_First_Order_ODE/dy_%3D_f(x)_dx/Initial_Condition

Theorem
Let $f: \R \to \R$ be an integrable real function.

Consider the linear first order ODE:

$(1): \quad \dfrac {\d y} {\d x} = \map f x$
subject to the initial condition:

$y = y_0$ when $x = x_0$

$(1)$ has the particular solution:

$y = y_0 + \ds \int_{x_0}^x \map f \xi \rd \xi$
where $\ds \int \map f x \rd x$ denotes the primitive of $f$.


Proof
It is seen that $(1)$ is an instance of the first order ordinary differential equation:

$\dfrac {\d y} {\d x} = \map f {x, y}$
which is:

subject to an initial condition: $\tuple {x_0, y_0}$
where:

$\map f {x, y}$ is actually $\map f x$
From Solution to First Order Initial Value Problem, this problem is equivalent to the integral equation:

$\ds y = y_0 + \int_{x_0}^x \map f {\xi, \map y \xi} \rd \xi$
As $\map y \xi$ does not contribute towards $\map f x$, it can be ignored.
Hence we have:

$\ds y = y_0 + \int_{x_0}^x \map f \xi \rd \xi$
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 1$. The first order equation: $\S 1.1$ Introduction: $(4)$




