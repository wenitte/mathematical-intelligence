# 

Source: https://proofwiki.org/wiki/Condition_for_Linear_Dependence_of_Linear_Functionals_in_terms_of_Kernel/Proof_2

Theorem
Let $V$ be a vector space over a field $\GF$.
Let $f, f_1, \ldots, f_n: V \to \GF$ be linear functionals.
Suppose that:

$\ds \bigcap_{i \mathop = 1}^n \ker f_i \subseteq \ker f$
where $\ker f$ denotes the kernel of $f$.

Then there exist $\alpha_1, \ldots, \alpha_n \in \GF$ such that:

$\ds \forall v \in V: \map f v = \sum_{i \mathop = 1}^n \alpha_i \map {f_i} v$
That is: 

$f \in \span \set {f_1, \ldots, f_n}$


Proof
Define $T : X \to {\GF}^n$ by: 

$\map T x = \paren {\map {g_1} x, \map {g_2} x, \ldots, \map {g_n} x}$
for each $x \in X$.
We show that $T$ is linear. 
Let $x, y \in X$ and $\alpha, \beta \in \GF$. 
We have: 














\(\ds \map T {\alpha x + \beta y}\)

\(=\)







\(\ds \tuple {\map {g_1} {\alpha x + \beta y}, \map {g_2} {\alpha x + \beta y}, \ldots, \map {g_n} {\alpha x + \beta y} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {\alpha \map {g_1} x + \beta \map {g_1} y, \alpha \map {g_2} x + \beta \map {g_2} y, \ldots, \alpha \map {g_n} x + \beta \map {g_n} y}\)





$g_i$ is linear














\(\ds \)

\(=\)







\(\ds \alpha \tuple {\map {g_1} x, \ldots, \map {g_n} x} + \beta \tuple {\map {g_1} y, \ldots, \map {g_n} y}\)




















\(\ds \)

\(=\)







\(\ds \alpha T x + \beta T y\)









so $T$ is linear.
Now, we have $\map T x = 0$ if and only if $\map {g_i} x = 0$ for each $x \in X$. 
That is, if and only if:

$\ds x \in \bigcap_{i \mathop = 1}^n \ker g_i$
so that:

$\ds \ker T = \bigcap_{i \mathop = 1}^n \ker g_i \subseteq \ker f$
Now, suppose that $x, y \in X$ have $T x = T y$.
Then by the linearity of $T$, we have: 

$\map T {x - y} = 0$
so $x - y \subseteq \ker f$.
So $\map f {x - y} = 0$, and hence $\map f x = \map f y$, for these $x, y \in X$.
We can therefore define a map $\widetilde f : \Img T \to \GF$ by: 

$\map {\widetilde f} {\map T x} = \map f x$
for each $x \in \Img T$.
From Image of Vector Subspace under Linear Transformation is Vector Subspace, $\Img T$ is a vector subspace of ${\GF}^n$.
Let $\set {e_1, \ldots, e_n}$ be the standard basis for ${\GF}^n$.
Let $\set {v_1, \ldots, v_k}$ be a basis of $\Img T$.
From Linearly Independent Set is Contained in some Basis, $\set {v_1, \ldots, v_k}$ is contained in some basis $\set {v_1, \ldots, v_n}$ of ${\GF}^n$. 
Define the mapping $h : {\GF}^n \to \GF$ by taking: 

$\ds \map h {v_i} = \map {\widetilde f} {v_i}$ for $1 \le i \le k$
and:

$\ds \map h {v_i} = 0$ for $k < i \le n$
and taking: 

$\ds \map h {\sum_{i \mathop = 1}^n \alpha_i v_i} = \sum_{i \mathop = 1}^n \alpha_i \map h {v_i}$
for scalars $\alpha_1, \alpha_2, \ldots, \alpha_n \in \GF$.
By construction, $h$ is a linear functional.
We then have, for each $x \in X$: 














\(\ds \map f x\)

\(=\)







\(\ds \map {\widetilde f} {\map T x}\)




















\(\ds \)

\(=\)







\(\ds \map h {\map T x}\)





since $h$ and $\widetilde f$ coincide on $\Img T$














\(\ds \)

\(=\)







\(\ds \map h {\sum_{i \mathop = 1}^n \map {g_i} x e_i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \map {g_i} x \map h {e_i}\)









with $\map h {e_i} \in \GF$.
So we have: 

$f \in \span \set {g_1, \ldots, g_n}$
$\blacksquare$





