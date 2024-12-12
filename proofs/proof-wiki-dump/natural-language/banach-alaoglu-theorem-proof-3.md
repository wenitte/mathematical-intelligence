# 

Source: https://proofwiki.org/wiki/Banach-Alaoglu_Theorem/Proof_3

Theorem
Let $X$ be a separable normed vector space.
Then the closed unit ball in its normed dual $X^*$ is sequentially compact with respect to the weak-$\ast$ topology.


Proof
Let $B_{X^\ast}$ be the closed unit ball in $X^\ast$. 
Let $w^\ast$ be the weak-$\ast$ topology on $X^\ast$. 
From the definition of the norm of a bounded linear functional, we have: 

$B_{X^\ast} = \set {f : X \to \GF : \cmod {\map f x} \le \norm x \text { and } f \text { is linear} }$
For each $x \in X$, let: 

$K_x = \set {\lambda \in \GF : \cmod \lambda \le \norm x}$
Let: 

$\ds K = \prod_{x \mathop \in X} K_x$
equipped with the product topology. 
Then if $f \in K$ and $x \in X$ we have $\map f x \in K_x$ if and only if $\cmod {\map f x} \le \norm x$. 
Then: 

$B_{X^\ast} = \set {f \in K : f \text { is linear} }$
Let $\pr_x : K \to \GF$ denote the projection onto the $x$th factor, that is: 

$\map {\pr_x} f = \map f x$
for each $f \in K$.
From the definition of the product topology, the product topology on $K$ is the initial topology induced by $\set {\pr_x : x \in X}$. 
From Subspace Topology on Initial Topology is Initial Topology on Restrictions, the subspace topology on $B_{X^\ast}$ inherited by $K$ is the initial topology on $B_{X^\ast}$ induced by $\set {\pr_x \restriction_{B_{X^\ast} } : x \in X}$.
Applying Subspace Topology on Initial Topology is Initial Topology on Restrictions to $\struct {X^\ast, w^\ast}$, this is precisely the subspace topology on $B_{X^\ast}$ inherited by the weak-$\ast$ topology on $X^\ast$. 
From Tychonoff's Theorem, $K$ is compact. 
From Closed Subspace of Compact Space is Compact, it suffices to show that $B_{X^\ast}$ is closed in $\struct {K$.
We may now write: 














\(\ds B_{X^\ast}\)

\(=\)







\(\ds \set {f \in K : \lambda \map f x + \mu \map f y = \map f {\lambda x + \mu y} \text { for all } x, y \in X, \, \lambda, \mu \in \GF}\)




















\(\ds \)

\(=\)







\(\ds \set {f \in K : \map {\paren {\lambda \pr_x + \mu \pr_y - \pr_{\lambda x + \mu y} } } f = 0 \text { for all } x, y \in X, \, \lambda, \mu \in \GF}\)




















\(\ds \)

\(=\)







\(\ds \bigcap_{x, y \in X, \, \lambda, \mu \in \GF} \paren {\lambda \pr_x + \mu \pr_y - \pr_{\lambda x + \mu y} }^{-1} \sqbrk {\set 0}\)









From Linear Combination of Continuous Functions valued in Topological Vector Space is Continuous: 

$\lambda \pr_x + \mu \pr_y - \pr_{\lambda x + \mu y}$ is continuous for each $x, y \in X$ and $\lambda, \mu \in \GF$.
From Continuity Defined from Closed Sets, we have that: 

$\paren {\lambda \pr_x + \mu \pr_y - \pr_{\lambda x + \mu y} }^{-1} \sqbrk {\set 0}$ is closed in $K$.
Since the intersection of closed sets is closed, we have that: 

$\ds \bigcap_{x, y \in X, \, \lambda, \mu \in \GF} \paren {\lambda \pr_x + \mu \pr_y - \pr_{\lambda x + \mu y} }^{-1} \sqbrk {\set 0}$ is closed in $K$.
So $\struct {B_{X^\ast}, w^\ast}$ is closed in $K$.
From Closed Subspace of Compact Space is Compact, $\struct {B_{X^\ast}, w^\ast}$ is compact.
$\blacksquare$





