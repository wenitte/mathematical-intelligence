# 

Source: https://proofwiki.org/wiki/Composite_of_Bijection_with_Inverse_is_Identity_Mapping



Theorem
Let $f: S \to T$ be a bijection.
Then:














\(\ds f^{-1} \circ f\)

\(=\)







\(\ds I_S\)




















\(\ds f \circ f^{-1}\)

\(=\)







\(\ds I_T\)









where $I_S$ and $I_T$ are the identity mappings on $S$ and $T$ respectively.


Proof
Let $f: S \to T$ be a bijection.
From Inverse of Bijection is Bijection, $f^{-1}$ is also a bijection.

Let $x \in S$.
From Inverse Element of Bijection:

$\exists y \in T: y = \map f x \implies x = \map {f^{-1} } y$

Then:














\(\ds \map {f^{-1} \circ f} x\)

\(=\)







\(\ds \map {f^{-1} } {\map f x}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {f^{-1} } y\)





by hypothesis














\(\ds \)

\(=\)







\(\ds x\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \map {I_S} x\)





Definition of Identity Mapping




From Domain of Composite Relation and Codomain of Composite Relation, the domain and codomain of $f^{-1} \circ f$ are both $S$, and so are those of $I_S$ by definition.
So all the criteria for Equality of Mappings are met and thus $f^{-1} \circ f = I_S$.

Let $y \in T$.
From Inverse Element of Bijection:

$\exists x \in S: x = \map {f^{-1} } y \implies y = \map f x$

Then:














\(\ds \map {f \circ f^{-1} } y\)

\(=\)







\(\ds \map f {\map {f^{-1} } y}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map f x\)





by hypothesis














\(\ds \)

\(=\)







\(\ds y\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \map {I_T} y\)





Definition of Identity Mapping




From Domain of Composite Relation and Codomain of Composite Relation, the domain and codomain of $f \circ f^{-1}$ are both $T$, and so are those of $I_T$ by definition.
So all the criteria for Equality of Mappings are met and thus $f \circ f^{-1} = I_T$.
$\blacksquare$


Also see
Bijection iff Left and Right Inverse for the converse of this result.


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 2$: Product sets, mappings
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 3.5$. Identity mappings: Example $52$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions: Theorem $5.5$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Mappings: $\S 16$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.14$: Composition of Functions: Exercise $6$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 24.4$
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.6$: Functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): bijection
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): bijection




