# 

Source: https://proofwiki.org/wiki/Bessel%27s_Inequality



Theorem
Let $\struct {V, \innerprod \cdot \cdot}$ be an inner product space.
Let $\norm \cdot$ be the inner product norm for $\struct {V, \innerprod \cdot \cdot}$.
Let $E = \set {e_n: n \in \N}$ be a countably infinite orthonormal subset of $V$.

Then, for all $h \in V$:

$\ds \sum_{n \mathop = 1}^\infty \size {\innerprod h {e_n} }^2 \le \norm h^2$


Corollary 1
Let $E$ be a orthonormal subset of $V$. 

Then, for each $h \in V$, the set: 

$\set {e \in E : \innerprod h e \ne 0}$
is countable.


Corollary 2
Let $E$ be a orthonormal subset of $V$. 

Then, for all $h \in V$:

$\ds \sum_{e \mathop \in E} \size {\innerprod h e}^2 \le \norm h^2$


Proof
Note that for any natural number $n$ we have, applying sesquilinearity of the inner product: 














\(\ds \norm {h - \sum_{k \mathop = 1}^n \innerprod h {e_k} e_k}^2\)

\(=\)







\(\ds \innerprod {h - \sum_{k \mathop = 1}^n \innerprod h {e_k} e_k} {h - \sum_{j \mathop = 1}^n \innerprod h {e_j} e_j}\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \innerprod h {h - \sum_{j \mathop = 1}^n \innerprod h {e_j} e_j} - \innerprod {\sum_{k \mathop = 1}^n \innerprod h {e_k} e_k} {h - \sum_{j \mathop = 1}^n \innerprod h {e_j} e_j}\)





Definition of Inner Product














\(\ds \)

\(=\)







\(\ds \innerprod h h - \innerprod h {\sum_{j \mathop = 1}^n \innerprod h {e_j} e_j} - \innerprod {\sum_{k \mathop = 1}^n \innerprod h {e_k} e_k} h + \innerprod {\sum_{k \mathop = 1}^n \innerprod h {e_k} e_k} {\sum_{j \mathop = 1}^n \innerprod h {e_j} e_j}\)





Definition of Inner Product














\(\ds \)

\(=\)







\(\ds {\norm h}^2 - \innerprod h {\sum_{j \mathop = 1}^n \innerprod h {e_j} e_j} - \overline {\innerprod h {\sum_{j \mathop = 1}^n \innerprod h {e_j} e_j} } + \norm {\sum_{k \mathop = 1}^n \innerprod h {e_k} e_k}^2\)





conjugate symmetry of inner product, Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds {\norm h}^2 - \innerprod h {\sum_{j \mathop = 1}^n \innerprod h {e_j} e_j} - \overline {\innerprod h {\sum_{j \mathop = 1}^n \innerprod h {e_j} e_j} } + \sum_{k \mathop = 1}^n \norm {\innerprod h {e_k} e_k}^2\)





Pythagoras's Theorem for Inner Product Spaces














\(\ds \)

\(=\)







\(\ds {\norm h}^2 - \innerprod h {\sum_{j \mathop = 1}^n \innerprod h {e_j} e_j} - \overline {\innerprod h {\sum_{j \mathop = 1}^n \innerprod h {e_j} e_j} } + \sum_{k \mathop = 1}^n \size {\innerprod h {e_k} }^2\)





since each $e_k$ has $\norm {e_k} = 1$



We have: 














\(\ds \innerprod h {\sum_{j \mathop = 1}^n \innerprod h {e_j} e_j}\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \innerprod h {\innerprod h {e_j} e_j}\)





sesquilinearity of inner product














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \overline {\innerprod {\innerprod h {e_j} e_j} h}\)





conjugate symmetry of inner product














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \overline {\innerprod {e_j} h} \overline {\innerprod h {e_j} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \innerprod h {e_j} \overline {\innerprod h {e_j} }\)





conjugate symmetry of inner product














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \size {\innerprod h {e_j} }^2\)





Product of Complex Number with Conjugate



Therefore: 














\(\ds \norm {h - \sum_{k \mathop = 1}^n \innerprod h {e_k} e_k}^2\)

\(=\)







\(\ds {\norm h}^2 - \sum_{j \mathop = 1}^n \size {\innerprod h {e_j} }^2 - \overline {\sum_{j \mathop = 1}^n \size {\innerprod h {e_j} }^2} + \sum_{k \mathop = 1}^n \size {\innerprod h {e_k} }^2\)




















\(\ds \)

\(=\)







\(\ds {\norm h}^2 - 2 \sum_{j \mathop = 1}^n \size {\innerprod h {e_j} }^2 + \sum_{k \mathop = 1}^n \size {\innerprod h {e_k} }^2\)





since $\size {\innerprod h {e_j} }^2$ is real for each $j$, we have $\ds \sum_{j \mathop = 1}^n \size {\innerprod h {e_j} }^2 \in \R$














\(\ds \)

\(=\)







\(\ds {\norm h}^2 - \sum_{k \mathop = 1}^n \size {\innerprod h {e_k} }^2\)









Since:

$\ds \norm {h - \sum_{k \mathop = 1}^n \innerprod h {e_k} e_k}^2 \ge 0$
we have: 

$\ds \sum_{k \mathop = 1}^n \size {\innerprod h {e_k} }^2 \le {\norm h}^2$
Since:

$\size {\innerprod h {e_k} }^2 \ge 0$ for each $k$
we have that: 

the sequence $\ds \sequence {\sum_{k \mathop = 1}^n \size {\innerprod h {e_k} }^2}_{n \in \N}$ is increasing.
So:

the sequence $\ds \sequence {\sum_{k \mathop = 1}^n \size {\innerprod h {e_k} }^2}_{n \in \N}$ is bounded and increasing.
So from Monotone Convergence Theorem (Real Analysis): Increasing Sequence, we have that: 

the sequence $\ds \sequence {\sum_{k \mathop = 1}^n \size {\innerprod h {e_k} }^2}_{n \in \N}$ converges.
Since: 

$\ds \sum_{k \mathop = 1}^n \size {\innerprod h {e_k} }^2 \le {\norm h}^2$ for each $n$
we then have from Limits Preserve Inequalities: 

$\ds {\norm h}^2 \ge \lim_{n \mathop \to \infty} \sum_{k \mathop = 1}^n \size {\innerprod h {e_k} }^2 = \sum_{k \mathop = 1}^\infty \size {\innerprod h {e_k} }^2$
$\blacksquare$


Source of Name
This entry was named for Friedrich Wilhelm Bessel.


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 4.$ Orthonormal Sets of Vectors and Bases: $4.8$ Bessel's Inequality




