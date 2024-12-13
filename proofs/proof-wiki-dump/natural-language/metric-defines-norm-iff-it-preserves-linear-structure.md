# 

Source: https://proofwiki.org/wiki/Metric_Defines_Norm_iff_it_Preserves_Linear_Structure

Theorem
Let $\struct {k, \norm {\,\cdot\,}_k}$ be a valued field.
Let $V$ be a vector space over the valued field $\struct {k, \norm {\,\cdot\,}_k}$.
Let $d: V \times V \to k$ be a metric on $V$.

Then the function $\norm v := \map d {v, 0}$ is a norm on $V$ if and only if for all $x, y, z \in V$, $\lambda \in k$:

$(1): \quad \map d {x + z, y + z} = \map d {x, y}$ (homogeneity or translation invariance)
$(2): \quad \map d {\lambda x, \lambda y} = \norm \lambda_k \map d {x, y}$ (the enlargement property)


Proof
Suppose first that $d$ satisfies the hypotheses $(1)$ and $(2)$.
From Metric Space Axiom $(\text M 4)$:

$\forall u, v \in V: \map d {u, v} \ge 0$
Hence:

$\forall u \in V: \norm u = \map d {u, 0} \ge 0$
Moreover, from Metric Space Axiom $(\text M 1)$:

$\norm u = 0 \implies \map d {u, 0} = 0$
and hence:

$u = 0$

Now let $\lambda \in K$, $u \in V$.
Then, using the enlargement property of $d$:














\(\ds \norm {\lambda v}\)

\(=\)







\(\ds \map d {\lambda v, 0}\)





Definition of $\norm {\,\cdot\,}$














\(\ds \)

\(=\)







\(\ds \map d {\lambda v, \lambda \cdot 0}\)




















\(\ds \)

\(=\)







\(\ds \norm \lambda_k \map d {v, 0}\)





Enlargement Property














\(\ds \)

\(=\)







\(\ds \norm \lambda_k \norm v\)





Definition of $\norm{\,\cdot\,}$



Finally if $u,v \in V$, then we have














\(\ds \norm {u + v}\)

\(=\)







\(\ds \map d {u + v, 0}\)





Definition of $\norm {\,\cdot\,}$














\(\ds \)

\(=\)







\(\ds \map d {u, -v}\)





Translation Invariance of $d$














\(\ds \)

\(\le\)







\(\ds \map d {u, 0} + d(0,-v)\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \map d {u, 0} + \map d {v, 0}\)





Enlargement Property














\(\ds \)

\(=\)







\(\ds \norm u + \norm v\)





Definition of $\norm {\,\cdot\,}$




This article is incomplete.In particular: converse to addYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by expanding it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Stub}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

$\blacksquare$





