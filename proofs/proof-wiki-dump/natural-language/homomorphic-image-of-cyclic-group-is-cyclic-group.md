# 

Source: https://proofwiki.org/wiki/Homomorphic_Image_of_Cyclic_Group_is_Cyclic_Group

Theorem
Let $G$ be a cyclic group with generator $g$.
Let $H$ be a group.
Let $\phi: G \to H$ be a (group) homomorphism.
Let $\Img G$ denote the homomorphic image of $G$ under $\phi$.

Then $\Img G$ is a cyclic group with generator $\map \phi g$.

That is:

$\phi \sqbrk {\gen g} = \gen {\map \phi g}$


Proof
Let $y \in \Img G$.
Then $\exists x \in G: y = \map \phi x$.
As $G$ be a cyclic group with generator $g$, $x = g^n$ for some $n \in \Z$.
Thus by Homomorphism of Power of Group Element:

$y = \paren {\map \phi g}^n$
and so is a power of $\map \phi g$.
As $y$ is arbitrary, it follows that all elements of $\Img G$ are powers of $\map \phi g$.
Hence the result, by definition of cyclic group.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $7$: Homomorphisms: Exercise $7$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $4 \ \text{(i)}$




