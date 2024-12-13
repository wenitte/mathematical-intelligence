# 

Source: https://proofwiki.org/wiki/Projector_has_Norm_1


It has been suggested that this page or section be merged into Characterization of Projections.In particular: This is the case $(1) \iff (3)$To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
An idempotent operator $P$ is a projector on the Hilbert Space $H$ if and only if $P$ has norm $1$:

$\ds \norm P \equiv \sup_{x \mathop \in H} \frac {\norm P} {\norm x} = 1$


Proof
For all $x \in \Rng P$:

$\norm {P \dfrac x {\norm x} } = \dfrac {\norm x} {\norm x} = 1$
so $\norm P \ge 1$.
It remains to show that this holds with equality if and only if $P$ is a projector.
First, suppose $P$ is a projector.
Let $\set {p_1, p_2, \ldots}$ be an orthonormal basis for $\Rng P$.
Let $\set {q_1, q_2, \ldots}$ be an orthonormal basis for $\Rng P_\perp$.
Then for any $x \in H$, we can choose scalars $\set {\alpha_1, \alpha_2, \ldots}$ and $\set {\beta_1, \beta_2, \ldots}$ so that:

$\ds x = \sum_{i \mathop = 1}^\infty \alpha_i p_i + \sum_{i \mathop = 1}^\infty \beta_i q_i$
Because the basis vectors are orthogonal, Pythagoras's theorem shows that:

$\ds \norm x^2 = \sum_{i \mathop = 1}^\infty \norm {\alpha_i}^2 + \norm {\beta_i}^2$
Then $\norm {P x}$ can be expanded thus:














\(\ds \norm {P x}^2\)

\(=\)







\(\ds \norm {\sum_{i \mathop = 1}^\infty \alpha_i P p_i + \sum_{i \mathop = 1}^\infty \beta_i P q_i}^2\)




















\(\ds \)

\(=\)







\(\ds \norm {\sum_{i \mathop = 1}^\infty \alpha_i p_i + 0}^2\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^\infty \size {\alpha_i}^2\)





Pythagoras's theorem again














\(\ds \)

\(\le\)







\(\ds \norm x^2\)









Hence $\norm P \le 1$.
Since it was already shown $\norm P \ge 1$, it follows that $\norm P = 1$.

Now suppose $P$ is not a projector.
Then there exists $x \in H$ so that $P x - x$ is not orthogonal to $\Rng P$.
By writing $x = p + q$ with $p \in \Rng P$ and $q \in \Rng P_\perp$, it follows that:

$P x - x = P \paren {p + q} - \paren {p + q} = P q - q$
By rescaling $x$, we can assume $\norm q = 1$.
Since $q \in \Rng P_\perp$ but

$P q - q = P x - x = \notin \Rng P_\perp$
it follows that $P q \ne 0$.
Let $\norm {P q} = c \ne 0$.
It will be shown that

$y = c q + \dfrac 1 c P q$
satisfies

$\dfrac {\norm {P y} } {\norm y} > 1$
Notice first that:














\(\ds \norm y^2\)

\(=\)







\(\ds \norm {c q + \dfrac 1 c P q}^2\)




















\(\ds \)

\(=\)







\(\ds \norm {c q}^2 + \norm {\dfrac 1 c P q}^2\)





Pythagoras's Theorem ($q$ and $P q$ are orthogonal)














\(\ds \)

\(=\)







\(\ds c^2 + 1\)





since $\norm {P q} = c$ and $\norm q = 1$.




Now:














\(\ds \norm {P \frac y {\norm y} }^2\)

\(=\)







\(\ds \frac 1 {\norm y^2} \norm {P \paren {c q + \frac 1 c P q} }^2\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {c^2 + 1} \norm {c P q + \frac 1 c P^2 q}^2\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {c^2 + 1} \norm {P q \paren {c + \frac 1 c} }^2\)





$P$ is idempotent














\(\ds \)

\(=\)







\(\ds \frac {\norm {P q}^2} {c^2 + 1} \paren {c + \frac 1 c}^2\)




















\(\ds \)

\(=\)







\(\ds \frac {c^2 \paren {c + \frac 1 c}^2} {c^2 + 1}\)




















\(\ds \)

\(=\)







\(\ds c^2 + 1\)




















\(\ds \)

\(>\)







\(\ds 1\)









$\blacksquare$





