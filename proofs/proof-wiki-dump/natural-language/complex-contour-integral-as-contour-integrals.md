# 

Source: https://proofwiki.org/wiki/Complex_Contour_Integral_as_Contour_Integrals

Theorem
Let $f: D \to \C$ be a complex-differentiable function, where $D \subseteq \C$ is a connected domain.
Let $u, v: \R^2 \to \R$ be defined by:

$\map f {x + i y} = \map u {x, y} + i \map v {x, y}$

Let $C$ be a contour in $D$.
Let $\phi: \R^2 \to \C$ be defined by:

$\map \phi {x, y} = x + i y$

Then there exists a piecewise continuously differentiable function $\gamma: \closedint a b \to \R^2$ such that:

$\ds \int_C \map f z \rd z = \ds \int_\gamma \tuple {u, -v} \cdot \rd \mathbf l + i \int_\gamma \tuple {v, u} \cdot \rd \mathbf l$
where the integral on the left hand side is a complex contour integral, and the two integrals on the right hand side are general contour integrals.
The function $\phi \circ \gamma : \closedint a b \to \C$ is a parameterization of $C$.


Proof
First, suppose that $C$ consists of one directed smooth curve $C_1$.
Let $\gamma_1 : \closedint a b \to D$ be a smooth path that is a parameterization of $C_1$.
Define $x, y: \closedint a b \to \R$ by:

$\map {\gamma_1} t = \map x t + i \map y t$

Then:














\(\ds \int_C \map f z \rd z\)

\(=\)







\(\ds \int_a^b \paren {\map u {\map x t, \map y t} + i \map v {\map x t, \map y t} } \paren {\map {x'} t + i \map {y'} t} \rd t\)





Definition of Complex Contour Integral














\(\ds \)

\(=\)







\(\ds \int_a^b \paren {\map u {\map x t, \map y t} \map {x'} t + i \map u {\map x t, \map y t} \map {y'} t + i \map v {\map x t, \map y t} \map {x'} t - \map v {\map x t, \map y t} \map {y'} t} \rd t\)





Distributive Law














\(\ds \)

\(=\)







\(\ds \int_a^b \paren {\map u {\map x t, \map y t} \map {x'} t - \map v {\map x t, \map y t} \map {y'} t} \rd t + i \int_a^b \paren {\map v {\map x t, \map y t} \map {x'} t + \map u {\map x t, \map y t} \map {y'} t} \rd t\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \int_a^b \tuple {\map u {\map x t, \map y t}, -\map v {\map x t, \map y t} } \cdot \tuple {\map {x'} t, \map {y'} t} \rd t + i \ds \int_a^b \tuple {\map v {\map x t, \map y t} ,\map u {\map x t, \map y t} } \cdot \tuple {\map {x'} t, \map {y'} t} \rd t\)





Definition of Dot Product














\(\ds \)

\(=\)







\(\ds \int_\gamma \tuple {u, -v} \cdot \rd \mathbf l + i \ds \int_\gamma \tuple {v, u} \cdot \rd \mathbf l\)





Definition of Contour Integral



where $\gamma: \closedint a b \to \R^2$ is defined by:

$\map \gamma t = \tuple {\map x t, \map y t}$

By definition of smooth path, $\gamma$ is continuously differentiable.

In the general case, $C$ is a concatenation of $n$ directed smooth curves $C_1, \ldots, C_n$.
Reparameterization of Directed Smooth Curve with Given Domain shows that we can find a parameterization $\gamma_k : \closedint {\dfrac {k - 1} n} {\dfrac k n} \to D$ of $C_k$ for all $k \in \set {1, \ldots, n}$.
Define $x_k, y_k: \closedint {\dfrac {k - 1} n} {\dfrac k n} \to \R$ by:

$\map {\gamma_k} t = \map {x_k} t + i \map {y_k} t$

Then:














\(\ds \int_C \map f z \rd z\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \int_{C_k} \map f z \rd z\)





Contour Integral of Concatenation of Contours














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {\int_{\gamma_k} \tuple {u, -v} \cdot \rd \mathbf l + i \ds \int_{\gamma_k} \tuple {v, u} \cdot \rd \mathbf l}\)





by calculations as above














\(\ds \)

\(=\)







\(\ds \int_\gamma \tuple {u, -v} \cdot \rd \mathbf l + i \ds \int_\gamma \tuple{v, u} \cdot \rd \mathbf l\)





Sum of Integrals on Adjacent Intervals for Continuous Functions



where $\gamma : \closedint 0 1 \to \R^2$ is defined by:

$\map \gamma t = \tuple {\map {x_k} t, \map {y_k} t}$ for all $ t \in \closedint {\dfrac {k - 1} n} {\dfrac k n}$

Pasting Lemma for Finite Union of Closed Sets shows that $\gamma$ is continuous.
By definition of smooth path, $\gamma$ is continuously differentiable in the intervals $\openint {\dfrac {k - 1} n} {\dfrac k n}$ for all $k \in \set {1, \ldots, n}$.
It follows that $\gamma$ is piecewiese continuously differentiable.
As:

$\map \phi {\map {x_k} t, \map {y_k} t } = \map {x_k} t + i \map {y_k} t = \map {\gamma_k} t$
it follows that $\phi \circ \gamma {\restriction_{ \closedint {\paren {k - 1} / n} {k / n} } }$ is a parameterization of $C_k$.
By definition of parameterization of contour, it follows that $\phi \circ \gamma$ is a parameterization of $C$.
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori: $\S 2.2$




