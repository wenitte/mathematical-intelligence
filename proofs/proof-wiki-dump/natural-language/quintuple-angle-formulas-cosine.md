# 

Source: https://proofwiki.org/wiki/Quintuple_Angle_Formulas/Cosine



Theorem
$\cos 5 \theta = 16 \cos^5 \theta - 20 \cos^3 \theta + 5 \cos \theta$
where $\cos$ denotes cosine.


Proof 1













\(\ds \cos 5 \theta\)

\(=\)







\(\ds \map \cos {4 \theta + \theta}\)




















\(\ds \)

\(=\)







\(\ds \cos 4 \theta \cos \theta - \sin 4 \theta \sin \theta\)





Cosine of Sum














\(\ds \)

\(=\)







\(\ds \paren {8 \cos^4 \theta - 8 \cos^2 \theta + 1} \cos \theta - \paren {4 \sin \theta \cos \theta - 8 \sin^3 \theta \cos \theta} \sin \theta\)





Quadruple Angle Formulas














\(\ds \)

\(=\)







\(\ds 8 \cos^5 \theta - 8 \cos^3 \theta + \cos \theta - 4 \sin^2 \theta \cos \theta - 8 \sin^4 \theta \cos \theta\)





multiplying out














\(\ds \)

\(=\)







\(\ds 8 \cos^5 \theta - 8 \cos^3 \theta + \cos \theta - 4 \paren {1 - \cos^2 \theta} \cos \theta - 8 \paren {1 - \cos^2 \theta}^2 \cos \theta\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds 16 \cos^5 \theta - 20 \cos^3 \theta + 5 \cos \theta\)





multiplying out and gathering terms



$\blacksquare$


Proof 2
We have:














\(\ds \cos 5 \theta + i \sin 5 \theta\)

\(=\)







\(\ds \paren {\cos \theta + i \sin \theta}^5\)





De Moivre's Formula














\(\ds \)

\(=\)







\(\ds \paren {\cos \theta}^5 + \binom 5 1 \paren {\cos \theta}^4 \paren {i \sin \theta} + \binom 5 2 \paren {\cos \theta}^3 \paren {i \sin \theta}^2\)





Binomial Theorem














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \binom 5 3 \paren {\cos \theta}^2 \paren {i \sin \theta}^3 + \binom 5 4 \paren {\cos \theta} \paren {i \sin \theta}^4 + \paren {i \sin \theta}^5\)




















\(\ds \)

\(=\)







\(\ds \cos^5 \theta + 5 i \cos^4 \theta \sin \theta - 10 \cos^3 \theta \sin^2 \theta\)





substituting for binomial coefficients














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds 10 i \cos^2 \theta \sin^3 \theta + 5 \cos \theta \sin^4 \theta + i \sin^5 \theta\)





and using $i^2 = -1$




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \cos^5 \theta - 10 \cos^3 \theta \sin^2 \theta + 5 \cos \theta \sin^4 \theta\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds i \paren {5 \cos^4 \theta \sin \theta - 10 \cos^2 \theta \sin^3 \theta + \sin^5 \theta}\)





rearranging




Hence:














\(\ds \cos 5 \theta\)

\(=\)







\(\ds \cos^5 \theta - 10 \cos^3 \theta \sin^2 \theta + 5 \cos \theta \sin^4 \theta\)





equating real parts in $(1)$














\(\ds \)

\(=\)







\(\ds \cos^5 \theta - 10 \cos^3 \theta \paren {1 - \cos^2 \theta} + 5 \cos \theta \paren {1 - \cos^2 \theta}^2\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds 16 \cos^5 \theta - 20 \cos^3 \theta + 5 \cos \theta\)





multiplying out and gathering terms



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: $5.51$




