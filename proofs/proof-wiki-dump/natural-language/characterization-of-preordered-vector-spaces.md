# 

Source: https://proofwiki.org/wiki/Characterization_of_Preordered_Vector_Spaces



Theorem
Let $\GF \in \set {\R, \C}$.
Let $X$ be a vector space over $\GF$.
Let $\succeq$ be a preordering on $X$.

Then $\struct {X, \succeq}$ is a preordered vector space if and only if there exists a convex cone $P \subseteq X$ such that $\succeq$ is the preordering on $X$ induced by $P$.


Proof
Necessary Condition
Suppose that $\struct {X, \succeq}$ is a preordered vector space.
Let:

$P = \set {x \in X : x \succeq 0}$
Let $\succeq^P$ be the preordering on $X$ induced by $P$.
We want to show that, for $x, y \in X$, we have $x \succeq y$ if and only if $x \succeq^P y$.
Let $x, y \in X$.
By the definition of the preordering on $X$ induced by $P$, we have:

$x \succeq^P y$ if and only if $x - y \in P$
By the definition of $P$:

$x - y \in P$ if and only if $x - y \succeq 0$
Since $\struct {X, \succeq}$ is a preordered vector space, we obtain:

$x - y \succeq 0$ if and only if $x \succeq y$
Hence $\succeq$ is the preordering on $X$ induced by $P$.
$\Box$

Sufficient Condition
Let $P \subseteq X$ be a convex cone.
Let $\succeq^P$ be the preordering on $X$ induced by $P$.
We show that $\struct {X, \succeq^P}$ is a preordered vector space.
We need to establish:

$(1) \quad$ for all $x, x', y, y' \in X$ such that $x \succeq x'$ and $y \succeq y'$, we have $x + y \succeq^P x' + y'$
$(2) \quad$ for all $\alpha \in \R_{\ge 0}$ and $x, x' \in X$ with $x \succeq^P x'$, we have $\alpha x \succeq^P \alpha x'$.
Let $x, y, x', y' \in X$ be such that $x \succeq^P x'$ and $y \succeq^P y'$.
Then $x - x' \in P$ and $y - y' \in P$.
From the definition of a convex cone, we have $\paren {x - x'} + \paren {y - y'} \in P$.
That is, $\paren {x + y} - \paren {x' + y'} \in P$.
So we have $x + y \succeq^P x' + y'$, establishing $(1)$.
Now let $\alpha \in \R_{\ge 0}$ and $x, x' \in X$ be such that $x \succeq^P x'$.
Then we have $x - x' \in P$.
Since $P$ is a cone and $\alpha \in \R_{\ge 0}$, we have $\alpha \paren {x - x'} \in P$.
That is, $\alpha x - \alpha x' \in P$.
So we have $\alpha x \succeq^P \alpha x'$.
This establishes $(2)$ and hence shows that $\struct {X, \succeq^P}$ is a preordered vector space.
$\blacksquare$


Sources
2023: Jean-Bernard Bru and Walter Alberto de Siqueira Pedra: C*-Algebras and Mathematical Foundations of Quantum Statistical Mechanics ... (previous) ... (next): $1.1$: Basic notions




