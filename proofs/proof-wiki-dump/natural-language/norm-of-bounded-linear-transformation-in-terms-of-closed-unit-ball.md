# 

Source: https://proofwiki.org/wiki/Norm_of_Bounded_Linear_Transformation_in_terms_of_Closed_Unit_Ball



Theorem
Let $\GF \in \set {\R, \C}$.
Let $\struct {X, \norm {\, \cdot \,}_X}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be normed vector spaces over $\GF$.
Let $T : X \to Y$ be a linear transformation.
Let $B_X^-$ and $B_Y^-$ be the closed unit balls of $X$ and $Y$ respectively. 
Let $M > 0$.

Then $T$ is bounded with $\norm T_{\map B {X, Y} } \le M$ if and only if:

$T \sqbrk {B_X^-} \subseteq M B_Y^-$


Proof
Necessary Condition
Let $T$ be a bounded linear transformation with $\norm T_{\map B {X, Y} } \le M$.
Then for each $x \in X$ we have: 

$\norm {T x}_Y \le M \norm x_X$
Then if $x \in B_X^-$, we have $\norm x_X \le 1$ and hence: 

$\norm {T x}_Y \le M$
So we have: 

$T \sqbrk {B_X^-} \subseteq M B_Y^-$
$\Box$

Sufficient Condition
Suppose that:

$T \sqbrk {B_X^-} \subseteq M B_Y^-$
Let $x \in X \setminus \set { {\mathbf 0}_X}$
Then, we have: 

$\ds \frac x {\norm x_X} \in B_X^-$
and hence: 

$\ds \norm {\map T {\frac x {\norm x_X} } }_Y \le M$
From Norm Axiom $\text N 2$: Positive Homogeneity, we have:

$\ds \norm {T x}_Y \le M \norm x_X$
Clearly this also holds for $x = {\mathbf 0}_X$.
So $T$ is bounded with $\norm T_{\map B {X, Y} } \le M$.
$\blacksquare$





