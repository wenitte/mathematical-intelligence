# 

Source: https://proofwiki.org/wiki/Normed_Vector_Space_is_Locally_Connected

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space over $\GF$. 

Then $\struct {X, \norm {\, \cdot \,} }$ is locally connected.


Proof
Let $x \in X$.
Let $\epsilon > 0$. 
Let $\map {B_\epsilon} x$ be the open $\epsilon$-ball around $x$ in $\struct {X, \norm {\, \cdot \,} }$. 
From Open Balls form Local Basis of Metric Space, the set $\BB_x = \set {\map {B_\epsilon} x : \epsilon > 0}$ is a local basis at $x$.
From Open Ball in Normed Vector Space is Connected, $\map {B_\epsilon} x$ is connected.
Hence $x$ has a local basis of connected sets.
Since $x$ was arbitrary, $\struct {X, \norm {\, \cdot \,} }$ is locally connected.
$\blacksquare$





