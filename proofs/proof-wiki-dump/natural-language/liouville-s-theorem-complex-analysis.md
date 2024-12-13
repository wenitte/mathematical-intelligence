# 

Source: https://proofwiki.org/wiki/Liouville%27s_Theorem_(Complex_Analysis)

This proof is about Liouville's Theorem in the context of Complex Analysis. For other uses, see Liouville's Theorem.


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page. 


Theorem
Let $f: \C \to \C$ be a bounded entire function.

Then $f$ is constant.


Corollary 1
Let $f: \C \to \C$ be an entire function such that: 

$\size {\map f z} \ge M$
for all $z \in \C$ for some real constant $M > 0$. 

Then $f$ is constant.


Corollary 2
Let $f: \C \to \C$ be a non-constant entire function.

The maximum modulus:

$\ds \map M {r, f} := \max_{\cmod z \mathop = r} \cmod {\map f z}$
grows at least linearly in $r$.


Banach Space
Let $\struct {X, \norm {\, \cdot \,} }$ be a Banach space over $\C$.
Let $f : \C \to X$ be an analytic function that is bounded.

Then $f$ is constant. 


Proof 1
By assumption, there is $M \ge 0$ such that $\cmod {\map f z} \le  M$ for all $z \in \C$. 
For any $R \in \R: R > 0$, consider the function:

$\map {f_R} z := \map f {R z}$
Using the Cauchy Integral Formula, we see that:

$\ds \cmod {\map {f_R'} z} = \frac 1 {2 \pi} \cmod {\int_{\map {C_1} z} \frac {\map {f_R} w} {\paren {w - z}^2} \rd w} \le \frac 1 {2 \pi} \int_{\map {C_1} z} M \cmod {\d w} = M$
where $\map {C_1} z$ denotes the circle of radius $1$ around $z$.


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: $\int_{\map {C_1} z} M \cmod {\d w}$ must be defined.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Hence:

$\ds \cmod {\map {f'} z} = \cmod {\map {f_R'} z} / R \le M / R$
Since $R$ was arbitrary, it follows that $\cmod {\map {f'} z} = 0$ for all $z \in \C$.
Thus $f$ is constant.
$\blacksquare$


Proof 2
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


Source of Name
This entry was named for Joseph Liouville.


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.29$: Liouville ($\text {1809}$ – $\text {1882}$)
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): entire function
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Liouville's theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): entire function (integral function)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Liouville's theorem




