# 

Source: https://proofwiki.org/wiki/C*_Identity_implies_Involution_is_Isometry

Theorem
Let $\struct {A, \ast}$ be a $\ast$-algebra over $\C$ that is a Banach algebra when given the algebra norm $\norm {\, \cdot \,}$.
Suppose that the $\text C^\ast$ identity:

$\norm {x x^\ast} = \norm x^2$
holds for all $x \in A$. 

Then:

$\norm x = \norm {x^\ast}$
for each $x \in A$. 


Proof
Let $x \in A$. 
From Zero Vector in *-Algebra is Hermitian, we have: 

${\mathbf 0}_A^\ast = {\mathbf 0}_A$
where ${\mathbf 0}_A$ is the zero vector of $A$.
Hence:

$\norm x = \norm {x^\ast}$
holds in the case $x = {\mathbf 0}_A$.
Hence take $x \ne {\mathbf 0}_A$ so that $\norm x \ne 0$ by Norm Axiom $\text N 1$: Positive Definiteness. 
We have: 

$\norm {x x^\ast} \le \norm x \norm {x^\ast}$
from the definition of an algebra norm.
Hence we have:

$\norm x^2 \le \norm x \norm {x^\ast}$
Hence, dividing by $\norm x$ we have:

$\norm x \le \norm {x^\ast}$
for all $x \in A \setminus \set { {\mathbf 0}_A}$. 
Swapping $x$ for $x^\ast$ we have:

$\norm {x^\ast} \le \norm {x^{\ast \ast} }$
From $(\text C^\ast 1)$ in the definition of an involution, we have:

$x^{\ast \ast} = x$
and hence:

$\norm {x^\ast} \le \norm x$
Since we have already shown that $\norm x \le \norm {x^\ast}$, we conclude:

$\norm {x^\ast} = \norm x$ for each $x \in A$.
$\blacksquare$





