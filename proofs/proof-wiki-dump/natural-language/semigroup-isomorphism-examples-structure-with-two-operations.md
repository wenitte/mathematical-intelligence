# 

Source: https://proofwiki.org/wiki/Semigroup_Isomorphism/Examples/Structure_with_Two_Operations

Examples of Semigroup Isomorphisms
Let $\struct {S_1, \circ_1, *_1}$ and $\struct {S_2, \circ_2, *_2}$ be algebraic structures such that:

$\struct {S_1, \circ_1}$ is isomorphic to $\struct {S_2, \circ_2}$
$\struct {S_1, *_1}$ is isomorphic to $\struct {S_2, *_2}$
Then it is not necessarily the case that $\struct {S_1, \circ_1, *_1}$ is isomorphic to $\struct {S_2, \circ_2, *_2}$.


Proof
Proof by Counterexample

Let $\R$ denote the set of real numbers.
Let $\vee$ and $\wedge$ denote the max operation and min operation respectively.
Let $\struct {\R, \vee}$ and $\struct {\R, \wedge}$ denote the algebraic structures formed from the above.
From Max and Min Operations on Real Numbers are Isomorphic, $\struct {\R, \vee}$ is isomorphic to $\struct {\R, \wedge}$.

Let $\struct {\R, \times}$ denote the algebraic structure formed from $\R$ under multiplication .
From Real Numbers under Multiplication form Monoid, $\struct {\R, \times}$ is a monoid and hence a semigroup.
Let $I_\R: \R \to \R$ denote the identity mapping on $\R$.
From Identity Mapping is Semigroup Automorphism we have that $\struct {\R, \times}$ is an automorphism and hence a fortiori an isomorphism.

Now consider the algebraic structures $\struct {\R, \vee, \times}$ and $\struct {\R, \wedge, \times}$.
We have from above that
We also have that:

$\struct {\R, \vee}$ is isomorphic to $\struct {\R, \wedge}$
$\struct {\R, \times}$ is isomorphic to $\struct {\R, \times}$

Aiming for a contradiction, suppose there exists an isomorphism $\phi$ from $\struct {\R, \vee, \times}$ to $\struct {\R, \wedge, \times}$.
Because $\phi$ is an isomorphism, it is by definition a bijection
Hence $\phi$ is both a surjection and an injection.

Then:










\(\ds \exists x \in \R: \, \)



\(\ds \map \phi x\)

\(=\)







\(\ds 1\)





Definition of Surjection














\(\ds \map \phi 0\)

\(=\)







\(\ds \map \phi {x \times 0}\)




















\(\ds \)

\(=\)







\(\ds \map \phi x \times \map \phi 0\)





Definition of Semigroup Isomorphism














\(\ds \)

\(=\)







\(\ds 1 \times \map \phi 0\)




















\(\ds \)

\(=\)







\(\ds 0\)









Then:














\(\ds \map \phi 1\)

\(=\)







\(\ds \map \phi {1 \vee 0}\)





Definition of $\vee$














\(\ds \)

\(=\)







\(\ds \map \phi 1 \wedge \map \phi 0\)





Definition of Isomorphism (Abstract Algebra)














\(\ds \)

\(=\)







\(\ds 0\)





Definition of $\wedge$ and from $\map \phi 0 = 0$ from above




Thus we have that:

$\map \phi 0 = 0$
and:

$\map \phi 1 = 0$
and so $\phi$ is not an injection.
This contradicts our assertion that isomorphism.
Hence by Proof by Contradiction no such isomorphism exists.
Hence $\struct {\R, \vee, \times}$ and $\struct {\R, \wedge, \times}$ are not isomorphic.
The result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Exercise $6.6 \ \text {(b)}$




