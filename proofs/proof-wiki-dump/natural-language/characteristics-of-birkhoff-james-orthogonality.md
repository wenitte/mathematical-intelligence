# 

Source: https://proofwiki.org/wiki/Characteristics_of_Birkhoff-James_Orthogonality


This article needs to be linked to other articles.In particular: including justification for all the steps taken: "Clearly", for example, is insufficient for $\mathsf{Pr} \infty \mathsf{fWiki}$. It is recommended that the contributor examines the Help pages.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\struct {V, \norm {\,\cdot\,} }$ be a normed linear space.
Let $x, y \in V$.
Then $x$ and $y$ are Birkhoff-James orthogonal if and only if either:

$(1): \quad x = 0$
or:

$(2): \quad$ there exists a continuous functional $ f$ on $\struct {V, \norm {\,\cdot\,} }$ such that:
$\norm f = 1$
$\map f x = \norm x$
$\map f y = 0$


Proof
Necessary Condition
Let $x \perp_B y$.
Let $V' \subset V$ be the subspace spanned by $x$ and $y$.
Define $\overline f$ on $V'$ as:

$\map {\overline f} {a x + b y} = a \norm x$
for $a$ and $b$ scalars.

Clearly, $\overline f$ is linear and:

$\map {\overline f} x = \norm x$
$\map {\overline f} y = 0$

Further:














\(\ds \norm {a x + b y}\)

\(=\)







\(\ds \size a \norm {x + \dfrac b a y}\)




















\(\ds \)

\(\ge\)







\(\ds \size a \norm x\)




















\(\ds \)

\(=\)







\(\ds \size {\map {\overline f} {a x + b y} }\)









proving that $\overline f$ is a bounded functional of norm $1$.

Now by Hahn-Banach Theorem, $\overline f$ can be extended to a functional $f$ on $V$ such that $\norm f = \norm {\overline f} = 1$
This proves the necessity.
$\Box$


Sufficient Condition
Let such a functional $f$ on $V$ exist.
Then for any scalar $\lambda$:

$\norm {x + \lambda y} \ge \size {\map f {x + \lambda y} } = \norm x$
establishing the sufficiency.
$\blacksquare$


Sources
1935: Garrett Birkhoff: Orthogonality in linear metric spaces (Duke Math. J. Vol. 1: pp. 169 – 172)
1947: Robert C. James: Orthogonality and linear functionals in normed linear spaces (Trans. Amer. Math. Soc. Vol. 61: pp. 265 – 292)




