# 

Source: https://proofwiki.org/wiki/Quintuple_Angle_Formulas/Sine



Theorem
$\sin 5 \theta = 5 \sin \theta - 20 \sin^3 \theta + 16 \sin^5 \theta$
where $\sin$ denotes sine.


Corollary
For all $\theta$ such that $\theta \ne 0, \pm \pi, \pm 2 \pi \ldots$

$\dfrac {\sin 5 \theta} {\sin \theta} = 16 \cos^4 \theta - 12 \cos^2 \theta + 1$
where $\sin$ denotes sine and $\cos$ denotes cosine.


Proof 1













\(\ds \sin 5 \theta\)

\(=\)







\(\ds \map \sin {3 \theta + 2 \theta}\)




















\(\ds \)

\(=\)







\(\ds \sin 3 \theta \cos 2 \theta + \cos 3 \theta \sin 2 \theta\)





Sine of Sum














\(\ds \)

\(=\)







\(\ds \paren {3 \sin \theta - 4 \sin^3 \theta} \cos 2 \theta + \paren {4 \cos^3 \theta - 3 \cos \theta} \sin 2 \theta\)





Triple Angle Formulas














\(\ds \)

\(=\)







\(\ds \paren {3 \sin \theta - 4 \sin^3 \theta} \paren {\cos^2 \theta - \sin^2 \theta} + \paren {4 \cos^3 \theta - 3 \cos \theta} 2 \sin \theta \cos \theta\)





Double Angle Formulas














\(\ds \)

\(=\)







\(\ds \paren {3 \sin \theta - 4 \sin^3 \theta} \paren {\cos^2 \theta - \sin^2 \theta} + 8 \cos^4 \theta \sin \theta - 6 \cos^2 \theta \sin \theta\)





multiplying out














\(\ds \)

\(=\)







\(\ds \paren {3 \sin \theta - 4 \sin^3 \theta} \paren {1 - 2 \sin^2 \theta} + 8 \paren {1 - \sin^2 \theta}^2 \sin \theta - 6 \paren {1 - \sin^2 \theta} \sin \theta\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds 5 \sin \theta - 20 \sin^3 \theta + 16 \sin ^5 \theta\)





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




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \binom 5 3 \paren {\cos \theta}^2 \paren {i \sin \theta}^3 + \binom 5 4 \paren {\cos \theta} \paren {i \sin \theta}^4 + \paren {i \sin \theta}^5\)





Binomial Theorem














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














\(\ds \sin 5 \theta\)

\(=\)







\(\ds 5 \cos^4 \theta \sin \theta - 10 \cos^2 \theta \sin^3 \theta + \sin^5 \theta\)





equating imaginary parts in $(1)$














\(\ds \)

\(=\)







\(\ds 5 \paren {1 - \sin^2 \theta}^2 \sin \theta - 10 \paren {1 - \sin^2 \theta} \sin^3 \theta + \sin^5 \theta\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds 5 \sin \theta - 20 \sin^3 \theta + 16 \sin^5 \theta\)





multiplying out and gathering terms



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: $5.50$




