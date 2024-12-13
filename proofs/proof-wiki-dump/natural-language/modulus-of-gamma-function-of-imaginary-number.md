# 

Source: https://proofwiki.org/wiki/Modulus_of_Gamma_Function_of_Imaginary_Number



Theorem
Let $t \in \R$ be a real number.
Then: 

$\cmod {\map \Gamma {i t} } = \sqrt {\dfrac {\pi \csch \pi t} t}$
where:

$\Gamma$ is the Gamma function
$\csch$ is the hyperbolic cosecant function.


Proof
By Euler's Reflection Formula:

$\map \Gamma {i t} \, \map \Gamma {1 - i t} = \pi \, \map \csc {\pi i t}$
From Gamma Difference Equation: 

$-i t \, \map \Gamma {i t} \, \map \Gamma {-i t} = \pi \, \map \csc {\pi i t}$
Then:














\(\ds \cmod {-i t} \cmod {\map \Gamma {i t} } \cmod {\map \Gamma {-i t} }\)

\(=\)







\(\ds \cmod t \cmod {\map \Gamma {i t} } \cmod {\overline {\map \Gamma {i t} } }\)





Complex Conjugate of Gamma Function














\(\ds \)

\(=\)







\(\ds \cmod t \cmod {\map \Gamma {i t} }^2\)





$\cmod z = \cmod {\overline z}$



and:














\(\ds \cmod {\pi \, \map \csc {\pi i t} }\)

\(=\)







\(\ds \cmod {-i \pi \, \map \csch {\pi t} }\)





Hyperbolic Sine in terms of Sine














\(\ds \)

\(=\)







\(\ds \pi \, \map \csch {\pi \cmod t}\)





Hyperbolic Sine Function is Odd



So:

$\cmod {\map \Gamma {i t} }^2 = \dfrac {\pi \, \map \csch {\pi \cmod t} } {\cmod t}$
As $\cmod z \ge 0$ for all complex numbers $z$, we can take the non-negative square root and write:

$\cmod {\map \Gamma {i t} } = \sqrt {\dfrac {\pi \, \map \csch {\pi \cmod t} } {\cmod t} }$
However, by Hyperbolic Sine Function is Odd: 

$\dfrac {\pi \, \map \csch {-\pi t} } {-t} = \dfrac {-\pi \, \map \csch {\pi t} } {-t} = \dfrac {\pi \, \map \csch {\pi t} } t$
Hence we can remove the modulus and simply write: 

$\cmod {\map \Gamma {i t} } = \sqrt {\dfrac {\pi \csch \pi t} t}$
$\blacksquare$


Also reported as
This result can also be seen reported as:

$\cmod {\map \Gamma {i t} }^2 = \dfrac \pi {t \sinh \pi t}$


Sources
1920: E.T. Whittaker and G.N. Watson: A Course of Modern Analysis (3rd ed.): $15$: Miscellaneous Examples
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $16.17$: Miscellaneous Results




