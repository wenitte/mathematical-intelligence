# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_2_Pi_of_Logarithm_of_a_plus_b_Cosine_x

Theorem
$\ds \int_0^{2 \pi} \map \ln {a + b \cos x} \rd x = 2 \pi \map \ln {\frac {a + \sqrt {a^2 - b^2} } 2}$
where:

$b$ is a real number
$a$ is a positive real number with $a \ge \size b$.


Proof













\(\ds \int_0^{2 \pi} \map \ln {a + b \cos x} \rd x\)

\(=\)







\(\ds \int_0^\pi \map \ln {a + b \cos x} \rd x + \int_\pi^{2 \pi} \map \ln {a + b \cos x} \rd x\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=\)







\(\ds \int_0^\pi \map \ln {a + b \cos x} \rd x - \int_\pi^0 \map \ln {a + b \map \cos {2 \pi - x} } \rd x\)





substituting $x \mapsto 2 \pi - x$














\(\ds \)

\(=\)







\(\ds \int_0^\pi \map \ln {a + b \cos x} \rd x + \int_0^\pi \map \ln {a + b \map \cos {2 \pi - x} } \rd x\)





Reversal of Limits of Definite Integral














\(\ds \)

\(=\)







\(\ds \int_0^\pi \map \ln {a + b \cos x} \rd x + \int_0^\pi \map \ln {a + b \cos x} \rd x\)





Cosine of Conjugate Angle














\(\ds \)

\(=\)







\(\ds 2 \int_0^\pi \map \ln {a + b \cos x} \rd x\)




















\(\ds \)

\(=\)







\(\ds 2 \pi \map \ln {\frac {a + \sqrt {a^2 - b^2} } 2}\)





Definite Integral from 0 to Pi of Logarithm of a plus b Cosine x



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Logarithmic Functions: $15.106.2$




