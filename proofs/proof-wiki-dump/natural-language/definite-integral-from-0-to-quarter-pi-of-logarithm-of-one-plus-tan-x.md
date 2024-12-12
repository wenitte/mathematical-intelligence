# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Quarter_Pi_of_Logarithm_of_One_plus_Tan_x

Theorem
$\ds \int_0^{\pi/4} \map \ln {1 + \tan x} \rd x = \frac \pi 8 \ln 2$


Proof













\(\ds \int_0^{\pi/4} \map \ln {1 + \tan x} \rd x\)

\(=\)







\(\ds \int_0^{\pi/4} \map \ln {1 + \map \tan {\frac \pi 4 - x} } \rd x\)





Integral between Limits is Independent of Direction














\(\ds \)

\(=\)







\(\ds \int_0^{\pi/4} \map \ln {1 + \frac {\tan \frac \pi 4 - \tan x} {1 + \tan \frac \pi 4 \tan x} } \rd x\)





Tangent of Difference














\(\ds \)

\(=\)







\(\ds \int_0^{\pi/4} \map \ln {1 + \frac {1 - \tan x} {1 + \tan x} } \rd x\)





Tangent of $45 \degrees$














\(\ds \)

\(=\)







\(\ds \int_0^{\pi/4} \map \ln {\frac 2 {1 + \tan x} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^{\pi/4} \ln 2 \rd x - \int_0^{\pi/4} \map \ln {1 + \tan x} \rd x\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \frac \pi 4 \ln 2 - \int_0^{\pi/4} \map \ln {1 + \tan x} \rd x\)





Primitive of Constant



Therefore: 

$\ds 2 \int_0^{\pi/4} \map \ln {1 + \tan x} \rd x = \frac \pi 4 \ln 2$
giving: 

$\ds \int_0^{\pi/4} \map \ln {1 + \tan x} \rd x = \frac \pi 8 \ln 2$
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Logarithmic Functions: $15.109$




