# 

Source: https://proofwiki.org/wiki/Equivalent_Conditions_for_Entropic_Structure/Pointwise_Operation_of_Homomorphisms_from_External_Direct_Product_is_Homomorphism



Theorem
Let $\struct {S, \odot}$ be an algebraic structure.

Let $\struct {S \times S, \otimes}$ denote the external direct product of $\struct {S, \odot}$ with itself:

$\forall \tuple {x_1, y_1}, \tuple {x_2, y_2} \in S \times S: \tuple {x_1, y_1} \otimes \tuple {x_2, y_2} = \tuple {x_1 \odot x_2, y_1 \odot y_2}$

Let $f$ and $g$ be mappings from $\struct {S \times S, \otimes}$ to $\struct {S, \odot}$.
Let $f \odot g$ denote the pointwise operation on $S^{S \times S}$ induced by $\odot$.

Then:

If $f$ and $g$ are homomorphisms, then $f \odot g$ is also a homomorphism
if and only if:

$\struct {S, \odot}$ is an entropic structure.


Proof
Sufficient Condition
Let $\struct {S, \odot}$ be such that if $f$ and $g$ are homomorphisms, then $f \odot g$ is also a homomorphism.
So, let $f: S \times S \to S$ and $g: S \times S \to S$ be arbitrary homomorphisms.
Let $w$, $x$, $y$ and $d$ in $S$ be arbitrary.
Then as $f$ and $g$ are arbitrary:










\(\ds \exists \tuple {x_1, y_1}, \tuple {x_2, y_2} \in S \times S: \, \)



\(\ds \map f {x_1, y_1}\)

\(=\)







\(\ds w\)


















\(\, \ds \land \, \)

\(\ds \map f {x_2, y_2}\)

\(=\)







\(\ds x\)




















\(\ds \map g {x_1, y_1}\)

\(=\)







\(\ds y\)


















\(\, \ds \land \, \)

\(\ds \map g {x_2, y_2}\)

\(=\)







\(\ds z\)










Then we have:














\(\ds \)

\(\)







\(\ds \paren {w \odot x} \odot \paren {y \odot z}\)




















\(\ds \)

\(=\)







\(\ds \paren {\map f {x_1, y_1} \odot \map f {x_2, y_2} } \odot \paren {\map g {x_1, y_1} \odot \map g {x_2, y_2} }\)





a priori














\(\ds \)

\(=\)







\(\ds \paren {\map f {\tuple {x_1, y_1} \otimes \tuple {x_2, y_2} } } \odot \paren {\map g {\tuple {x_1, y_1} \otimes \tuple {x_2, y_2} } }\)





as $f$ and $g$ are both homomorphisms














\(\ds \)

\(=\)







\(\ds \map {\paren {f \odot g} } {\tuple {x_1, y_1} \otimes \tuple {x_2, y_2} }\)





Definition of Pointwise Operation














\(\ds \)

\(=\)







\(\ds \map {\paren {f \odot g} } {x_1, y_1} \odot \map {\paren {f \odot g} } {x_2, y_2}\)





as $f \odot g$ is a homomorphism














\(\ds \)

\(=\)







\(\ds \paren {w \odot y} \odot \paren {x \odot z}\)





Definition of Pointwise Operation



As $w$, $x$, $y$ and $z$ are arbitrary, $\struct {S, \odot}$ is an entropic structure.
$\Box$


Necessary Condition
Let $\struct {S, \odot}$ be an entropic structure.
Let $f: S \times S \to S$ and $g: S \times S \to S$ be arbitrary homomorphisms.
Then:










\(\ds \forall \tuple {x_1, y_1}, \tuple {x_2, y_2} \in S \times S: \, \)



\(\ds \)

\(\)







\(\ds \map {\paren {f \odot g} } {\tuple {x_1, y_1} \otimes \tuple {x_2, y_2} }\)




















\(\ds \)

\(=\)







\(\ds \map f {\tuple {x_1, y_1} \otimes \tuple {x_2, y_2} } \odot \map g {\tuple {x_1, y_1} \otimes \tuple {x_2, y_2} }\)





Definition of Pointwise Operation














\(\ds \)

\(=\)







\(\ds \paren {\map f {x_1, y_1} \odot \map f {x_2, y_2} } \odot \paren {\map g {x_1, y_1} \odot \map g {x_2, y_2} }\)





as $f$ and $g$ are homomorphisms














\(\ds \)

\(=\)







\(\ds \paren {\map f {x_1, y_1} \odot \map g {x_1, y_1} } \odot \paren {\map f {x_2, y_2} \odot \map g {x_2, y_2} }\)





Definition of Entropic Structure














\(\ds \)

\(=\)







\(\ds \paren {\map {\paren {f \odot g} } {x_1, y_1} } \odot \paren {\map {\paren {f \odot g} } {x_2, y_2} }\)





Definition of Pointwise Operation



As $w$, $x$, $y$ and $z$ are arbitrary, $\struct {S, \odot}$ is an entropic structure.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.13$




