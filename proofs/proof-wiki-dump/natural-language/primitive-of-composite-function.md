# 

Source: https://proofwiki.org/wiki/Primitive_of_Composite_Function



Theorem
Let $f$ and $g$ be a real functions which are integrable.
Let the composite function $g \circ f$ also be integrable.
Then:














\(\ds \int \map {\paren {g \circ f} } x \rd x\)

\(=\)







\(\ds \int \map g u \frac {\d x} {\d u} \rd u\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\map g u} {\map {f'} x} \rd u\)










where $u = \map f x$.


Corollary
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







\(\ds \int \map {\paren {g \circ f} } x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \map g {\map f x} \rd x\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \int \map g u \rd x\)





where $u = \map f x$








\(\ds \leadsto \ \ \)





\(\ds \frac {\d F} {\d x}\)

\(=\)







\(\ds \map g u\)





Definition of Primitive (Calculus)








\(\ds \leadsto \ \ \)





\(\ds \frac {\d F} {\d u} \frac {\d u} {\d x}\)

\(=\)







\(\ds \map g u\)





Chain Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \frac {\d F} {\d u} \frac \d {\d x} \map f x\)

\(=\)







\(\ds \map g u\)





Definition of $u$








\(\ds \leadsto \ \ \)





\(\ds \frac {\d F} {\d u} \map {f'} x\)

\(=\)







\(\ds \map g u\)





Definition of Derivative








\(\ds \leadsto \ \ \)





\(\ds \frac {\d F} {\d u}\)

\(=\)







\(\ds \frac {\map g u} {\map {f'} x}\)














\(\ds \leadsto \ \ \)





\(\ds F\)

\(=\)







\(\ds \int \frac {\map g u} {\map {f'} x} \rd u\)





Definition of Primitive (Calculus)














\(\ds \)

\(=\)







\(\ds \int \map g u \frac {\d x} {\d u} \rd u\)





Derivative of Inverse Function: $\dfrac {\d x} {\d u} = \dfrac 1 {\d u / \d x}$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.6$




