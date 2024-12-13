# 

Source: https://proofwiki.org/wiki/Machin%27s_Formula_for_Pi/Proof_1



Theorem
$\dfrac \pi 4 = 4 \arctan \dfrac 1 5 - \arctan \dfrac 1 {239} \approx 0 \cdotp 78539 \, 81633 \, 9744 \ldots$

The calculation of $\pi$ (pi) can then proceed using the Gregory Series:

$\arctan \dfrac 1 x = \dfrac 1 x - \dfrac 1 {3 x^3} + \dfrac 1 {5 x^5} - \dfrac 1 {7 x^7} + \dfrac 1 {9 x^9} - \cdots$
which is valid for $x \ge 1$.


Proof
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


Source of Name
This entry was named for John Machin.

Historical Note
John Machin devised his formula for $\pi$ in $1706$.
It allowed him to calculate $\pi$ to over $100$ decimal places.
This greatly surpassed the work of Ludolph van Ceulen.





