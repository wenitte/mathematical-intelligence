# 

Source: https://proofwiki.org/wiki/Quotient_Metric_on_Vector_Space_induces_Quotient_Topology

Theorem
Let $K$ be a topological field.
Let $X$ be a vector space over $K$.
Let $d$ be an invariant metric such that the induced topology $\tau$ makes $\struct {X, \tau}$ a topological vector space.
Let $N$ be a closed linear subspace of $X$.
Let $X/N$ be the quotient vector space of $X$ modulo $N$.
Let $\struct {X/N, \tau_N}$ be the quotient topological vector space of $X$ modulo $N$.
Let $d_N$ be the quotient metric on $X/N$ induced by $d$.

Then $d_N$ induces $\tau_N$.


Proof
From Quotient Metric on Vector Space is Invariant Metric iff Vector Subspace is Closed, $d_N$ is a metric and hence:

$\struct {X/N, d_N}$ is a metric space.
Let $\pi : X \to X/N$ be the quotient mapping.
We first show that:

$\pi \sqbrk {\set {x \in X : \map d {x, {\mathbf 0}_X} < r} } = \set {\map \pi x \in X/N : \map {d_N} {\map \pi x, {\mathbf 0}_{X/N} } < r}$
Let $x \in \set {x \in X : \map d {x, {\mathbf 0}_X} < r}$.
We want to show that $\map \pi x \in \set {\map \pi x \in X/N : \map {d_N} {\map \pi x, {\mathbf 0}_{X/N} } < r}$. 
Since $N$ is a linear subspace, we have ${\mathbf 0}_X \in N$.
Hence, we have:

$\ds \inf_{z \mathop \in N} \map d {x - {\mathbf 0}_X, z} \le \map d {x, {\mathbf 0}_X} < r$
Hence, we have:

$\map {d_N} {\map \pi x, {\mathbf 0}_{X/N} } < r$
So, we have:

$\pi \sqbrk {\set {x \in X : \map d {x, {\mathbf 0}_X} < r} } \subseteq \set {\map \pi x \in X/N : \map {d_N} {\map \pi x, {\mathbf 0}_{X/N} } < r}$

Now let $\map \pi x \in \set {x \in X : \map {d_N} {\map \pi x, {\mathbf 0}_{X/N} } < r}$. 
Then, we have:

$\ds \inf_{z \mathop \in N} \map d {x, z} < r$
Since $d$ is invariant metric, we have that:

$\ds \inf_{z \mathop \in N} \map d {x - z, {\mathbf 0}_X} < r$
Hence by the definition of infimum there exists $z' \in N$ such that:

$\map d {x - z', {\mathbf 0}_X} < r$
By Kernel of Quotient Mapping, we have that $\map \pi x = \map \pi {x - z'}$.
We have $x - z' \in \set {x \in X : \map d {x, {\mathbf 0}_X} < r}$, so we obtain:

$\map \pi x \in \pi \sqbrk {\set {x \in X : \map d {x, {\mathbf 0}_X} < r} }$
Hence we have:

$\set {\map \pi x \in X/N : \map {d_N} {\map \pi x, {\mathbf 0}_{X/N} } < r} \subseteq \pi \sqbrk {\set {x \in X : \map d {x, {\mathbf 0}_X} < r} }$
So we can conclude that: 

$\pi \sqbrk {\set {x \in X : \map d {x, {\mathbf 0}_X} < r} } = \set {\map \pi x \in X/N : \map {d_N} {\map \pi x, {\mathbf 0}_{X/N} } < r}$

For $\epsilon > 0$ and $x \in X$, let $\map {B_\epsilon^d} x$ be the open ball in $\struct {X, d}$ of radius $\epsilon$ and center $x$.
For $\epsilon > 0$ and $\map \pi x \in X/N$, let $\map {B_\epsilon^{d_N} } x$ be the open ball in $\struct {X/N, d_N}$ of radius $\epsilon$ and center $\map \pi x$.
We have already shown that:

$\pi \sqbrk {\map {B_\epsilon^d} { {\mathbf 0}_X} } = \map {B_\epsilon^{d_N} } { {\mathbf 0}_{X/N} }$
Let $x \in X$. 
Then, we have: 














\(\ds \pi \sqbrk {\map {B_\epsilon^d} x}\)

\(=\)







\(\ds \pi \sqbrk {\map {B_\epsilon^d} { {\mathbf 0}_X} + x}\)





Translation of Open Ball in Invariant Pseudometric on Vector Space














\(\ds \)

\(=\)







\(\ds \pi \sqbrk {\map {B_\epsilon^d} { {\mathbf 0}_X} } + \map \pi x\)





Image of Translation of Set under Linear Transformation is Translation of Image














\(\ds \)

\(=\)







\(\ds \map {B_\epsilon^{d_N} } { {\mathbf 0}_{X/N} } + \map \pi x\)




















\(\ds \)

\(=\)







\(\ds \map {B_\epsilon^{d_N} } {\map \pi x}\)





Translation of Open Ball in Invariant Pseudometric on Vector Space




We now aim to show that the open sets of $\struct {X/N, d_N}$ are precisely the sets of the form $\pi \sqbrk V$ for $V \in \tau$. 
From Open Set in Quotient Topological Vector Space, we will then have that the topology induced by $d_N$ is precisely $\tau_N$.
First let $U$ be open in $\struct {X/N, d_N}$. 
From the definition of an open set in a metric space, for each $\mathbf x \in U$ there exists a real number $\map \epsilon {\map \pi x} > 0$ such that together we have:

$\ds U = \bigcup_{\map \pi x \in U} \map {B_{\map \epsilon {\map \pi x} }^{d_N} } {\map \pi x}$
We now have:














\(\ds U\)

\(=\)







\(\ds \bigcup_{\map \pi x \in U} \map {B_{\map \epsilon {\map \pi x} }^{d_N} } {\map \pi x}\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{\map \pi x \in U} \pi \sqbrk {\map {B_{\map \epsilon {\map \pi x} }^d} x}\)




















\(\ds \)

\(=\)







\(\ds \pi \sqbrk {\bigcup_{x \in \pi^{-1} \sqbrk U} \map {B_{\map \epsilon {\map \pi x} }^d} x}\)





Image of Union under Mapping: General Result



As the union of open sets:

$\ds \bigcup_{x \in \pi^{-1} \sqbrk U} \map {B_{\map \epsilon {\map \pi x} }^d} x$ is open in $\struct {X, d}$.
Hence every open set has the form $\pi \sqbrk V$ for some $V$ open in $\struct {X, d}$.
Conversely, let $V$ be an open set in $\struct {X, d}$. 
Again, from the definition of an open set in a metric space, for each $x \in V$ there exists $\epsilon_x > 0$ such that:

$\ds V = \bigcup_{x \in V} \map {B_{\epsilon_x}^d} x$
We then have, from Image of Union under Mapping: General Result:

$\ds \pi \sqbrk V = \bigcup_{x \in V} \pi \sqbrk {\map {B_{\epsilon_x}^d} x} = \bigcup_{x \in V} \map {B_\epsilon^{d_N} } {\map \pi x}$
So $\pi \sqbrk V$ is the union of open sets in $\struct {X/N, d_N}$. 
Hence every set of the form $\pi \sqbrk V$ with $V$ open in $\struct {X, d}$, is open in $\struct {X/N, d_N}$. 
So the open sets of $\struct {X/N, d_N}$ are precisely those sets of the form $\pi \sqbrk V$ for $V$ open in $\struct {X, d}$.
By Open Set in Quotient Topological Vector Space, we obtain that the topology induced by $d_N$ is $\tau_N$.
$\blacksquare$





