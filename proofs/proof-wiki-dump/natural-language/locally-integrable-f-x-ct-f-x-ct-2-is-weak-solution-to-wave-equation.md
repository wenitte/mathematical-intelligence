# 

Source: https://proofwiki.org/wiki/Locally_Integrable_(f(x%2Bct)_%2B_f(x-ct))/2_is_Weak_Solution_to_Wave_Equation

Theorem
Consider the wave equation:

$\dfrac {\partial^2 u} {\partial t^2} - c^2 \dfrac {\partial^2 u} {\partial x^2} = 0$
with the initial conditions:

$\map u {x, 0} = \map f x$
$\map {\dfrac {\partial u} {\partial t}} {x, 0} = 0$
and $c \in \R$.

Then it has a weak solution of the form:

$\map u {x, t} := \dfrac {\map f {x + ct} + \map f {x - ct}} 2$
where $f \in \map {L^1_{loc} } \R$ is a locally integrable function.


Proof
Let $\map u {x, t} = \map f {x + ct}$ be a locally integrable function.
We have that a locally integrable function defines a distribution.
Let $T_u \in \map {\DD'} {\R^2}$ be a distribution associated with $u$.
Let $\phi \in \map \DD {\R^2}$ be a test function.
Then:














\(\ds \map {\paren {\dfrac {\partial^2 T_u}{\partial t^2} - c^2 \dfrac {\partial^2 T_u}{\partial x^2} } } \phi\)

\(=\)







\(\ds \paren {\dfrac {\partial^2}{\partial t^2} - c^2 \dfrac {\partial^2}{\partial x^2} } \map {T_{\frac 1 2 \map f {x \mathop + ct} } } \phi + \paren {\dfrac {\partial^2}{\partial t^2} - c^2 \dfrac {\partial^2}{\partial x^2} } \map {T_{\frac 1 2 \map f {x \mathop - ct} } } \phi\)





Definition of Pointwise Addition of Distributions














\(\ds \)

\(=\)







\(\ds \paren {\dfrac {\partial}{\partial t} + c \dfrac {\partial}{\partial x} } \paren {\dfrac {\partial}{\partial t} - c \dfrac {\partial}{\partial x} } \map {T_{\frac 1 2 \map f {x \mathop + ct} } } \phi + \paren {\dfrac {\partial}{\partial t} - c \dfrac {\partial}{\partial x} } \paren {\dfrac {\partial}{\partial t} + c \dfrac {\partial}{\partial x} } \map {T_{\frac 1 2 \map f {x \mathop - ct} } } \phi\)





Distributional Partial Derivatives Commute














\(\ds \)

\(=\)







\(\ds -\paren {\dfrac {\partial}{\partial t} - c \dfrac {\partial}{\partial x} } \map {T_{\frac 1 2 \map f {x \mathop + ct} } } {\paren {\dfrac {\partial}{\partial t} + c \dfrac {\partial}{\partial x} } \phi} - \paren {\dfrac {\partial}{\partial t} + c \dfrac {\partial}{\partial x} } \map {T_{\frac 1 2 \map f {x \mathop - ct} } } {\paren {\dfrac {\partial}{\partial t} - c \dfrac {\partial}{\partial x} } \phi}\)





Definition of Distributional Partial Derivative














\(\ds \)

\(=\)







\(\ds - \frac 1 2 \paren {\dfrac {\partial}{\partial t} - c \dfrac {\partial}{\partial x} } \map {T_{\map f {x \mathop + ct} } } {\paren {\dfrac {\partial}{\partial t} + c \dfrac {\partial}{\partial x} } \phi} - \frac 1 2 \paren {\dfrac {\partial}{\partial t} + c \dfrac {\partial}{\partial x} } \map {T_{\map f {x \mathop - ct} } } {\paren {\dfrac {\partial}{\partial t} - c \dfrac {\partial}{\partial x} } \phi}\)




















\(\ds \)

\(=\)







\(\ds -0 -0\)





Locally Integrable f(x+ct) is Weak Solution to Transport Equation, Definition of Distributional Partial Derivative














\(\ds \)

\(=\)







\(\ds 0\)









Therefore, $\ds \map u {x,t} := \frac {\map f {x + ct} + \map f {x - ct}} 2$ is a weak solution to the wave equation.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.3$: A glimpse of distribution theory. Weak solutions




