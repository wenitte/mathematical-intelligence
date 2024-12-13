# 

Source: https://proofwiki.org/wiki/P-Sequence_Space_with_P-Norm_forms_Banach_Space



Theorem
Let $\ell^p$ be a p-sequence space.
Let $\norm {\, \cdot \,}_p$ be a p-norm.

Then $\struct {\ell^p, \norm {\, \cdot \,}_p}$ is a Banach space.


Proof
A Banach space is a normed vector space, where a Cauchy sequence converges with respect to the supplied norm.
To prove the theorem, we need to show that a Cauchy sequence in $\struct {\ell^p, \norm {\,\cdot\,}_p}$ converges.
We take a Cauchy sequence $\sequence {x_n}_{n \mathop \in \N}$ in $\struct {\ell^p, \norm {\,\cdot\,}_p}$.
Then we consider the $k$th component and show, that a real Cauchy sequence $\sequence {x_n^{\paren k}}_{n \mathop \in \N}$ converges in $\struct {\R, \size {\, \cdot \,}}$ with the limit $x^{\paren k}$ and denote the entire set as $\mathbf x$.
Finally, we show that $\sequence {\mathbf x_n}_{n \in \N}$, composed of components $x_n^{\paren k},$ converges in $\struct {\ell^p, \norm {\,\cdot\,}_p}$ with the limit $\mathbf x$.

Let $\sequence {\mathbf x_n}_{n \mathop \in \N}$ be a Cauchy sequence in $\struct {\ell^p, \norm{\, \cdot \,}_p}$.
Denote the $k$th component of $\mathbf x_n$ by $x_n^{\paren k}$.


$\sequence {x_n^{\paren k}}_{n \mathop \in \N}$ converges in $\struct {\R, \size {\, \cdot \,}}$
Let $\epsilon >0$.
Then:

$\ds \exists N \in \N : \forall m,n \in \N : m,n > N : \norm {\mathbf x_n - \mathbf x_m}_p < \epsilon$
For same $N, m, n$ consider $\size {x_n^{\paren k} - x_m^{\paren k} } $:














\(\ds \size {x_n^{\paren k} - x_m^{\paren k} }\)

\(=\)







\(\ds \paren {\size {x_n^{\paren k} - x_m^{\paren k} }^p}^{\frac 1 p}\)




















\(\ds \)

\(\le\)







\(\ds \paren {\sum_{k \mathop = 0}^\infty \size {x_n^{\paren k} - x_m^{\paren k} }^p}^{\frac 1 p}\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf x_n - \mathbf x_m}_p\)





Definition of P-Norm














\(\ds \)

\(<\)







\(\ds \epsilon\)









Hence, $\sequence {x_n^{\paren k}}_{n \mathop \in \N}$ is a Cauchy sequence in $\struct {\R, \size {\, \cdot \,}}$.
From Real Number Line is Complete Metric Space, $\R$ is a complete metric space.
Consequently, $\sequence {x_n^{\paren k}}_{n \mathop \in \N}$ converges in $\struct {\R, \size {\, \cdot \,}}$.

$\Box$
Denote the limit $\ds \lim_{n \mathop \to \infty} \sequence {x_n^{\paren k}}_{n \mathop \in \N} = x^{\paren k}$.
Denote $\sequence {x^{\paren k}}_{k \mathop \in \N} = \mathbf x$.


$\mathbf x$ belongs to $\ell^p$
Let $\epsilon > 0$.
Then:

$\exists N \in \N : \forall n,m \in \N : n,m > N : \norm {\mathbf x_n - \mathbf x_m}_p < \epsilon$.
Let $K \in \N$, $1 \le p < \infty$.
Then:














\(\ds \sum_{k \mathop = 1}^K \size {x_n^{\paren k} - x_m^{\paren k} }^p\)

\(\le\)







\(\ds \sum_{k \mathop = 1}^\infty \size {x_n^{\paren k} - x_m^{\paren k} }^p\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf x_n - \mathbf x_m}_p^p\)




















\(\ds \)

\(<\)







\(\ds \epsilon^p\)




















\(\ds \)

\(<\)







\(\ds \infty\)









Take the limit $m \to \infty$: 

$\ds \sum_{k \mathop = 1}^K \size {x_n^{\paren k} - x^{\paren k}}^p < \ds \epsilon^p < \infty$
Since $K$ was arbitrary, we can take the limit $K \to \infty$.
By definition, $\forall k \in \N : x_n^{\paren k} - x^{\paren k} \in \R$.
In other words, $\mathbf x_n - \mathbf x \in \ell^p$.
But, by assumption, $\mathbf x_n \in \ell^p$.
Therefore:

$\paren {\mathbf x - \mathbf x_n} + \mathbf x_n = \mathbf x \in \ell^p$
$\Box$


$\sequence {\mathbf x_n}_{n \mathop \in \N}$ converges in $\struct {\ell^p, \norm {\, \cdot \,}_p}$ to $\mathbf x$
Let $1 \le p < \infty$. 
Let $\epsilon > 0$.
Fix $N \in \N$, $m > N$.
Then:

$\ds \forall n > N : \norm {\mathbf x_n - \mathbf x_m}_p < \epsilon$
We have that $\sequence {x_n^{\paren k}}_{n \mathop \in \N}$ converges in $\struct {\R, \size {\, \cdot \,}}$.
Take the limit $m \to \infty$:














\(\ds \lim_{m \mathop \to \infty} \norm {\mathbf x_n - \mathbf x_m}_p\)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \paren {\sum_{k \mathop = 0}^\infty \size {x_n^{\paren k} - x_m^{\paren k} }^p }^{\frac 1 p}\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop = 0}^\infty \size {x_n^{\paren k} - x^{\paren k} }^p }^{\frac 1 p}\)





Limit of Composite Function














\(\ds \)

\(=\)







\(\ds \norm {\mathbf x_n - \mathbf x}_p\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)









So $\sequence {\mathbf x_n}_{n \mathop \in \N}$ converges in $\struct {\ell^p, \norm {\, \cdot \,}_p}$.
$\blacksquare$


Also see
Space of Bounded Sequences with Supremum Norm forms Banach Space


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




