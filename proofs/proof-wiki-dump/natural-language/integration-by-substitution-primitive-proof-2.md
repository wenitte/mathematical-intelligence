# 

Source: https://proofwiki.org/wiki/Integration_by_Substitution/Primitive/Proof_2

Theorem
The primitive of $f$ can be evaluated by:

$\ds \int \map f x \rd x = \int \map f {\map \phi u} \dfrac \d {\d u} \map \phi u \rd u$
where $x = \map \phi u$.


Proof
We have been given that $x = \map \phi u$.
Hence:














\(\ds \int \map f x \rd x\)

\(=\)







\(\ds \int \map f x \dfrac {\d x} {\d u} \rd u\)




















\(\ds \)

\(=\)







\(\ds \int \map f {\map \phi u} \dfrac {\d u} {\d x} \dfrac {\d x} {\d u} \rd x\)





Primitive of Composite Function














\(\ds \)

\(=\)







\(\ds \int \map f {\map \phi u} \dfrac {\d x} {\d u} \rd u\)




















\(\ds \)

\(=\)







\(\ds \int \map f {\map \phi u} \dfrac \d {\d u} {\map \phi u} \rd u\)









$\blacksquare$





