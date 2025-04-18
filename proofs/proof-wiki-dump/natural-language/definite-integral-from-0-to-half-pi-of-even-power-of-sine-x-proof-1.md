# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Half_Pi_of_Even_Power_of_Sine_x/Proof_1

Theorem













\(\ds \int_0^{\frac \pi 2} \sin^{2 n} x \rd x\)

\(=\)







\(\ds \dfrac {\paren {2 n}!} {\paren {2^n n!}^2} \dfrac \pi 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 \cdot 3 \cdot 5 \cdots \paren {2 n - 1} } {2 \cdot 4 \cdot 6 \cdots 2 n} \dfrac \pi 2\)









for $n \in \Z_{>0}$.


Proof

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: This would be more rigorous if implemented as a formal induction proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $I_n = \ds \int_0^{\frac \pi 2} \sin^n x \rd x$.

Then:














\(\ds I_{2 n}\)

\(=\)







\(\ds \frac {2 n - 1} {2 n} I_{2 n - 2}\)





Reduction Formula for Definite Integral of Power of Sine














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 n - 1} \paren {2 n - 3} } {2 n \paren {2 n - 2} } I_{2 n - 4}\)





Reduction Formula for Definite Integral of Power of Sine again














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 n - 1} \paren {2 n - 3} \cdots 1} {2 n \paren {2 n - 2} \cdots 2} I_0\)





Reduction Formula for Definite Integral of Power of Sine until the end














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 n - 1} \paren {2 n - 3} \cdots 1} {2 n \paren {2 n - 2} \cdots 2} \int_0^{\pi / 2} \rd x\)





Definition of $I_n$














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 n - 1} \paren {2 n - 3} \cdots 1} {2 n \paren {2 n - 2} \cdots 2} \bigintlimits x 0 {\pi / 2}\)





Integral of Constant














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 n - 1} \paren {2 n - 3} \cdots 1} {2 n \paren {2 n - 2} \cdots 2} \frac \pi 2\)





Integral of Constant














\(\ds \)

\(=\)







\(\ds \frac {2n \paren {2 n - 1} \paren {2 n - 2} \paren {2 n - 3} \cdots 2 \cdot 1} {\paren {2 n}^2 \paren {2 n - 2}^2 \cdots 2^2} \frac \pi 2\)





multiplying top and bottom by bottom














\(\ds \)

\(=\)







\(\ds \frac {2n \paren {2 n - 1} \paren {2 n - 2} \paren {2 n - 3} \cdots 2 \cdot 1} {\paren {2^n}^2 n^2 \paren {n - 1}^2 \cdots 1^2} \frac \pi 2\)





extracting factor of $\paren {2^n}^2$ from the bottom














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 n}!} {\paren {2^n}^2 \paren {n!}^2} \frac \pi 2\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 n}!} {\paren {2^n n!}^2} \frac \pi 2\)





rearranging



$\blacksquare$





