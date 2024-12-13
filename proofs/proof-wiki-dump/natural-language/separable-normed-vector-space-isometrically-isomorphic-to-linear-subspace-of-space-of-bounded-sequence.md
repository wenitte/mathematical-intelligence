# 

Source: https://proofwiki.org/wiki/Separable_Normed_Vector_Space_Isometrically_Isomorphic_to_Linear_Subspace_of_Space_of_Bounded_Sequence

Theorem
Let $\Bbb F \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,} }$ be a separable normed vector space over $\Bbb F$.
Let $\struct {\map {\ell^\infty} {\Bbb F}, \norm {\, \cdot \,}_\infty}$ be the normed vector space of bounded sequences.

Then there exists a linear subspace $Y$ of $\map {\ell^\infty} {\Bbb F}$ such that: 

$X$ is isometrically isomorphic to $Y$.


Proof
Let $\mathcal S = \set {x_n : n \in \N}$ be a countable everywhere dense subset of $X$. 
By Existence of Support Functional, for each $n \in \N$ there exists $f_n \in X^\ast$ such that $\norm {f_n}_{X^\ast} = 1$ and $\map {f_n} {x_n} = \norm {x_n}$.
Then, for each $x \in X$, we have: 

$\cmod {\map {f_n} x} \le \norm x$
from Supremum Operator Norm as Universal Upper Bound.
So, we have: 

$\ds \sup_{n \in \N} \cmod {\map {f_n} x} \le \norm x$
So we can define $T : X \to \map {\ell^\infty} {\Bbb F}$ by: 

$T x = \sequence {\map {f_n} x}_{n \mathop \in \N} = \tuple {\map {f_1} x, \map {f_2} x, \ldots}$
From Image of Vector Subspace under Linear Transformation is Vector Subspace, $T \sqbrk U$ is a vector subspace of $\map {\ell^\infty} {\Bbb F}$.
It remains to show that $T$ is a linear isometry. 
Let $\alpha, \beta \in \Bbb F$ and $x, y \in X$. 
We have:














\(\ds \map T {\alpha x + \beta y}\)

\(=\)







\(\ds \sequence {\map {f_n} {\alpha x + \beta y} }_{n \mathop \in \N}\)




















\(\ds \)

\(=\)







\(\ds \sequence {\alpha \map {f_n} x + \beta \map {f_n} y}_{n \mathop \in \N}\)




















\(\ds \)

\(=\)







\(\ds \sequence {\alpha \map {f_n} x}_{n \mathop \in \N} + \sequence {\beta \map {f_n} y}_{n \mathop \in \N}\)




















\(\ds \)

\(=\)







\(\ds \alpha \sequence {\map {f_n} x}_{n \mathop \in \N} + \beta \sequence {\map {f_n} y}_{n \mathop \in \N}\)




















\(\ds \)

\(=\)







\(\ds \alpha T x + \beta T y\)









so $T$ is a linear transformation.
Also, for $x \in X$:














\(\ds \norm {T x}_\infty\)

\(=\)







\(\ds \sup_{n \mathop \in \N} \cmod {\map {f_n} x}\)




















\(\ds \)

\(\le\)







\(\ds \norm x\)





from the computation above



So $T$ is a bounded linear transformation.
So by Continuity of Linear Transformations, $T$ is continuous. 
Let $x_k \in \mathcal S$.
Note that while: 

$\ds \sup_{n \mathop \in \N} \cmod {\map {f_n} {x_k} } \le \norm {x_k}$
we have: 

$\map {f_k} {x_k} = \norm {x_k}$
So we actually have: 

$\ds \norm {T x_k}_\infty = \sup_{n \mathop \in \N} \cmod {\map {f_n} {x_k} } = \norm {x_k}$
for each $k \in \N$.
Now take general $x \in X$.
Then there exists a sequence $\sequence {n_k}_{k \mathop \in \N}$ such that: 

$x_{n_k} \to x$
as $k \to \infty$.
Since $T$ is continuous , we have: 

$T x_{n_k} \to T x$
as $k \to \infty$, by Sequential Continuity is Equivalent to Continuity in Metric Space.
So taking $k \to \infty$ in: 

$\norm {T x_{n_k} }_\infty = \norm {x_{n_k} }$
we have: 

$\norm {T x}_\infty = \norm x$
for each $x \in X$.
So $T : X \to Y$ is a linear isometry.
Hence $X$ and $Y$ are isometrically isomorphic.
$\blacksquare$





