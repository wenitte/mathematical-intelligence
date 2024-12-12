# 

Source: https://proofwiki.org/wiki/Convex_Open_Neighborhood_of_Origin_in_Topological_Vector_Space_contains_Balanced_Convex_Open_Neighborhood

Theorem
Let $\Bbb F \in \set {\R, \C}$. 
Let $X$ be a topological vector space over $\Bbb F$. 
Let $U$ be a convex open neighborhood of ${\mathbf 0}_X$.

Then there exists a balanced convex open neighborhood $V$ of ${\mathbf 0}_X$ with $V \subseteq U$.


Proof
Let: 

$\ds A = \bigcap_{\cmod \alpha = 1} \alpha U$
From Open Neighborhood of Origin in Topological Vector Space contains Balanced Open Neighborhood, there exists an balanced open neighborhood $W$ of ${\mathbf 0}_X$ with $W \subseteq U$.
Since $W$ is balanced, we have: 

$\alpha W \subseteq W$
for all $\alpha \in \Bbb F$ with $\cmod \alpha = 1$.
Note that if $\alpha \in \Bbb F$ has $\cmod \alpha = 1$, then we have $\cmod {\alpha^{-1} } = 1$, so we also have: 

$\alpha^{-1} W \subseteq W$
giving:

$W \subseteq \alpha W$
and so: 

$W = \alpha W$
Swapping $\alpha$ for $\alpha^{-1}$, we also get:

$W = \alpha^{-1} W$
So, for each $\alpha \in \Bbb F$ with $\cmod \alpha = 1$ we have: 

$\alpha^{-1} W \subseteq U$
and so:

$W \subseteq \alpha U$
This gives, from Set Intersection Preserves Subsets:

$W \subseteq A$
Since $W$ is open and contains ${\mathbf 0}_X$, the interior $A^\circ$ is an open neighborhood of ${\mathbf 0}_X$.
Since: 

$A \subseteq \alpha U$
for each $\alpha \in \Bbb F$ with $\cmod \alpha = 1$, we in particular have: 

$A \subseteq U$
Since $A^\circ \subseteq A$, we have: 

$A^\circ \subseteq U$
We show that $V = A^\circ$ is our desired balanced convex open neighborhood.
Since $A$ is the intersection of convex sets, it is convex by Intersection of Convex Sets is Convex Set (Vector Spaces).
From Interior of Convex Set in Topological Vector Space is Convex, $A^\circ$ is then convex.
It remains to show that $A^\circ$ is balanced.
From Interior of Balanced Set containing Origin in Topological Vector Space is Balanced, it suffices to show that $A$ is balanced.
Let $\lambda \in \Bbb F$ have $\cmod \lambda \le 1$.
Pick $r \in \closedint 0 1$ and $\beta \in \Bbb F$ with $\cmod \beta = 1$ such that $\lambda = r \beta$.
Then: 














\(\ds \lambda A\)

\(=\)







\(\ds r \beta A\)




















\(\ds \)

\(=\)







\(\ds r \beta \bigcap_{\cmod \alpha = 1} \alpha U\)




















\(\ds \)

\(=\)







\(\ds \bigcap_{\cmod \alpha = 1} r \beta \alpha U\)





Dilation of Intersection of Subsets of Vector Space



Note that for fixed $\beta \in \Bbb F$ with $\cmod \beta = 1$, $\beta \alpha$ runs through all $\gamma \in \Bbb F$ with $\cmod \gamma = 1$, setting $\alpha = \gamma/\beta$. 
Conversely, $\cmod {\beta \alpha} = 1$ whenever $\cmod \alpha = 1$ and $\cmod \beta = 1$. 
So, we have: 

$\ds \bigcap_{\cmod \alpha = 1} r \beta \alpha U = \bigcap_{\cmod \gamma = 1} r \gamma U$
From Dilation of Convex Set in Vector Space is Convex, we have that: 

$\gamma U$ is convex for each $\gamma \in \Bbb F$ with $\cmod \gamma = 1$.
So, we have: 

$r \gamma U + \paren {1 - r} \gamma U \subseteq \gamma U$
and in particular: 

$r \gamma U \subseteq \gamma U$
for each $\gamma \in \Bbb F$ with $\cmod \gamma = 1$.
From Set Intersection Preserves Subsets, we therefore have: 

$\ds \bigcap_{\cmod \gamma = 1} r \gamma U \subseteq \bigcap_{\cmod \gamma = 1} \gamma U = A$
So we have: 

$\lambda A \subseteq A$
for all $\lambda \in \Bbb F$ with $\cmod \lambda \le 1$. 
So $A$ is balanced.
So, from Interior of Balanced Set containing Origin in Topological Vector Space is Balanced, $A^\circ$ is balanced.
So $V = A^\circ$ is a balanced convex open neighborhood $V$ of ${\mathbf 0}_X$ with $V \subseteq U$.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.14$: Theorem




