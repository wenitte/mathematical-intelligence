# 

Source: https://proofwiki.org/wiki/Mixed_Partial_Derivative_of_Heaviside_Step_Function

Theorem
Let $\tuple {x, y} \stackrel u {\longrightarrow} \map u {x, y}: \R^2 \to \R$ be the Heaviside step function.
Let $u := T_u$ be the distribution associated with $u$.
Let $\delta_{\tuple {0, 0} } \in \map {\DD'} {\R^2}$ be the Dirac delta distribution.

Then in the distributional sense:

$\dfrac {\partial^2 u} {\partial x \partial y} = \delta_{\tuple {0, 0}}$


Proof
Let $\phi \in \map \DD {\R^2}$ be a test function with support on $\openint 0 a^2 := \openint 0 a \times \openint 0 a$ where $\times$ is the Cartesian product and $a > 0$.
Then:














\(\ds \map {\dfrac {\partial^2 u}{\partial x \partial y} } \phi\)

\(=\)







\(\ds - \map {\dfrac {\partial u}{\partial y} } {\dfrac {\partial \phi}{\partial x} }\)





Definition of Distributional Partial Derivative














\(\ds \)

\(=\)







\(\ds \map u {\dfrac {\partial^2 \phi}{\partial y \partial x} }\)





Definition of Distributional Partial Derivative














\(\ds \)

\(=\)







\(\ds \iint_{\R^2} u \dfrac {\partial^2 \phi}{\partial y \partial x} \rd x \rd y\)





Definition of Distribution














\(\ds \)

\(=\)







\(\ds \iint_{\R^2} u \dfrac {\partial^2 \phi}{\partial x \partial y} \rd x \rd y\)





Clairaut's Theorem, Definition of Test Function














\(\ds \)

\(=\)







\(\ds \int_0^a \int_0^a \dfrac {\partial^2 \phi}{\partial x \partial y} \rd x \rd y\)





Definition of Heaviside Step Function, $\phi$ is supported on $\openint 0 a^2$














\(\ds \)

\(=\)







\(\ds \int_0^a \paren {\map {\dfrac {\partial \phi} {\partial y} } {a, y} - \map {\dfrac {\partial \phi} {\partial y} } {0, y} } \rd y\)





Definite Integral of Partial Derivative














\(\ds \)

\(=\)







\(\ds - \int_0^a \map {\dfrac {\partial \phi} {\partial y} } {0, y} \rd y\)





$\phi$ is supported on $\openint 0 a^2$














\(\ds \)

\(=\)







\(\ds \map \phi {0, 0} - \map \phi {0, a}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {0, 0}\)





$\phi$ is supported on $\openint 0 a^2$














\(\ds \)

\(=\)







\(\ds \map {\delta_{\tuple {0, 0} } } \phi\)





Definition of Dirac Delta Distribution



$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis: Chapter $\S 6.2$: A glimpse of distribution theory. Test functions, distributions, and examples




