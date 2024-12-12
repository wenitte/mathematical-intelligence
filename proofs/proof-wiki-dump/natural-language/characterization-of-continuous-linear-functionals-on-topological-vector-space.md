# 

Source: https://proofwiki.org/wiki/Characterization_of_Continuous_Linear_Functionals_on_Topological_Vector_Space



Theorem
Let $\Bbb F \in \set {\R, \C}$. 
Let $X$ be a topological vector space over $\Bbb F$.
Let $f$ be a linear functional on $X$ such that $\map f x \ne 0$ for some $x \in X$. 

The following statements are equivalent:

$(1) \quad$ $f$ is continuous
$(2) \quad$ $\ker f$ is closed, where $\ker f$ is the kernel of $f$
$(3) \quad$ $\ker f$ is not everywhere dense in $X$
$(4) \quad$ $f$ is bounded in a open neighborhood of ${\mathbf 0}_X$.


Proof
$(1)$ implies $(2)$
Suppose that $f$ is continuous.
From the definition of the kernel, we have: 

$\ker f = f^{-1} \sqbrk {\set 0}$
Since $\set 0$ is closed in $\GF$, we have that: 

$f^{-1} \sqbrk {\set 0}$ is closed
from Continuity Defined from Closed Sets.
$\Box$


$(2)$ implies $(3)$
Suppose that $\ker f$ is closed.
Since $\map f x \ne 0$ for some $x \in X$, we have $\ker f \ne X$. 
From Set is Closed iff Equals Topological Closure, we have: 

$\paren {\ker f}^- = \ker f \ne X$
where $\paren {\ker f}^-$ denotes the closure of $\ker f$. 
So $\ker f$ is not everywhere dense in $X$.
$\Box$


$(3)$ implies $(4)$
Suppose that $\ker f$ is not everywhere dense in $X$.
From Everywhere Dense iff Interior of Complement is Empty, it follows that the interior of $X \setminus \ker f$ is non-empty.
That is, there exists a non-empty open set $W$ disjoint from $\ker f$. 
Let $x \in W$.
From Translation of Open Set in Topological Vector Space is Open, $U = W - x$ is an open neighborhood of ${\mathbf 0}_X$.
From Open Neighborhood of Origin in Topological Vector Space contains Balanced Open Neighborhood, there exists a balanced open neighborhood $V$ of ${\mathbf 0}_X$ with $V \subseteq U$ with: 

$\paren {x + V} \cap \ker f = \O$
From Image of Balanced Set under Linear Transformation is Balanced, $f \sqbrk V$ is a balanced subset of $\Bbb F$. 
Applying:

Balanced Subset of Real Numbers is Bounded or Entire Space if $\Bbb F = \R$
Balanced Subset of Complex Plane is Bounded or Entire Space if $\Bbb F = \C$
we have that $f \sqbrk V$ is:

a bounded subset of $\R$ if $\Bbb F = \R$
a bounded subset of $\C$ if $\Bbb F = \C$
or $f \sqbrk V = \Bbb F$. 
If $f \sqbrk V$ is a bounded subset of $\R$ or a bounded subset of $\C$, $(4)$ immediately follows since $V$ is an open neighborhood of ${\mathbf 0}_X$.
Now suppose that $f \sqbrk V = \Bbb F$.
Then there exists $y \in V$ such that: 

$\map f y = -\map f x$
Then, we have $\map f {x + y} = 0$ from linearity, and so $x + y \in \ker f$. 
But since $y \in V$, we have $x + y \in x + V$.
So:

$x + y \in \paren {x + V} \cap \ker f$.
This contradicts that $\paren {x + V} \cap \ker f = \O$.
So we must have that $f \sqbrk V$ is a bounded subset of $\R$ or a bounded subset of $\C$, so $(4)$ holds.
$\Box$


$(4)$ implies $(1)$
Suppose that $f$ is bounded in a open neighborhood of ${\mathbf 0}_X$.
From Linear Transformation between Topological Vector Spaces Continuous iff Continuous at Origin, it suffices to establish that $f$ is continuous at ${\mathbf 0}_X$.
Let $V$ be an open neighborhood of $0 \in \Bbb F$. 
Using:

the definition of an open set in $\R$ if $\Bbb F = \R$
the definition of an open set in $\C$ if $\Bbb F = \C$
there exists $r > 0$ such that if $\alpha \in \Bbb F$ has $\cmod \alpha < r$ we have $\alpha \in V$.
Since $f$ is bounded in a open neighborhood of ${\mathbf 0}_X$, there exists an open neighborhood $U$ of ${\mathbf 0}_X$  and $M > 0$ such that: 

$\cmod {\map f x} < M$ for each $x \in U$.
Set: 

$\ds W = \frac r M V$
From Dilation of Open Set in Topological Vector Space is Open, $W$ is an open neighborhood of ${\mathbf 0}_X$.
For $x \in W$, we then have: 

$\cmod {\map f x} < r$
So:

$\map f x \in V$ for $x \in W$.
That is: 

$f \sqbrk W \subseteq V$
Since $V$ was arbitrary, we have that $f$ is continuous at ${\mathbf 0}_X$ as desired.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.18$: Theorem




