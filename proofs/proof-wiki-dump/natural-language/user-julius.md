# 

Source: https://proofwiki.org/wiki/User:Julius



Current focus
Build the bulk knowledge on calcul\us of variations based on Gelfand's Calculus of Variations, then recheck with a couple of other books and slowly improve proofs.
Digestion of the following topics is in progress
Theorem
Let $X$ be a Banach space.
Let $\map {CL} X$ be the continuous linear operator space on $X$.
Let $\map {GL} X$ denote the set of all invertible continuous linear operators on $X$.

Then: 

$\map {GL} X$ is an open subset of $\map {CL} X$ in the supremum operator norm topology.
$T \mapsto T^{-1}$ is continuous on $\map {GL} X$.


Proof
Let $T_0 \in \map {GL} X$.
By definition:

$T_0^{-1} \in \map {CL} X$,
$T_0 \in \map {CL} X$.
Let $T \in \map {B_\epsilon} {T_0}$ where $\map {B_\epsilon} x$ is an open ball in $\struct {\map {GL} X, \norm {\, \cdot \,} }$.
By definition:

$\norm {T - T_0} < \epsilon$
We also have that:














\(\ds \norm {\paren {T - T_0} \circ T_0^{-1} }\)

\(\le\)







\(\ds \norm {T - T_0} \norm {T_0^{-1} }\)





Supremum Operator Norm on Continuous Linear Transformation Space is Submultiplicative














\(\ds \)

\(<\)







\(\ds \epsilon \norm {T_0^{-1} }\)









Zero operator is not invertible.
Hence, $T_0^{-1} \ne \mathbf 0$ and $\norm {T_0^{-1} } \ne 0$.
Choose $\epsilon$ such that $\epsilon \norm {T_0^{-1} } < 1$, for example, $\epsilon = \dfrac 1 {2 \norm {T_0^{-1} } }$.
Then:














\(\ds \norm {\paren {T - T_0} \circ T_0^{-1} }\)

\(<\)







\(\ds \frac 1 2\)




















\(\ds \)

\(<\)







\(\ds 1\)









By Neumann series theorem

$I + \paren {T - T_0} \circ T_0^{-1} \in \map {GL} X$
However, $T_0 \in \map {GL} X$ too.
Hence:














\(\ds T\)

\(=\)







\(\ds T_0 + \paren {T - T_0}\)




















\(\ds \)

\(=\)







\(\ds \paren {I + \paren {T - T_0}\circ T_0^{-1} } \circ T_0\)









We have that $T_0 \in \map {GL} X$ and $I + \paren {T - T_0}\circ T_0^{-1} \in \map {GL} X$.
Furthermore, Composition of Continuous Linear Transformations is Continuous Linear Transformation and Composition of Linear Invertible Mappings is Invertible
Hence, their composition is also in $\map {GL} X$:

$T = \paren {I + \paren {T - T_0}\circ T_0^{-1} } \circ T_0 \in \map {GL} X$
So we have the conclusion that:

$\paren{T \in \map {B_\epsilon} {T_0} \subseteq \map {CL} X} \implies \paren{T \in \map {GL} X}$
or

$\paren{T \in \map {CL} X} \implies \paren{T \in \map {GL} X}$
By definition of a subset:

$\map {CL} X \subseteq \map {GL} X$

$\Box$
We have to show that:

$\forall \epsilon \in \R_{>0} : \exists \delta \in \R_{> 0} : \forall T_1, T_2 \in \map {GL} X : \norm {T_1 - T_2} < \delta \implies \norm {T_1^{-1} - T_2^{-1}} < \epsilon$
Let $T_0 \in \map {GL} X$.
Let $\epsilon \in \R_{> 0}$.
Set $\delta = \map \min {\dfrac \epsilon {2 \norm{T_0}^2 }, \dfrac 1 {2 \norm{T_0^{-1} } } }$
Let $T \in \map {CL} X$ such that $\norm {T - T_0} < \delta$.
Then $\norm {T - T_0} < \dfrac 1 {2 \norm {T_0^{-1} } }$.
By (1), $T \in \map {GL} X$ with $T^{-1} = \paren {I + \paren {T - T_0} T_0^{-1} } T_0^{-1}$
Moreover:














\(\ds T^{-1} - T_0^{-1}\)

\(=\)







\(\ds T^{-1} \paren {T_0 - T} T_0^{-1}\)




















\(\ds \)

\(=\)







\(\ds \paren {I + \paren {T - T_0} T_0^{-1} }^{-1} T_0^{-1} \paren {T_0 - T} T_0^{-1}\)









Then:














\(\ds \norm {T^{-1} - T_0^{-1} }\)

\(=\)







\(\ds \norm {\paren {I + \paren {T - T_0} T_0^{-1} }^{-1} T_0^{-1} \paren {T_0 - T} T_0^{-1} }\)




















\(\ds \)

\(\le\)







\(\ds \dfrac 1 {1 - \norm {\paren{T - T_0}T_0^{-1} } } \norm {T_0^{-1} }^2 \norm {T_0 - T}\)





Neumann Series Theorem














\(\ds \)

\(\le\)







\(\ds \dfrac {\norm {T_0^{-1} }^2 \norm {T_0 - T} }{1 - \norm {T - T_0} \norm {T_0^{-1} } }\)




















\(\ds \)

\(<\)







\(\ds \dfrac {\norm {T_0^{-1} }^2 \delta}{1 - \delta \norm {T_0^{-1} } }\)




















\(\ds \)

\(<\)







\(\ds \dfrac {\norm{T_0^{-1} }^2 \frac \epsilon {2 \norm{T_0}^2} }{1 - \dfrac 1 {2 \norm {T_0^{-1} } } \norm {T_0^{-1} } }\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









P-Sequence Space is Subset of Bounded Sequence Space
$\ell^p \subseteq \ell^\infty$
$c$, $c_0$, $c_{00}$ are Subspaces of P-Sequence Space
$c_{00} \subseteq c_0 \subseteq c \subseteq \ell^p$


Definition(Algebra)
Let $\struct {K, +_K, \times_K}$ be a field.
Let $\struct {V, +_V, \circ}_K$ be a vector space over $K$.

An algebra is $V$ additionally equipped with a bilinear mapping $\otimes : V \times V \to V$ such that for all $x, y, z \in V$ and for all $\alpha \in K$ we have:

$\paren {x \otimes y} \otimes z = x \otimes \paren {y \otimes z}$
$\paren {x +_V y} \otimes z = x \otimes z +_V y \otimes z$
$z \otimes \paren {x +_V y} = z \otimes x +_V z \otimes y$
$\alpha \circ \paren {x \otimes y} = x \otimes \paren {\alpha \circ y} = \paren {\alpha \circ x} \otimes y$


Example 1
Suppose that:

$J \sqbrk y = \int_1^2 \frac {\sqrt {1+y'^2} } {x} \rd x$
with the following boundary conditions:

$\map y 1 = 0$
$\map y 2 = 1$
Then the smooth minimizer of $J$ is a circle of the following form:

$\paren {y - 2}^2 + x^2 = 5$
Proof
$J$ is of the form

$J \sqbrk y = \int_a^b \map F {x, y'} \rd x$
Then we can use the "no y theorem":

$F_y = C$
i.e.

$\frac {y'} {x \sqrt {1 + y'^2} } = C$
or

$y' = \frac {C x} {\sqrt {1 - C^2 x^2} }$
The integral is equal to

$y = \frac {\sqrt {1 - C^2 x^2} } C + C_1$
or

$\paren {y - C_1}^2 + x^2 = C^{-2}$
From the conditions $\map y 1 = 0$, $\map y 2 = 1$ we find that

$C = \frac 1 {\sqrt 5}$
$C_1 = 2$

$\blacksquare$

Example 3
$J \sqbrk = \int_a^b \paren {x - y}^2$
is minimized by

$\map y x = x$
Proof
Euler' equation:

$F_y = 0$
i.e.

$2 \paren {x - y} = 0$.

$\blacksquare$

Example p31
Suppose:

$J \sqbrk r = \int_{\phi_0}^{\phi_1} \sqrt{r^2 + r'^2} \rd \phi$
Euler's Equation:

$\displaystyle \frac r {\sqrt{r^2 + r'^2} } - \dfrac \d {\d \phi} \frac {r'} {\sqrt{r^2 + r'^2} }$
Apply change of variables:

$x = r \cos \phi, y = r \sin \phi$
The integral becomes:

$\displaystyle \int_{x_0}^{x_1} \sqrt{1 + y'^2} \rd x$
Euler's equation:

$y = 0$
Its solution:

$y = \alpha x + \beta$
or

$r \sin \phi = \alpha r \cos \phi + \beta$

$\blacksquare$

Example
$J \sqbrk = \int_{x_0}^{x_1} \map f {x,y} \sqrt {1+y'^2}\rd x$
$F_{y'} = \map f {x,y} \frac {y'} {\sqrt{1 + y'^2} }=\frac {y' F} {1 + y'^2}$
$F + \paren {\phi' - y'}F_{y'} = \frac {\paren{1+y'\phi'}F} {1+y'^2} = 0$
$F + \paren {\psi' - y'}F_{y'} = \frac {\paren{1+y'\psi'}F} {1+y'^2} = 0$
i.e.

$y' = -\frac 1 {\phi'}$
$y' = - \frac 1 {\psi'}$
Transversality reduces to orthogonality

$\blacksquare$

Example: points on surfaces
$J \sqbrk {y,z} = \int_{x_0}^{x_1} \map F {x,y,z,y',z'} \rd x$
Transversality conditions:

$\sqbrk {F_{y'} + \dfrac {\partial \phi} {\partial y} \paren {F - y'F_{y'} - z'F_{z'} } }|_{x=x0} = 0$
$\sqbrk {F_{z'} + \dfrac {\partial \phi} {\partial z} \paren {F - y'F_{y'} - z'F_{z'} } }|_{x=x0} = 0$
$\sqbrk {F_{y'} + \dfrac {\partial \phi} {\partial y} \paren {F - y'F_{y'} - z'F_{z'} } }|_{x=x1} = 0$
$\sqbrk {F_{z'} + \dfrac {\partial \phi} {\partial z} \paren {F - y'F_{y'} - z'F_{z'} } }|_{x=x1} = 0$

$\blacksquare$

Example: Legendre transformation
$\map f \xi = \frac {\xi^a} a, a>1$
$\map {f'} \xi = p = \xi^{a-1}$
i.e.

$\xi = p^{\frac {1} {a-1} }$
$H = - \frac {\xi^a} {a} + p\xi = - \frac {p^{\frac {a} {a-1} } } a + p p^{\frac {a} {a-1} } = p^{\frac {a} {a-1} } \paren{1 - \frac 1 a}$
Hence:

$\map H p = \frac {p^b} b$
where:

$\frac 1 a + \frac 1 b = 1$

$\blacksquare$

Example
$J \sqbrk y = \int_a^b \paren {Py'^2 + Q y^2} \rd x$
$p = 2 P y', H = P y'^2 - Q y^2$
Hence:

$H = \frac {p^2} {4 P} - Q y^2$
Canonical equations:

$\dfrac {\d p} {\d x} = 2 Q y$
$\dfrac {\d y} {\d x} = \frac p {2 P}$
Euler's Equation:

$2 y Q - \dfrac \d {\d x} \paren {2 P y'} = 0$

$\blacksquare$

Example: Noether's theorem 1
$J \sqbrk y = \int_{x0}^{x1} y'^2 \rd x$
is invariant under the transformation:

$x^* = x + \epsilon, y^* = y$
$y^* = \map y {x^* - \epsilon} = \map {y^*} {x^*}$
Then:

$J \sqbrk {\gamma^*} = \int_{x0^*}^{x1^*} \sqbrk { \dfrac {\d \map {y^*} {x^*} } {\d x^*} } \rd x^* = \int_{x0+\epsilon}^{x_1 + \epsilon} \sqbrk { \dfrac {\d \map y {x^* - \epsilon} } {\d x^*}  }^2 \rd x^* = \int_{x0}^{x1} \sqbrk { \dfrac {\d \map y x} {\d x} }^2 \rd x = J \sqbrk \gamma$
Example: Neother's theorem 2
$J \sqbrk y = \int_{x_0}^{x_1} x y'^2 \rd x$













\(\ds J \sqbrk {y^*}\)

\(=\)







\(\ds \int_{x_0^*}^{x_1^*} x^* \sqbrk {\dfrac {\d \map {y^*} {x^*} } {\d x^*} }^2 \rd x^*\)




















\(\ds \)

\(=\)







\(\ds \int_{x_0 + \epsilon}^{x_1 + \epsilon} x^* \sqbrk {\dfrac {\d \map y {x^* - \epsilon} } {\d x^*} }^2 \rd x^*\)




















\(\ds \)

\(=\)







\(\ds \int_{x_0}^{x_1} \paren {x + \epsilon} \sqbrk {\dfrac {\d \map y x} {\d x} }^2 \rd x\)




















\(\ds \)

\(=\)







\(\ds J \sqbrk \gamma + \epsilon \int_{x_0}^{x_1} \sqbrk {\dfrac {\d \map y x} {\d x} }^2 \rd x\)




















\(\ds \)

\(\ne\)







\(\ds J \sqbrk \gamma\)










$\blacksquare$

Example: Noether's theorem 3
$J \sqbrk y = \int_{x_0}^{x_1} \map F {y, y'} \rd x$
Invariant under $x^* = x + \epsilon, y_i^* = y_i$
I.e. $\phi = 1, \psi_i = 0$
reduces to $H = \const$

$\blacksquare$

Momentum of the system:
$P_x = \sum_{y = 1}^n p_{ix}, P_y = \sum_{y = 1}^n p_{iy}, P_z = \sum_{z = 1}^n p_{iz}$
(Examples: attraction to a fixed point, attraction to a homogenous distribution on an axis)

Geodetic distance:Examples
If $J$ is arclength, $S$ is distance.
If $J$ is a moment of time to pass a segment of optical medium, then $S$ is the time needed to pass the whole optical body.
If $J$ is action, then $S$ is the minimal action.

Examples of quadratic functionals
1)
$B \sqbrk {x, y} = \int_{t_0}^{t_1} \map x t \map y t \rd t$
Corresponding quadratic functional
$A \sqbrk x = \int_{t_0}^{t_1} \map {x^2} t$
2)
$B \sqbrk {x, y} = \int_{t_0}^{t_1} \map \alpha t \map x t \map y t \rd t$
Corresponding quadratic functional
$A \sqbrk x = \int_{t_0}^{t_1} \map \alpha t \map {x^2} t \rd t$
3)
$A \sqbrk x = \int_{t_0}^{t_1} \paren {\map \alpha t \map {x^2} t + \map \beta t \map x t \map {x'} t+ \map \gamma t \map {x'^2} t} \rd t$
4)
$B \sqbrk {x, y} = \int_a^b \int_a^b \map K {s, t} \map x s \map y t \rd s \rd t$


Second variations of simple functions
Strong minimmizers' examples
Vibrating string
Vibrating membrane
Vibrating plate
Klein-Gordon field
Multidimensional laws of conservation
Angular momentum tensor
Examples of conservation for KG, Maxwel EM
Introduction to optimal control




