# 

Source: https://proofwiki.org/wiki/Integral_to_Infinity_of_Sine_p_x_over_x



Theorem
$\ds \int_0^\infty \frac {\sin p x} x \rd x = \begin {cases} \dfrac \pi 2 & : p > 0 \\ 0 & : p = 0 \\ -\dfrac \pi 2 & : p < 0 \end {cases}$


Proof 1
Let $p > 0$.
We have: 














\(\ds \int_0^\infty \frac {\sin p x} x \rd x\)

\(=\)







\(\ds \frac 1 p \int_0^\infty \frac {\sin t} { \frac 1 p t} \rd t\)





substituting $t = p x$














\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {\sin t} t \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2\)





Dirichlet Integral




Then:














\(\ds \int_0^\infty \frac {\sin \left({- p x}\right)} x \rd x\)

\(=\)







\(\ds -\int_0^\infty \frac {\sin p x} x \rd x\)





Sine Function is Odd














\(\ds \)

\(=\)







\(\ds -\frac \pi 2\)





per above computation




For $p = 0$, we have: 














\(\ds \int_0^\infty \frac {\sin 0 x} x \rd x\)

\(=\)







\(\ds \int_0^\infty \frac 0 x \rd x\)





Sine of Zero is Zero














\(\ds \)

\(=\)







\(\ds 0\)









Hence the result. 
$\blacksquare$


Proof 2

This theorem requires a proof.In particular: Use Primitive of Sine of a x over x, and also the analytic solution as found in Integration, 2nd ed.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.33$




