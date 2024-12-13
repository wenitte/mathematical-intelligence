# 

Source: https://proofwiki.org/wiki/Left_and_Right_Inverses_of_Mapping_are_Inverse_Mapping/Proof_1

Theorem
Let $f: S \to T$ be a mapping such that:

$(1): \quad \exists g_1: T \to S: g_1 \circ f = I_S$
$(2): \quad \exists g_2: T \to S: f \circ g_2 = I_T$
Then:

$g_1 = g_2 = f^{-1}$
where $f^{-1}$ is the inverse of $f$.


Proof













\(\ds g_2\)

\(=\)







\(\ds I_S \circ g_2\)





Definition of Identity Mapping














\(\ds \)

\(=\)







\(\ds \paren {g_1 \circ f} \circ g_2\)





by hypothesis














\(\ds \)

\(=\)







\(\ds g_1 \circ \paren {f \circ g_2}\)





Composition of Mappings is Associative














\(\ds \)

\(=\)







\(\ds g_1 \circ I_T\)





by hypothesis














\(\ds \)

\(=\)







\(\ds g_1\)





Definition of Identity Mapping




From Left and Right Inverse Mappings Implies Bijection it follows that $f$ is a bijection.
It follows from Composite of Bijection with Inverse is Identity Mapping that $g_1 = g_2 = f^{-1}$.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Theorem $5.9$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Mappings: Exercise $15$




