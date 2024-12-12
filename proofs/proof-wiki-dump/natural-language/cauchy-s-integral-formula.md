# 

Source: https://proofwiki.org/wiki/Cauchy%27s_Integral_Formula



Theorem
Let $D = \set {z \in \C: \cmod z \le r}$ be the closed disk of radius $r$ in $\C$.
Let $f: U \to \C$ be holomorphic on some open set containing $D$.

Then for each $a$ in the interior of $D$:

$\ds \map f a = \frac 1 {2 \pi i} \oint_{\partial D} \frac {\map f z} {z - a} \rd z$
where $\partial D$ is the boundary of $D$, and is traversed anticlockwise.


General Result
Let $n \in \N$ be a natural number.

Then for each $a$ in the interior of $D$, the $n$-th derivative of $f$ at $a$ exists and can be written as:

$\ds \map {f^{\paren n} } a = \frac {n!} {2 \pi i} \oint_{\partial D} \frac {\map f z} {\paren {z - a}^{n + 1} } \rd z$
where $\partial D$ is the boundary of $D$, and is traversed anticlockwise.


Proof
Let $C$ be any arbitrary closed curve which defines a region $R$ where the function $\map f z$ is holomorphic on $R$.
Let $z_0$ be any point in the region $R$ such that:

$\dfrac {\map f z} {z - z_0}$ is holomorphic on $R \setminus \set {z_0}$
We draw a circle $C_r$ with center at $z_0$ and radius $r$ such that $r \to 0$.
This makes $C$ and $C_r$ a multiply connected region for a sufficiently small $r > 0$.


This article, or a section of it, needs explaining.In particular: multiply connected regionYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

This article, or a section of it, needs explaining.In particular: A diagram at this point would be useful.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
According to Cauchy's Integral Theorem for a multiply connected region:















\(\ds I\)

\(:=\)







\(\ds \oint_C \frac {\map f z} {z - z_0} \rd z\)




















\(\ds \)

\(=\)







\(\ds \oint_{C_r} \frac {\map f z} {z - z_0} \rd z\)




















\(\ds \)

\(=\)







\(\ds \oint_{C_r} \frac {\map f {z_0} + \paren {\map f z - \map f {z_0} } } {z - z_0} \rd z\)




















\(\ds \)

\(=\)







\(\ds \map f {z_0} \oint_{C_r} \frac {\rd z} {z - z_0} + \oint_{C_r} \frac {\map f z - \map f {z_0} } {z - z_0} \rd z\)










Let:














\(\ds z - z_0\)

\(=\)







\(\ds r e^{i \theta}\)














\(\ds \leadsto \ \ \)





\(\ds \d z\)

\(=\)







\(\ds i r e^{i \theta} \rd \theta\)














\(\ds \leadsto \ \ \)





\(\ds \oint_{C_r} \frac {\rd z} {z - z_0}\)

\(=\)







\(\ds \int_0^{2 \pi} \frac {i r e^{i \theta} } {r e^{i \theta} } \rd \theta\)




















\(\ds \)

\(=\)







\(\ds i \int_0^{2 \pi} \rd \theta\)




















\(\ds \)

\(=\)







\(\ds 2 \pi i\)










Now:

$\ds I = 2 \pi i \map f {z_0} + \oint_{C_r} \frac {\map f z - \map f {z_0} } {z - z_0} \rd z$
From Complex-Differentiable Function is Continuous, $f$ is continous.
According to Epsilon-Delta definition, for every $\epsilon \in \R_{>0}$ there exists a $\delta \in \openint 0 r$ such that:

$\forall z \in \C: \cmod {z - z_0} < \delta \implies \cmod {\map f z - \map f {z_0} } < \epsilon$
Hence:














\(\ds \cmod {\oint_{C_r} \frac {\map f z - \map f {z_0} } {z - z_0} \rd z}\)

\(=\)







\(\ds \cmod {\oint_{C_\delta} \frac {\map f z - \map f {z_0} } {z - z_0} \rd z}\)




















\(\ds \)

\(\le\)







\(\ds \oint_{C_\delta} \frac {\cmod {\map f z - \map f {z_0} } } {\cmod {z - z_0} } \cmod {\d z}\)




















\(\ds \)

\(\le\)







\(\ds \frac \epsilon \delta \oint_{C_\delta} \cmod {\d z}\)




















\(\ds \)

\(=\)







\(\ds 2 \pi \epsilon\)










This article, or a section of it, needs explaining.In particular: The precise meaning of $\cmod {\d z}$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

As $\epsilon \to 0$:

$\ds \oint_{C_r} \frac {\map f z - \map f {z_0} } {z - z_0} \rd z = 0$

So:














\(\ds I\)

\(=\)







\(\ds \map f {z_0} \oint_{C_r} \frac {\rd z} {z - z_0} + \oint_{C_r} \frac {\map f z - \map f {z_0} } {z - z_0} \rd z\)




















\(\ds \)

\(=\)







\(\ds 2 \pi i \map f {z_0} + 0\)














\(\ds \leadsto \ \ \)





\(\ds \oint_C \frac {\map f z} {z - z_0} \rd z\)

\(=\)







\(\ds 2 \pi i \, \map f {z_0}\)









$\blacksquare$


Also see
Definition:Complex Contour Integral


Source of Name
This entry was named for Augustin Louis Cauchy.


Historical Note
Cauchy's Integral Formula was developed by Augustin Louis Cauchy during his work to establish the groundwork of the discipline of complex analysis.
Karl Weierstrass independently discovered it during his own exercise to rebuild the theory from first principles.


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.26$: Cauchy ($\text {1789}$ – $\text {1857}$)
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Cauchy's integral formula




