# 

Source: https://proofwiki.org/wiki/Primitive_of_Cosine_of_a_x_%2B_b



Corollary to Primitive of Cosine Function
$\ds \int \map \cos {a x + b} \rd x = \frac {\map \sin {a x + b} } a + C$
where $a$ is a non-zero constant.


Proof 1













\(\ds \int \cos x \rd x\)

\(=\)







\(\ds \sin x + C\)





Primitive of $\cos x$








\(\ds \leadsto \ \ \)





\(\ds \int \map \cos {a x + b} \rd x\)

\(=\)







\(\ds \frac 1 a \paren {\map \sin {a x + b} } + C\)





Primitive of Function of $a x + b$














\(\ds \)

\(=\)







\(\ds \frac {\map \sin {a x + b} } a + C\)





simplifying



$\blacksquare$


Proof 2
Let $u = a x + b$.
Then:

$\dfrac {\d u} {\d x} = a$
Then:














\(\ds \int \map \cos {a x + b} \rd x\)

\(=\)







\(\ds \int \dfrac {\cos u} a \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \dfrac {\sin u} a\)





Primitive of $\cos u$














\(\ds \)

\(=\)







\(\ds \frac {\map \sin {a x + b} } a + C\)





substituting back for $u$



$\blacksquare$


Proof 3













\(\ds \map {\dfrac \d {\d x} } {\frac {\map \sin {a x + b} } a}\)

\(=\)







\(\ds \dfrac 1 a \map \cos {a x + b} \map {\dfrac \d {\d x} } {a x + b}\)





Derivative of Sine Function, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac 1 a \cdot a \map \cos {a x + b}\)





Power Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \cos {a x + b}\)





simplifying



The result follows by definition of primitive.
$\blacksquare$





