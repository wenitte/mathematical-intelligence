# 

Source: https://proofwiki.org/wiki/Polygamma_Reflection_Formula/Proof_2

Theorem
Let $z \in \C \setminus \Z$.
Let $\psi_n$ denote the $n$th polygamma function.
Then:

$\map {\psi_n} z - \paren {-1}^n \map {\psi_n} {1 - z} = -\pi \dfrac {\d^n} {\d z^n} \cot \pi z$


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







\(\ds \map \ln \pi - \map \ln {\sin \pi z}\)





Sum of Logarithms and Difference of Logarithms








\(\ds \leadsto \ \ \)





\(\ds \dfrac \d {\d z} \map \ln {\map \Gamma z} + \dfrac \d {\d z} \map \ln {\map \Gamma {1 - z} }\)

\(=\)







\(\ds \dfrac \d {\d z} \map \ln \pi - \dfrac \d {\d z} \map \ln {\sin \pi z}\)





differentiation with respect to $z$








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








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d^n} {\d z^n} \map \psi z - \dfrac {\d^n} {\d z^n} \map \psi {1 - z}\)

\(=\)







\(\ds -\pi \dfrac {\d^n} {\d z^n} \cot \pi z\)





taking $n$th derivative








\(\ds \leadsto \ \ \)





\(\ds \map {\psi_n} z - \paren {-1}^n \map {\psi_n} {1 - z}\)

\(=\)







\(\ds -\pi \dfrac {\d^n} {\d z^n} \cot \pi z\)





Definition of Polygamma Function




Finally, from the Lemma, we note that:

$\map \psi z - \map \psi {1 - z}$
is defined on the domain $\C \setminus \Z$.
$\blacksquare$





