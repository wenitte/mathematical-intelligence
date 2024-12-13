# 

Source: https://proofwiki.org/wiki/Group/Examples/inv_x_%3D_1_-_x/Lemma_1

Lemma for Group Example: $x^{-1} = 1 - x$
Define $f: \openint 0 1 \to \R$ by:

$\map f x := \map \ln {\dfrac {1 - x} x}$
and $g: \R \to \openint 0 1$:

$\map g z := \dfrac 1 {1 + \exp z}$
Then:

$\map {f \circ g} x = x$


Proof













\(\ds \map {f \circ g} x\)

\(=\)







\(\ds \map f {\map g x}\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\frac {1 - \map g x} {\map g x} }\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\frac {1 - \frac 1 {1 + \exp x} } {\frac 1 {1 + \exp x} } }\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\frac {1 + \exp x - 1} 1}\)





multiplying both numerator and denominator by $1 + \exp x$














\(\ds \)

\(=\)







\(\ds \map \ln {\exp x}\)





simplifying














\(\ds \)

\(=\)







\(\ds x\)





Exponential of Natural Logarithm



$\blacksquare$





