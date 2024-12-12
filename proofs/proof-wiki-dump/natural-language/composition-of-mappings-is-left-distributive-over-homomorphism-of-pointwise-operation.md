# 

Source: https://proofwiki.org/wiki/Composition_of_Mappings_is_Left_Distributive_over_Homomorphism_of_Pointwise_Operation

Theorem
Let $A$ be a set.
Let $\struct {S, \odot}$ and $\struct {T, \otimes}$ be algebraic structures.
Let:

$S^A$ denote the set of mappings from $A$ to $S$.

Let $f$ be a homomorphism from $S$ to $T$.
Let $g, h \in S^A$ be mappings from $A$ to $S$.
Then:

$f \circ \paren {g \odot h} = \paren {f \circ g} \otimes \paren {f \circ h}$
where:

$g \odot h$ denotes the pointwise operation on $S^A$ induced by $\odot$
$f \circ h$ denotes the composition of $f$ with $h$.


Proof
First we establish:
The domain of $g$ and $h$ is $A$.
The codomain of $g$ and $h$ is $S$.
The domain of $f$ is $S$.
The codomain of $f$ is $T$.
Hence:

the Domain of $g \odot h$ is $A$
the codomain of $g \odot h$ is $S$
the domain of $f \circ \paren {g \odot h}$ is $A$
the codomain of $f \circ \paren {g \odot h}$ is $T$.
Then:

the domain of $f \circ g$ is $A$
the domain of $f \circ h$ is $A$
the codomain of $f \circ g$ is $S$
the codomain of $f \circ h$ is $S$
the domain of $\paren {f \circ g} \otimes \paren {f \circ h}$ is $A$
the codomain of $\paren {f \circ g} \otimes \paren {f \circ h}$ is $T$.
Hence both $f \circ \paren {g \odot h}$ and $\paren {f \circ g} \otimes \paren {f \circ h}$ have the same domain and codomain.

Let $a \in A$ be arbitrary.
Let $b \in B$ be such that $b = \map g a$. 
Let $c \in B$ be such that $c = \map h a$.
Let $d \in T$ such that $d = b \odot c$.
We have:














\(\ds \map {\paren {f \circ \paren {g \odot h} } } a\)

\(=\)







\(\ds \map f {\map {\paren {g \odot h} } a}\)





Definition of Composite Mapping














\(\ds \)

\(=\)







\(\ds \map f {\paren {\map g a \odot \map h a} }\)





Definition of Pointwise Operation














\(\ds \)

\(=\)







\(\ds \map f {\paren {b \odot c} }\)





Definition of $b$ and $c$














\(\ds \)

\(=\)







\(\ds \paren {\map f b} \otimes \paren {\map f c}\)





as $f$ is a homomorphism














\(\ds \)

\(=\)







\(\ds \paren {\map f {\map g a} } \otimes \paren {\map f {\map h a} }\)





Definition of $b$ and $c$














\(\ds \)

\(=\)







\(\ds \paren {\map {\paren {f \circ g} } a} \otimes \paren {\map {\paren {f \circ h} } a}\)





Definition of Composite Mapping














\(\ds \)

\(=\)







\(\ds \map {\paren {\paren {f \circ g} \otimes \paren {f \circ h} } } a\)





Definition of Pointwise Operation



Hence the result by Equality of Mappings.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.11 \ \text{(b)}$




