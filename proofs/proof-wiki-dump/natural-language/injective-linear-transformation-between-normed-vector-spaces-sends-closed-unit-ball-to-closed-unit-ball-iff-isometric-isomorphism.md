# 

Source: https://proofwiki.org/wiki/Injective_Linear_Transformation_between_Normed_Vector_Spaces_sends_Closed_Unit_Ball_to_Closed_Unit_Ball_iff_Isometric_Isomorphism



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,}_X}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be normed vector spaces over $\GF$.
Let $T : X \to Y$ be a injective linear transformation.
Let $B_X^-$ be the closed unit ball of $X$.
Let $B_Y^-$ be the closed unit ball of $Y$. 

Then $T$ is an isometric isomorphism if and only if:

$T \sqbrk {B_X^-} = B_Y^-$


Proof
Necessary Condition
Suppose that $T$ is an isometric isomorphism.
Then: 

$\norm {T x}_Y = \norm x_X$ for each $x \in X$.
Hence if $\norm x_X \le 1$, we have $\norm {T x}_Y \le 1$.
So $T \sqbrk {B_X^-} \subseteq B_Y^-$.
Conversely, let $y \in B_Y^-$.
Since $T$ is an isometric isomorphism:

$T$ is bijective and there exists $x \in X$ such that $y = T x$.
Since $T$ is a linear isometry, we have: 

$\norm x_X = \norm {T x}_Y \le 1$
So we have $x \in B_X^-$. 
So we have $T \sqbrk {B_X^-} = B_Y^-$.
$\Box$

Sufficient Condition
Suppose that:

$T \sqbrk {B_X^-} = B_Y^-$
We first show that $T$ is surjective.
We have: 














\(\ds T \sqbrk X\)

\(=\)







\(\ds T \sqbrk {\bigcup_{n \mathop = 1}^\infty n B_X^-}\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{n \mathop = 1}^\infty T \sqbrk {n B_X^-}\)





Image of Union under Mapping: General Result














\(\ds \)

\(=\)







\(\ds \bigcup_{n \mathop = 1}^\infty n T \sqbrk {B_X^-}\)





Image of Dilation of Set under Linear Transformation is Dilation of Image














\(\ds \)

\(=\)







\(\ds \bigcup_{n \mathop = 1}^\infty n B_Y^-\)




















\(\ds \)

\(=\)







\(\ds Y\)









We now show that $T$ is a bounded linear transformation.
We have: 














\(\ds \sup_{x \in B_X^-} \norm {T x}_Y\)

\(=\)







\(\ds \sup_{y \in T \sqbrk {B_X^-} } \norm y_Y\)




















\(\ds \)

\(=\)







\(\ds \sup_{y \in B_Y^-} \norm y_Y\)




















\(\ds \)

\(=\)







\(\ds 1\)









So $T$ is a bounded linear transformation with $\norm T_{\map B {X, Y} } = 1$.

We move to proving that $T^{-1}$ is a bounded linear transformation.
Since $T$ is bijective, we have: 

$T^{-1} \sqbrk {B_Y^-} = B_X^-$
from Preimage of Image of Subset under Injection equals Subset.
From Inverse of Linear Transformation is Linear Transformation, $T^{-1}$ is a linear transformation.
Repeating the previous calculation with $T$ swapped for $T^{-1}$, we obtain that: 

$\ds \sup_{y \in B_Y^-} \norm {T^{-1} y}_X = \sup_{x \in B_X^-} \norm x_X = 1$
So $T^{-1}$ is a bounded linear transformation with $\norm {T^{-1} }_{\map B {Y, X} } = 1$.

Now, we have: 

$\norm {T x}_Y \le \norm x_X$ for all $x \in X$
and:

$\norm {T^{-1} y}_X \le \norm y_Y$ for all $y \in Y$.
In particular, taking $x \in X$ and $y = T x$ in the latter inequality, we obtain: 

$\norm x_X \le \norm {T x}_Y$ for all $x \in X$.
Hence we obtain: 

$\norm x_X \le \norm {T x}_Y \le \norm x_X$
Hence: 

$\norm {T x}_Y = \norm x_X$
So $T$ is an surjective linear isometry.
From Linear Isometry is Injective: Corollary, we have that $T$ is an isometric isomorphism.
$\blacksquare$





