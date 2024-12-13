# 

Source: https://proofwiki.org/wiki/Primitive_of_Sine_of_a_x_%2B_b



Corollary to Primitive of Sine Function
$\ds \int \map \sin {a x + b} \rd x = -\frac {\map \cos {a x + b} } a + C$
where $a$ is a non-zero constant.


Proof 1













\(\ds \int \sin x \rd x\)

\(=\)







\(\ds -\cos x + C\)





Primitive of $\sin x$








\(\ds \leadsto \ \ \)





\(\ds \int \map \sin {a x + b} \rd x\)

\(=\)







\(\ds \frac 1 a \paren {-\map \cos {a x + b} } + C\)





Primitive of Function of $a x + b$














\(\ds \)

\(=\)







\(\ds -\frac {\map \cos {a x + b} } a + C\)





simplifying



$\blacksquare$


Proof 2
Let $u = a x + b$.
Then:

$\dfrac {\d u} {\d x} = a$
Then:














\(\ds \int \map \sin {a x + b} \rd x\)

\(=\)







\(\ds \int \dfrac {\sin u} a \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds -\dfrac {\cos u} a\)





Primitive of $\sin u$














\(\ds \)

\(=\)







\(\ds -\frac {\map \cos {a x + b} } a + C\)





substituting back for $u$



$\blacksquare$


Examples
Primitive of $\map \sin {3 x + 4}$
$\ds \int \map \sin {3 x + 4} \rd x = -\dfrac {\map \cos {3 x + 4} } 3 + C$


Primitive of $\map \sin {3 - x}$
$\ds \int \map \sin {3 - x} \rd x = \map \cos {3 - x} + C$




