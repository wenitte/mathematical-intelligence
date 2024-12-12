# 

Source: https://proofwiki.org/wiki/Condition_for_Existence_of_Epimorphism_from_Quotient_Structure_to_Epimorphic_Image



Theorem
Let $\struct {A, \odot}$ and $\struct {B, \otimes}$ be algebraic structures.
Let $\RR$ be a congruence relation on $\struct {A, \odot}$.
Let $f: \struct {A, \odot} \to \struct {B, \otimes}$ be an epimorphism.

Let $\struct {A / \RR, \odot_\RR}$ denote the quotient structure defined by $\RR$.
Let $q_\RR: A \to A / \RR$ denote the quotient mapping induced by $\RR$:

$\forall x \in A: \map {q_\RR} x = \eqclass x \RR$
where $\eqclass x \RR$ denotes the equivalence class of $x$ under $\RR$.

Then:

there exists an epimorphism $g$ from $\struct {A / \RR, \odot_\RR}$ to $\struct {B, \otimes}$ which satisfies $g \circ q_\RR = f$
if and only if:

$\RR \subseteq \RR_f$
where $\RR_f$ denotes the equivalence relation induced by $f$.


Proof
Necessary Condition
Let $\RR \subseteq \RR_f$.
Recall the definition of $\RR_f$:

$\forall x, y \in A: x \mathrel {\RR_f} y \iff \map f x = \map f y$

Let us define $g: \struct {A / \RR, \odot_\RR} \to \struct {B, \otimes}$ as:

$\forall \eqclass x \RR \in A / \RR: \map g {\eqclass x \RR} = \map f x$

We show that $g$ is well-defined.
Let $x \mathrel \RR y$.
Then as $\RR \subseteq \RR_f$, it follows that:

$x \mathrel {\RR_f} y$
By definition of the equivalence class of $x$:

$\eqclass x \RR = \eqclass y \RR$
Thus:














\(\ds \map g {\eqclass x \RR}\)

\(=\)







\(\ds \map f x\)





Definition of $g$














\(\ds \)

\(=\)







\(\ds \map f y\)





as $x \mathrel {\RR_f} y$














\(\ds \)

\(=\)







\(\ds \map g {\eqclass y \RR}\)





Definition of $g$



Thus we have that:

$\forall x, y \in A: x \mathrel \RR y \implies \map g {\eqclass x \RR} = \map g {\eqclass y \RR}$
and so $g$ is well-defined.

Then:










\(\ds \forall x \in A: \, \)



\(\ds \map {g \circ q_R} x\)

\(=\)







\(\ds \map g {\map {q_R} x}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map g {\eqclass x \RR}\)





Definition of Quotient Mapping














\(\ds \)

\(=\)







\(\ds \map f x\)





Definition of $g$



and so we have that:

$g \circ q_\RR = f$

Let $x, y \in A$.
We have:














\(\ds \map g {\eqclass x \RR \odot_\RR \eqclass y \RR}\)

\(=\)







\(\ds \map g {\eqclass {x \odot y} \RR}\)





Quotient Structure is Well-Defined














\(\ds \)

\(=\)







\(\ds \map f {x \odot y}\)





Definition of $g$














\(\ds \)

\(=\)







\(\ds \map f x \otimes \map f y\)





$f$ is an epimorphism














\(\ds \)

\(=\)







\(\ds \map g {\eqclass x \RR} \otimes \map g {\eqclass y \RR}\)





Definition of $g$: a priori $g$ is well-defined



Thus we see that $g$ is a homomorphism.

We have by hypothesis that $g \circ q_\RR = f$ is an epimorphism.
Hence a fortiori $g \circ q_\RR$ is a surjection.
So from Surjection if Composite is Surjection we have that $g$ is likewise a surjection.
Thus we have that $g$ is a surjective homomorphism.
Hence by definition $g$ is an epimorphism.

We note that if it is not the case that $\RR \subseteq \RR_f$, then there exist $\tuple {x, y} \in \RR$ such that $\map f x \ne \map f y$.
In that case we would see that while $x \mathrel y$ we would have that:

$\map g {\eqclass x \RR} \ne \map g {\eqclass y \RR}$
meaning that $g$ is not a well-defined mapping.

So, in summary, given that $\RR \subseteq \RR_f$, we have demonstrated the existence of an epimorphism $g$ which satisfies $g \circ q_\RR = f$.
$\Box$


Sufficient Condition
Let there exist an epimorphism $g$ from $\struct {A / \RR, \odot_\RR}$ to $\struct {B, \otimes}$ which satisfies $g \circ q_\RR = f$.

Let $x, y \in A$ be arbitrary such that $x \mathrel \RR y$.
Then we have:














\(\ds x\)

\(\RR\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds \eqclass x \RR\)

\(=\)







\(\ds \eqclass y \RR\)





Definition of Equivalence Class








\(\ds \leadsto \ \ \)





\(\ds \map g {\eqclass x \RR}\)

\(=\)







\(\ds \map g {\eqclass y \RR}\)





as $g$ is functional








\(\ds \leadsto \ \ \)





\(\ds \map g {\map {q_\RR} x}\)

\(=\)







\(\ds \map g {\map {q_\RR} y}\)





Definition of Quotient Mapping








\(\ds \leadsto \ \ \)





\(\ds \map {g \circ q_\RR} x\)

\(=\)







\(\ds \map {g \circ q_\RR} y\)





Definition of Composition of Mappings








\(\ds \leadsto \ \ \)





\(\ds \map f x\)

\(=\)







\(\ds \map f y\)





by hypothesis: $g \circ q_\RR = f$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\RR_f\)







\(\ds y\)





Definition of Equivalence Relation Induced by Mapping








\(\ds \leadsto \ \ \)





\(\ds \RR\)

\(\subseteq\)







\(\ds \RR_f\)





Definition of Subset



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.18 \ \text {(a)}$




