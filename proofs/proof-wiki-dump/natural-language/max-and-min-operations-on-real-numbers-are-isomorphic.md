# 

Source: https://proofwiki.org/wiki/Max_and_Min_Operations_on_Real_Numbers_are_Isomorphic

Theorem
Let $\R$ denote the set of real numbers.
Let $\vee$ and $\wedge$ denote the max operation and min operation respectively.

Let $\struct {\R, \vee}$ and $\struct {\R, \wedge}$ denote the algebraic structures formed from the above.
Then $\struct {\R, \vee}$ and $\struct {\R, \wedge}$ are isomorphic.


Proof
First we note that from:

Min Operation on Toset forms Semigroup
and:

Max Operation on Toset forms Semigroup
both $\struct {\R, \vee}$ and $\struct {\R, \wedge}$ are semigroups.

Let $\phi: \R \to \R$ defined as:

$\forall x \in \R: \map \phi x = -x$

We have that:

$-x = -y \iff x = y$
which demonstrates that $\phi$ is a bijection.
Then we have:










\(\ds \forall x, y \in \R: \, \)



\(\ds \map \phi {x \vee y}\)

\(=\)







\(\ds -\paren {x \vee y}\)




















\(\ds \)

\(=\)







\(\ds \paren {-x} \wedge \paren {-y}\)




















\(\ds \)

\(=\)







\(\ds \map \phi x \wedge \map \phi y\)









which demonstrates that $\phi$ is a (semigroup) homomorphism.
The result follows by definition of (semigroup) isomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Exercise $6.6 \ \text {(a)}$




