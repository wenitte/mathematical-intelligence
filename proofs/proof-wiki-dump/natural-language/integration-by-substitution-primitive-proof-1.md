# 

Source: https://proofwiki.org/wiki/Integration_by_Substitution/Primitive/Proof_1

Theorem
The primitive of $f$ can be evaluated by:

$\ds \int \map f x \rd x = \int \map f {\map \phi u} \dfrac \d {\d u} \map \phi u \rd u$
where $x = \map \phi u$.


Proof
Let $\map F x = \ds \int \map f x \rd x$.
Thus by definition $\map F x$ is a primitive of $\map f x$.















\(\ds \map {\frac \d {\d u} } {\map F x}\)

\(=\)







\(\ds \map {\frac \d {\d u} } {\map F {\map \phi u} }\)





Definition of $\map \phi u$














\(\ds \)

\(=\)







\(\ds \dfrac \d {\d x} \map F {\map \phi u} \dfrac \d {\d u} \map \phi u\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac \d {\d x} \map F x \dfrac \d {\d u} \map \phi u\)





Definition of $\map \phi u$














\(\ds \)

\(=\)







\(\ds \map f x \dfrac \d {\d u} \map \phi u\)





as $\map F x = \ds \int \map f x \rd x$




So $\map F x$ is an antiderivative of $\map f {\map \phi u} \dfrac \d {\d u} \map \phi u$.

Therefore:














\(\ds \int \map f {\map \phi u} \dfrac \d {\d u} \map \phi u \rd u\)

\(=\)







\(\ds \map F x\)




















\(\ds \)

\(=\)







\(\ds \int \map f x \rd x\)









where $x = \map \phi u$.
$\blacksquare$





