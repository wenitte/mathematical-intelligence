# 

Source: https://proofwiki.org/wiki/Fundamental_Solution_to_2D_Laplace%27s_Equation



Theorem
Let $\delta_{\tuple {0, 0}} \in \map {\DD'} {\R^2}$ be the Dirac delta distribution.
Let $\Delta = \dfrac {\partial^2} {\partial x^2} + \dfrac {\partial^2} {\partial y^2}$ be the Laplacian in $2$-dimensional Euclidean space.

Then in the distributional sense:

$\ds \map \Delta {\frac {\ln r} {2 \pi}} = \delta_{\tuple {0, 0}}$
where $r = \sqrt {x^2 + y^2}$.


Proof
Let $\norm {\,\cdot\,}_2$ be the 2-norm.

Local integrability
Let $u : \R^2 \to \R$ be a radial real function, say $\map u {\mathbf x} = \map f r$, where $r = \norm {\mathbf x}_2$.
By Laplacian in Polar Coordinates:

$\ds \Delta f = \map {f} r + \frac {\map {f'} r} r$
Thus:

$\Delta \map \ln r = 0$
Furthermore, for all $R > 0$ we have:














\(\ds \int_0^{2 \pi} \int_0^R r \ln r \, \d r \d \theta\)

\(=\)







\(\ds 2 \pi \int_0^R r \ln r \, \d r\)




















\(\ds \)

\(=\)







\(\ds \frac 1 4 R^2 \paren {\ln R^2 - 1}\)




















\(\ds \)

\(<\)







\(\ds \infty\)









Hence, $\ln r$ is a locally integrable function:

$\paren {\mathbf x \mapsto \ln r} \in \map {L^1_{loc}} {\R^2}$


Fundamental Solution
Let $\phi \in \map \DD {\R^2}$ be a test function with support on the open ball $\map {B_R} {\mathbf 0}$.
Then:














\(\ds \map {T_{\Delta \ln r} } \phi\)

\(=\)







\(\ds \map {T_{\ln r} } {\Delta \phi}\)





Definition of Distributional Derivative














\(\ds \)

\(=\)







\(\ds \int_{\R^2} \ln r \Delta \phi \rd \mathbf x\)




















\(\ds \)

\(=\)







\(\ds \int_{\norm {\mathbf x}_2 \mathop < R} \ln r \Delta \phi \rd \mathbf x\)





Definition of Test Function














\(\ds \)

\(=\)







\(\ds \lim_{\epsilon \to 0} \int_{\epsilon \mathop < \norm {\mathbf x}_2 \mathop < R} \ln r \Delta \phi \rd \mathbf x\)









Let $\Omega := \set {\mathbf x \in \R^2 : \epsilon < \norm {\mathbf x}_2 < R}$ with the boundary $\partial \Omega = \map S {\epsilon} \cup \map S {R}$ where

$\map S \epsilon = \set {\mathbf x : \norm {\mathbf x}_2 = \epsilon}$
$\map S R = \set {\mathbf x : \norm {\mathbf x}_2 = R}$
By Green's Identities and the definition of test function:

$\ds \int_{\epsilon \mathop < \norm {\mathbf x}_2 \mathop < R} \ln r \Delta \phi \rd \mathbf x = \int_{\norm {\mathbf x}_2 \mathop = \epsilon} \ln r \dfrac {\partial \phi}{\partial n} \rd s - \int_{\norm {\mathbf x}_2 \mathop = \epsilon} \dfrac {\partial \ln r}{\partial n} \phi \rd s$
where:

$\dfrac {\partial \phi} {\partial n} = \nabla \phi \cdot \map {\mathbf n} {\mathbf x}$
and $\map n {\mathbf x}$ is the unit normal pointing outward with respect to the boundary, while $\rd s$ is a small element of the boundary contour $\partial\Omega$.
For the first integral we have the following estimate:














\(\ds \size {\int_{\norm {\mathbf x}_2 \mathop = \epsilon} \ln r \dfrac {\partial \phi}{\partial n} \rd \map s {\mathbf x} }\)

\(=\)







\(\ds \ln \epsilon \size{ \int_{\norm {\mathbf x}_2 \mathop = \epsilon} \nabla \phi \cdot \map {\mathbf n} {\mathbf x} \rd \map s {\mathbf x} }\)




















\(\ds \)

\(\le\)







\(\ds \ln \epsilon \int_{\norm {\mathbf x}_2 \mathop = \epsilon} \size {\nabla \phi \cdot \map {\mathbf n} {\mathbf x} } \rd \map s {\mathbf x}\)




















\(\ds \)

\(=\)







\(\ds \ln \epsilon \int_{\norm {\mathbf x}_2 \mathop = \epsilon} \norm {\nabla \phi \cdot \map {\mathbf n} {\mathbf x} }_2 \rd \map s {\mathbf x}\)




















\(\ds \)

\(\le\)







\(\ds \ln \epsilon \int_{\norm {\mathbf x}_2 \mathop = \epsilon} \sqrt{ \norm {\nabla \phi}_2 \norm {\map {\mathbf n} {\mathbf x} }_2} \rd \map s {\mathbf x}\)





Cauchy-Schwarz inequality














\(\ds \)

\(\le\)







\(\ds \ln \epsilon \int_{\norm {\mathbf x}_2 \mathop = \epsilon} \sqrt{\norm {\nabla \phi}_2} \rd \map s {\mathbf x}\)





$\norm {\map {\mathbf n} {\mathbf x} }_2 = 1$














\(\ds \)

\(\le\)







\(\ds \ln \epsilon \sup_{\norm {\mathbf x}_2 \mathop = \epsilon} \sqrt{\norm {\nabla \phi}_2} \int_{\norm {\mathbf x}_2 \mathop = \epsilon} \rd \map s {\mathbf x}\)




















\(\ds \)

\(\le\)







\(\ds \sup_{\norm {\mathbf x}_2 \mathop = \epsilon} \sqrt{\norm {\nabla \phi}_2} 2 \epsilon \ln \epsilon\)









Furthermore:














\(\ds \lim_{\epsilon \mathop \to 0} 2 \pi \epsilon \ln \epsilon\)

\(=\)







\(\ds 2 \pi \lim_{\epsilon \mathop \to 0} \frac {\ln \epsilon}{\frac 1 \epsilon}\)





Indeterminate Form: $0 \cdot \infty$














\(\ds \)

\(=\)







\(\ds 2 \pi \lim_{\epsilon \mathop \to 0} \frac {\frac 1 \epsilon}{- \frac 1 {\epsilon^2} }\)





L'Hospital's Rule














\(\ds \)

\(=\)







\(\ds - 2 \pi \lim_{\epsilon \mathop \to 0} \epsilon\)




















\(\ds \)

\(=\)







\(\ds 0\)









Thus:

$\ds \lim_{\epsilon \to 0} \size {\int_{\norm {\mathbf x}_2 \mathop = \epsilon} \ln r \dfrac {\partial \phi}{\partial n} \rd \map s {\mathbf x} } \le 0$
For the second integral we have:














\(\ds - \int_{\norm {\mathbf x}_2 \mathop = \epsilon} \dfrac {\partial \ln r}{\partial n} \map \phi {\mathbf x} \rd \map s {\mathbf x}\)

\(=\)







\(\ds \int_{\norm {\mathbf x}_2 \mathop = \epsilon} \dfrac {\partial \ln r}{\partial r} \phi \rd \map s {\mathbf x}\)





$\map {\mathbf n} {\map S \epsilon} = - \hat {\mathbf r}$














\(\ds \)

\(=\)







\(\ds \int_{\norm {\mathbf x}_2 \mathop = \epsilon} \frac 1 r \map \phi {\mathbf x} \rd \map s {\mathbf x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \epsilon \int_{\norm {\mathbf x}_2 \mathop = \epsilon} \map \phi {\mathbf x} \rd \map s {\mathbf x}\)




















\(\ds \)

\(=\)







\(\ds 2 \pi \paren {\frac 1 {2 \pi \epsilon} \int_{\norm {\mathbf x}_2 \mathop = \epsilon} \map \phi {\mathbf x} \rd \map s {\mathbf x} }\)









By definition, the test function $\phi$ is continuous.
Let $\eta > 0$.
Then there is $\epsilon_0 > 0$ such that $\epsilon_0 > \epsilon > 0$ and:

$\norm {\mathbf x}_2 < \epsilon_0 \implies \size {\map \phi {\mathbf x} - \map \phi {\mathbf 0} } < \eta$
Hence:














\(\ds \size {\frac 1 {2 \pi \epsilon} \int_{\norm {\mathbf x}_2 \mathop = \epsilon} \map \phi {\mathbf x} \rd \map s {\mathbf x} - \map \phi {\mathbf 0} }\)

\(=\)







\(\ds \size {\frac 1 {2 \pi \epsilon} \int_{\norm {\mathbf x}_2 \mathop = \epsilon} \map \phi {\mathbf x} \rd \map s {\mathbf x} - \frac 1 {2 \pi \epsilon} \int_{\norm {\mathbf x}_2 \mathop = \epsilon} \map \phi {\mathbf 0} \rd \map s {\mathbf x} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi \epsilon} \int_{\norm {\mathbf x}_2 \mathop = \epsilon} \size {\map \phi {\mathbf x} - \map \phi {\mathbf 0} } \rd \map s {\mathbf x}\)




















\(\ds \)

\(\le\)







\(\ds \frac 1 {2 \pi \epsilon} \cdot \eta \int_{\norm {\mathbf x}_2 \mathop = \epsilon} \rd \map s {\mathbf x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi \epsilon} \cdot \eta \cdot 2\pi \epsilon\)




















\(\ds \)

\(=\)







\(\ds \eta\)









Since $\eta$ was arbitrary:

$\ds \forall \eta \in \R_{>0} : \exists \epsilon_0 > \epsilon : \forall \mathbf x \in \R^2 : \norm {\mathbf x}_2 < \epsilon_0 \implies \size {\frac 1 {2 \pi \epsilon} \int_{\norm {\mathbf x}_2 \mathop = \epsilon} \map \phi {\mathbf x} \rd \map s {\mathbf x} - \map \phi {\mathbf 0} } < \eta$
Thus:














\(\ds \lim_{\epsilon \to 0} \int_{\epsilon \mathop < \norm{\mathbf x}_2 \mathop < R} \ln r \Delta \phi \rd \mathbf x\)

\(=\)







\(\ds 2 \pi  \lim_{\epsilon \to 0} \paren {\frac 1 {2 \pi \epsilon} \int_{\norm {\mathbf x}_2 \mathop = \epsilon} \map \phi {\mathbf x} \rd \map s {\mathbf x} }\)




















\(\ds \)

\(=\)







\(\ds 2 \pi \map \phi {\mathbf 0}\)




















\(\ds \)

\(=\)







\(\ds 2 \pi \map {\delta_{\tuple {0, 0} } } \phi\)





Definition of Dirac Delta Distribution



So:

$\map {T_{\Delta \ln r} } \phi = 2 \pi \map {\delta_{\tuple {0, 0} } } \phi$
By linearity of the distribution:

$T_{\Delta \frac {\ln r} {2 \pi} } = \delta_{\tuple {0, 0} }$
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.2$: A glimpse of distribution theory. Derivatives in the distributional sense




