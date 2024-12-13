# 

Source: https://proofwiki.org/wiki/Permutation_Group/Examples/Example_on_Real_Numbers

Example of Permutation Group
Let $\R$ denote the set of real numbers.
Let $\R_{\ge 0}$ denote the set of positive real numbers.

Let $S = \R_{\ge 0} \times \R$ denote the Cartesian product of $\R_{\ge 0}$ and $\R$.

Let $\tuple {a, b} \in S$.
Let $f_{a, b}: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map {f_{a, b} } x := a x + b$
Let $\GG$ be the set defined as:

$\GG = \set {f_{a, b}: \tuple {a, b} \in S}$

Let $\struct {S, \oplus}$ be the group where $\oplus$ is defined as:

$\forall \tuple {a, b}, \tuple {c, d} \in S: \tuple {a, b} \oplus \tuple {c, d} := \tuple {a c, a d + b}$

Then $\struct {\GG, \circ}$ is a permutation group on $\R$ which is isomorphic to $\struct {S, \oplus}$.


Proof
From Group Example: $\tuple {a c, a d + b}$ on Positive Reals by Reals, $\struct {S, \oplus}$ has been shown to be a group.

From Bijection Example: $a x + b$ on Real Numbers, we have that $f_{a, b}$ is a bijection from $\R$ to $\R$.
Hence by definition $f_{a, b}$ is a permutation on $\R$.
From Group Example: Linear Functions, $\struct {\GG, \circ}$ is a group.
Hence as $\struct {\GG, \circ}$ is a group of permutations on $\R$, it is by definition a permutation group on $\R$.

Let $\phi: \struct {\GG, \circ} \to \struct {S, \oplus}$ be the identity mapping on $S$:

$\forall \tuple {a, b} \in S: \map \phi {a, b} = \tuple {a, b}$
From Identity Mapping is Bijection we have that $\phi$ is a bijection.

Consider $f_{a, b}, f_{c, d} \in \GG$.
We have:










\(\ds \forall x \in \R: \, \)



\(\ds \map \phi {\map {f_{a, b} \circ f_{c, d} } x}\)

\(=\)







\(\ds \map {f_{a, b} \circ f_{c, d} } x\)





Definition of Identity Mapping














\(\ds \)

\(=\)







\(\ds \map {f_{a, b} } {\map {f_{c, d} } x}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {f_{a, b} } {c x + d}\)




















\(\ds \)

\(=\)







\(\ds \map {f_{a, b} } {a \paren {c x + d} + b}\)




















\(\ds \)

\(=\)







\(\ds \map {f_{a, b} } {a c x + a d + b}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a, b} \oplus \tuple {c, d}\)





Definition of $\oplus$














\(\ds \)

\(=\)







\(\ds \map \phi {a, b} \oplus \map \phi {c, d}\)





Definition of Identity Mapping



This demonstrates that $\phi$ is a (group) homomorphism.
So $\phi$ is a bijection which is a homomorphism.
Hence by definition $\phi$ is an isomorphism.

The result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Exercise $8.7 \ \text {(b)}$




