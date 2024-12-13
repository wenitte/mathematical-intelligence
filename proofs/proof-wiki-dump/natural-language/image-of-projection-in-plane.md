# 

Source: https://proofwiki.org/wiki/Image_of_Projection_in_Plane

Theorem
Let $M$ and $N$ be distinct lines in the plane.


Let $\pr_{M, N}$ be the projection on $M$ along $N$:

$\forall x \in \R^2: \map {\pr_{M, N} } x =$ the intersection of $M$ with the line through $x$ parallel to $N$.

Then $M$ is the image of $\pr_{M, N}$.


Proof
Let $x \in \R^2$ be arbitrary.
By definition, the image of $x$ is the intersection of $M$ with the line through $x$ parallel to $N$.
Therefore $\map {\pr_{M, N} } x \in M$.
Hence:

$\Img {\pr_{M, N} } \subseteq M$.

Now consider $y \in M$.
By Playfair's axiom there exists exactly one straight line $L$ parallel to $N$ passing through $y$.
Hence $y$ is the image of every point on $L$.
As $y$ is arbitrary, it follows that each point on $M$ is the image of some straight line in $\R^2$ under $\pr_{M, N}$.
That is:

$M \subseteq \Img {\pr_{M, N} }$

The result follows by definition of set equality.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Example $28.5$




