# 

Source: https://proofwiki.org/wiki/Cauchy%27s_Integral_Formula/General_Result


This article needs to be linked to other articles.In particular: Justification for differentiation results in induction stepYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $D = \set {z \in \C: \cmod z \le r}$ be the closed disk of radius $r$ in $\C$.
Let $f: U \to \C$ be holomorphic on some open set $U$ such that $D \subseteq U$.
Let $n \in \N$ be a natural number.

Then for each $a$ in the interior of $D$, the $n$-th derivative of $f$ at $a$ exists and can be written as:

$\ds \map {f^{\paren n} } a = \frac {n!} {2 \pi i} \oint_{\partial D} \frac {\map f z} {\paren {z - a}^{n + 1} } \rd z$
where $\partial D$ is the boundary of $D$, and is traversed anticlockwise.


Corollary
Let $\map G z$ be the generating function for the sequence $\sequence {a_n}$.
Let the coefficient of $z^n$ extracted from $\map G z$ be denoted:

$\sqbrk {z^n} \map G z := a_n$
Let $\map G z$ be convergent for $z = z_0$ and $0 < r < \cmod {z_0}$.

Then:

$\sqbrk {z^n} \map G z = \ds \frac 1 {2 \pi i} \oint_{\cmod z \mathop = r} \dfrac {\map G z \d z} {z^{n + 1} }$


Proof
Proof by induction:
For all $n \in \N$, let $\map P n$ be the proposition:

$\ds \map {f^{\paren n} } a = \frac {n!} {2 \pi i} \oint_{\partial D} \frac {\map f z} {\paren {z - a}^{n + 1} } \rd z$


Basis for the Induction
$\map P 0$ holds, as this is:

$\ds \map f a = \frac 1 {2 \pi i} \oint_{\partial D} \frac {\map f z} {\paren {z - a}} \rd z$
which is Cauchy's Integral Formula.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \map {f^{\paren k} } a = \frac {k!} {2 \pi i} \oint_{\partial D} \frac {\map f z} {\paren {z - a}^{k + 1} } \rd z$

Then we need to show:

$\ds \map {f^{\paren {k + 1} } } a = \frac {\paren {k + 1}!} {2 \pi i} \oint_{\partial D} \frac {\map f z} {\paren {z - a}^{k + 2} } \rd z$


Induction Step
This is our induction step:














\(\ds \frac {\rd} {\rd a} \map {f^{\paren k} } a\)

\(=\)







\(\ds \frac {k!} {2 \pi i} \oint_{\partial D} \frac {\rd} {\rd a} \frac {\map f z} {\paren {z - a}^{k + 1} } \rd z\)




















\(\ds \)

\(=\)







\(\ds \frac {k!} {2 \pi i}\oint_{\partial D} \frac {\paren {k + 1} \map f z} {\paren {z - a}^{k + 2} } \rd z\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {k + 1}!} {2 \pi i} \oint_{\partial D} \frac {\map f z} {\paren {z - a}^{k + 2} } \rd z\)










This article needs to be tidied.In particular: It might be worth taking a step back to look at the page from a distance, as well as taking a detailed close-up look, to identify points of difference between a page crafted to house style and the following more recent addition.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
To justify the passage of the derivative under the integral sign in line 1, note that for $\alpha$ near $a$, we have the following bound for all $z \in \partial D$:

$\ds \cmod {\frac {\paren {k + 1} \map f z} {\paren {z - \alpha}^{k + 2} } } = \frac {\paren {k + 1} \cmod {\map f z} }{r^{k + 2} }$
Since $f$ is continuous on the compact set $\partial D$, it follows that $\ds \sup_{z \mathop \in \partial D} \cmod {\map f z} < \infty$.
Thus the arc length integral:

$\ds \oint_{\partial D} \frac {\paren {k + 1} \cmod {\map f z} }{r^{k + 2}} ds(z) \le \paren {k + 1} \map \ell {\partial D} \sup_{z \mathop \in \partial D}\frac{\cmod {\map f z} }{r^{k + 2} } < \infty$

This article, or a section of it, needs explaining.In particular: What is $ds(z)$? This should be $\cmod {\rd z}$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence an argument involving the Fundamental Theorem of Calculus followed by the dominated convergence theorem justifies the swap.
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \N: \map {f^{\paren n} } a = \frac {n!} {2 \pi i} \oint_{\partial D} \frac {\map f z} {\paren {z - a}^{n + 1} } \rd z$
$\blacksquare$


Also known as
The General Form of Cauchy's Integral Formula can also be referred to as Cauchy's Integral Formula for Derivatives, or just Cauchy's Formula for Derivatives.


Source of Name
This entry was named for Augustin Louis Cauchy.


Sources
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Cauchy's formula for derivatives




