# 

Source: https://proofwiki.org/wiki/Composition_of_Relations_is_Associative

Theorem
The composition of relations is an associative binary operation:

$\paren {\RR_3 \circ \RR_2} \circ \RR_1 = \RR_3 \circ \paren {\RR_2 \circ \RR_1}$


Proof
First, note that from the definition of composition of relations, the following must be the case before the above expression is even to be defined:

$\Dom {\RR_2} = \Cdm {\RR_1}$
$\Dom {\RR_3} = \Cdm {\RR_2}$

The two composite relations can be seen to have the same domain, thus:














\(\ds \Dom {\paren {\RR_3 \circ \RR_2} \circ \RR_1}\)

\(=\)







\(\ds \Dom {\RR_1}\)





Domain of Composite Relation


















\(\ds \Dom {\RR_3 \circ \paren {\RR_2 \circ \RR_1} }\)

\(=\)







\(\ds \Dom {\RR_2 \circ \RR_1}\)





Domain of Composite Relation














\(\ds \)

\(=\)







\(\ds \Dom {\RR_1}\)





Domain of Composite Relation




and also the same codomain, thus:














\(\ds \Cdm {\paren {\RR_3 \circ \RR_2} \circ \RR_1}\)

\(=\)







\(\ds \Cdm {\RR_3 \circ \RR_2}\)





Codomain of Composite Relation














\(\ds \)

\(=\)







\(\ds \Cdm {\RR_3}\)





Codomain of Composite Relation


















\(\ds \Cdm {\RR_3 \circ \paren {\RR_2 \circ \RR_1} }\)

\(=\)







\(\ds \Cdm {\RR_3}\)





Codomain of Composite Relation




So they are equal if and only if they have the same value at each point in their common domain, which this shows:










\(\ds \forall x \in \Dom {\RR_1}: \, \)



\(\ds \map {\paren {\paren {\RR_3 \circ \RR_2} \circ \RR_1} } x\)

\(=\)







\(\ds \map {\paren {\RR_3 \circ \RR_2} } {\map {\RR_1} x}\)





Definition of Composition of Relations














\(\ds \)

\(=\)







\(\ds \map {\RR_3} {\map {\RR_2} {\map {\RR_1} x} }\)





Definition of Composition of Relations














\(\ds \)

\(=\)







\(\ds \map {\RR_3} {\map {\paren {\RR_2 \circ \RR_1} } x}\)





Definition of Composition of Relations














\(\ds \)

\(=\)







\(\ds \map {\paren {\RR_3 \circ \paren {\RR_2 \circ \RR_1} } } x\)





Definition of Composition of Relations



$\blacksquare$


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Relations: Theorem $5 \ \text{(b)}$
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 10$: Inverses and Composites
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions: Exercise $5.8 \ \text{(b)}$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text I$: Sets and Functions: Problem $\text{AA}$: Relations




