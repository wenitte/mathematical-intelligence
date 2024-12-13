# 

Source: https://proofwiki.org/wiki/Primitive_of_Cube_of_Sine_Function



Theorem
$\ds \int \sin^3 x \rd x = \frac {\cos^3 x} 3 - \cos x + C$


Proof 1
From Primitive of $\sin^3 a x$:

$\ds \int \sin^3 a x \rd x = -\frac {\cos a x} a + \frac {\cos^3 a x} {3 a} + C$

The result follows by setting $a = 1$.
$\blacksquare$


Proof 2













\(\ds \int \sin^3 x \rd x\)

\(=\)







\(\ds \int \paren {\frac {3 \sin x - \sin 3 x} 4} \rd x\)





Power Reduction Formula for Cube of Sine














\(\ds \)

\(=\)







\(\ds \frac 3 4 \int \sin x \rd x - \frac 1 4 \int \sin 3 x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 3 4 \paren {-\cos x} - \frac 1 4 \paren {\frac {-\cos 3 x} 3 } + C\)





Primitive of $\sin x$














\(\ds \)

\(=\)







\(\ds \frac {-3 \cos x} 4 + \frac 1 {12} \paren {\cos 3 x} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-3 \cos x} 4 + \frac 1 {12} \paren {4 \cos^3 x - 3 \cos x} + C\)





Triple Angle Formula for Cosine














\(\ds \)

\(=\)







\(\ds \frac {-3 \cos x} 4 + \frac {\cos^3 x} 3 - \frac {\cos x} 4 + C\)





multipying out














\(\ds \)

\(=\)







\(\ds \frac {\cos^3 x} 3 - \cos x + C\)





simplifying



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Exercises $\text {XIV}$: $9$.




