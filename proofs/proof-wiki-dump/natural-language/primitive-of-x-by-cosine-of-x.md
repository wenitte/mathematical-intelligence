# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Cosine_of_x



Theorem
$\ds \int x \cos x \rd x = \cos x + x \sin x + C$
where $C$ is an arbitrary constant.


Proof 1
From Primitive of $x \cos a x$:

$\ds \int x \cos a x \rd x = \frac {\cos a x} {a^2} + \frac {x \sin a x} a + C$
The result follows on setting $a = 1$.
$\blacksquare$


Proof 2
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds 1\)





Derivative of Identity Function




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \cos x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \sin x\)





Primitive of $\cos x$




Then:














\(\ds \int x \cos x \rd x\)

\(=\)







\(\ds x \sin x - \int \paren {\sin x} \times 1 \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \sin x - \int \sin x \rd x + C\)





simplifying














\(\ds \)

\(=\)







\(\ds x \sin x - \paren {-\cos x} + C\)





Primitive of $\sin x$














\(\ds \)

\(=\)







\(\ds \cos x + x \sin x + C\)





rearranging



$\blacksquare$


Proof 3
We have:














\(\ds \map {\dfrac \d {\d x} } {\cos x + x \sin x}\)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\cos x} + \map {\dfrac \d {\d x} } {x \sin x}\)





Sum Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\cos x} + x \map {\dfrac \d {\d x} } {\sin x} + \map {\dfrac \d {\d x} } x \sin x\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -\sin x + x \cos x + \sin x\)





Derivative of Cosine Function, Derivative of Sine Function, Derivative of Identity Function














\(\ds \)

\(=\)







\(\ds x \cos x\)





simplifying



Hence the result by definition of primitive.
$\blacksquare$


Warning
It is a mistake to use Primitive of Constant Multiple of Function here:

$\ds \int x \cos x \rd x = x \int \cos x \rd x$
and thence to deduce:

$\ds \int x \cos x \rd x = x \sin x + C$
because $x$ is not a constant in the expression $x \cos x$.





