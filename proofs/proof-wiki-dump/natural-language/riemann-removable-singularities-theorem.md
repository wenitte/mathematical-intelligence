# 

Source: https://proofwiki.org/wiki/Riemann_Removable_Singularities_Theorem


This article needs to be linked to other articles.In particular: e.g. Locally Bounded, Cauchy's Integral Theorem, and a number of the results used.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $U \subset \C$ be a domain.
Let $z_0 \in U$.
Let $f: U \setminus \set {z_0} \to \C$ be holomorphic.
Then the following are equivalent:

$(1): \quad f$ extends to a holomorphic function $f: U \to \C$.
$(2): \quad f$ extends to a continuous function $f: U \to \C$.
$(3): \quad f$ is bounded in a deleted neighborhood of $z_0$.
$(4): \quad \map f z = \map o {\dfrac 1 {\cmod {z - z_0} } }$ as $z \to z_0$.


Proof
Without loss of generality, we may assume that:

$U = \Bbb D := \set {z \in \C: \cmod z < 1}$
and that $z_0 = 0$. 
Otherwise, restrict $f$ to a suitable disk centered at $z_0$, and precompose with a suitable affine map.

A holomorphic function is continuous.
Continuous Function is Locally Bounded.
So $(1) \implies (2) \implies (3)$.
Also, $(3) \implies (4)$ by definition. 
That $(2) \implies (1)$ follows from the proof of Cauchy's Residue Theorem.
(For completeness, we sketch a self-contained argument below.)


This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Extract that proof referred to above, and put it in its own page, if necessary.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.

Now assume that $(4)$ holds.
That is:

$z \cdot \map f z \to 0$ as $z \to 0$.
We need to show that $(2)$ holds.

By assumption, the function:

$\map g z := \begin{cases} z \cdot \map f z & : z \ne 0 \\ 0 & : \text{otherwise} \end{cases}$
is continuous in $\Bbb D$ and holomorphic in $\Bbb D \setminus \set 0$.
By applying the direction $(2) \implies (1)$ to this function, we see that $g$ is holomorphic in $\Bbb D$.
We have:

$\ds \map {g'} 0 = \lim_{z \mathop \to 0} \frac {\map g z} z = \lim_{z \mathop \to 0} \map f z$
so $f$ extends continuously to $\Bbb D$, as claimed.

To prove $(2) \implies (1)$, we use Morera's Theorem and Cauchy's Residue Theorem.
By Morera's Theorem, we need to show that:

$\ds \int_C \map f z \rd z = 0$
for every closed curve $C$ in $\Bbb D$.
It follows from the Cauchy Integral Theorem that we only need to check that:

$\ds \int_C \map f z \rd z = 0$
for a simple closed loop surrounding $0$, and that this integral is independent of the loop $C$.
Letting $C = \map {C_\epsilon} 0$ be the circle of radius $\epsilon$ around $0$, we see that:

$\ds \size {\int_{C_\epsilon} \map f z \rd z} \le 2 \pi \epsilon \max_{z \mathop \in C_\epsilon} \size {\map f z} \to 0$
as $\epsilon \to 0$ (because $f$ is continuous in $0$ by assumption).
This completes the proof.
$\blacksquare$


Source of Name
This entry was named for Georg Friedrich Bernhard Riemann.





