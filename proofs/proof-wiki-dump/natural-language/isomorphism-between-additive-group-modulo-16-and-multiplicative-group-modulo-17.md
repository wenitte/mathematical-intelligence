# 

Source: https://proofwiki.org/wiki/Isomorphism_between_Additive_Group_Modulo_16_and_Multiplicative_Group_Modulo_17

Theorem
Let $\struct {\Z_{16}, +}$ denote the additive group of integers modulo $16$.
Let $\struct {\Z'_{17}, \times}$ denote the multiplicative group of reduced residues modulo $17$.
Let $\phi: \struct {\Z_{16}, +} \to \struct {\Z'_{17}, \times}$ be the mapping defined as:

$\forall \eqclass k {16} \in \struct {\Z_{16}, +}: \map \phi {\eqclass k {16} } = \eqclass {3^k} {17}$

Then $\phi$ is a group isomorphism.


Proof
Let $\eqclass x {16}, \eqclass y {16} \in \struct {\Z_{16}, +}$.
Then:














\(\ds \map \phi {\eqclass x {16} } \times \map \phi {\eqclass y {16} }\)

\(=\)







\(\ds \map \phi {x + 16 m_1} \times \map \phi {y + 16 m_2}\)





Definition of Residue Class: for some representative $m_1, m_2 \in \Z$














\(\ds \)

\(=\)







\(\ds 3 \uparrow \paren {x + 16 m_1} \times 3 \uparrow \paren {y + 16 m_2}\)





using Knuth uparrow notation $3 \uparrow k := 3^k$














\(\ds \)

\(=\)







\(\ds 3 \uparrow \paren {x + 16 m_1 + y + 16 m_2}\)





Product of Powers














\(\ds \)

\(=\)







\(\ds 3 \uparrow \paren {\paren {x + y} + 16 \paren {m_1 + m_2} }\)




















\(\ds \)

\(=\)







\(\ds 3 \uparrow \paren {\eqclass {x + y} {16} }\)





Definition of Residue Class and Definition of Modulo Addition














\(\ds \)

\(=\)







\(\ds \map \phi {\eqclass x {16} + \eqclass y {16} }\)





Definition of $\phi$



Thus it is seen that $\phi$ is a group homomorphism.
$\Box$

It remains to be seen that $\phi$ is a bijection.

Because $17$ is prime:
$\forall x \in \Z, 1 \le x < 17: x \perp 17$
where $\perp$ denotes coprimality.
Thus by definition of multiplicative group of reduced residues modulo $17$:

$\order {\struct {\Z'_{17}, \times} } = 16$
where $\order {\, \cdot \,}$ denotes the order of a group.
Similarly, by definition of additive group of integers modulo $16$:

$\order {\struct {\Z_{16}, +} } = 16$
So:

$\order {\struct {\Z'_{17}, \times} } = \order {\struct {\Z_{16}, +} }$
which is a necessary condition for group isomorphism.
$\Box$

Now we have:














\(\ds 16\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod {16}\)












\(\ds \leadsto \ \ \)





\(\ds \map \phi {\eqclass {16} {16} }\)

\(=\)







\(\ds \map \phi {\eqclass 0 {16} }\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi {\eqclass {16} {16} }\)

\(=\)







\(\ds \eqclass 1 {17}\)





Group Homomorphism Preserves Identity




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds 3^{16}\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod {17}\)



Definition of $\phi$




Now let $\eqclass x {16}, \eqclass y {16} \in \Z_{16}$ such that $\map \phi {\eqclass x {16} } = \map \phi {\eqclass y {16} }$.
We have:














\(\ds \map \phi {\eqclass x {16} }\)

\(=\)







\(\ds \map \phi {\eqclass y {16} }\)














\(\ds \leadsto \ \ \)

\(\ds \forall m_1, m_2 \in \Z: \, \)



\(\ds \map \phi {x + 16 m_1}\)

\(=\)







\(\ds \map \phi {y + 16 m_2}\)





Definition of Residue Class








\(\ds \leadsto \ \ \)





\(\ds 3 \uparrow \paren {x + 16 m_1}\)

\(=\)







\(\ds 3 \uparrow \paren {y + 16 m_2}\)





Definition of $\phi$








\(\ds \leadsto \ \ \)





\(\ds 3^x \paren {3^{16} }^{m_1}\)

\(=\)







\(\ds 3^y \paren {3^{16} }^{m_2}\)





Product of Powers, Power of Power








\(\ds \leadsto \ \ \)





\(\ds 3^x \times 1^{m_1}\)

\(=\)







\(\ds 3^y \times 1^{m_2}\)





as $3^{16} \equiv 1 \pmod {17}$ from $(1)$








\(\ds \leadsto \ \ \)





\(\ds 3^x\)

\(=\)







\(\ds 3^y\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)









Thus $\phi$ is an injection.
From Equivalence of Mappings between Finite Sets of Same Cardinality it follows that $\phi$ is a bijection.
$\Box$

Thus $\phi$ is a bijective group homomorphism.
Hence the result by definition of group isomorphism.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 62 \beta$




