# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Laplace_Transforms/Examples/Example_1

Example of Use of Linear Combination of Laplace Transforms
Let $\laptrans f$ denote the Laplace transform of the real function $f$.


$\laptrans {4 t^2 - 3 \cos 2 t + 5 e^{-t} } = \dfrac 8 {s^3} - \dfrac {3 s} {s^2 + 4} + \dfrac 5 {s + 1}$


Proof













\(\ds \laptrans {4 t^2 - 3 \cos 2 t + 5 e^{-t} }\)

\(=\)







\(\ds 4 \laptrans {t^2} - 3 \laptrans{\cos 2 t} + 5 \laptrans {e^{-t} }\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds 4 \paren {\dfrac {2!} {t^3} } - 3 \laptrans{\cos 2 t} + 5 \laptrans {e^{-t} }\)





Laplace Transform of Positive Integer Power














\(\ds \)

\(=\)







\(\ds 4 \paren {\dfrac {2!} {t^3} } - 3 \paren {\dfrac s {s^2 + 4} } + 5 \laptrans {e^{-t} }\)





Laplace Transform of Cosine














\(\ds \)

\(=\)







\(\ds 4 \paren {\dfrac {2!} {t^3} } - 3 \paren {\dfrac s {s^2 + 4} } + 5 \paren {\dfrac 1 {s + 1} }\)





Laplace Transform of Exponential














\(\ds \)

\(=\)







\(\ds \dfrac 8 {s^3} - \dfrac {3 s} {s^2 + 4} + \dfrac 5 {s + 1}\)





simplifying



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Important Properties of Laplace Transforms: $1$. Linearity property




