# 

Source: https://proofwiki.org/wiki/Quadruple_Angle_Formulas/Sine



Theorem
$\sin 4 \theta = 4 \sin \theta \cos \theta - 8 \sin^3 \theta \cos \theta$
where $\sin$ and $\cos$ denote sine and cosine respectively.


Corollary 1
For all $\theta$ such that $\theta \ne 0, \pm \pi, \pm 2 \pi \ldots$

$\dfrac {\sin 4 \theta} {\sin \theta} = 8 \cos^3 \theta - 4 \cos \theta$
where $\sin$ denotes sine and $\cos$ denotes cosine.


Corollary 2
For all $\theta$ such that $\theta \ne 0, \pm \pi, \pm 2 \pi \ldots$

$\dfrac {\sin 4 \theta} {\sin \theta} = 2 \cos 3 \theta + 2 \cos \theta$
where $\sin$ denotes sine and $\cos$ denotes cosine.


Proof 1













\(\ds \map \sin {4 \theta}\)

\(=\)







\(\ds \map \sin {3 \theta + \theta}\)




















\(\ds \)

\(=\)







\(\ds \sin 3 \theta \cos \theta + \cos 3 \theta \sin \theta\)





Sine of Sum














\(\ds \)

\(=\)







\(\ds \paren {3 \sin \theta - 4 \sin^3 \theta} \cos \theta + \paren {4 \cos^3 \theta - 3 \cos \theta} \sin \theta\)





Triple Angle Formula for Sine and Triple Angle Formula for Cosine














\(\ds \)

\(=\)







\(\ds 3 \sin \theta \cos \theta - 4 \sin^3 \theta \cos \theta + 4 \cos^3 \theta \sin \theta - 3 \cos \theta \sin \theta\)




















\(\ds \)

\(=\)







\(\ds 3 \sin \theta \cos \theta - 4 \sin^3 \theta \cos \theta + 4 \cos \theta \paren {1 - \sin^2 \theta} \sin \theta - 3 \cos \theta \sin \theta\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds 4 \sin \theta \cos \theta - 8 \sin^3 \theta \cos \theta\)





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














\(\ds \sin 4 \theta\)

\(=\)







\(\ds 4 \cos^3 \theta \sin \theta - 4 \cos \theta \sin^3 \theta\)





equating imaginary parts in $(1)$














\(\ds \)

\(=\)







\(\ds 4 \cos \theta \paren {1 - \sin^2 \theta} \sin \theta - 4 \cos \theta \sin^3 \theta\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds 4 \cos \theta \sin \theta - 8 \sin^3 \theta \cos \theta\)





multiplying out and gathering terms



$\blacksquare$


Proof 3













\(\ds \sin {4 \theta}\)

\(=\)







\(\ds \map \sin {2 \times 2 \theta}\)




















\(\ds \)

\(=\)







\(\ds 2 \sin 2 \theta \cos 2 \theta\)





Double Angle Formula for Sine














\(\ds \)

\(=\)







\(\ds 2 \paren {2 \sin \theta \cos \theta} \paren {\cos^2 \theta - \sin^2 \theta}\)





Double Angle Formula for Sine, Double Angle Formula for Cosine














\(\ds \)

\(=\)







\(\ds 4 \sin \theta \cos^3 \theta - 4 \sin^3 \theta \cos \theta\)





Distributive Laws of Arithmetic














\(\ds \)

\(=\)







\(\ds 4 \sin \theta \paren {1 - \sin^2 \theta} \cos \theta - 4 \sin^3 \theta \cos \theta\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds 4 \sin \theta \cos \theta - 8 \sin^3 \theta \cos \theta\)





simplification



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: $5.47$




