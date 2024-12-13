# 

Source: https://proofwiki.org/wiki/Injection_if_Composite_is_Injection



Theorem
Let $f$ and $g$ be mappings such that their composite $g \circ f$ is an injection.

Then $f$ is an injection.


Proof
Let $g \circ f$ be injective.
We need to show that $\map f a = \map f b \implies a = b$.
So suppose $\map f a = \map f b$.
Then:














\(\ds \map {g \circ f} a\)

\(=\)







\(\ds \map g {\map f a}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map g {\map f b}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \map {g \circ f} b\)





Definition of Composition of Mappings



and so $a = b$ as $g \circ f$ is an injection.

So we have shown that:

$\map f a = \map f b \implies a = b$
Hence the result from the definition of injection.
$\blacksquare$


Also see
Surjection if Composite is Surjection


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 3.6$. Products of bijective mappings. Permutations
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions: Theorem $5.3: \ 1^\circ$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Exercise $\text{H}$
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): Appendix: Elementary set and number theory
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Exercise $14 \ \text{(a)}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 25$: Some further results and examples on mappings: Worked Example $2$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.3$: Mappings: Exercise $2$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 2$: Functions: Exercise $2.4 \ \text{(c)}$




