# 

Source: https://proofwiki.org/wiki/Equivalent_Conditions_for_Entropic_Structure/Mapping_from_External_Direct_Product_is_Homomorphism



Theorem
Let $\struct {S, \odot}$ be an algebraic structure.

Let $\struct {S \times S, \otimes}$ denote the external direct product of $\struct {S, \odot}$ with itself:

$\forall \tuple {x_1, y_1}, \tuple {x_2, y_2} \in S \times S: \tuple {x_1, y_1} \otimes \tuple {x_2, y_2} = \tuple {x_1 \odot x_2, y_1 \odot y_2}$
Consider the operation $\odot$ as a mapping from $S \times S$ to $S$.
That is:

$\forall a, b \in S: \map \odot {a, b} = a \odot b$

Then:

$\odot: S \times S \to S$ is a homomorphism from $\struct {S \times S, \otimes}$ to $\struct {S, \odot}$
if and only if:

$\struct {S, \odot}$ is an entropic structure.


Proof
Sufficient Condition
Let $\struct {S, \odot}$ be such that $\odot: S \times S \to S$ is a homomorphism.
Let $\tuple {x_1, y_1}, \tuple {x_2, y_2} \in S \times S$ be arbitrary.

We have:














\(\ds \)

\(\)







\(\ds \paren {x_1 \odot x_2} \odot \paren {y_1 \odot y_2}\)




















\(\ds \)

\(=\)







\(\ds \paren {\map \odot {x_1, x_2} } \odot \paren {\map \odot {y_1, y_2} }\)





Definition of $\odot$














\(\ds \)

\(=\)







\(\ds \map \odot {\tuple {x_1, x_2} \otimes \tuple {y_1, y_2} }\)





by hypothesis $\odot$ is a homomorphism














\(\ds \)

\(=\)







\(\ds \map \odot {\tuple {x_1 \odot y_1, x_2 \odot y_2} }\)





Definition of External Direct Product














\(\ds \)

\(=\)







\(\ds \paren {x_1 \odot y_1} \odot \paren {x_2 \odot y_2}\)





Definition of $\odot$



and it is seen $\struct {S, \odot}$ is an entropic structure by definition.
$\Box$


Necessary Condition
Let $\struct {S, \odot}$ be an entropic structure.
Then:










\(\ds \forall \tuple {x_1, y_1}, \tuple {x_2, y_2} \in S \times S: \, \)



\(\ds \)

\(\)







\(\ds \map \odot {\tuple {x_1, x_2} \otimes \tuple {y_1, y_2} }\)




















\(\ds \)

\(=\)







\(\ds \map \odot {\tuple {x_1 \odot y_1, x_2 \odot y_2} }\)





Definition of External Direct Product














\(\ds \)

\(=\)







\(\ds \paren {x_1 \odot y_1} \odot \paren {x_2 \odot y_2}\)





Definition of $\odot$














\(\ds \)

\(=\)







\(\ds \paren {x_1 \odot x_2} \odot \paren {y_1 \odot y_2}\)





Definition of Entropic Structure














\(\ds \)

\(=\)







\(\ds \paren {\map \odot {x_1, x_2} } \odot \paren {\map \odot {y_1, y_2} }\)





Definition of $\odot$



Hence by definition $\odot: S \times S \to S$ is a homomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.13$




