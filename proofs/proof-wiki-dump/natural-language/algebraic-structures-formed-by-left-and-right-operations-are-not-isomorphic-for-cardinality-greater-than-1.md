# 

Source: https://proofwiki.org/wiki/Algebraic_Structures_formed_by_Left_and_Right_Operations_are_not_Isomorphic_for_Cardinality_Greater_than_1

Theorem
Let $S$ be a set.
Let $\gets$ and $\to$ denote the left operation and right operation respectively.
Let $\card S > 1$.

The algebraic structures $\struct {S, \gets}$ and $\struct {S, \to}$ are not isomorphic.


Proof
Aiming for a contradiction, suppose there exists an isomorphism $\phi$ from $\struct {S, \gets}$ to $\struct {S, \to}$.

Because $\card S > 1$ we have that there exist at least $2$ distinct elements of $S$.
Let these be $x$ and $y$.
Hence:














\(\ds \map \phi {x \gets y}\)

\(=\)







\(\ds \map \phi x\)





Definition of Left Operation














\(\ds \)

\(=\)







\(\ds \map \phi x \to \map \phi y\)





Definition of Isomorphism (Abstract Algebra)














\(\ds \)

\(=\)







\(\ds \map \phi y\)





Definition of Right Operation



Hence $\map \phi x = \map \phi y$ and so $\phi$ is not an injection.
Hence $\phi$ is not a bijection and so not an isomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Exercise $6.11 \ \text {(b)}$




