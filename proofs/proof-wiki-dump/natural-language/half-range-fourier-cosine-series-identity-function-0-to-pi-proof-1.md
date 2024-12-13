# 

Source: https://proofwiki.org/wiki/Half-Range_Fourier_Cosine_Series/Identity_Function/0_to_Pi/Proof_1

Theorem
Let $\map f x$ be the real function defined on $\openint 0 \pi$ as:

  $\map f x$ and its $4$th approximation
$\map f x = x$

Then its half-range Fourier cosine series can be expressed as:














\(\ds x\)

\(\sim\)







\(\ds \frac \pi 2 - \frac 4 \pi \sum_{n \mathop = 1}^\infty \frac {\cos \paren {2 n - 1} x} {\paren {2 n - 1}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2 - \frac 4 \pi \paren {\cos x + \frac {\cos 3 x} {3^2} + \frac {\cos 5 x} {5^2} + \cdots}\)











Proof
By definition of half-range Fourier cosine series:

$\ds \map f x \sim \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty a_n \cos n x$

where for all $n \in \Z_{> 0}$:

$a_n = \ds \frac 2 \pi \int_0^\pi \map f x \cos n x \rd x$

Thus by definition of $f$:














\(\ds a_0\)

\(=\)







\(\ds \frac 2 \pi \int_0^\pi \map f x \rd x\)





Cosine of Zero is One














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \int_0^\pi x \rd x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \intlimits {\frac {x^2} 2} 0 \pi\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \paren {\frac {\pi^2} 2 - \frac {0^2} 2}\)




















\(\ds \)

\(=\)







\(\ds \pi\)





simplification



$\Box$

For $n > 0$:














\(\ds a_n\)

\(=\)







\(\ds \frac 2 \pi \int_0^\pi \map f x \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \int_0^\pi x \cos n x \rd x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \intlimits {\frac {\cos n x} {n^2} + \frac {x \sin n x} n} 0 \pi\)





Primitive of $x \cos n x$














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \paren {\paren {\frac {\cos n \pi} {n^2} + \frac {\pi \sin \pi x} n} - \paren {\frac {\cos 0 x} {n^2} + \frac {0 \sin 0} n} }\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \paren {\frac {\cos n \pi} {n^2} - \frac {\cos 0} {n^2} }\)





Sine of Multiple of Pi and simplification














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \paren {\frac {\paren {-1}^n} {n^2} - \frac 1 {n^2} }\)





Cosine of Multiple of Pi




When $n$ is even, $\paren {-1}^n = 1$.
We can express $n = 2 r$ for $r \ge 1$.
Hence in that case:














\(\ds a_{2 r}\)

\(=\)







\(\ds \frac 2 \pi \paren {\frac {\paren {-1}^n} {n^2} - \frac 1 {n^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \paren {\frac 1 {n^2} - \frac 1 {n^2} }\)




















\(\ds \)

\(=\)







\(\ds 0\)










When $n$ is odd, $\paren {-1}^n = -1$.
We can express $n = 2 r - 1$ for $r \ge 1$.
Hence in that case:














\(\ds a_{2 r - 1}\)

\(=\)







\(\ds \frac 2 \pi \paren {\frac {-1} {\paren {2 r - 1}^2} - \frac 1 {\paren {2 r - 1}^2} }\)




















\(\ds \)

\(=\)







\(\ds -\frac 4 \pi \paren {\frac 1 {\paren {2 r - 1}^2} }\)





simplifying




Finally:














\(\ds \map f x\)

\(\sim\)







\(\ds \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty a_n \cos n x\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2 - 4 \pi \sum_{r \mathop = 1}^\infty \frac 1 {\paren {2 r - 1}^2} \cos \paren {2 r - 1} x\)





substituting for $a_0$ and $a_n$ from above














\(\ds \)

\(=\)







\(\ds \frac \pi 2 - 4 \pi \sum_{n \mathop = 1}^\infty \frac {\cos \paren {2 n - 1} x} {\paren {2 n - 1}^2}\)





changing the name of the variable and rearranging



$\blacksquare$





