# 

Source: https://proofwiki.org/wiki/Composition_of_Mappings_is_Right_Distributive_over_Pointwise_Operation

Theorem
Let $A$ and $B$ be sets.
Let $\struct {S, \odot}$ be an algebraic structure.
Let:

$B^A$ denote the set of mappings from $A$ to $B$
$S^B$ denote the set of mappings from $B$ to $S$.

Let $f, g \in S^B$ be mappings from $B$ to $S$.
Let $h \in B^A$ be a mapping from $A$ to $B$.
Then:

$\paren {f \odot g} \circ h = \paren {f \circ h} \odot \paren {g \circ h}$
where:

$f \odot g$ denotes the pointwise operation on $S^B$ induced by $\odot$
$g \circ h$ denotes the composition of $g$ with $h$.


Proof
First we establish:
The domain of $h$ is $A$.
The codomain of $h$ is $B$
The domain of both $f$ and $g$ is $B$.
The codomain of both $f$ and $g$ is $S$.
Hence:

the domain of $\paren {f \odot g} \circ h$ is $A$
the Domain of $f \odot g$ is $B$
the codomain of $f \odot g$ is $S$
the codomain of $\paren {f \odot g} \circ h$ is $S$.
Then:

the domain of $f \circ h$ is $A$
the domain of $g \circ h$ is $A$
the codomain of $f \circ h$ is $S$
the codomain of $g \circ h$ is $S$
the domain of $\paren {f \circ h} \odot \paren {g \circ h}$ is $A$
the codomain of $\paren {f \circ h} \odot \paren {g \circ h}$ is $S$.
Hence both $\paren {f \odot g} \circ h$ and $\paren {f \circ h} \odot \paren {g \circ h}$ have the same domain and codomain.

Let $a \in A$ be arbitrary.
Let $b \in B$ be such that $b = \map h a$. 
We have:














\(\ds \map {\paren {\paren {f \odot g} \circ h} } a\)

\(=\)







\(\ds \map {\paren {f \odot g} } {\map h a}\)





Definition of Composite Mapping














\(\ds \)

\(=\)







\(\ds \map {\paren {f \odot g} } b\)





Definition of $b$














\(\ds \)

\(=\)







\(\ds \map f b \odot \map g b\)





Definition of Pointwise Operation














\(\ds \)

\(=\)







\(\ds \map f {\map h a} \odot \map g {\map h a}\)





Definition of $b$














\(\ds \)

\(=\)







\(\ds \map {\paren {f \circ h} } a \odot \map {\paren {g \circ h} } a\)





Definition of Composite Mapping














\(\ds \)

\(=\)







\(\ds \map {\paren {\paren {f \circ h} \odot \paren {g \circ h} } } a\)





Definition of Pointwise Operation



Hence the result by Equality of Mappings.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.11 \ \text{(a)}$




