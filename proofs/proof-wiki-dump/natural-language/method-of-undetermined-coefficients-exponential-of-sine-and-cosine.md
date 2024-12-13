# 

Source: https://proofwiki.org/wiki/Method_of_Undetermined_Coefficients/Exponential_of_Sine_and_Cosine

Proof Technique
Consider the nonhomogeneous linear second order ODE with constant coefficients:

$(1): \quad y + p y' + q y = \map R x$
Let $\map R x$ be of the form:

$\map R x = e^{a x} \paren {\alpha \sin b x + \beta \cos b x}$

The Method of Undetermined Coefficients can be used to solve $(1)$ in the following manner.


Method and Proof
Let $\map {y_g} x$ be the general solution to:

$(2): \quad y + p y' + q y = 0$
From Solution of Constant Coefficient Homogeneous LSOODE, $\map {y_g} x$ can be found systematically.
Let $\map {y_p} x$ be a particular solution to $(1)$.
Then from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$\map {y_g} x + \map {y_p} x$
is the general solution to $(1)$.

It remains to find $\map {y_p} x$.

Substitute a trial solution of similar form, either:

$e^{a x} \paren {A \sin b x + B \cos b x}$
or replace the right hand side of $(1)$ by:

$\paren {\alpha - i \beta} e^{i \paren {a + i b} x}$
find a solution, and take the real part.

If $e^{a x} \sin b x$ and $e^{a x} \cos b x$ appear in the general solution to $(2)$, then insert a factor of $x$:

$x e^{a x} \paren {A \sin b x + B \cos b x}$
or:

$x \paren {\alpha - i \beta} e^{i \paren {a + i b} x}$
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 2$. The second order equation: $\S 2.6$ Particular solution: some further cases $\text{(i)}$




