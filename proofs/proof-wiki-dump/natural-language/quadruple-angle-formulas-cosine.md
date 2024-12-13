# 

Source: https://proofwiki.org/wiki/Quadruple_Angle_Formulas/Cosine



Theorem
$\cos 4 \theta = 8 \cos^4 \theta - 8 \cos^2 \theta + 1$
where $\cos$ denotes cosine.


Corollary
$\cos 4 \theta = 8 \sin^4 \theta - 8 \sin^2 \theta + 1$


Factor Form
$\cos 4 \theta = \paren {\cos \theta - \cos \dfrac \pi 8} \paren {\cos \theta - \cos \dfrac {3 \pi} 8} \paren {\cos \theta - \cos \dfrac {5 \pi} 8} \paren {\cos \theta - \cos \dfrac {7 \pi} 8}$


Proof 1













\(\ds \cos 4 \theta\)

\(=\)







\(\ds \cos \paren {2 \theta + 2 \theta}\)




















\(\ds \)

\(=\)







\(\ds \cos 2 \theta \cos 2 \theta - \sin 2 \theta \sin 2 \theta\)





Cosine of Sum














\(\ds \)

\(=\)







\(\ds \paren {\cos^2 \theta - \sin^2 \theta} \paren {\cos^2 \theta - \sin^2 \theta} - \paren {2 \sin \theta \cos \theta} \paren {2 \sin \theta \cos \theta}\)





Double Angle Formulas














\(\ds \)

\(=\)







\(\ds \cos^4 \theta - 2 \cos^2 \theta \sin^2 \theta + \sin^4 \theta - 4 \cos^2 \theta \sin^2 \theta\)





multiplying out














\(\ds \)

\(=\)







\(\ds \cos^4 \theta - 2 \cos^2 \theta \paren {1 - \cos^2 \theta} + \paren {1 - \cos^2 \theta}^2 - 4 \cos^2 \theta \paren {1 - \cos^2 \theta}\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds 8 \cos^4 \theta - 8 \cos^2 \theta + 1\)





multiplying out and gathering terms



$\blacksquare$


Proof 2
We have:














\(\ds \cos 4 \theta + i \sin 4 \theta\)

\(=\)







\(\ds \paren {\cos \theta + i \sin \theta}^4\)





De Moivre's Formula














\(\ds \)

\(=\)







\(\ds \paren {\cos \theta}^4 + \binom 4 1 \paren {\cos \theta}^3 \paren {i \sin \theta} + \binom 4 2 \paren {\cos \theta}^2 \paren {i \sin \theta}^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \binom 4 3 \paren {\cos \theta} \paren {i \sin \theta}^3 + \paren {i \sin \theta}^4\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \cos^4 \theta + 4 i \cos^3 \theta \sin \theta - 6 \cos^2 \theta \sin^2 \theta\)





substituting for binomial coefficients














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds 4 i \cos \theta \sin^3 \theta + \sin^4 \theta\)





and using $i^2 = -1$




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \cos^4 \theta - 6 \cos^2 \theta \sin^2 \theta + \sin^4 \theta\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds 4 i \cos^3 \theta \sin \theta - 4 i \cos \theta \sin^3 \theta\)





rearranging




Hence:














\(\ds \cos 4 \theta\)

\(=\)







\(\ds \cos^4 \theta - 6 \cos^2 \theta \sin^2 \theta + \sin^4 \theta\)





equating real parts in $(1)$














\(\ds \)

\(=\)







\(\ds \cos^4 \theta - 6 \cos^2 \theta \paren {1 - \cos^2 \theta} + \paren {1 - \cos^2 \theta}^2\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds 8 \cos^4 \theta - 8 \cos^2 \theta + 1\)





multiplying out and gathering terms



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text V$. Trigonometry: Exercises $\text {XXXII}$: $16$.
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: $5.48$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): expansion
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): expansion: 1.




