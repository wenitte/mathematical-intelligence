# 

Source: https://proofwiki.org/wiki/Fresnel_Sine_Integral_Function_is_Odd

Theorem
$\map {\operatorname S} {-x} = -\map {\operatorname S} x$
where: 

$\operatorname S$ denotes the Fresnel sine integral function
$x$ is a real number.


Proof













\(\ds \map {\operatorname S} {-x}\)

\(=\)







\(\ds \sqrt {\frac 2 \pi} \int_0^{-x} \sin u^2 \rd u\)





Definition of Fresnel Sine Integral Function














\(\ds \)

\(=\)







\(\ds -\sqrt {\frac 2 \pi} \int_0^{-\paren {-x} } \map \sin {\paren {-u}^2} \rd u\)





substituting $u \mapsto -u$














\(\ds \)

\(=\)







\(\ds -\sqrt {\frac 2 \pi} \int_0^x \sin u^2 \rd u\)




















\(\ds \)

\(=\)







\(\ds -\map {\operatorname S} x\)





Definition of Fresnel Sine Integral Function



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 35$: Fresnel Sine Integral $\ds \map {\operatorname S} x = \sqrt {\frac 2 \pi} \int_0^x \sin u^2 \rd u$: $35.20$




