# 

Source: https://proofwiki.org/wiki/Locally_Integrable_f(x%2Bct)_is_Weak_Solution_to_Transport_Equation

Theorem
Consider the transport equation:

$\dfrac {\partial u} {\partial t} - c \dfrac {\partial u} {\partial x} = 0$
with the initial condition:

$\map u {x, 0} = \map f x$
where $c \in \R$.

Then it has a weak solution of the form:

$\map u {x, t} := \map f {x + ct}$
where $f \in \map {L^1_{loc} } \R$ is a locally integrable function.


Proof
Let $\map u {x, t} = \map f {x + ct}$ be a locally integrable function.
We have that a locally integrable function defines a distribution.
Let $T_u \in \map {\DD'} {\R^2}$ be a distribution associated with $u$.
Let $\phi \in \map \DD {\R^2}$ be a test function.
Then:














\(\ds \dfrac {\partial} {\partial t} \map {T_u} \phi - c \dfrac {\partial} {\partial x} \map {T_u} \phi\)

\(=\)







\(\ds - \map {T_u} {\dfrac {\partial \phi}{\partial t} } + \map {T_u} {c \dfrac {\partial \phi}{\partial x} }\)





Definition of Distributional Partial Derivative














\(\ds \)

\(=\)







\(\ds - \iint_{\R^2} \map f {x + ct} \dfrac {\partial \phi}{\partial t} \rd x \rd t + \iint_{\R^2} \map f {x + ct} c \dfrac {\partial \phi}{\partial x} \rd x \rd t\)





Definition of Distribution














\(\ds \)

\(=\)







\(\ds \iint_{\R^2} \map f {x + ct} \paren {c \dfrac {\partial \phi}{\partial x} - \dfrac {\partial \phi}{\partial t} } \rd x \rd t\)









Introduce real variables $\xi, \eta$ such that:

$\xi = x + ct$
$\eta = t$
Then:

$x = \xi - c \eta$
$t = \eta$
Let the expressions above define the mapping $\Psi$ between these variables:

$\tuple {\xi, \eta} \stackrel {\Psi} {\mapsto} \tuple {x, t}$
Suppose $F : \R^2 \to \R$ is a real function.
By Change of Variables Theorem (Multivariable Calculus):














\(\ds \iint_{\R^2} \map F {x, t} \rd x \rd t\)

\(=\)







\(\ds \iint_{\R^2} \map {\paren {F \circ \Psi} } {\xi, \eta} \map \det { {\mathbf J_\Psi} } \rd \xi \rd \eta\)









where $\circ$ denotes the composition of mappings, and $\mathbf J_\Psi$ is the Jacobian matrix:














\(\ds \mathbf J_\Psi\)

\(=\)







\(\ds \begin{pmatrix}
\map {\dfrac {\partial x} {\partial \xi} } {x, t}  & \map {\dfrac {\partial x} {\partial \eta} } {x, t} \\
\map {\dfrac {\partial t} {\partial \xi} } {x, t}  & \map {\dfrac {\partial t} {\partial \eta} } {x, t}

\end{pmatrix}\)





















\(\ds \)

\(=\)







\(\ds \begin{pmatrix}
1  & -c \\
0 & 1

\end{pmatrix}\)










Hence:

$\map \det { {\mathbf J_\Psi} } = 1$.
Suppose:

$\map F {x, t} = \map f {x + ct} \paren {c \map {\dfrac {\partial \phi}{\partial x} } {x, t} - \map {\dfrac {\partial \phi}{\partial t} } {x, t} }$
Then:














\(\ds \map {\paren {F \circ \Psi} } {\xi, \eta}\)

\(=\)







\(\ds \map F {\map \Psi {\xi, \eta} }\)




















\(\ds \)

\(=\)







\(\ds \map F {\xi - c \eta, \eta}\)




















\(\ds \)

\(=\)







\(\ds \map f {\paren {\xi - c \eta} + c \eta} \paren {c \map {\dfrac {\partial \phi}{\partial x} }{\xi - c \eta, \eta} - \map {\dfrac {\partial \phi}{\partial t} }{\xi - c \eta, \eta} }\)




















\(\ds \)

\(=\)







\(\ds \map f \xi \paren {- \dfrac {\partial \paren {\xi - c \eta} }{\partial \eta} \map {\dfrac {\partial \phi}{\partial x} }{\xi - c \eta, \eta} - \dfrac {\partial \eta}{\partial \eta} \map {\dfrac {\partial \phi}{\partial t} }{\xi - c \eta, \eta} }\)




















\(\ds \)

\(=\)







\(\ds - \map f \xi \paren { \map {\dfrac {\partial \phi}{\partial x} }{\xi - c \eta, \eta} \dfrac {\partial \paren {\xi - c \eta} }{\partial \eta} + \map {\dfrac {\partial \phi}{\partial t} }{\xi - c \eta, \eta} \dfrac {\partial \eta}{\partial \eta} }\)




















\(\ds \)

\(=\)







\(\ds - \map f \xi \dfrac {\partial}{\partial \eta} \map \phi {\xi - c \eta, \eta}\)




















\(\ds \)

\(=\)







\(\ds - \map f \xi \map {\dfrac {\partial \paren {\phi \circ \Psi} }{\partial \eta} } {\xi, \eta}\)









Hence:














\(\ds \map {\paren {\dfrac {\partial} {\partial t} T_u - c \dfrac {\partial} {\partial x} T_u} } \phi\)

\(=\)







\(\ds \iint_{\R^2} \map f {x + ct} \paren {c \map {\dfrac {\partial \phi}{\partial x} } {x, t} - \map {\dfrac {\partial \phi}{\partial t} } {x, t} } \rd x \rd t\)




















\(\ds \)

\(=\)







\(\ds \iint_{\R^2} - \map f \xi \map {\dfrac {\partial \paren {\phi \circ \Psi} }{\partial \eta} } {\xi, \eta} \size {1} \rd \xi \rd \eta\)




















\(\ds \)

\(=\)







\(\ds - \int_{-\infty}^\infty \map f \xi \paren {\int_{-\infty}^\infty \map {\dfrac {\partial \paren {\phi \circ \Psi} }{\partial \eta} } {\xi, \eta} \rd \eta} \rd \xi\)




















\(\ds \)

\(=\)







\(\ds -\int_{-\infty}^\infty \map f \xi \paren {\bigintlimits {\map {\paren {\phi \circ \Psi} } {\xi,\eta} } {\eta \mathop = -\infty} {\eta \mathop = \infty} } \rd \xi\)





Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds -\int_{-\infty}^\infty \map f \xi \paren {\lim_{\eta \mathop \to \infty} \map {\paren {\phi \circ \Psi} } {\xi,\eta} - \lim_{\eta \mathop \to -\infty} \map {\paren {\phi \circ \Psi} } {\xi,\eta} } \rd \xi\)




















\(\ds \)

\(=\)







\(\ds -\int_{-\infty}^\infty \map f \xi \paren {\lim_{\eta \mathop \to \infty} \map \phi {\xi - c \eta,\eta} - \lim_{\eta \mathop \to -\infty} \map \phi {\xi - c \eta,\eta} } \rd \xi\)




















\(\ds \)

\(=\)







\(\ds -\int_{-\infty}^\infty \map f \xi \paren {0 - 0} \rd \xi\)





Definition of Test Function














\(\ds \)

\(=\)







\(\ds -\int_{-\infty}^\infty \map f \xi 0 \rd \xi\)




















\(\ds \)

\(=\)







\(\ds 0\)









Therefore, $\map u {x, t} := \map f {x + c t}$ is a weak solution to the transport equation.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.3$: A glimpse of distribution theory. Weak solutions




