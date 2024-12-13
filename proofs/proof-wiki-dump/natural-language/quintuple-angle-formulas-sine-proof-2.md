# 

Source: https://proofwiki.org/wiki/Quintuple_Angle_Formulas/Sine/Proof_2

Theorem
$\sin 5 \theta = 5 \sin \theta - 20 \sin^3 \theta + 16 \sin^5 \theta$


Proof
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





