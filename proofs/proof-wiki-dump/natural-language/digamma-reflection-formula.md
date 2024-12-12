# 

Source: https://proofwiki.org/wiki/Digamma_Reflection_Formula



Theorem
Let $z \in \C \setminus \Z$.
Let $\psi$ denote the digamma function.
Then:

$\map \psi z - \map \psi {1 - z} = -\pi \cot \pi z$


Proof
Lemma
The expression:

$\map \psi z - \map \psi {1 - z}$
is defined on the domain $\C \setminus \Z$.
That is, on the set of complex numbers but specifically excluding the integers.
$\Box$















\(\ds \map \Gamma z \map \Gamma {1 - z}\)

\(=\)







\(\ds \dfrac \pi {\sin \pi z}\)





Euler's Reflection Formula








\(\ds \leadsto \ \ \)





\(\ds \map \ln {\map \Gamma z \map \Gamma {1 - z} }\)

\(=\)







\(\ds \map \ln {\dfrac \pi {\sin \pi z} }\)





applying $\ln$ on both sides








\(\ds \leadsto \ \ \)





\(\ds \map \ln {\map \Gamma z} + \map \ln {\map \Gamma {1 - z} }\)

\(=\)







\(\ds \ln \pi - \map \ln {\sin \pi z}\)





Sum of Logarithms and Difference of Logarithms








\(\ds \leadsto \ \ \)





\(\ds \dfrac \d {\d z} \map \ln {\map \Gamma z} + \dfrac \d {\d z} \map \ln {\map \Gamma {1 - z} }\)

\(=\)







\(\ds \dfrac \d {\d z} \ln \pi - \dfrac \d {\d z} \map \ln {\sin \pi z}\)





differentiating with respect to $z$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\map {\Gamma'} z} {\map \Gamma z} - \dfrac {\map {\Gamma'} {1 - z} } {\map \Gamma {1 - z} }\)

\(=\)







\(\ds 0 - \pi \cot \pi z\)





Derivative of Natural Logarithm Function, Derivative of Sine Function, Chain Rule for Derivatives, Derivative of Constant








\(\ds \leadsto \ \ \)





\(\ds \map \psi z - \map \psi {1 - z}\)

\(=\)







\(\ds -\pi \cot \pi z\)





Definition of Digamma Function




Finally, from the Lemma, we note that:

$\map \psi z - \map \psi {1 - z}$
is defined on the domain $\C \setminus \Z$.
$\blacksquare$


Also see
Euler's Reflection Formula
Polygamma Reflection Formula


Sources
Weisstein, Eric W. "Digamma Function." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/DigammaFunction.html




