# 

Source: https://proofwiki.org/wiki/Linear_First_Order_ODE/dy_%3D_f(x)_dx/Examples/y%27_%3D_e%5E-x%5E2

Example of Linear First Order ODE: $\d y = \map f x \rd x$
The linear first order ODE:

$(1): \quad \dfrac {\d y} {\d x} = e^{-x^2}$
has the general solution:

$y = \dfrac {\sqrt \pi} 2 \map {\erf} x + C$
where $\erf$ denotes the error function.


Proof
From the definition of the error function:

$\map {\erf} x = \ds \dfrac 2 {\sqrt \pi} \int_0^x \map \exp {-t^2} \rd t$
where $\exp$ is the real exponential function.
So by the Fundamental Theorem of Calculus:

$\dfrac {\rd} {\rd x} \map {\erf} x = \dfrac 2 {\sqrt \pi} e^{-x^2} + C$
The result follows.
$\blacksquare$


Sources
1978: Garrett Birkhoff and Gian-Carlo Rota: Ordinary Differential Equations (3rd ed.) ... (previous) ... (next): Chapter $1$ First-Order Differential Equations: $2$ Fundamental Theorem of the Calculus




