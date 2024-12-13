# 

Source: https://proofwiki.org/wiki/Maximal_Ideal_of_Unital_Commutative_Banach_Algebra_is_Kernel_of_Character

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a commutative unital Banach algebra over $\C$. 
Let $M$ be a maximal ideal of $A$. 

Then there exists a character $\phi$ such that:

$\ker \phi = M$


Proof
From Maximal Ideal in Unital Banach Algebra is Closed, $M$ is closed.
Let $A/M$ be the quotient algebra of $A$ modulo $M$.
From Quotient Normed Algebra of Unital Normed Algebra is Unital Normed Algebra, $A/M$ is a unital normed algebra. 
From Quotient Algebra of Commutative Algebra is Commutative, $A/M$ is a commutative algebra.
Hence from the Gelfand-Mazur Theorem, there exists an isometric algebra isomorphism $q_2 : A/M \to \C$.
From Quotient Mapping on Quotient Algebra is Algebra Homomorphism, $q_1 : A \to A/M$ defined by:

$\map {q_1} x = x + M$
for each $x \in A$ is a algebra homomorphism.
From Composition of Algebra Homomorphisms is Algebra Homomorphism, $q_2 \circ q_1 : A \to \C$ is an algebra homomorphism.
Since $q_2$ is an algebra isomorphism, for any $x + M \in A/M \setminus \set { {\mathbf 0}_{A/M} }$, we have $\map {q_2} {x + M} = \map {q_2} {\map {q_1} x} \ne 0$.
Hence $q_2 \circ q_1 : A \to \C$ is a non-zero algebra homomorphism.
Hence $\phi = q_2 \circ q_1$ is a character on $A$.
We just need to assure ourselves that $\ker \phi = M$. 
Since $q_2$ is an algebra isomorphism we have $\ker {q_2} = \set { {\mathbf 0}_A + M}$.
Hence if $\map {q_2} {\map {q_1} x} = 0$ for $x \in A$ we have $\map {q_1} x = {\mathbf 0}_{A/M}$. 
From Kernel of Quotient Mapping, we then have $x \in M$.
Conversely, if $x \in M$ then $\map {q_1} x = 0$ so $\map \phi x = 0$. 
So $\ker \phi = M$ as desired. 
$\blacksquare$





