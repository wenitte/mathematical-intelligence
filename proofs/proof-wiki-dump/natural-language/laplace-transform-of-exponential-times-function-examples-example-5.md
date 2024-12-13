# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Exponential_times_Function/Examples/Example_5

Examples of Use of Laplace Transform of Exponential times Function
Let $\laptrans f$ denote the Laplace transform of the real function $f$.


$\laptrans {e^{-3 t} \paren {3 \cos 6 t - 5 \sin 6 t} } = \dfrac {3 s - 24} {s^2 + 4 s + 40}$


Proof













\(\ds \laptrans {3 \cos 6 t - 5 \sin 6 t}\)

\(=\)







\(\ds \dfrac {3 s} {s^2 + 6^2} - \dfrac {5 \times 6} {s^2 + 6^2}\)





Laplace Transform of Cosine, Laplace Transform of Sine














\(\ds \)

\(=\)







\(\ds \dfrac {3 s - 30} {s^2 + 6^2}\)





simplification








\(\ds \leadsto \ \ \)





\(\ds \laptrans {e^{-3 t} \paren {3 \cos 6 t - 5 \sin 6 t} }\)

\(=\)







\(\ds \dfrac {3 \paren {s + 3} - 30} {\paren {s + 3}^2 + 6^2}\)





Laplace Transform of Exponential times Function














\(\ds \)

\(=\)







\(\ds \dfrac {3 s - 24} {s^2 + 4 s + 40}\)





multiplying out



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Translation and Change of Scale Properties: $8 \ \text{(d)}$




