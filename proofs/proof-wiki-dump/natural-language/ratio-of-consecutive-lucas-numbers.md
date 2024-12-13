# 

Source: https://proofwiki.org/wiki/Ratio_of_Consecutive_Lucas_Numbers

Theorem
For $n \in \N$, let $L_n$ be the $n$th Lucas number.

Then:

$\ds \lim_{n \mathop \to \infty} \frac {L_{n + 1} } {L_n} = \phi$
where $\phi = \dfrac {1 + \sqrt 5} 2$ is the golden mean.


Proof













\(\ds \lim_{n \mathop \to \infty} \frac {L_{n + 1} } {L_n}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {\phi^{n + 1} + \paren {-\phi^{-1} }^{n + 1} } {\phi^n + \paren {-\phi^{-1} }^n}\)





Closed Form for Lucas Numbers














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {\phi - \phi^{-1} \paren {-\phi^{-2} }^n } {1 + \paren {-\phi^{-2} }^n}\)





dividing both numerator and denominator by $\phi^n$














\(\ds \)

\(=\)







\(\ds \frac \phi 1\)





Quotient Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \phi\)









$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $11$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $11$




