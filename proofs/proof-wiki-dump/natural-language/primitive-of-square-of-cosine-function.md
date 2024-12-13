# 

Source: https://proofwiki.org/wiki/Primitive_of_Square_of_Cosine_Function



Theorem
$\ds \int \cos^2 x \rd x = \frac x 2 + \frac {\sin 2 x} 4 + C$
where $C$ is an arbitrary constant.


Corollary
$\ds \int \cos^2 x \rd x = \frac {x + \sin x \cos x} 2 + C$
where $C$ is an arbitrary constant.


Proof 1













\(\ds \int \cos^2 x \rd x\)

\(=\)







\(\ds \int \paren {\frac {1 + \cos 2 x} 2} \rd x\)





Square of Cosine














\(\ds \)

\(=\)







\(\ds \int \frac 1 2 \rd x + \int \paren {\frac {\cos 2 x} 2} \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac x 2 + C + \int \paren {\frac {\cos 2 x} 2} \rd x\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds \frac x 2 + C + \frac 1 2 \int \cos 2 x \rd x\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac x 2 + \frac 1 2 \paren {\frac {\sin 2 x} 2} + C\)





Primitive of Function of Constant Multiple and Primitive of Cosine Function














\(\ds \)

\(=\)







\(\ds \frac x 2 + \frac {\sin 2 x} 4 + C\)





Primitive of Function of Constant Multiple and Primitive of Cosine Function



$\blacksquare$


Proof 2













\(\ds I_n\)

\(=\)







\(\ds \int \cos^n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\cos^{n - 1} x \sin x} n + \dfrac {n - 1} n I_{n-2}\)





Reduction Formula for Integral of Power of Cosine














\(\ds I_0\)

\(=\)







\(\ds \int \left({\cos x}\right)^0 \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \rd x\)




















\(\ds \)

\(=\)







\(\ds x + C\)





Primitive of Constant








\(\ds \leadsto \ \ \)





\(\ds I_2\)

\(=\)







\(\ds \frac {\cos x \sin x} 2 + \frac x 2 + \frac C 2\)





setting $n = 2$














\(\ds \)

\(=\)







\(\ds \frac {\sin 2 x} 4 + \frac x 2 + C'\)





Double Angle Formula for Sine



$\blacksquare$


Proof 3













\(\ds \int \cos^2 x \rd x\)

\(=\)







\(\ds \frac 1 4 \int \paren {e^{i x} + e^{-i x} }^2 \rd x\)





Euler's Cosine Identity














\(\ds \)

\(=\)







\(\ds \frac 1 4 \int \paren {e^{2 i x} + 2 + e^{-2 i x} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {\frac{e^{2 i x} - e^{-2 i x} } {2 i} + 2 x} + C\)





Primitive of $e^{a x}$, Primitive of Constant














\(\ds \)

\(=\)







\(\ds \frac {\sin 2 x} 4 + \frac x 2 + C\)





Euler's Sine Identity



$\blacksquare$


Also presented as
Some sources present this as:

$\ds \int \cos^2 x \rd x = \frac 1 2 \paren {x + \frac {\sin 2 x} 2} + C$


Sources
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: Other Standard Results: $\text {(xxii)}$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.22$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $7$: Integrals
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals




