# 

Source: https://proofwiki.org/wiki/Machin%27s_Formula_for_Pi/Proof_2



Theorem
$\dfrac \pi 4 = 4 \arctan \dfrac 1 5 - \arctan \dfrac 1 {239} \approx 0 \cdotp 78539 \, 81633 \, 9744 \ldots$

The calculation of $\pi$ (pi) can then proceed using the Gregory Series:

$\arctan \dfrac 1 x = \dfrac 1 x - \dfrac 1 {3 x^3} + \dfrac 1 {5 x^5} - \dfrac 1 {7 x^7} + \dfrac 1 {9 x^9} - \cdots$
which is valid for $x \ge 1$.


Proof













\(\ds \map \arg {\paren {5 + i }^4 \paren {239 - i} }\)

\(=\)







\(\ds \map \arg {5 + i}^4 + \map \arg {239 - i}\)





Argument of Product equals Sum of Arguments














\(\ds \)

\(=\)







\(\ds 4 \map \arg {5 + i} + \map \arg {239 - i}\)





Argument of Product equals Sum of Arguments














\(\ds \)

\(=\)







\(\ds 4 \arctan \frac 1 5 + \arctan \frac {-1} {239}\)




















\(\ds \)

\(=\)







\(\ds 4 \arctan \frac 1 5 - \arctan \frac 1 {239}\)





Inverse Tangent is Odd Function




The validity of the material on this page is questionable.In particular: We cannot take it for granted that $\map \arg z = \arctan \dfrac {\Im z} {\Re z}$, we have to be sure we know what quadrant we are in. Clearly here $\Re z > 0$ so complications don't directly arise, but we might want to use the cosine/sine definition to be rigorousYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

Furthermore, because:














\(\ds \paren {5 + i}^4\)

\(=\)







\(\ds 5^4 + 4 \times 5^3 i - 6 \times 5^2 - 4 \times 5 i + 1\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds 476 + 480i\)





simplifying



we can write:














\(\ds \paren {5 + i}^4 \paren {239 - i}\)

\(=\)







\(\ds \paren {476 + 480 i} \paren {239 - i}\)




















\(\ds \)

\(=\)







\(\ds 113764 + 480 + 114720i - 476i\)




















\(\ds \)

\(=\)







\(\ds 114244 + 114244i\)










From there, we substitute:














\(\ds \map \arg {\paren {5 + i }^4 \paren {239 - i} }\)

\(=\)







\(\ds \map \arg {114244 + 114244 i}\)




















\(\ds \)

\(=\)







\(\ds \arctan \frac {114244} {114244}\)




















\(\ds \)

\(=\)







\(\ds \arctan 1\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 4\)









By transitivity:

$\dfrac \pi 4 = 4 \arctan \dfrac 1 5 - \arctan \dfrac 1 {239}$
$\blacksquare$


Source of Name
This entry was named for John Machin.


Historical Note
John Machin devised his formula for $\pi$ in $1706$.
It allowed him to calculate $\pi$ to over $100$ decimal places.
This greatly surpassed the work of Ludolph van Ceulen.





