# 

Source: https://proofwiki.org/wiki/Modulus_of_Gamma_Function_of_One_Half_plus_Imaginary_Number

Theorem
Let $t \in \R$ be a real number.

Then: 

$\cmod {\map \Gamma {\dfrac 1 2 + i t} } = \sqrt {\pi \map \sech {\pi t} }$
where:

$\Gamma$ is the Gamma function
$\sech$ is the hyperbolic secant function.


Proof













\(\ds \cmod {\map \Gamma {\frac 1 2 + i t} }^2\)

\(=\)







\(\ds \map \Gamma {\frac 1 2 + i t} \overline {\map \Gamma {\frac 1 2 + i t} }\)





Modulus in Terms of Conjugate














\(\ds \)

\(=\)







\(\ds \map \Gamma {\frac 1 2 + i t} \map \Gamma {\frac 1 2 - i t}\)





Complex Conjugate of Gamma Function














\(\ds \)

\(=\)







\(\ds \map \Gamma {\frac 1 2 + i t} \map \Gamma {1 - \paren {\frac 1 2 + i t} }\)





applying some algebra














\(\ds \)

\(=\)







\(\ds \pi \map \csc {\pi \paren {\frac 1 2 + i t} }\)





Euler's Reflection Formula














\(\ds \)

\(=\)







\(\ds \pi \map \sec {\pi i t}\)





Sine of Complement equals Cosine














\(\ds \)

\(=\)







\(\ds \pi \map \sech {\pi t}\)





Hyperbolic Cosine in terms of Cosine




As $\cmod z \ge 0$ for all complex numbers $z$, we can take the non-negative square root of both sides and write:

$\cmod {\map \Gamma {\dfrac 1 2 + i t} } = \sqrt {\pi \map \sech {\pi t} }$
$\blacksquare$





