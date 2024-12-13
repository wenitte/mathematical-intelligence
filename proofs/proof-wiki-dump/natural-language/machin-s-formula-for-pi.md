# 

Source: https://proofwiki.org/wiki/Machin%27s_Formula_for_Pi



Theorem
$\dfrac \pi 4 = 4 \arctan \dfrac 1 5 - \arctan \dfrac 1 {239} \approx 0 \cdotp 78539 \, 81633 \, 9744 \ldots$
This sequence is A003881 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).

The calculation of $\pi$ (pi) can then proceed using the Gregory Series:

$\arctan \dfrac 1 x = \dfrac 1 x - \dfrac 1 {3 x^3} + \dfrac 1 {5 x^5} - \dfrac 1 {7 x^7} + \dfrac 1 {9 x^9} - \cdots$
which is valid for $x \ge 1$.


Proof 1
Let $\tan \alpha = \dfrac 1 5$.
Then:














\(\ds \tan 2 \alpha\)

\(=\)







\(\ds \frac {2 \tan \alpha} {1 - \tan^2 \alpha}\)





Double Angle Formula for Tangent














\(\ds \)

\(=\)







\(\ds \frac {2 / 5} {1 - 1 / 25}\)




















\(\ds \)

\(=\)







\(\ds \frac 5 {12}\)














\(\ds \leadsto \ \ \)





\(\ds \tan 4 \alpha\)

\(=\)







\(\ds \frac {2 \tan 2 \alpha} {1 - \tan^2 2 \alpha}\)





Double Angle Formula for Tangent














\(\ds \)

\(=\)







\(\ds \frac {2 \times 5 / 12} {1 - 25 / 144}\)




















\(\ds \)

\(=\)







\(\ds \frac {120} {119}\)














\(\ds \leadsto \ \ \)





\(\ds \tan \left({4 \alpha - \frac \pi 4}\right)\)

\(=\)







\(\ds \frac {\tan 4 \alpha - \tan \frac \pi 4} {1 + \tan 4 \alpha \tan \frac \pi 4}\)





Tangent of Difference














\(\ds \)

\(=\)







\(\ds \frac {\tan 4 \alpha - 1} {1 + \tan 4 \alpha}\)





Tangent of $45^\circ$














\(\ds \)

\(=\)







\(\ds \frac {120 / 119 - 1} {120 / 119 + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {239}\)














\(\ds \leadsto \ \ \)





\(\ds 4 \alpha - \frac \pi 4\)

\(=\)







\(\ds \arctan \frac 1 {239}\)














\(\ds \leadsto \ \ \)





\(\ds \frac \pi 4\)

\(=\)







\(\ds 4 \arctan \frac 1 5 - \arctan \frac 1 {239}\)









$\blacksquare$


Proof 2













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


Also known as
Some sources give this as Machin's Identity.


Source of Name
This entry was named for John Machin.


Historical Note
John Machin devised his formula for $\pi$ in $1706$.
It allowed him to calculate $\pi$ to over $100$ decimal places.
This greatly surpassed the work of Ludolph van Ceulen.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $3 \cdotp 14159 \, 26535 \, 89793 \, 23846 \, 26433 \, 83279 \, 50288 \, 41972 \ldots$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $3 \cdotp 14159 \, 26535 \, 89793 \, 23846 \, 26433 \, 83279 \, 50288 \, 41971 \ldots$
Weisstein, Eric W. "Machin's Formula." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/MachinsFormula.html




