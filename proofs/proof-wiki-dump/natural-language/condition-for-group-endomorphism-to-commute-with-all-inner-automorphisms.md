# 

Source: https://proofwiki.org/wiki/Condition_for_Group_Endomorphism_to_Commute_with_All_Inner_Automorphisms

Theorem
Let $G$ be a group.
Let $\phi: G \to G$ be an endomorphism on $G$.
Let $\phi$ be such that:

$\forall a \in G: \kappa_a \circ \phi = \phi \circ \kappa_a$
where:

$\kappa_a$ denotes the inner automorphism of $G$ given by $a$
$\circ$ denotes composition of mappings.

Then:

$H = \set {x \in G: \map \phi {\map \phi x} = \map \phi x}$
is a normal subgroup of $G$.
Also, the quotient group $G / H$ is an abelian group.


Proof
We have for all $a, g \in G$:














\(\ds a \map \phi g a^{-1}\)

\(=\)







\(\ds \map {\kappa_a} {\map \phi g}\)





Definition of Inner Automorphism














\(\ds \)

\(=\)







\(\ds \map {\paren{\kappa_a \circ \phi} } g\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {\paren{\phi \circ \kappa_a} } g\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\map {\kappa_a} g}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map \phi {a g a^{-1} }\)





Definition of Inner Automorphism



Let $x \in H$. 
Then by the above:














\(\ds \map \phi {\map \phi {a x a^{-1} } }\)

\(=\)







\(\ds \map \phi {a \map \phi x a^{-1} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi a \map \phi {\map \phi x} \map \phi {a^{-1} }\)





Definition of Group Endomorphism














\(\ds \)

\(=\)







\(\ds \map \phi a \map \phi x \map \phi {a^{-1} }\)





$\map \phi x = \map \phi {\map \phi x}$














\(\ds \)

\(=\)







\(\ds \map \phi {a x a^{-1} }\)





Definition of Group Endomorphism



Hence $a x a^{-1} \in H$, and thus $a H a^{-1} \subseteq H$.
By definition of a normal subgroup, $H$ is a normal subgroup of $G$.

It remains to show that the quotient group $G / H$ is an abelian group.
We need to show that for any $a, b \in G$, we have:

$a H b H = b H a H$
that is,

$a b H = b a H$
By Cosets are Equal iff Product with Inverse in Subgroup, this is equivalent to:

$\paren {b a}^{-1} a b = a^{-1} b^{-1} a b \in H$
We have:














\(\ds \map \phi {\map \phi {a^{-1} b^{-1} a b} }\)

\(=\)







\(\ds \map \phi {\map \phi {a^{-1} b^{-1} a} \map \phi b}\)





Definition of Group Endomorphism














\(\ds \)

\(=\)







\(\ds \map \phi {a^{-1} \map \phi {b^{-1} } a \map \phi b}\)





by commutativity condition above














\(\ds \)

\(=\)







\(\ds \map \phi {a^{-1} } \map \phi {\map \phi {b^{-1} } a \map \phi b}\)





Definition of Group Endomorphism














\(\ds \)

\(=\)







\(\ds \map \phi {a^{-1} } \map \phi {\map \phi b^{-1} a \map \phi b}\)





Group Homomorphism Preserves Inverses














\(\ds \)

\(=\)







\(\ds \map \phi {a^{-1} } \map \phi b^{-1} \map \phi a \map \phi b\)





by commutativity condition above














\(\ds \)

\(=\)







\(\ds \map \phi {a^{-1} } \map \phi {b^{-1} } \map \phi a \map \phi b\)





Group Homomorphism Preserves Inverses














\(\ds \)

\(=\)







\(\ds \map \phi {a^{-1} b^{-1} a b}\)





Definition of Group Endomorphism



and thus $a^{-1} b^{-1} a b \in H$.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.21$




