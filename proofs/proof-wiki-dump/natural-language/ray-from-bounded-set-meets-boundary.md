# 

Source: https://proofwiki.org/wiki/Ray_from_Bounded_Set_Meets_Boundary

Theorem
Let $A \subseteq \R^n$ be a bounded subspace of real Euclidean $n$-space.
Let $\bsx_0 \in A$ be point of $A$.
Then, for every $\bsy \in \R^n \setminus \set \bszero$, there is some $t \in \R_{\ge 0}$ such that:

$\bsx_0 + t \bsy \in \partial A$
where $\partial A$ denotes the boundary of $A$.


Proof
For every $t \in \R$, let:

$\map \bsx t = \bsx_0 + t \bsy$
Define:

$D = \set {t \in \R_{\ge 0} : \map \bsx t \in A}$
As $\map \bsx 0 = \bsx_0 \in A$:

$0 \in D$
so:

$D$ is non-empty

By definition of bounded, there exists some $K \in \R$ such that:

$\forall \bsx \in A: \size {\bsx - \bsx_0} \le K$
Suppose for arbitrary $t \in \R_{\ge 0}$ that $\map \bsx t \in A$.
Then:














\(\ds K\)

\(\ge\)







\(\ds \norm {\map \bsx t - \bsx_0}\)




















\(\ds \)

\(=\)







\(\ds \norm {t \bsy}\)




















\(\ds \)

\(=\)







\(\ds t \norm \bsy\)





Norm Axiom $\text N 2$: Positive Homogeneity








\(\ds \leadsto \ \ \)





\(\ds t\)

\(\le\)







\(\ds \frac K {\norm \bsy}\)









Therefore, $D$ is bounded above.
By the Least Upper Bound Property, let:

$t_D = \sup D$
We will show that:

$\map \bsx {t_D} \in \partial A$

Let $N \subseteq \R^n$ be a neighborhood of $\map \bsx {t_D}$.
By definition, there exists some $\delta > 0$ such that:

$\map {B_\delta} {\map \bsx {t_D}} \subseteq N$
We want to prove that:

$A \cap \map {B_\delta} {\map \bsx {t_D}} \ne \O$
$\overline A \cap \map {B_\delta} {\map \bsx {t_D}} \ne \O$

By Characterizing Property of Supremum of Subset of Real Numbers, there exists some $t_\delta \in D$ such that:

$t_D - \dfrac \delta {\norm \bsy} < t_\delta \le t_D$
By definition of $D$:

$\map \bsx {t_\delta} \in A$
Also:














\(\ds \norm {\map \bsx {t_D} - \map \bsx {t_\delta} }\)

\(=\)







\(\ds \norm {t_D \bsy - t_\delta \bsy}\)




















\(\ds \)

\(=\)







\(\ds \paren {t_D - t_\delta} \norm \bsy\)





Norm Axiom $\text N 2$: Positive Homogeneity and $t_D \ge t_\delta$














\(\ds \)

\(<\)







\(\ds \frac \delta {\norm \bsy} \norm \bsy\)




















\(\ds \)

\(=\)







\(\ds \delta\)









Therefore:

$\map \bsx {t_\delta} \in \map {B_\delta} {\map \bsx {t_D}}$
It immediately follows that:

$A \cap \map {B_\delta} {\map \bsx {t_D}} \ne \O$

Now, let:

$t'_\delta = t_D + \dfrac \delta {2 \norm \bsy}$
By definition of supremum, $t_D$ is an upper bound for $D$.
Therefore, since:

$t'_\delta > t_D$
it follows that:

$t'_\delta \notin D$
That is:

$\map \bsx {t'_\delta} \notin A$
or:

$\map \bsx {t'_\delta} \in \overline A$
Finally:














\(\ds \norm {\map \bsx {t'_\delta} - \map \bsx {t_D} }\)

\(=\)







\(\ds \norm {\paren {t_D + \frac \delta {2 \norm \bsy} } \bsy - t_D \bsy}\)




















\(\ds \)

\(=\)







\(\ds \frac \delta {2 \norm \bsy} \norm \bsy\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \frac \delta 2\)




















\(\ds \)

\(<\)







\(\ds \delta\)









That is:

$\map \bsx {t'_\delta} \in \map {B_\delta} {\map \bsx {t_D}}$
From the above, we have:

$\map \bsx {t'_\delta} \in \overline A \cap \map {B_\delta} {\map \bsx {t_D}}$
That is:

$\overline A \cap \map {B_\delta} {\map \bsx {t_D}} \ne \O$

From:

$A \cap \map {B_\delta} {\map \bsx {t_D}} \ne \O$
$\overline A \cap \map {B_\delta} {\map \bsx {t_D}} \ne \O$
we have proven that:

$\map \bsx {t_D} \in \partial A$
by definition of boundary.
Therefore:

$\bsx_0 + t_D \bsy \in \partial A$
$\blacksquare$





