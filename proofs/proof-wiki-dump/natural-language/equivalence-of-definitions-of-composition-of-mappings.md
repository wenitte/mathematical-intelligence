# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Composition_of_Mappings



Theorem
The following definitions of the concept of Composition of Mappings are equivalent:
Let $f_1: S_1 \to S_2$ and $f_2: S_2 \to S_3$ be mappings such that the domain of $f_2$ is the same set as the codomain of $f_1$.

Definition 1
The composite mapping $f_2 \circ f_1$ is defined as:

$\forall x \in S_1: \map {\paren {f_2 \circ f_1} } x := \map {f_2} {\map {f_1} x}$
Definition 2
The composite of $f_1$ and $f_2$ is defined and denoted as:

$f_2 \circ f_1 := \set {\tuple {x, z} \in S_1 \times S_3: \tuple {\map {f_1} x, z} \in f_2}$
Definition 3
The composite of $f_1$ and $f_2$ is defined and denoted as:

$f_2 \circ f_1 := \set {\tuple {x, z} \in S_1 \times S_3: \exists y \in S_2: \map {f_1} x = y \land \map {f_2} y = z}$


Proof
Let $f_1: S_1 \to S_2$ and $f_2: S_2 \to S_3$ be mappings such that:

$\Dom {f_2} = \Cdm {f_1}$


$(1)$ implies $(2)$
Let $f_2 \circ f_1$ be a composite mapping by definition 1.
Then by definition:

$\forall x \in S_1: \map {\paren {f_2 \circ f_1} } x := \map {f_2} {\map {f_1} x}$

We have that $f_1$ is a mapping, and so:

$\forall x \in S_1: \exists \map {f_1} x \in S_2$
We have that $f_2$ is a mapping, and so:

$\forall \map {f_1} x \in S_2: \exists \map {f_2} {\map {f_1} x} \in S_3$

Then:














\(\ds z\)

\(=\)







\(\ds \map {f_2} {\map {f_1} x}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {\map {f_1} x, z}\)

\(\in\)







\(\ds f_2\)





Definition of Mapping as a Relation



and so:

$f_2 \circ f_1 = \set {\tuple {x, z} \in S_1 \times S_3: \tuple {\map {f_1} x, z} \in f_2}$

Thus $f_2 \circ f_1$ is a composite mapping by definition 2.
$\Box$


$(2)$ implies $(1)$
Let $f_2 \circ f_1$ be a composite mapping by definition 2.
Then by definition:

$f_2 \circ f_1 := \set {\tuple {x, z} \in S_1 \times S_3: \tuple {\map {f_1} x, z} \in f_2}$
We have that $f_1$ is a mapping, and so:

$\forall x \in S_1: \exists \map {f_1} x \in S_2$
and so by definition of a Definition of Mapping as a Relation:










\(\ds \forall x \in S_1: \, \)



\(\ds \tuple {\map {f_1} x, z}\)

\(\in\)







\(\ds f_2\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \map {f_2} {\map {f_1} x}\)









Thus $f_2 \circ f_1$ is a composite mapping by definition 1.
$\Box$


$(2)$ implies  $(3)$
Let $f_2 \circ f_1$ be a composite mapping by definition 2.
Then by definition:

$f_2 \circ f_1 := \set {\tuple {x, z} \in S_1 \times S_3: \tuple {\map {f_1} x, z} \in f_2}$

Because $f_1$ is a mapping, it follows that:

$\forall x \in S_1: \exists y \in S_2: \map {f_1} x = y$
Similarly:

$\forall y \in S_2: \exists z \in S_3: \map {f_2} y = z$
Hence:

$\tuple {\map {f_1} x, z} \in f_2 \implies \exists y \in S_2: \map {f_1} x = y \land \map {f_2} y = z$
and so:

$f_2 \circ f_1 := \set {\tuple {x, z} \in S_1 \times S_3: \exists y \in S_2: \map {f_1} x = y \land \map {f_2} y = z}$

Thus $f_2 \circ f_1$ is a composite mapping by definition 3.
$\Box$


$(3)$ implies  $(2)$
Let $f_2 \circ f_1$ be a composite mapping by definition 3.
Then by definition:

$f_2 \circ f_1 := \set {\tuple {x, z} \in S_1 \times S_3: \exists y \in S_2: \map {f_1} x = y \land \map {f_2} y = z}$
We have that:

$\forall x \in S_1: \exists y \in S_2: \map {f_1} x = y$
and that:

$\forall y \in S_2: \exists z \in S_3: \map {f_2} y = z$
Hence:

$\forall x \in S_1: \exists z \in S_3: \map {f_1} x = y \land \map {f_2} y = z$
Thus:

$\forall x \in S_1: \exists z \in S_3: \tuple {\map {f_1} x, y} \in f_2$
and so:

$f_2 \circ f_1 := \set {\tuple {x, z} \in S_1 \times S_3: \tuple {\map {f_1} x, z} \in f_2}$
Thus $f_2 \circ f_1$ is a composite mapping by definition 2.
$\blacksquare$


Sources
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.6$: Functions: Exercise $1.6.2$




