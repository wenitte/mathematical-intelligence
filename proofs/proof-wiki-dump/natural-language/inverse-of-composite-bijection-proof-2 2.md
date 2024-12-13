# 

Source: https://proofwiki.org/wiki/Inverse_of_Composite_Bijection/Proof_2

Theorem
Let $f$ and $g$ be bijections.

Then:

$\paren {g \circ f}^{-1} = f^{-1} \circ g^{-1}$
and $f^{-1} \circ g^{-1}$ is itself a bijection.


Proof
Let $f: X \to Y$ and $g: Y \to Z$ be bijections.
Then:














\(\ds \paren {g \circ f} \circ \paren {f^{-1} \circ g^{-1} }\)

\(=\)







\(\ds g \circ \paren {\paren {f \circ f^{-1} } \circ g^{-1} }\)





Composition of Mappings is Associative














\(\ds \)

\(=\)







\(\ds g \circ \paren {I_Y \circ g^{-1} }\)





Composite of Bijection with Inverse is Identity Mapping














\(\ds \)

\(=\)







\(\ds g \circ g^{-1}\)





Identity Mapping is Left Identity














\(\ds \)

\(=\)







\(\ds I_Z\)





Composite of Bijection with Inverse is Identity Mapping



$\Box$















\(\ds \paren {f^{-1} \circ g^{-1} } \circ \paren {g \circ f}\)

\(=\)







\(\ds \paren {f^{-1} \circ \paren {g^{-1} \circ g} } \circ f\)





Composition of Mappings is Associative














\(\ds \)

\(=\)







\(\ds \paren {f^{-1} \circ I_Y} \circ f\)





Composite of Bijection with Inverse is Identity Mapping














\(\ds \)

\(=\)







\(\ds f^{-1} \circ f\)





Identity Mapping is Right Identity














\(\ds \)

\(=\)







\(\ds I_X\)





Composite of Bijection with Inverse is Identity Mapping



Hence the result.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 3.6$. Products of bijective mappings. Permutations: Example $53$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions: Theorem $5.6$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Theorem $5.10 \ (3)$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 25.2$: Some further results and examples on mappings
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.7$: Inverses: Proposition $\text{A}.7.5 \ (3)$




