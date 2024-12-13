# 

Source: https://proofwiki.org/wiki/Liouville%27s_Theorem_(Complex_Analysis)/Proof_2

Theorem
Let $f: \C \to \C$ be a bounded entire function.

Then $f$ is constant.


Proof
By assumption, there is $M \ge 0$ such that $\cmod {\map f z} \le  M$ for all $z \in \C$. 
Let $r > 0$.
consider:

$D_r = \set {z \in \C: \cmod z \le r}$
Then, consider the parameterization $\gamma_r : \closedint 0 {2 \pi} \to \partial D_r$ given by:

$\map  {\gamma_r} t := r e^{2 \pi i t}$
For all $z \in \C$, we have:














\(\ds \map {f'} z\)

\(=\)







\(\ds \map {g_z'} 0\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi} \oint_{\partial D_r} \frac {\map {g_z} w} {w^2} \rd w\)





Cauchy Integral Formula














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi} \int_0^{2 \pi} \frac {\map {g_z} {\map {\gamma_r} t} } { {\map {\gamma_r} t}^2} {\map {\gamma_r '} t} \rd t\)





Definition of Complex Contour Integral














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi} \int_0^{2 \pi} \frac {\map {g_z} {\map {\gamma_r} t} } { {\paren {r e^{2 \pi i t} } }^2} {2 \pi i r e^{2 \pi i t} } \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac i r \int_0^{2 \pi} \frac {\map {g_z} {\map {\gamma_r} t} } { e^{2 \pi i t} } \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac i r \int_0^{2 \pi} \frac {\map f { {\map {\gamma_r} t} + z} } { e^{2 \pi i t} } \rd t\)









where:

$\map {g_z} w := \map f {w + z}$
Hence, for all $z \in \C$:














\(\ds \cmod {\map {f'} z}\)

\(=\)







\(\ds \cmod {\frac i r \int_0^{2 \pi} \frac {\map f { {\map {\gamma_r} t} + z} } { e^{2 \pi i t} } \rd t}\)




















\(\ds \)

\(\le\)







\(\ds \frac 1 r \int_0^{2 \pi} \cmod {\frac {\map f {\map {\gamma_r} t + z} } { e^{2 \pi i t} } } \rd t\)





Modulus of Complex Integral














\(\ds \)

\(\le\)







\(\ds \frac 1 r \int_0^{2 \pi} M \rd t\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 \pi M} r\)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $r \to \infty$



Thus it follows that $\map {f'} z = 0$ for all $z \in \C$.
By Zero Derivative implies Constant Complex Function, $f$ is constant.
$\blacksquare$



This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Source of Name
This entry was named for Joseph Liouville.





