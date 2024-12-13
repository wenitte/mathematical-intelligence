# 

Source: https://proofwiki.org/wiki/Quintuple_Angle_Formulas/Cosine/Proof_2

Theorem
$\cos 5 \theta = 16 \cos^5 \theta - 20 \cos^3 \theta + 5 \cos \theta$


Proof
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
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Solved Problems: De Moivre's Theorem: $21 \ \text{(a)}$




