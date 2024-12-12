# 

Source: https://proofwiki.org/wiki/Fixed_Points_of_Projection_in_Plane



Theorem
Let $M$ and $N$ be distinct lines in the plane.


Let $\pr_{M, N}$ be the projection on $M$ along $N$:

$\forall x \in \R^2: \map {\pr_{M, N} } x =$ the intersection of $M$ with the line through $x$ parallel to $N$.

Then $M$ is the set of fixed points of $\pr_{M, N}$ in the sense that:

$x \in M$
if and only if:

$\map {\pr_{M, N} } x = x$


Proof
Sufficient Condition
Let $x \in M$.
Let $\LL$ be the straight line through $x$ which is parallel to $N$.
As $x \in M$ it follows that $x$ is on the intersection of $M$ with $\LL$.
Hence by definition:

$\map {\pr_{M, N} } x = x$
$\Box$


Necessary Condition
Again, let $\LL$ be the straight line through $x$ which is parallel to $N$.
Let $\map {\pr_{M, N} } x = x$.
Then by definition $x$ is on the intersection of $M$ with $\LL$.
Hence by definition of intersection:

$x \in M$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Example $28.5$




