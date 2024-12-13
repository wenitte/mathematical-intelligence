# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Exponential_times_Function/Examples/Example_4

Example of Use of Laplace Transform of Exponential times Function
Let $\laptrans f$ denote the Laplace transform of the real function $f$.


$\laptrans {e^{4 t} \cosh 5 t} = \dfrac {s - 4} {s^2 - 8 s - 9}$


Proof 1













\(\ds \laptrans {\cosh 5 t}\)

\(=\)







\(\ds \dfrac 5 {s^2 - 5^2}\)





Laplace Transform of Hyperbolic Cosine








\(\ds \leadsto \ \ \)





\(\ds \laptrans {e^{4 t} \cosh 5 t}\)

\(=\)







\(\ds \dfrac {s - 4} {\paren {s - 4}^2 - 25}\)





Laplace Transform of Exponential times Function














\(\ds \)

\(=\)







\(\ds \dfrac {s - 4} {s^2 - 8 s - 9}\)





multiplying out



$\blacksquare$


Proof 2













\(\ds \laptrans {e^{4 t} \cosh 5 t}\)

\(=\)







\(\ds \laptrans {e^{4 t} \paren {\dfrac {e^{5 t} + e^{-5 t} } 2} }\)





Definition of Hyperbolic Cosine














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \laptrans {e^{9 t} + e^{-t} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {\dfrac 1 {s - 9} + \dfrac 1 {s + 1} }\)





Laplace Transform of Exponential














\(\ds \)

\(=\)







\(\ds \dfrac {s - 4} {s^2 - 8 s - 9}\)





mulitplying out



$\blacksquare$





