# 

Source: https://proofwiki.org/wiki/Dilation_of_Convex_Set_in_Vector_Space_is_Convex

Theorem
Let $\Bbb F \in \set {\R, \C}$. 
Let $X$ be a vector space over $\Bbb F$. 
Let $C \subseteq X$ be a convex subset of $X$.
Let $\alpha \in \Bbb F$. 

Then $\alpha C$ is convex.


Proof
Consider first the case $\alpha = 0$.
We then have $\alpha C = \set { {\mathbf 0}_X}$.
This is convex by Singleton is Convex Set.

Now consider the case $\alpha \ne 0$. 
Let $u, v \in \alpha C$ and $t \in \closedint 0 1$. 
Then there exists $x, y \in C$ such that $u = \alpha x$ and $v = \alpha y$.
Since $C$ is convex, we have: 

$t x + \paren {1 - t} y \in C$
Then, we have: 

$\alpha t x + \alpha \paren {1 - t} y \in \alpha C$
That is: 

$t u + \paren {1 - t} v = t \paren {\alpha x} + \paren {1 - t} \paren {\alpha y} \in \alpha C$
Since $u, v \in \alpha C$ and $t \in \closedint 0 1$ were arbitrary, $\alpha C$ is convex.
$\blacksquare$





