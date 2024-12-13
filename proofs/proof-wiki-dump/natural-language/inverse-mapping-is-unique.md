# 

Source: https://proofwiki.org/wiki/Inverse_Mapping_is_Unique



Theorem
Let $f: S \to T$ be a mapping.
If $f$ has an inverse mapping, then that inverse mapping is unique.

That is, if:

$f$ and $g$ are inverse mappings of each other
and

$f$ and $h$ are inverse mappings of each other
then $g = h$.


Proof 1
By the definition of inverse mapping:














\(\ds g \circ f\)

\(=\)







\(\ds I_S\)




















\(\ds \)

\(=\)







\(\ds h \circ f\)









and:














\(\ds f \circ g\)

\(=\)







\(\ds I_T\)




















\(\ds \)

\(=\)







\(\ds f \circ h\)









So:














\(\ds h\)

\(=\)







\(\ds h \circ I_T\)




















\(\ds \)

\(=\)







\(\ds h \circ \paren {f \circ g}\)




















\(\ds \)

\(=\)







\(\ds \paren {h \circ f} \circ g\)





Composition of Mappings is Associative














\(\ds \)

\(=\)







\(\ds I_S \circ g\)




















\(\ds \)

\(=\)







\(\ds g\)









So $g = h$ and the inverse is unique.
$\blacksquare$


Proof 2
We need to show that:

$\forall t \in T: \map g t = \map h t$
So:














\(\ds \map f {\map g t}\)

\(=\)







\(\ds t\)





Definition of Inverse Mapping








\(\ds \leadsto \ \ \)





\(\ds \map h t\)

\(=\)







\(\ds \map h {\map f {\map g t} }\)














\(\ds \leadsto \ \ \)





\(\ds \map h t\)

\(=\)







\(\ds \map g t\)





as $\forall s \in S: \map h {\map f s} = s$



$\blacksquare$
Hence the result.


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $1.3: \ 12 \ \text{(a)}$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Exercise $\text{G}$
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 2$: Sets and functions: Inverse images and inverse functions
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.6$: Functions
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $3$: Elementary consequences of the definitions: Proposition $3.2$: Remark




