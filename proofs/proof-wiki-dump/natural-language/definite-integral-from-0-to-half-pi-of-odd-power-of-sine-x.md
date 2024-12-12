# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Half_Pi_of_Odd_Power_of_Sine_x



Theorem













\(\ds \int_0^{\frac \pi 2} \sin^{2 n + 1} x \rd x\)

\(=\)







\(\ds \dfrac {\paren {2^n n!}^2} {\paren {2 n + 1}!}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 \cdot 4 \cdot 6 \cdots 2 n} {3 \cdot 5 \cdot 7 \cdots \paren {2 n + 1} }\)









for $n \in \Z_{>0}$.


Proof 1

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: This would be more rigorous if implemented as a formal induction proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $I_n = \ds \int_0^{\frac \pi 2} \sin^n x \rd x$.

Then:














\(\ds I_{2 n + 1}\)

\(=\)







\(\ds \frac {2 n} {2 n + 1} I_{2 n - 1}\)





Reduction Formula for Definite Integral of Power of Sine














\(\ds \)

\(=\)







\(\ds \frac {2 n \paren {2 n - 2} } {\paren {2 n + 1} \paren {2 n - 1} } I_{2 n - 3}\)





Reduction Formula for Definite Integral of Power of Sine again














\(\ds \)

\(=\)







\(\ds \frac {2 n \paren {2 n - 2} \dotsm 2} {\paren {2 n + 1} \paren {2 n - 1} \dotsm 3} I_1\)





Reduction Formula for Definite Integral of Power of Sine until the end














\(\ds \)

\(=\)







\(\ds \frac {2 n \paren {2 n - 2} \dotsm 2} {\paren {2 n + 1} \paren {2 n - 1} \dotsm 3} \int_0^{\pi / 2} \sin x \rd x\)





Definition of $I_n$














\(\ds \)

\(=\)







\(\ds \frac {2 n \paren {2 n - 2} \dotsm 2} {\paren {2 n + 1} \paren {2 n - 1} \dotsm 3} \bigintlimits {-\cos x} 0 {\pi / 2}\)





Primitive of Sine Function














\(\ds \)

\(=\)







\(\ds \frac {2 n \paren {2 n - 2} \dotsm 2} {\paren {2 n + 1} \paren {2 n - 1} \dotsm 3} \paren {0 - \paren {-1} }\)





Cosine of Right Angle and Cosine of Zero is One














\(\ds \)

\(=\)







\(\ds \frac {2 n \paren {2 n - 2} \dotsm 2} {\paren {2 n + 1} \paren {2 n - 1} \dotsm 3}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {2 n}^2 \paren {2 n - 2}^2 \dotsm 2^2} {\paren {2 n + 1} \paren {2 n} \paren {2 n - 1} \paren {2 n - 2} \paren {2 n - 3} \dotsm 3 \cdot 2}\)





multiplying top and bottom by top














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 n}^2 n^2 \paren {n - 1}^2 \dotsm 1^2} {\paren {2 n + 1} \paren {2 n} \paren {2 n - 1} \paren {2 n - 2} \paren {2 n - 3} \dotsm 3 \cdot 2}\)





extracting factor of $\paren {2^n}^2$ from the top














\(\ds \)

\(=\)







\(\ds \frac {\paren {2^n n!}^2} {\paren {2 n + 1}!}\)





Definition of Factorial



$\blacksquare$


Proof 2













\(\ds \int_0^{\pi/2} \sin^{2 n + 1} x \rd x\)

\(=\)







\(\ds \int_0^{\pi/2} \paren {\sin x}^{2 \paren {n + 1} - 1} \paren {\cos x}^{2 \paren {\frac 1 2} - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \Beta {n + 1, \frac 1 2}\)





Definition 2 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma {n + 1} \map \Gamma {\frac 1 2} } {2 \map \Gamma {n + \frac 3 2} }\)





Definition 3 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac {n! \sqrt \pi} {2 \paren {n + \frac 1 2} \map \Gamma {n + \frac 1 2} }\)





Gamma Function Extends Factorial, Gamma Function of One Half, Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \frac {n! \sqrt \pi} {2 n + 1} \times \frac {2^{2 n} n!} {\paren {2 n!} \sqrt \pi}\)





Gamma Function of Positive Half-Integer














\(\ds \)

\(=\)







\(\ds \frac {\paren {2^n n!}^2 } {\paren {2 n + 1}!}\)









$\blacksquare$


Also see
Reduction Formula for Definite Integral of Power of Sine


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.31$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous): Back endpapers: A Brief Table of Integrals: $141$.
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 17.4 \ (2)$




