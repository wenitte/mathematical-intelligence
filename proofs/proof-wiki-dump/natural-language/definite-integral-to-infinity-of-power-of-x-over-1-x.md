# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Power_of_x_over_1_%2B_x



Theorem
$\ds \int_0^\infty \dfrac {x^{p - 1} \rd x} {1 + x} = \frac \pi {\sin \pi p}$
for $0 < p < 1$. 


Proof 1













\(\ds \int_0^\infty \frac {x^{p - 1} \rd x} {1 + x}\)

\(=\)







\(\ds \int_0^\infty \frac 1 {p x^{p - 1} } \cdot \frac {x^{p - 1} \rd t} {1 + t^{1 / p} }\)





substituting $t = x^p$














\(\ds \)

\(=\)







\(\ds \frac 1 p \int_0^\infty \frac {\rd t} {1 + t^{1 / p} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 p \cdot \frac \pi {\frac 1 p} \map \csc {\frac \pi {\frac 1 p} }\)





as $0 < p < 1$, $\dfrac 1 p > 1$, so we can apply Definite Integral to Infinity of $\dfrac 1 {1 + x^n}$














\(\ds \)

\(=\)







\(\ds \pi \map \csc {\pi p}\)




















\(\ds \)

\(=\)







\(\ds \frac \pi {\sin \pi p}\)





Definition of Cosecant



$\blacksquare$


Proof 2

This theorem requires a proof.In particular: We can probably use Reduction Formula for Primitive of Power of x by Power of a x + b but I can see it being a long slogYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Rational or Irrational expressions: $15.19$




