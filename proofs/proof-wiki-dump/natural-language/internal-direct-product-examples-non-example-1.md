# 

Source: https://proofwiki.org/wiki/Internal_Direct_Product/Examples/Non-Example_1

Example of External Direct Product which is not Internal Direct Product
Let $m$ and $n$ be integers such that $m, n > 1$.
Let $S$ be a set with $n$ elements.
Let $A$ and $B$ be subsets of $S$ which have $m$ and $n$ elements respectively.
Let $\struct {S, \gets}$ be the algebraic structure formed from $S$ with the left operation.
Then:

$\struct {S, \gets}$ is isomorphic with the external direct product of $\struct {A, \gets_A}$ and $\struct {B, \gets_B}$
but:

$\struct {S, \gets}$ is not the internal direct product of $\struct {A, \gets_A}$ and $\struct {B, \gets_B}$.


Proof
From Cardinality of Cartesian Product of Finite Sets, $S$ has the same number of elements as the Cartesian product of $A$ and $B$.
That is:

$\card {\struct {S, \gets} } = \card {\struct {A, \gets_A} \times \struct {B, \gets_B} }$
Hence by definition of cardinality, there exists a bijection between $S$ and $A \times B$.
Indeed, from Cardinality of Set of Bijections, there are $m n!$ such bijections.

First we demonstrate that $\struct {S, \gets}$ is isomorphic with the external direct product of $\struct {A, \gets_A}$ and $\struct {B, \gets_B}$.
Let $\phi: A \times B \to S$ be an arbitrary bijection.
We have:










\(\ds \forall \tuple {a, b}, \tuple {c, d} \in A \times B: \, \)



\(\ds \)

\(\)







\(\ds \map \phi {\tuple {a, b} \gets \tuple {c, d} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi {a \gets c, b \gets d}\)





Definition of External Direct Product














\(\ds \)

\(=\)







\(\ds \map \phi {c, d}\)





Definition of Left Operation














\(\ds \)

\(=\)







\(\ds \map \phi {a, b} \gets \map \phi {c, d}\)





Definition of Left Operation



demonstrating isomorphism.
$\Box$

Let $\phi: A \times B \to S$ be the mapping defined as:

$\map \phi {a, b} = a \gets b$
Let $\tuple {a, b}$ and $\tuple {c, b}$ be arbitrary elements of $A \times B$ such that $a \ne c$.
As the cardinality of $A$ is greater than $1$, it is apparent that this is possible.
Thus:

$\tuple {a, b} \ne \tuple {c, b}$

But we have:














\(\ds \map \phi {a, b}\)

\(=\)







\(\ds a \gets b\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds b\)





Definition of $\gets$














\(\ds \)

\(=\)







\(\ds c \gets b\)





Definition of $\gets$














\(\ds \)

\(=\)







\(\ds \map \phi {c, b}\)





Definition of $\phi$








\(\ds \leadsto \ \ \)





\(\ds \map \phi {a, b}\)

\(=\)







\(\ds \map \phi {c, b}\)









demonstrating that $\phi$ is not an injection.
Thus $\phi$ is not a bijection.
Hence by definition $\phi$ is not an isomorphism.
It follows that there can be no isomorphism from $\struct {A, \gets_A} \times \struct {B, \gets_B}$ to $\struct {S, \gets}$.
That is, $\struct {S, \gets}$ is not the internal direct product of $\struct {A, \gets_A}$ and $\struct {B, \gets_B}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.8$




