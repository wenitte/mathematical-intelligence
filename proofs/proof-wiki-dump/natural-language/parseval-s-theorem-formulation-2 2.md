# 

Source: https://proofwiki.org/wiki/Parseval%27s_Theorem/Formulation_2


This article needs to be linked to other articles.In particular: Some of the symbology needs to be expanded upon, and the link to Fourier series needs to be the complex version (still to be documented)You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $f$ be a real function which is square-integrable over the interval $\openint {-\pi} \pi$.
Let $f$ be expressed by the Fourier series:

$\map f x = \ds \sum_{n \mathop = -\infty}^\infty c_n e^{i n x}$
where:

$c_n = \ds \frac 1 {2 \pi} \int_{-\pi}^\pi \map f t e^{-i n t} \rd t$

Then:

$\ds \frac 1 {2 \pi} \int_{-\pi}^\pi \size {\map f x}^2 \rd x = \sum_{n \mathop = -\infty}^\infty \size {c_n}^2$


Proof













\(\ds \frac 1 {2 \pi} \int_{-\pi}^\pi \size {\map f x}^2 \rd x\)

\(=\)







\(\ds \frac 1 {2 \pi} \int_{-\pi}^\pi \map f x \overline {\map f x} \rd x\)





Modulus in Terms of Conjugate














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi} \int_{-\pi}^\pi \sum_{n \mathop = -\infty}^\infty c_n e^{i n x} \overline {\sum_{m \mathop = -\infty}^\infty c_m e^{i m x} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi} \int_{-\pi}^\pi \sum_{n \mathop = -\infty}^\infty c_n e^{i n x} \sum_{m \mathop = -\infty}^\infty \overline {c_m} e^{-i m x} \rd x\)





Sum of Complex Conjugates














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi} \int_{-\pi}^\pi \sum_{n \mathop = -\infty}^\infty \sum_{m \mathop = -\infty}^\infty c_n \overline {c_m} e^{i x \paren {n - m} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi} \sum_{n \mathop = -\infty}^\infty \sum_{m \mathop = -\infty}^\infty c_n \overline {c_m} \int_{-\pi}^\pi e^{i x \paren {n - m} } \rd x\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi} \sum_{n \mathop = -\infty}^\infty \sum_{m \mathop = -\infty}^\infty c_n \overline {c_m} 2 \pi \delta_{n m}\)





Integral over 2 pi of Exponential of i by n x














\(\ds \)

\(=\)







\(\ds \frac {2 \pi} {2 \pi} \sum_{n \mathop = -\infty}^\infty c_n \overline {c_n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = -\infty}^\infty \size {c_n}^2\)









$\blacksquare$


Source of Name
This entry was named for Marc-Antoine Parseval.





