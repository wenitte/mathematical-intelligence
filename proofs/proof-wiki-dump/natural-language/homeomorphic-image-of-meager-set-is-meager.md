# 

Source: https://proofwiki.org/wiki/Homeomorphic_Image_of_Meager_Set_is_Meager

Theorem
Let $X$ and $Y$ be topological spaces.
Let $f : X \to Y$ be a homeomorphism.
Let $A \subseteq X$ be meager in $X$.

Then $f \sqbrk A$ is meager in $Y$. 


Proof
Since $A$ is meager in $X$, there exists a countable set $\family {A_n}_{n \in \N}$ of nowhere dense sets in $X$ such that:

$\ds A = \bigcup_{n \mathop = 1}^\infty A_n$
So, we have:

$\ds f \sqbrk A = f \sqbrk {\bigcup_{n \mathop = 1}^\infty A_n}$
So, from Image of Union under Mapping:

$\ds f \sqbrk A = \bigcup_{n \mathop = 1}^\infty f \sqbrk {A_n}$
From Homeomorphic Image of Nowhere Dense Set is Nowhere Dense, $f \sqbrk {A_n}$ is nowhere dense in $Y$ for each $n \in \N$. 
Hence $f \sqbrk A$ is the countable union of nowhere dense sets in $Y$.
So $f \sqbrk A$ is meager in $Y$. 
$\blacksquare$





