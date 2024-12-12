# 

Source: https://proofwiki.org/wiki/Equivalent_Conditions_for_Entropic_Structure/Pointwise_Operation_is_Homomorphism



Theorem
Let $\struct {S, \odot}$ be an algebraic structure.

Let $\struct {T, \circledast}$ be an arbitrary algebraic structure.
Let $f$ and $g$ be mappings from $\struct {T, \circledast}$ to $\struct {S, \odot}$.
Let $f \odot g$ denote the pointwise operation on $S^T$ induced by $\odot$.

Then:

If $f$ and $g$ are homomorphisms, then $f \odot g$ is also a homomorphism
if and only if:

$\struct {S, \odot}$ is an entropic structure.


Proof
Sufficient Condition
Let $\struct {S, \odot}$ be such that if $f$ and $g$ are homomorphisms, then $f \odot g$ is also a homomorphism.
So, let $f: T \to S$ and $g: T \to S$ be arbitrary homomorphisms.
Let $a, b \in T$ be arbitrary.
Because $T$ is arbitrary, and $f$ and $g$ are arbitrary, it follows that:










\(\ds \forall w, x, y, z \in S: \exists a, b \in T: \, \)



\(\ds \map f a\)

\(=\)







\(\ds w\)


















\(\, \ds \land \, \)

\(\ds \map f b\)

\(=\)







\(\ds x\)




















\(\ds \map g a\)

\(=\)







\(\ds y\)


















\(\, \ds \land \, \)

\(\ds \map g b\)

\(=\)







\(\ds z\)










Thus we have:














\(\ds \paren {w \odot x} \odot \paren {y \odot z}\)

\(=\)







\(\ds \paren {\map f a \odot \map f b} \odot \paren {\map g a \odot \map g b}\)





a priori














\(\ds \)

\(=\)







\(\ds \paren {\map f {a \circledast b} }\odot \paren {\map g {a \circledast b} }\)





as $f$ and $g$ are both homomorphisms














\(\ds \)

\(=\)







\(\ds \map {\paren {f \odot g} } {a \circledast b}\)





Definition of Pointwise Operation














\(\ds \)

\(=\)







\(\ds \map {\paren {f \odot g} } a \odot \map {\paren {f \odot g} } b\)





as $f \odot g$ is a homomorphism














\(\ds \)

\(=\)







\(\ds \paren {\map f a \odot \map g a} \odot \paren {\map f b \odot \map g b}\)





Definition of Pointwise Operation














\(\ds \)

\(=\)







\(\ds \paren {w \odot y} \odot \paren {x \odot z}\)





Definition of Pointwise Operation



As $w$, $x$, $y$ and $z$ are arbitrary, $\struct {S, \odot}$ is an entropic structure.
$\Box$


Necessary Condition
Let $\struct {S, \odot}$ be an entropic structure.
Let $f: T \to S$ and $g: T \to S$ be arbitrary homomorphisms.
Then:










\(\ds \forall x, y \in T: \, \)



\(\ds \map {\paren {f \odot g} } {x \circledast y}\)

\(=\)







\(\ds \map f {x \circledast y} \odot \map g {x \circledast y}\)





Definition of Pointwise Operation














\(\ds \)

\(=\)







\(\ds \paren {\map f x \odot \map f y} \odot \paren {\map g x \odot \map g y}\)





as $f$ and $g$ are both homomorphisms














\(\ds \)

\(=\)







\(\ds \paren {\map f x \odot \map g x} \odot \paren {\map f y \odot \map g y}\)





Definition of Entropic Structure














\(\ds \)

\(=\)







\(\ds \paren {\map {\paren {f \odot g} } x} \odot \paren {\map {\paren {f \odot g} } y}\)





Definition of Pointwise Operation



Hence by definition $f \odot g$ is a homomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.13$




