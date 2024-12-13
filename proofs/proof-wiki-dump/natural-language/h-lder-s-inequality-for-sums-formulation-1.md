# 

Source: https://proofwiki.org/wiki/H%C3%B6lder%27s_Inequality_for_Sums/Formulation_1



Theorem
Let $p, q \in \R_{>0}$ be strictly positive real numbers such that:

$\dfrac 1 p + \dfrac 1 q = 1$
Let $\GF \in \set {\R, \C}$, that is, $\GF$ represents the set of either the real numbers or the complex numbers.

Let $\mathbf x$ and $\mathbf y$ denote the vectors consisting of the sequences:

$\mathbf x = \sequence {x_n} \in {\ell^p}_\GF$
$\mathbf y = \sequence {y_n} \in {\ell^q}_\GF$
where ${\ell^p}_\GF$ denotes the $p$-sequence space in $\GF$.

Let $\norm {\mathbf x}_p$ denote the $p$-norm of $\mathbf x$.

Then:

$\mathbf x \mathbf y \in {\ell^1}_\GF$
and:

$\norm {\mathbf x \mathbf y}_1 \le \norm {\mathbf x}_p \norm {\mathbf y}_q$
where:

$\mathbf x \mathbf y := \sequence {x_n y_n}_{n \mathop \in \N}$
$\norm {\mathbf x \mathbf y}_1$ is the $1$-norm, also known as the taxicab norm.


Condition for Equality
$\norm {\mathbf x \mathbf y}_1 = \norm {\mathbf x}_p \norm {\mathbf y}_q$
if and only if:

$\forall k \in \N: \size {y_k} = c \size {x_k}^{p - 1}$
for some real constant $c$.


Proof
Define:














\(\ds \mathbf u\)

\(=\)







\(\ds \sequence {u_n}\)

\(\ds = \dfrac {\mathbf x} {\norm {\mathbf x}_p}\)


















\(\ds \mathbf v\)

\(=\)







\(\ds \sequence {v_n}\)

\(\ds = \dfrac {\mathbf y} {\norm {\mathbf y}_q}\)







Then:














\(\ds \norm {\mathbf u}_p\)

\(=\)







\(\ds \norm {\dfrac {\mathbf x} {\norm {\mathbf x}_p} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{n \mathop = 0}^\infty \size {\dfrac {x_n} {\norm {\mathbf x}_p} }^p}^{1 / p}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\norm {\mathbf x}_p} \paren {\sum_{n \mathop = 0}^\infty \size {x_n}^p}^{1 / p}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\norm {\mathbf x}_p} \norm {\mathbf x}_p\)




















\(\ds \)

\(=\)







\(\ds 1\)









and similarly:

$\norm {\mathbf v}_q = 1$

Then:










\(\ds \forall n \in \N: \, \)



\(\ds \size {u_n v_n}\)

\(=\)







\(\ds \size {u_n} \size {v_n}\)





Absolute Value Function is Completely Multiplicative




\(\text {(1)}: \quad\)









\(\ds \)

\(\le\)







\(\ds \dfrac 1 p \size {u_n}^p + \dfrac 1 q \size {v_n}^q\)





Young's Inequality for Products: $\size {u_n}$ and $\size {v_n}$ are indeed (strictly) positive




By the comparison test, it follows that:














\(\ds \mathbf u \mathbf v\)

\(=\)







\(\ds \sequence {u_n v_n}\)

\(\ds \in {\ell^1}_\GF\)












\(\ds \leadsto \ \ \)





\(\ds \mathbf x \mathbf y\)

\(=\)







\(\ds \norm {\mathbf x}_p \norm {\mathbf y}_q \mathbf u \mathbf v\)

\(\ds \in {\ell^1}_\GF\)












\(\ds \leadsto \ \ \)





\(\ds \norm {\mathbf u \mathbf v}_1\)

\(\le\)







\(\ds \dfrac 1 p \norm {\mathbf u}_p + \dfrac 1 q \norm {\mathbf v}_q\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \dfrac 1 p + \dfrac 1 q\)





as $\norm {\mathbf u}_p = \norm {\mathbf v}_p = 1$














\(\ds \)

\(=\)







\(\ds 1\)





by hypothesis




Therefore:














\(\ds \norm {\mathbf x \mathbf y}_1\)

\(=\)







\(\ds \norm {\mathbf x}_p \norm {\mathbf y}_q \norm {\mathbf u \mathbf v}_1\)




















\(\ds \)

\(\le\)







\(\ds \norm {\mathbf x}_p \norm {\mathbf y}_q\)









Hence the result.
$\blacksquare$


Parameter Inequalities
Statements of Hölder's Inequality for Sums will commonly insist that $p, q > 1$.
However, we note that from Positive Real Numbers whose Reciprocals Sum to 1 we have that if:

$p, q > 0$
and:

$\dfrac 1 p + \dfrac 1 q = 1$
it follows directly that $p, q > 1$.


Also known as
Hölder's Inequality for Sums is also seen referred to just as Hölder's Inequality.
This allows it to be confused with Hölder's Inequality for Integrals, so the full form is used on $\mathsf{Pr} \infty \mathsf{fWiki}$.


Also see
Minkowski's Inequality for Sums


Source of Name
This entry was named for Otto Ludwig Hölder.


Historical Note
Hölder's Inequality for Sums was first found by Leonard James Rogers in $1888$, and discovered independently by Otto Ludwig Hölder in $1889$.


Sources
2013: Francis Clarke: Functional Analysis, Calculus of Variations and Optimal Control ... (previous) ... (next): $1.1$: Basic Definitions
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.2$: Normed and Banach spaces. Normed spaces
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Hölder's inequality




