# 

Source: https://proofwiki.org/wiki/Identity_Mapping_on_Normed_Vector_Space_is_Bounded_Linear_Operator

Theorem
Let $\Bbb F$ be a subfield of $\C$. 
Let $\struct {X, \norm \cdot}$ be a normed vector space.
Let $I : X \to X$ be the identity mapping on $X$. 

Then $I$ is a bounded linear operator.
Further: 

$\norm I_{\map B X} = 1$
where $\norm {\, \cdot \,}_{\map B X}$ denotes the norm on the space of bounded linear operators.


Proof
Let $\lambda \in \Bbb F$ and $x, y \in X$.
Then, we have: 

$\map I {\lambda x + y} = \lambda x + y = \lambda I x + I y$
So $I$ is a linear operator.
Further, we have: 

$\norm {I x} = \norm x$
for each $x \in X$, so $I$ is bounded.
Further, for all $x \in X$ with $\norm x = 1$ we have that $\norm {I x} = 1$, so that: 

$\set {\norm {I x} : \norm x = 1} = \set 1$
so that: 

$\norm I_{\map B X} = 1$
$\blacksquare$





