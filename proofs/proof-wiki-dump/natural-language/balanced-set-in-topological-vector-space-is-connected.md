# 

Source: https://proofwiki.org/wiki/Balanced_Set_in_Topological_Vector_Space_is_Connected

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a topological vector space over $\GF$.
Let $B \subseteq X$ be a balanced set. 

Then $B$ is connected.


Proof
We first show that $B$ is path connected.
Let $x \in B$. 
Define $p : \closedint 0 1 \to X$ by: 

$\map p t = t x$
We clearly have: 

$\map p 0 = 0$
and:

$\map p 1 = x$
Since $B$ is balanced, we have: 

$t x \in B$
for each $t \in \closedint 0 1$.
It remains to show that $p$ is continuous.
Define $m : \closedint 0 1 \times X$ by:

$\map m {\lambda, x} = \lambda x$
for each $\tuple {\lambda, x} \in \closedint 0 1 \times X$.
From Restriction of Continuous Mapping is Continuous, we have that $m$ is continuous. 
We can then see that $p$ is the $x$-horizontal section of $m$. 
From Horizontal Section of Continuous Function is Continuous, we have that $p$ is continuous.
So every $x \in B$ connects to $0 \in B$.
So from Path-Connected iff Path-Connected to Point, we have that $B$ is path-connected.
From Path-Connected Space is Connected, $B$ is connected.
$\blacksquare$





