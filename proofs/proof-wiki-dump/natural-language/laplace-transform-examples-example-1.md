# 

Source: https://proofwiki.org/wiki/Laplace_Transform/Examples/Example_1

Example of Laplace Transform
Let $\laptrans f$ denote the Laplace transform of the real function $f$.


$\laptrans {4 e^{5 t} + 6 t^3 - 3 \sin 4 t + 2 \cos 2 t} = \dfrac 4 {s - 5} + \dfrac {36} {s^4} - \dfrac {12} {s^2 + 16} + \dfrac {2 s} {s^2 + 4}$


Proof













\(\ds \laptrans {4 e^{5 t} + 6 t^3 - 3 \sin 4 t + 2 \cos 2 t}\)

\(=\)







\(\ds 4 \laptrans {e^{5 t} } + 6 \laptrans {t^3} - 3 \laptrans {\sin 4 t} + 2 \laptrans {\cos 2 t}\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds 4 \paren {\dfrac 1 {s - 5} } + 6 \laptrans {t^3} - 3 \laptrans {\sin 4 t} + 2 \laptrans {\cos 2 t}\)





Laplace Transform of Exponential














\(\ds \)

\(=\)







\(\ds 4 \paren {\dfrac 1 {s - 5} } + 6 \paren {\dfrac {3!} {s^4} } - 3 \laptrans {\sin 4 t} + 2 \laptrans {\cos 2 t}\)





Laplace Transform of Positive Integer Power














\(\ds \)

\(=\)







\(\ds 4 \paren {\dfrac 1 {s - 5} } + 6 \paren {\dfrac {3!} {s^4} } - 3 \paren {\dfrac 4 {s^2 + 4^2} } + 2 \laptrans {\cos 2 t}\)





Laplace Transform of Sine














\(\ds \)

\(=\)







\(\ds 4 \paren {\dfrac 1 {s - 5} } + 6 \paren {\dfrac {3!} {s^4} } - 3 \paren {\dfrac 4 {s^2 + 4^2} } + 2 \paren {\dfrac s {s^2 + 2^2} }\)





Laplace Transform of Cosine














\(\ds \)

\(=\)







\(\ds \dfrac 4 {s - 5} + \dfrac {36} {s^4} - \dfrac {12} {s^2 + 16} + \dfrac {2 s} {s^2 + 4}\)





simplifying



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: The Linearity Property: $6$




