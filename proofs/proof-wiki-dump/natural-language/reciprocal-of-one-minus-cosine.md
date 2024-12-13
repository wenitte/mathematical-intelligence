# 

Source: https://proofwiki.org/wiki/Reciprocal_of_One_Minus_Cosine



Theorem
$\dfrac 1 {1 - \cos x} = \dfrac 1 2 \map {\csc^2} {\dfrac x 2}$


Proof 1













\(\ds 1 - \cos x\)

\(=\)







\(\ds \cos 0 - \cos x\)





Cosine of Zero is One














\(\ds \)

\(=\)







\(\ds -2 \map \sin {\dfrac {0 + x} 2} \map \sin {\dfrac {0 - x} 2}\)





Cosine minus Cosine














\(\ds \)

\(=\)







\(\ds -2 \map \sin {\dfrac x 2} \map \sin {\dfrac {-x} 2}\)





simplifying














\(\ds \)

\(=\)







\(\ds 2 \map \sin {\dfrac x 2} \map \sin {\dfrac x 2}\)





Sine Function is Odd














\(\ds \)

\(=\)







\(\ds 2 \map {\sin^2} {\frac x 2}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {1 - \cos x}\)

\(=\)







\(\ds \frac 1 2 \map {\csc^2} {\frac x 2}\)





Definition of Cosecant



$\blacksquare$


Proof 2













\(\ds \cos x\)

\(=\)







\(\ds 1 - 2 \sin^2 \frac x 2\)





Double Angle Formula for Cosine: Corollary $2$








\(\ds \leadstoandfrom \ \ \)





\(\ds 1 - \cos x\)

\(=\)







\(\ds 2 \sin^2 \frac x 2\)





rearranging








\(\ds \leadstoandfrom \ \ \)





\(\ds \frac 1 {1 - \cos x}\)

\(=\)







\(\ds \frac 1 2 \frac 1 {\sin^2 \frac x 2}\)





taking the reciprocal of both sides














\(\ds \)

\(=\)







\(\ds \frac 1 2 \csc^2 \frac x 2\)





Definition of Cosecant



$\blacksquare$


Proof 3













\(\ds \frac 1 {1 - \cos x}\)

\(=\)







\(\ds \frac 1 {1 - \frac {1 - \map {\tan^2} {\frac x 2} } {1 + \map {\tan^2} {\frac x 2} } }\)





Tangent Half-Angle Substitution for Cosine














\(\ds \)

\(=\)







\(\ds \frac {1 + \map {\tan^2} {\frac x 2} } {1 + \map {\tan^2} {\frac x 2} - 1 + \map {\tan^2} {\frac x 2} }\)





multiplying top and bottom by $1 + \map {\tan^2} {\dfrac x 2}$














\(\ds \)

\(=\)







\(\ds \frac {\map {\sec^2} {\frac x 2} } {2 \map {\tan^2} {\frac x 2} }\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \frac 1 2 \cdot \frac 1 {\map {\cos^2} {\frac x 2} } \cdot \frac {\map {\cos^2} {\frac x 2} } {\map {\sin^2} {\frac x 2} }\)





Definition of Secant Function, Definition of Tangent














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \map {\sin^2} {\frac x 2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \map {\csc^2} {\frac x 2}\)





Definition of Cosecant



$\blacksquare$


Also see
Reciprocal of One Plus Cosine
Reciprocal of One Plus Sine
Reciprocal of One Minus Sine




