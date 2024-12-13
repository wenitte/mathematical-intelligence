# 

Source: https://proofwiki.org/wiki/Image_of_Group_of_Units_in_Unital_Algebra_under_Unital_Algebra_Homomorphism

Theorem
Let $R$ be a ring.
Let $A, B$ be unital $R$-algebras.
Let $\phi : A \to B$ be an unital algebra homomorphism.
Let $\map G A$ and $\map G B$ the groups of units of $A$ and $B$ respectively. 

Then:

$\phi \sqbrk {\map G A} \subseteq \map G B$


Corollary
Let $R$ be a ring.
Let $A, B$ be unital $R$-algebras.
Let $\phi : A \to B$ be an unital algebra isomorphism.
Let $\map G A$ and $\map G B$ the groups of units of $A$ and $B$ respectively. 

Then:

$\phi \sqbrk {\map G A} = \map G B$


Proof
Let ${\mathbf 1}_A$ be the identity element of $A$. 
Let $x \in \map G A$.
Then there exists $y \in A$ such that $x y = y x = {\mathbf 1}_A$. 
We then have $\map \phi {x y} = \map \phi {y x} = \map \phi { {\mathbf 1}_A} = {\mathbf 1}_B$ since $\phi$ is a unital algebra homomorphism.
Since $\phi$ is an algebra homomorphism, we have:

$\map \phi x \map \phi y = \map \phi y \map \phi x = {\mathbf 1}_B$
Hence $\map \phi y$ is the inverse of $\map \phi x$ in $B$. 
So $\map \phi x \in \map G B$. 
Hence:

$\phi \sqbrk {\map G A} \subseteq \map G B$
$\blacksquare$





