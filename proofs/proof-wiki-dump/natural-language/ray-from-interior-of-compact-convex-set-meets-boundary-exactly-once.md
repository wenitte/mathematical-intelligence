# 

Source: https://proofwiki.org/wiki/Ray_from_Interior_of_Compact_Convex_Set_Meets_Boundary_Exactly_Once

Theorem
Let $A \subseteq \R^n$ be a compact convex subspace of real Euclidean $n$-space.
Let $\bsx_0 \in A^\circ$ be an interior point of $A$.
Then, for every $\bsy \in \R^n \setminus \bszero$, there is a unique $t \in \R_{> 0}$ such that:

$\bsx_0 + t \bsy \in \partial A$


Proof
By Compact Subspace of Metric Space is Bounded:

$A$ is bounded
Then, by Ray from Bounded Set Meets Boundary, there is some $t \in \R_{\ge 0}$ such that:

$\bsx_0 + t \bsy \in \partial A$
But, if $t = 0$, then:

$\bsx_0 \in \partial A$
contradicting the definition of boundary, since $\bsx_0 \in A^\circ$.
Thus, $t > 0$.

Now, suppose that $t' \in \R_{> 0}$ also satisfies:

$\bsx_0 + t' \bsy \in \partial A$
Without loss of generality, suppose $t' \le t$.
By definition of interior point, there is some $\epsilon > 0$ such that:

$\map {B_\epsilon} {\bsx_0} \subseteq A$
Let $\epsilon' = \dfrac {t - t'} t \epsilon$.
Aiming for a contradiction, suppose $t' < t$.
Then, $\epsilon' > 0$.
Let $\bsx' \in \map {B_{\epsilon'}} {\bsx_0 + t' \bsy}$ be arbitrary.
Define:

$\bsx = \bsx_0 + \dfrac t {t - t'} \paren {\bsx' - \paren {\bsx_0 + t' \bsy}}$
We have:














\(\ds \norm {\bsx - \bsx_0}\)

\(=\)







\(\ds \frac t {t - t'} \norm {\bsx' - \paren {\bsx_0 + t' \bsy} }\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(<\)







\(\ds \frac t {t - t'} \epsilon'\)




















\(\ds \)

\(=\)







\(\ds \frac t {t - t'} \frac {t - t'} t \epsilon\)





Definition of $\epsilon'$














\(\ds \)

\(=\)







\(\ds \epsilon\)









Therefore:

$\bsx \in \map {B_\epsilon} {\bsx_0} \subseteq A$

Finally:














\(\ds \frac {t - t'} t \bsx\)

\(=\)







\(\ds \frac {t - t'} t \bsx_0 + \bsx' - \paren {\bsx_0 + t' \bsy}\)














\(\ds \leadsto \ \ \)





\(\ds \bsx'\)

\(=\)







\(\ds \frac {t - t'} t \bsx - \frac {t - t'} t \bsx_0 + \bsx_0 + t' \bsy\)




















\(\ds \)

\(=\)







\(\ds \frac {t - t'} t \bsx + \frac {t'} t \bsx_0 + t' \bsy\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - \frac {t'} t} \bsx + \frac {t'} t \paren {\bsx_0 + t \bsy}\)









As $0 < t' < t$, it follows that:

$0 < \dfrac {t'} t < 1$
Additionally, by Compact Subspace of Hausdorff Space is Closed:

$\partial A \subseteq A$
Therefore:

$\bsx_0 + t \bsy \in A$
So, by definition of convex:

$\bsx' \in A$
As $\bsx' \in \map {B_{\epsilon'}} {\bsx_0 + t' \bsy}$ was arbitrary, it follows that:

$\map {B_{\epsilon'}} {\bsx_0 + t' \bsy} \subseteq A$
Therefore, by definition:

$\bsx_0 + t' \bsy \in A^\circ$
But we assumed that:

$\bsx_0 + t' \bsy \in \partial A$
which is a contradiction.

Therefore, by Proof by Contradiction:

$t' = t$
$\blacksquare$





