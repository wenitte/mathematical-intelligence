# 

Source: https://proofwiki.org/wiki/Normed_Vector_Space_over_Complex_Numbers_with_Schauder_Basis_is_Separable

Theorem
Let $\struct {X, \norm {\, \cdot \,}}$ be a normed vector space over $\C$.
Suppose $X$ admits a Schauder basis.

Then $X$ is separable.


Proof
Let $\set {\mathbf E_i : i \in \N}$ be a Schauder basis.
Then:

$\ds \forall x \in X : \exists \sequence {x_i'}_{i \mathop \in \N} \in \C : x = \sum_{i \mathop = 0}^\infty x_i' \mathbf E_i$
Let $\ds \mathbf e_i = \frac {\mathbf E_i}{\norm {\mathbf E_i}}$ and $\ds x_i=x_i' \norm{\mathbf E_i}$.
Then $\ds x = \sum_{i \mathop = 0}^\infty x_i \mathbf e_i$ where $\forall i \in \N : \norm {\mathbf e_i} = 1$.
Let $\ds Y = \set {\sum_{i \mathop = 0}^n q_i \mathbf e_i : q_i \in \Q \sqbrk i, n \in \N}$ be a countable set.
$Y$ is spanned by $\set {\mathbf e_i : i \in \N}$.
Also, Gaussian Rational Numbers form Subset of Complex Numbers.
Hence, $Y \subseteq X$.
We have that Gaussian Rationals are Everywhere Dense in Complex Numbers.
Then for any $i \in \N$:

$\forall x_i \in \C: \forall \epsilon_i \in \R_{>0}: \exists q_i \in \Q \sqbrk i: \size {x_i - q_i} < \epsilon_i$
Hence:














\(\ds \norm {\sum_{i \mathop = 0}^n x_i \mathbf e_i - \sum_{i \mathop = 0}^n q_i \mathbf e_i}\)

\(=\)







\(\ds \norm {\sum_{i \mathop = 0}^n \paren {x_i - q_i} \mathbf e_i}\)




















\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop = 0}^n \norm {\paren {x_i - q_i} \mathbf e_i}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \size {x_i - q_i} \norm {\mathbf e_i}\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \size {x_i - q_i}\)




















\(\ds \)

\(<\)







\(\ds \sum_{i \mathop = 0}^n \epsilon_i\)









By the existence of Schauder basis, the limit $\ds x = \sum_{i \mathop = 0}^\infty x_i \mathbf e_i$ exists.
Thus:

$\ds \forall \epsilon' \in \R_{>0}: \exists N \in \R_{>0}: \forall n \in \N: n > N \implies \norm {\sum_{i \mathop = 0}^\infty x_i \mathbf e_i - \sum_{i \mathop = 0}^n x_i \mathbf e_i} < \epsilon'$
Therefore:














\(\ds \norm {x - \sum_{i \mathop = 0}^n q_i \mathbf e_i}\)

\(=\)







\(\ds \norm {x - \sum_{i \mathop = 0}^n x_i \mathbf e_i + \sum_{i \mathop = 0}^n x_i \mathbf e_i - \sum_{i \mathop = 0}^n q_i \mathbf e_i}\)




















\(\ds \)

\(\le\)







\(\ds \norm {x - \sum_{i \mathop = 0}^n x_i \mathbf e_i} + \norm{\sum_{i \mathop = 0}^n x_i \mathbf e_i - \sum_{i \mathop = 0}^n q_i \mathbf e_i}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(<\)







\(\ds \epsilon' + \sum_{i \mathop = 0}^n \epsilon_i\)









Let $\epsilon \in \R_{> 0}$. 
Let $\epsilon'$ and $\sequence {\epsilon_i}_{0 \mathop \le i \le n}$ be such that:

$\ds \epsilon > \epsilon' + \sum_{i \mathop = 0}^n \epsilon_i$.
Let $n > N$.
Then:

$\ds \norm {x - \sum_{i \mathop = 0}^n q_i \mathbf e_i} < \epsilon$
$\epsilon$ was arbitrary.
Altogether:

$\ds \forall x \in X : \forall \epsilon \in \R_{> 0} : \exists y_{i \mathop \in \N} \in Y : \norm {x - y_i} < \epsilon$
By definition, $X$ is separable.
$\blacksquare$





