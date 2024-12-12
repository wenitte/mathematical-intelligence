# 

Source: https://proofwiki.org/wiki/Bounded_Linear_Transformation_to_Banach_Space_has_Unique_Extension_to_Closure_of_Domain/Corollary_3

Corollary
Let $\Bbb F \in \set {\R, \C}$. 
Let $\struct {X, \norm \cdot_X}$ be a normed vector space over $\Bbb F$.
Let $\map D {T_0}$ be a linear subspace of $X$.
Let $\struct {Y, \norm \cdot_Y}$ be a Banach space over $\Bbb F$.
Let $T_0 : \map D {T_0} \to Y$ be a linear isometry.

Then there exists a unique linear isometry $T : \map D T \to Y$ extending $T_0$ to $\map D T = \paren {\map D {T_0} }^-$. 


Proof
From Bounded Linear Transformation to Banach Space has Unique Extension to Closure of Domain, there exists a unique bounded linear transformation $T : \map D T \to Y$ extending $T_0$ to $\map D T = \paren {\map D {T_0} }^-$. 
For $x \in \paren {\map D {T_0} }^-$ and $\sequence {x_n}_{n \mathop \in \N}$ in $\map D {T_0}$ such that $x_n \to x$ we have:

$\ds T x = \lim_{n \mathop \to \infty} T_0 x_n$
Since $T_0$ is an isometry, we have:

$\norm {T_0 x_n}_Y = \norm {x_n}_X$
Taking $n \to \infty$, we have $x_n \to x$ and $T_0 x_n \to T x$ and hence by Norm is Continuous:

$\norm {T x}_Y = \norm x_X$
So $T$ is a linear isometry.
$\blacksquare$





