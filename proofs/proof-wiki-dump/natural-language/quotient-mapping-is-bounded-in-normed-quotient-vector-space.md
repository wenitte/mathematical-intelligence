# 

Source: https://proofwiki.org/wiki/Quotient_Mapping_is_Bounded_in_Normed_Quotient_Vector_Space

Theorem
Let $\Bbb F \in \set {\R, \C}$.
Let $X$ be a normed vector space over $\Bbb F$.
Let $N$ be a closed linear subspace of $X$. 
Let $\struct {X/N, \norm {\, \cdot \,}_{X/N} }$ be the normed quotient vector space associated with quotient vector space $X/N$.
Let $\pi : X \to X/N$ be the quotient mapping associated with $X/N$. 

Then $\pi$ is a bounded linear transformation.


Proof
From Quotient Mapping is Linear Transformation:

$\pi$ is a linear transformation.
Let $x \in X$. 
Note that from the definition of quotient norm, we have: 

$\ds \norm {\map \pi x}_{X/N} = \inf_{z \in N} \norm {x - z}_X$
Note that since $0 \in N$, we have that: 

$\norm x_X \in \set {\norm {x - z}_X : z \in N}$
so that: 

$\ds \inf_{z \in N} \norm {x - z}_X \le \norm x$
from the definition of the infimum.
So we have: 

$\norm {\map \pi x}_{X/N} \le \norm x$
for each $x \in X$, and so: 

$\pi$ is a bounded linear transformation.
$\blacksquare$





