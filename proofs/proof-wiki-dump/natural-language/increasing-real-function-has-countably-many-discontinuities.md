# 

Source: https://proofwiki.org/wiki/Increasing_Real_Function_has_Countably_Many_Discontinuities



Theorem
Let $f: \R \to \R$ be an increasing real function.

Then $f$ has at most countably many discontinuities.


Corollary
Let $f: \R \to \R$ be an increasing real function.
Let $D$ be the set of discontinuities of $f$. 

Then $\R \setminus D$ is everywhere dense in $\R$. 


Proof
Let $D \subseteq \R$ be the set of discontinuities of $f$. 
From Limit of Monotone Real Function: Increasing: Corollary, we have that:

$\ds \lim_{x \mathop \to b^-} \map f x = l_x$ and $\ds \lim_{x \mathop \to b^+} \map f x = r_x$
both exist for each $x \in \R$.
Further:

$l_x \le r_x$

Let $x \in D$. 
Then since:

$f$ is discontinuous at $x$
both the left and right limit exist at $x$
we have:

$l_x \ne r_x$
Hence:

$l_x < r_x$.

We argue that the open intervals $\openint {l_x} {r_x}$ are disjoint.
Let $x, y \in D$ be such that $x < y$. 
Let $\xi \in \R$ be such that $x < \xi < y$.
Then by Limit of Increasing Function: Corollary, we have:

$r_x \le \map f \xi \le l_y$
Hence if $x < y$, we have:

$\openint {l_x} {r_x} \cap \openint {l_y} {r_y} = \O$
By swapping $x$ and $y$, we have:

$\openint {l_x} {r_x} \cap \openint {l_y} {r_y} = \O$
for $x \ne y$ with $x, y \in D$. 
Hence $\DD = \set {\openint {l_x} {r_x} : x \in D}$ is a set of disjoint open intervals.
From:

Real Number Line is Separable
Separable Space satisfies Countable Chain Condition
$\DD$ is countable.
Since the map $g : D \to \DD$ defined by:

$\map g x = \openint {l_x} {r_x}$
for each $x \in D$ is a bijection, it follows that $D$ is countable.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $13.12$




