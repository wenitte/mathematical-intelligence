# 

Source: https://proofwiki.org/wiki/User:Ovenhouse/sandbox



Mean Value Property
Theorem
Let $U \subset \C$ be an open set.
Let $f \colon U \to \C$ be analytic on $U$.
For any $r > 0$, and $z_0 \in U$, let $\map {B_r} {z_0}$ be the open ball around $z_0$ of radius $r$, and $\overline {\map {B_r} {z_0} }$ its closure.

If $\overline {\map {B_r} {z_0} } \subset U$, then


$(a) \quad \ds \map f {z_0} = \frac 1 {2 \pi} \int_0^{2 \pi} \map f {z_0 + re^{i \theta} } \rd \theta$
$(b) \quad \ds \map f {z_0} = \frac 1 {\pi r^2} \int_{\overline {\map {B_r} {z_0} } } \map f {x + i y} \rd x \rd y$


Proof
$(a)$ Using Cauchy Integral Formula, and the parameterization of $\partial B_0$ given by $\gamma \left( t \right) = z_0 + re^{it}$, with $\gamma' \left( t \right) = ire^{it}\mathrm d t$, and $0 \leq t \leq 2 \pi$, we get:














\(\ds \map f {z_0}\)

\(=\)







\(\ds \frac 1 {2 \pi i} \int_{\partial B_0} \frac {\map f z} {z - z_0} \rd z\)





Cauchy Integral Formula














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi i} \int_0^{2 \pi} \frac {\map f {z_0 + re^{i \theta} } } {r e^{i \theta} } i r e^{i \theta} \rd \theta\)





Definition:Complex Contour Integral














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi} \int_0^{2 \pi} \map f {z_0 + r e^{i \theta} } \rd \theta\)










$(b)$ Part $(a)$ holds if we replace $r$ by any $\rho \in \openint 0 r$.
If we multiply by $2 \pi \rho$ on both sides of the equation, we get:

$\ds 2 \pi \rho \map f {z_0} = \int_0^{2 \pi} \map f {z_0 + \rho e^{i \theta} } \rho \rd \theta$
If we integrate with respect to $\rho$ from $0$ to $r$, we get

$\ds \int_0^r 2\pi \rho \map f {z_0} \rd \rho = \int_0^r \int_0^{2 \pi} \map f {z_0 + \rho e^{i \theta} } \rho \rd \rho \rd \theta$
Using the change of variables $\rho \rd \rho \rd \theta = \d x \rd y$, we get

$\ds \pi r^2 \map f {z_0} = \int_{B_0} \map f z \rd x \rd y$


Maximum Modulus Principle
Theorem
Let $U \subset \C$ be a connected open set.
Let $f$ be a holomorphic function on $U$.
Let $z_0 \in U$ be a maximum point for $\left|{f}\right|$ in $U$.

Then $f$ is constant on $U$.


Proof
Let $r > 0$ be such that the open ball $\map {B_r} {z_0}$ around $z_0$ of radius $r$, is contained in $U$.
If $f$ is not constant on $\map {B_r} {z_0}$, then there is some $z_1 \in \map {B_r} {z_0}$ with $\size {\map f {z_1} } < \size {\map f {z_0} }$.
Let $\epsilon = \size {\map f {z_0} } - \size {\map f {z_1} }$.
Since $\size f$ is continuous, there is an $s > 0$ so that $\map {B_s} {z_1} \subset \map {B_r} {z_0}$ and 














\(\ds \size {\map f z}\)

\(<\)







\(\ds \size {\map f {z_1} } + \frac \epsilon 2\)




















\(\ds \)

\(=\)







\(\ds \size {\map f {z_0} } - \frac \epsilon 2\)





($*$)



whenever $z \in \map {B_s} {z_1}$.

Let $B_0 = \map {B_r} {z_0}$. 
Let $B_1 = \map {B_s} {z_1}$.
Thus we have














\(\ds \size {\pi r^2 \map f {z_0} }\)

\(=\)







\(\ds \size {\int_{B_0} \map f z \rd x \rd y}\)





Mean Value Property














\(\ds \)

\(\le\)







\(\ds \int_{B_0} \size {\map f z} \rd x \rd y\)





Triangle Inequality for Integrals














\(\ds \)

\(=\)







\(\ds \int_{B_1} \size {\map f z} \rd x \rd y + \int_{B_0 \mathop \setminus B_1} \size {\map f z} \rd x \rd y\)





Sum of Integrals on Complementary Sets














\(\ds \)

\(\le\)







\(\ds \int_{B_1} \paren {\size {\map f {z_0} } - \frac \epsilon 2} \rd x \rd y + \int_{B_0 \mathop \setminus B_1} \size {\map f {z_0} } \rd x \rd y\)





Inequality ($*$) above














\(\ds \)

\(=\)







\(\ds \int_{B_0} \size {\map f {z_0} } \rd x \rd y - \frac {\epsilon \pi s^2} 2\)




















\(\ds \)

\(<\)







\(\ds \int_{B_0} \size {\map f {z_0} } \rd x \rd y\)




















\(\ds \)

\(=\)







\(\ds \pi r^2 \size {\map f {z_0} }\)





Mean Value Property



This is a contradiction, so it must be that $f$ is, in fact, constant.
$\blacksquare$





