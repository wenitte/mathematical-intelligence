# 

Source: https://proofwiki.org/wiki/Bijection_between_Power_Set_of_Disjoint_Union_and_Cartesian_Product_of_Power_Sets

Theorem
Let $S$ and $T$ be disjoint sets.
Let $\powerset S$ denote the power set of $S$.

Then there exists a bijection between $\powerset {S \cup T}$ and $\paren {\powerset S} \times \paren {\powerset T}$.

Hence:

$\powerset {S \cup T} \sim \paren {\powerset S} \times \paren {\powerset T}$
where $\sim$ denotes set equivalence.


Proof
Let $\phi: \paren {\powerset S} \times \paren {\powerset T} \to  \powerset {S \cup T}$ be defined as:

$\forall \tuple {A, B} \in \paren {\powerset S} \times \paren {\powerset T}: \map \phi {A, B} = A \cup B$

In order to show that $\phi$ is a bijection, it needs to be shown that $\phi$ has the following properties:

$\phi$ is a mapping, that is:
$\phi$ is left-total
$\phi$ is many-to-one
$\phi$ is a surjection
$\phi$ is an injection.

Let $A \subseteq S$ and $B \subseteq T$.
Then:














\(\ds A\)

\(\in\)







\(\ds \powerset S\)





Definition of Power Set












\(\, \ds \land \, \)

\(\ds B\)

\(\in\)







\(\ds \powerset T\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {A, B}\)

\(\in\)







\(\ds \paren {\powerset S} \times \paren {\powerset T}\)





Definition of Cartesian Product



Thus:

$\forall A \subseteq S, B \subseteq T: \tuple {A, B} \in \Dom \phi$
and so $\phi$ is left-total.
$\Box$

Let $A_1, A_2 \subseteq S$ and $B_1, B_2 \subseteq T$.
Then:














\(\ds \map \phi {A_1, B_1}\)

\(\ne\)







\(\ds \map \phi {A_2, B_2}\)














\(\ds \leadsto \ \ \)





\(\ds A_1 \cup B_1\)

\(\ne\)







\(\ds A_2 \cup B_2\)





Definition of $\phi$








\(\ds \leadsto \ \ \)





\(\ds A_1 \cup B_1\)

\(\nsubseteq\)







\(\ds A_2 \cup B_2\)





Definition of Set Equality












\(\, \ds \lor \, \)

\(\ds A_2 \cup B_2\)

\(\nsubseteq\)







\(\ds A_1 \cup B_1\)










Without loss of generality, suppose $A_1 \cup B_1 \nsubseteq A_2 \cup B_2$.
Then:










\(\ds \exists x \in A_1 \cup B_1: \, \)



\(\ds x\)

\(\notin\)







\(\ds A_2 \cup B_2\)














\(\ds \leadsto \ \ \)

\(\ds \exists x \in A_1 \lor x \in B_1: \, \)



\(\ds x \notin A_2\)

\(\land\)







\(\ds x \notin B_2\)














\(\ds \leadsto \ \ \)





\(\ds A_1 \ne A_2\)

\(\lor\)







\(\ds A_1 \ne B_2\)


















\(\, \ds \land \, \)

\(\ds B_1 \ne A_2\)

\(\lor\)







\(\ds B_1 \ne B_2\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {A_1, B_1}\)

\(\ne\)







\(\ds \tuple {A_2, B_2}\)









That is:

$\map \phi {A_1, B_1} \ne \map \phi {A_2, B_2} \implies \tuple {A_1, B_1} \ne \tuple {A_2, B_2}$
demonstrating that $\phi$ is many-to-one.
Thus $\phi$ has been shown to be a mapping.
$\Box$

Let $A \cup B \in \powerset {S \cup T}$.
Then:

$\tuple {A, B} \in \paren {\powerset S} \times \paren {\powerset T}$
by definition of power set and Cartesian product.
That is, $\phi$ is a surjection by definition.
$\Box$

It remains to be shown that $\phi$ is an injection.
Let $\tuple {A_1, B_1} \ne \tuple {A_2, B_2}$.
Then either $A_1 \ne A_2$ or $B_1 \ne B_2$.
That is, at least one of the following holds:














\(\ds A_1\)

\(\nsubseteq\)







\(\ds A_2\)




















\(\ds A_2\)

\(\nsubseteq\)







\(\ds A_1\)




















\(\ds B_1\)

\(\nsubseteq\)







\(\ds B_2\)




















\(\ds B_2\)

\(\nsubseteq\)







\(\ds B_1\)









Without loss of generality, suppose $A_1 \nsubseteq A_2$.
Then:

$\exists x \in A_1: x \notin A_2$
and so by Set is Subset of Union:

$x \in A_1 \cup B_1$
But we have that $S$ and $T$ are disjoint.
That is:

$x \in A_1 \implies x \notin B_2$
Thus:

$\exists x \in A_1 \cup B_1: x \notin A_2 \cup B_2$
and so:

$A_1 \cup B_1 \ne A_2 \cup B_2$
That is:

$\map \phi {A_1, B_1} \ne \map \phi {A_2, B_2}$
demonstrating that $\phi$ is an injection.

Hence the result.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $3$. Mappings: Exercise $11$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Mappings: $\S 14 \alpha$




