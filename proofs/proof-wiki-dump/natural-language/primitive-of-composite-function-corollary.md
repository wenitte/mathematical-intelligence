# 

Source: https://proofwiki.org/wiki/Primitive_of_Composite_Function/Corollary

Theorem
Let $f$ and $g$ be a real functions which are integrable.
Let the composite function $g \circ f$ also be integrable.
Then:














\(\ds \int \map {\paren {g \circ f} } x \map {f'} x \rd x\)

\(=\)







\(\ds \int \map g u \rd u\)










where $u = \map f x$.


Proof













\(\ds \map F x\)

\(=\)







\(\ds \int \map {\paren {g \circ f} } x \map {f'} x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \map g {\map f x} \map {f'} x \rd x\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \int \map g u \map {f'} x \rd x\)





where $u = \map f x$








\(\ds \leadsto \ \ \)





\(\ds \frac {\d F} {\d x}\)

\(=\)







\(\ds \map g u \map {f'} x\)





Definition of Primitive (Calculus)








\(\ds \leadsto \ \ \)





\(\ds \frac {\d F} {\d u} \frac {\d u} {\d x}\)

\(=\)







\(\ds \map g u \map {f'} x\)





Chain Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \frac {\d F} {\d u} \frac \d {\d x} \map f x\)

\(=\)







\(\ds \map g u \map {f'} x\)





Definition of $u$








\(\ds \leadsto \ \ \)





\(\ds \frac {\d F} {\d u} \map {f'} x\)

\(=\)







\(\ds \map g u \map {f'} x\)





Definition of Derivative








\(\ds \leadsto \ \ \)





\(\ds \frac {\d F} {\d u}\)

\(=\)







\(\ds \map g u\)














\(\ds \leadsto \ \ \)





\(\ds F\)

\(=\)







\(\ds \int \map g u \rd u\)





Definition of Primitive (Calculus)



$\blacksquare$





