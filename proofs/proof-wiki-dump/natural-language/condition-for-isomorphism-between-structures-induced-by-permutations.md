# 

Source: https://proofwiki.org/wiki/Condition_for_Isomorphism_between_Structures_Induced_by_Permutations



Theorem
Let $S$ be a set.
Let $\oplus$ and $\otimes$ be closed operations on $S$ such that both $\oplus$ and $\otimes$ have the same identity.
Let $\sigma$ and $\tau$ be permutations on $S$.

Let $\oplus_\sigma$ and $\otimes_\tau$ be the operations on $S$ induced on $\oplus$ by $\sigma$ and on $\otimes$ by $\tau$ respectively:

$\forall x, y \in S: x \oplus_\sigma y := \map \sigma {x \oplus y}$
$\forall x, y \in S: x \otimes_\tau y := \map \tau {x \otimes y}$
Let $f: S \to S$ be a mapping.

Then:

$f$ is an isomorphism from $\struct {S, \oplus_\sigma}$ to $\struct {S, \otimes_\tau}$
if and only if:

$f$ is an isomorphism from $\struct {S, \oplus}$ to $\struct {S, \otimes}$ satisfying the condition:
$f \circ \sigma = \tau \circ f$
where $\circ$ denotes composition of mappings.


Proof
Recall that:

an isomorphism is a bijection which is a homomorphism
a permutation is a bijection from a set to itself.

Hence on both sides of the double implication:

$f$ is a permutation on $S$
both $f \circ \sigma$ and $\tau \circ f$ are permutations on $S$.

So bijectivity of all relevant mappings can be taken for granted throughout the following.


Necessary Condition
Let $f$ be an isomorphism from $\struct {S, \oplus}$ to $\struct {S, \otimes}$ satisfying the condition:

$f \circ \sigma = \tau \circ f$

We have:










\(\ds \forall x, y \in S: \, \)



\(\ds \map f {x \oplus_\sigma y}\)

\(=\)







\(\ds \map f {\map \sigma {x \oplus y} }\)





Definition of Operation Induced by Permutation














\(\ds \)

\(=\)







\(\ds \map {f \circ \sigma} {x \oplus y}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {\tau \circ f} {x \oplus y}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \map \tau {\map f {x \oplus y} }\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map \tau {\map f x \otimes \map f y}\)





by hypothesis: Definition of Homomorphism














\(\ds \)

\(=\)







\(\ds \map f x \otimes_\tau \map f y\)





Definition of Operation Induced by Permutation



demonstrating that $f$ is a homomorphism from $\struct {S, \oplus_\sigma}$ to $\struct {S, \otimes_\tau}$.
As $f$ is a bijection, it follows by definition that $f$ is an isomorphism from $\struct {S, \oplus_\sigma}$ to $\struct {S, \otimes_\tau}$.
$\Box$


Sufficient Condition
Let $f: \struct {S, \oplus_\sigma} \to \struct {S, \otimes_\tau}$ be an isomorphism.
Let $e \in S$ be the identity for both $\oplus$ and $\otimes$, by hypothesis.

We have:










\(\ds \forall x, y \in S: \, \)



\(\ds \map \tau {\map f {x \oplus y} }\)

\(=\)







\(\ds \map {\tau \circ f} {x \oplus y}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {f \circ \sigma} {x \oplus y}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \map f {\map \sigma {x \oplus y} }\)




















\(\ds \)

\(=\)







\(\ds \map f {x \oplus_\sigma y}\)





Definition of Operation Induced by Permutation














\(\ds \)

\(=\)







\(\ds \map f x \otimes_\tau \map f y\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \map \tau {\map f x \otimes \map f y}\)





Definition of Operation Induced by Permutation








\(\ds \leadsto \ \ \)





\(\ds \map {\tau^{-1} } {\map \tau {\map f {x \oplus y} } }\)

\(=\)







\(\ds \map {\tau^{-1} } {\map \tau {\map f x \otimes \map f y} }\)





as $\tau$ is a bijection it has an inverse mapping $\tau^{-1}$








\(\ds \leadsto \ \ \)





\(\ds \map f {x \oplus y}\)

\(=\)







\(\ds \map f x \otimes \map f y\)





Definition of Inverse Mapping



Thus $f$ is a homomorphism, and thus an isomorphism, from $\struct {S, \oplus}$ to $\struct {S, \otimes}$.

Now we have:










\(\ds \forall x, y \in S: \, \)



\(\ds \map {\tau \circ f} {x \oplus y}\)

\(=\)







\(\ds \map \tau {\map f {x \oplus y} }\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map \tau {\map f x \otimes \map f y}\)





Definition of Homomorphism














\(\ds \)

\(=\)







\(\ds \map f x \otimes_\tau \map f y\)





Definition of Operation Induced by Permutation














\(\ds \)

\(=\)







\(\ds \map f {x \oplus_\sigma y}\)





Definition of Homomorphism














\(\ds \)

\(=\)







\(\ds \map f {\map \sigma {x \oplus y} }\)





Definition of Operation Induced by Permutation














\(\ds \)

\(=\)







\(\ds \map {f \circ \sigma} {x \oplus y}\)





Definition of Composition of Mappings




In particular, this holds for $y = e$, so:










\(\ds \forall x \in S: \, \)



\(\ds \map {\tau \circ f} x\)

\(=\)







\(\ds \map {\tau \circ f} {x \oplus e}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds \map {f \circ \sigma} {x \oplus e}\)





from above














\(\ds \)

\(=\)







\(\ds \map {f \circ \sigma} x\)





Definition of Identity Element



Hence by Equality of Mappings:

$\tau \circ f = f \circ \sigma$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.9 \ \text {(b)}$




