# 

Source: https://proofwiki.org/wiki/Quotient_Mapping_Maps_Unit_Open_Ball_in_Normed_Vector_Space_to_Unit_Open_Ball_in_Normed_Quotient_Vector_Space

Theorem
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space.
Let $N$ be a closed linear subspace of $X$.
Let $\struct {X/N, \norm {\, \cdot \,} }$ be the normed quotient vector space associated with the quotient vector space $X/N$.
Let $B_X$ be the unit open ball in $\struct {X, \norm {\, \cdot \,} }$.
Let $B_{X/N}$ be the unit open ball in $\struct {X/N, \norm {\, \cdot \,} }$.
Let $\pi$ be the quotient mapping associated with $X/N$.

Then:

$\map \pi {B_X} = B_{X/N}$


Proof
From Quotient Mapping is Bounded in Normed Quotient Vector Space, we have: 

$\norm {\map \pi x}_{X/N} \le \norm x$
So if $x \in B_X$, we have $\norm x < 1$ and hence: 

$\norm {\map \pi x}_{X/N} < 1$
So $\map \pi x \in B_{X/N}$.
So we have: 

$\map \pi {B_X} \subseteq B_{X/N}$
Conversely, let $\mathbf x \in B_{X/N}$ and pick $x \in X$ such that $\mathbf x = \map \pi x$.
Then we have:

$\norm {\map \pi x}_{X/N} = \inf_{z \in N} \norm {x - z} < 1$
So there exists $z_\ast \in N$ such that: 

$\norm {x - z_\ast} < 1$
so that: 

$x - z_\ast \in B_X$
From Kernel of Quotient Mapping and Quotient Mapping is Linear Transformation, we have: 

$\map \pi {x - z_\ast} = \map \pi x = \mathbf x$
So we have: 

$\mathbf x \in \map \pi {B_X}$
So we have: 

$B_{X/N} \subseteq \map \pi {B_X}$
$\blacksquare$





