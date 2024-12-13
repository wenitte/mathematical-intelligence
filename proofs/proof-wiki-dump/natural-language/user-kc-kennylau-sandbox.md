# 

Source: https://proofwiki.org/wiki/User:Kc_kennylau/sandbox

Theorem
Let $\struct {R, +, \circ}$ be a ring with unity $1_R$.
Let $\paren {-1}_R$ be the additive inverse of $1_R$.

Then:

$\paren {-1}_R \circ \paren {-1}_R = 1_R$


Proof
Let $0_R$ be the ring zero of $\left({R, +, \circ}\right)$.

Then:














\(\ds \paren {-1}_R \circ \paren {-1}_R\)

\(=\)







\(\ds 0_R + \paren {\paren {-1}_R \circ \paren {-1}_R}\)





Ring Axiom $\text A3$: Identity for Addition














\(\ds \)

\(=\)







\(\ds \paren {1_R + \paren {-1}_R} + \paren {\paren {-1}_R \circ \paren {-1}_R}\)





Ring Axiom $\text A4$: Inverses for Addition














\(\ds \)

\(=\)







\(\ds 1_R + \paren {\paren {-1}_R + \paren {\paren {-1}_R \circ \paren {-1}_R} }\)





Ring Axiom $\text A1$: Associativity of Addition














\(\ds \)

\(=\)







\(\ds 1_R + \paren {\paren {\paren {-1}_R \circ 1_R} + \paren {\paren {-1}_R \circ \paren {-1}_R} }\)





Ring Axiom $\text M2$: Identity Element for Ring Product














\(\ds \)

\(=\)







\(\ds 1_R + \paren {\paren {-1}_R \circ \paren {1_R + \paren {-1}_R} }\)





Ring Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(=\)







\(\ds 1_R + \paren {\paren {-1}_R \circ 0_R}\)





Ring Axiom $\text A4$: Inverses for Addition














\(\ds \)

\(=\)







\(\ds 1_R + \paren {\paren {\paren {-1}_R \circ 0_R} + 0_R}\)





Ring Axiom $\text A3$: Identity for Addition














\(\ds \)

\(=\)







\(\ds 1_R + \paren {\paren {\paren {-1}_R \circ 0_R} + \paren {\paren {-1}_R + 1_R} }\)





Ring Axiom $\text A4$: Inverses for Addition














\(\ds \)

\(=\)







\(\ds 1_R + \paren {\paren {\paren {\paren {-1}_R \circ 0_R} + \paren {-1}_R} + 1_R}\)





Ring Axiom $\text A1$: Associativity of Addition














\(\ds \)

\(=\)







\(\ds 1_R + \paren {\paren {\paren {\paren {-1}_R \circ 0_R} + \paren {\paren {-1}_R \circ 1_R} } + 1_R}\)





Ring Axiom $\text M2$: Identity Element for Ring Product














\(\ds \)

\(=\)







\(\ds 1_R + \paren {\paren {\paren {-1}_R \circ \paren {0_R + 1_R} } + 1_R}\)





Ring Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(=\)







\(\ds 1_R + \paren {\paren {\paren {-1}_R \circ 1_R} + 1_R}\)





Ring Axiom $\text A3$: Identity for Addition














\(\ds \)

\(=\)







\(\ds 1_R + \paren {\paren {-1}_R + 1_R}\)





Ring Axiom $\text M2$: Identity Element for Ring Product














\(\ds \)

\(=\)







\(\ds 1_R + 0_R\)





Ring Axiom $\text A4$: Inverses for Addition














\(\ds \)

\(=\)







\(\ds 1\)





Ring Axiom $\text A3$: Identity for Addition



$\blacksquare$





