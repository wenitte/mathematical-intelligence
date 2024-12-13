# 

Source: https://proofwiki.org/wiki/Identity_Mapping_is_Automorphism



Theorem
The identity mapping $I_S: \struct {S, \circ} \to \struct {S, \circ}$ on the algebraic structure $\struct {S, \circ}$ is an automorphism.
Its image is $S$.


Semigroup Automorphism
Let $\struct {S, \circ}$ be a semigroup.
Then $I_S: \struct {S, \circ} \to \struct {S, \circ}$ is a semigroup automorphism.


Ordered Semigroup Automorphism
Let $\struct {S, \circ, \preccurlyeq}$ be an ordered semigroup.
Then $I_S: \struct {S, \circ, \preccurlyeq} \to \struct {S, \circ, \preccurlyeq}$ is a ordered semigroup automorphism.


Group Automorphism
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Then $I_G: \struct {G, \circ} \to \struct {G, \circ}$ is a group automorphism.
Its kernel is $\set e$.


Ring Automorphism
Let $\struct {R, +, \circ}$ be a ring whose zero is $0$.
Then $I_R: \struct {R, +, \circ} \to \struct {R, +, \circ}$ is a ring automorphism.
Its kernel is $\set 0$.


Proof
By definition, an automorphism is an isomorphism from an algebraic structure onto itself.
An isomorphism, in turn, is a bijective homomorphism.

From Identity Mapping is Bijection, the identity mapping $I_S: S \to S$ on the set $S$ is a bijection from $S$ onto itself.

Now we need to show it is a homomorphism.
Let $x, y \in S$. Then:














\(\ds \map {I_S} {x \circ y}\)

\(=\)







\(\ds x \circ y\)





Definition of Identity Mapping














\(\ds \)

\(=\)







\(\ds \map {I_S} x \circ \map {I_S} y\)





Definition of Identity Mapping




Thus $\map {I_S} {x \circ y} = \map {I_S} x \circ \map {I_S} y$ and the morphism property holds/
This proves that $I_S: S \to S$ is a homomorphism.
As $I_S$ is a bijection, its image is $S$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Theorem $6.1: \ 1^\circ$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Exercise $6.2$




