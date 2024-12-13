# 

Source: https://proofwiki.org/wiki/Mapping_on_Cartesian_Product_of_Substructures_is_Restriction_of_Operation

Theorem
Let $\struct {S, \circ}$ be an algebraic structure with $1$ operation.
Let $\struct {A, \circ {\restriction_A} }, \struct {B, \circ {\restriction_B} }$ be closed algebraic substructures of $\struct {S, \circ}$, where $\circ {\restriction_A}$ and $\circ {\restriction_B}$ are the operations induced by the restrictions of $\circ$ to $A$ and $B$ respectively.

Let the mapping $\phi: A \times B \to S$ be defined as:

$\forall \tuple {a, b} \in A \times B: \map \phi {a, b} = a \circ b$
where $A \times B$ denotes the Cartesian product of $A$ and $B$.

Then $\phi$ is the restriction to $A \times B$ of the operation $\circ$ on $S \times S \to S$.


Proof

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Suppose the mapping $\phi: A \times B \to S$ is defined as:

$\forall \tuple {a, b} \in A \times B: \map \phi {a, b} = a \circ b$
where $A \times B$ denotes the Cartesian product of $A$ and $B$.
Then:










\(\ds \forall a \in A, b \in B: \, \)



\(\ds a \circ b\)

\(=\)







\(\ds \map \phi {a, b}\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \paren{\phi \cap \paren {A \times B} } \tuple{a, b}\)





Definition of Restriction/Mapping














\(\ds \)

\(=\)







\(\ds \phi {\restriction_{A \times B} } \tuple{a, b }\)





Definition of Restriction/Mapping














\(\ds \)

\(=\)







\(\ds a \mathbin {\circ {\restriction_{A \times B} } } b\)





Definition of Operation Induced by Restriction




$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces




