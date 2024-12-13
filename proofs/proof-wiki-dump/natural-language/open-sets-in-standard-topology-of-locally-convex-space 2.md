# 

Source: https://proofwiki.org/wiki/Open_Sets_in_Standard_Topology_of_Locally_Convex_Space



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \PP}$ be a locally convex space over $\GF$.
Let $\tau$ be the standard topology on $\struct {X, \PP}$.
Let $U \subseteq X$.

Then $U \in \tau$ if and only if for each $x \in U$ there exists $n \in \N$, $p_1, \ldots, p_n \in \PP$ and $\epsilon > 0$ such that: 

$\set {y \in X : \map {p_k} {y - x} < \epsilon \text { for each } 1 \le k \le n} \subseteq U$


Proof
Sufficient Condition
Let $U \subseteq X$ and suppose that: 

for each $x \in U$ there exists $n \in \N$, $p_1, \ldots, p_n \in \PP$ and $\epsilon > 0$ such that:
$U_x = \set {y \in X : \map {p_k} {y - x} < \epsilon \text { for each } 1 \le k \le n} \subseteq U$
For each $p \in \PP$, $\epsilon > 0$ and $y \in X$, define: 

$\map {B_p} {\epsilon, x} = \set {y \in X : \map p {y - x} < \epsilon}$
so that:

$\ds U_x = \set {y \in X : \map {p_k} {y - x} < \epsilon \text { for each } 1 \le k \le n} = \bigcap_{k \mathop = 1}^n \map {B_{p_k} } {\epsilon, x}$
From the definition of the standard topology:

$\SS = \set {\map {B_p} {\epsilon, x} : p \in \PP, \, \epsilon > 0, \, x \in X}$
generates $\tau$.
Since topologies are closed under finite intersection, we have that $U_x \in \tau$. 
Further, since $\tau$ is closed under set union, we have: 

$\ds \bigcup_{x \mathop \in U} U_x \in \tau$
Since $x \in U_x$ for each $x \in U$, we have: 

$\ds U \subseteq \bigcup_{x \mathop \in U} U_x$
On the other hand, since $U_x \subseteq U$ for each $x \in U$, we have: 

$\ds \bigcup_{x \mathop \in U} U_x \subseteq U$
from Union of Subsets is Subset.
So we obtain: 

$\ds U = \bigcup_{x \mathop \in U} U_x$
That is, $U \in \tau$.
$\Box$

Necessary Condition
Suppose that $U \in \tau$ and $x \in U$. 
From the definition of the generated topology:

there exists an indexing set $A$ such that:
for each $\alpha \in A$ there exists $p_{\alpha, 1}, \ldots, p_{\alpha, n_\alpha} \in \PP$, $\epsilon_{\alpha, 1}, \ldots, \epsilon_{\alpha, n_\alpha} > 0$ and $x_{\alpha, 1}, \ldots, x_{\alpha, n_\alpha} \in X$ such that:
$\ds U = \bigcup_{\alpha \mathop \in A} \bigcap_{k \mathop = 1}^{n_\alpha} \map {B_{p_{\alpha, k} } } {\epsilon_{\alpha, k}, x_{\alpha, k} }$
Since $x \in U$, there therefore exists $\alpha \in A$ such that: 

$\ds x \in \bigcap_{k \mathop = 1}^{n_\alpha} \map {B_{p_{\alpha, k} } } {\epsilon_{\alpha, k}, x_{\alpha, k} }$
That is: 

$\map {p_{\alpha, k} } {x_{\alpha, k} - x} < \epsilon_{\alpha, k}$ for each $1 \le k \le n$.
Now note that if $y \in X$ has: 

$\map {p_{\alpha, k} } {y - x} < \epsilon_{\alpha, k} - \map {p_{\alpha, k} } {x_{\alpha, k} - x}$
we have: 

$\map {p_{\alpha, k} } {y - x_{\alpha, k} } \le \map {p_{\alpha, k} } {y - x} + \map {p_{\alpha, k} } {x - x_{\alpha, k} } < \epsilon_{\alpha, k}$
So, take: 

$\ds \epsilon = \min_{1 \le k \le n_\alpha} \paren {\epsilon_{\alpha, k} - \map {p_{\alpha, k} } {x_{\alpha, k} - x} }$
Then for $y \in X$ and each $1 \le k \le n$, we have that: 

$\map {p_{\alpha, k} } {y - x} < \epsilon$
implies: 

$\map {p_{\alpha, k} } {y - x_{\alpha, k} } < \epsilon \le \epsilon_{\alpha, k}$
so that: 

$\ds y \in \bigcap_{k \mathop = 1}^{n_\alpha} \map {B_{p_{\alpha, k} } } {\epsilon_{\alpha, k}, x_{\alpha, k} }$
So, we have: 

$\ds \bigcap_{k \mathop = 1}^{n_\alpha} \map {B_{p_{\alpha, k} } } {\epsilon, x} \subseteq \bigcap_{k \mathop = 1}^{n_\alpha} \map {B_{p_{\alpha, k} } } {\epsilon_{\alpha, k}, x_{\alpha, k} } \subseteq U$
That is, setting $p_k = p_{\alpha, k}$ for each $1 \le k \le n$, and setting $n = n_\alpha$, we obtain: 

$\set {y \in X : \map {p_k} {y - x} < \epsilon \text { for each } 1 \le k \le n} \subseteq U$
as was desired.
$\blacksquare$





