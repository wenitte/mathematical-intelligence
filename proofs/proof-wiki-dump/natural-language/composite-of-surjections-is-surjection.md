# 

Source: https://proofwiki.org/wiki/Composite_of_Surjections_is_Surjection

Theorem
A composite of surjections is a surjection.

That is:

If $g$ and $f$ are surjections, then so is $g \circ f$.


Proof
Let $f: S_1 \to S_2$ and $g: S_2 \to S_3$ be surjections.
Then:










\(\ds \forall z \in S_3: \exists y \in S_2: \, \)



\(\ds \map g y\)

\(=\)







\(\ds z\)





Definition of Surjection








\(\ds \leadsto \ \ \)

\(\ds \exists x \in S_1: \, \)



\(\ds \map f x\)

\(=\)







\(\ds y\)





Definition of Surjection



By definition of a composite mapping:

$\map {g \circ f} x = \map g {\map f x} = \map g y = z$
Hence $g \circ f$ is surjective.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 3.6$. Products of bijective mappings. Permutations: $\text{(i)}$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text I$: Sets and Functions: Factoring Functions
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Theorem $5.10 \ (2)$
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.4$: Functions: Theorem $\text{A}.4$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.3$: Mappings: Exercise $2$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $2$: Maps and relations on sets: Exercise $2 \ \text{(b)}$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 2$: Functions
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 2$: Functions: Exercise $2.4 \ \text{(d)}$
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): Appendix $\text A$: Set Theory: Functions




