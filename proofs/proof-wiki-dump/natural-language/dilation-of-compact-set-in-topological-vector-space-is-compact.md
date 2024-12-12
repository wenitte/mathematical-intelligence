# 

Source: https://proofwiki.org/wiki/Dilation_of_Compact_Set_in_Topological_Vector_Space_is_Compact

Theorem
Let $k$ be a topological field.
Let $X$ be a topological vector space over $X$. 
Let $K$ be a compact subset of $X$. 
Let $t \in k \setminus \set {0_k}$. 

Then $t K$ is compact.


Proof 1
Let $\family {U_\alpha : \alpha \in I}$ be open sets such that: 

$\ds t K \subseteq \bigcup_{\alpha \mathop \in I} U_\alpha$
From Dilation of Union of Subsets of Vector Space, we have: 

$\ds K \subseteq \bigcup_{\alpha \mathop \in I} \paren {t^{-1} U_\alpha}$
From Dilation of Open Set in Topological Vector Space is Open, we have that $t^{-1} U_\alpha$ is open.
Since $K$ is compact, there exists $t^{-1} U_1, t^{-1} U_2, \ldots, t^{-1} U_n$ such that: 

$\ds K \subseteq \bigcup_{i \mathop = 1}^n \paren {t^{-1} U_i}$
Then, using Dilation of Union of Subsets of Vector Space again we have: 

$\ds t K \subseteq \bigcup_{i \mathop = 1}^n U_i$
So every open cover of $t K$ has a finite subcover.
So $t K$ is compact.
$\blacksquare$


Proof 2
From Dilation Mapping on Topological Vector Space is Continuous, the mapping $c_t : X \to X$ defined by:

$\map {c_t} x = t x$
for each $x \in X$ is continuous.
From Continuous Image of Compact Space is Compact:

$\map {c_t} K = t K$ is compact.
$\blacksquare$





