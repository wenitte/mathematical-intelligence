# 

Source: https://proofwiki.org/wiki/Fixed_Points_of_Orthogonal_Projection

Theorem
Let $\struct {H, \innerprod \cdot \cdot}$ be a Hilbert space.
Let $\norm \cdot$ be the inner product norm of $H$.
Let $K$ be a closed linear subspace of $H$.
Let $P_K$ denote the orthogonal projection on $K$.
Let $h \in H$. 

Then: 

$\map {P_K} h = h$
if and only if $h \in K$. 


Proof
Let $d$ be the metric induced by $\norm \cdot$. 
Let $h \in H$.
By the definition of orthogonal projection, we have: 

$\map d {h, \map {P_K} h} = \map d {h, K}$
Note that by the definition of a metric, we have that: 

$\map d {h, \map {P_K} h} = 0$
if and only if:

$h = \map {P_K} h$
So, we have: 

$h = \map {P_K} h$
if and only if:

$\map d {h, K} = 0$
Since $K$ is closed, from Subset of Metric Space is Closed iff contains all Zero Distance Points, this is the case if and only if: 

$h \in K$
$\blacksquare$





