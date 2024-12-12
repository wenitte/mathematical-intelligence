# 

Source: https://proofwiki.org/wiki/Characterization_of_Convergent_Net_in_Weak-*_Topology



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \tau}$ be a topological vector space.
Let $X^\ast$ be the topological dual of $X$. 
Let $w^\ast$ be the weak-$\ast$ topology on $X$.
Let $f \in X^\ast$. 
Let $\struct {\Lambda, \preceq}$ be a directed set.
Let $\family {f_\lambda}_{\lambda \in \Lambda}$ be a net. 

Then:

$\family {f_\lambda}_{\lambda \in \Lambda}$ converges to $f$ in $\struct {X^\ast, w^\ast}$
if and only if:

for each $x \in X$, the net $\family {\map {f_\lambda} x}_{\lambda \in \Lambda}$ converges to $\map f x$ in $\GF$.


Proof
Necessary Condition
Suppose that: 

$\family {f_\lambda}_{\lambda \in \Lambda}$ converges to $f$ in $\struct {X^\ast, w^\ast}$
Let $x \in X$. 
From Characterization of Continuity of Linear Functional in Weak-* Topology, $x^\wedge : \struct {X^\ast, w^\ast} \to \GF$ is continuous.
From Characterization of Continuity in terms of Nets, we have that: 

for each $f \in X^\ast$, the net $\family {\map {x^\wedge} {f_\lambda} }_{\lambda \in \Lambda} = \family {\map {f_\lambda} x}_{\lambda \in \Lambda}$ converges to $\map f x$.
$\Box$


Sufficient Condition
Suppose that: 

for each $f \in X^\ast$, the net $\family {\map f {x_\lambda} }_{\lambda \in \Lambda}$ converges to $\map f x$.
Let $U$ be an open neighborhood of $f$ in $\struct {X^\ast, w^\ast}$.
From Open Sets in Weak-* Topology of Topological Vector Space, there exists $x_1, \ldots, x_n \in X$ and $\epsilon > 0$ such that: 

$\set {g \in X^\ast : \cmod {\map f {x_i} - \map g {x_i} } < \epsilon \text { for each } 1 \le i \le n} \subseteq U$
Then for each $1 \le i \le n$, we have that: 

$\family {\map {f_\lambda} {x_i} }_{\lambda \in \Lambda}$ converges to $\map f {x_i}$.
So for each $1 \le i \le n$ there exists $\lambda_i \in \Lambda$ such that for all $\lambda \in \Lambda$ with $\lambda_i \preceq \lambda$ we have:

$\cmod {\map {f_\lambda} {x_i} - \map f {x_i} } < \epsilon$
from Characterization of Convergent Net in Metric Space.
From Existence of Upper Bound of Finite Subset of Directed Set, there exists $\lambda_\ast \in \Lambda$ such that $\lambda_i \preceq \lambda_\ast$ for each $1 \le i \le n$. 
Then, for $\lambda \in \Lambda$ with $\lambda_\ast \preceq \lambda$, we have $\lambda_i \preceq \lambda$ for each $1 \le i \le n$ by transitivity. 
Then: 

$\cmod {\map {f_\lambda} {x_i} - \map f {x_i} } < \epsilon$
for each $1 \le i \le n$ and $\lambda_\ast \preceq \lambda$. 
So $f_\lambda \in U$ for $\lambda_\ast \preceq \lambda$. 
So $\family {f_\lambda}_{\lambda \in \Lambda}$ converges to $f$ in $\struct {X^\ast, w^\ast}$.
$\blacksquare$





