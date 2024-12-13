# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Exponential_of_Sine_of_x

Theorem
$e^{\sin x} = 1 + x + \dfrac {x^2} 2 - \dfrac {x^4} 8 - \dfrac {x^5} {15} + \cdots$
for all $x \in \R$.


Proof
Let $\map f x = e^{\sin x}$.
Then:














\(\ds \frac \d {\d x} \map f x\)

\(=\)







\(\ds \cos x \, e^{\sin x}\)





Chain Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \frac {\d^2} {\d x^2} \map f x\)

\(=\)







\(\ds \cos x \frac \d {\d x} e^{\sin x} + e^{\sin x} \frac \d {\d x} \cos x\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \cos^2 x \, e^{\sin x} - \sin x \, e^{\sin x}\)




















\(\ds \)

\(=\)







\(\ds \paren {\cos^2 x - \sin x} e^{\sin x}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d^3} {\d x^3} \map f x\)

\(=\)







\(\ds \paren {\cos^2 x - \sin x} \frac \d {\d x} e^{\sin x} + e^{\sin x} \frac \d {\d x} \paren {\cos^2 x - \sin x}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \paren {\cos^2 x - \sin x} \cos x \, e^{\sin x} + e^{\sin x} \paren {-2 \cos x \sin x - \cos x}\)




















\(\ds \)

\(=\)







\(\ds \paren {\cos^3 x - 3 \sin x \cos x - \cos x} e^{\sin x}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d^4} {\d x^4} \map f x\)

\(=\)







\(\ds \paren {\cos^3 x - 3 \sin x \cos x - \cos x} \frac \d {\d x} e^{\sin x} + e^{\sin x} \frac \d {\d x} \paren {\cos^3 x - 3 \sin x \cos x - \cos x}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \paren {\cos^3 x - 3 \sin x \cos x - \cos x} \cos x \, e^{\sin x} + e^{\sin x} \paren {-3 \cos^2 x \sin x - 3 \paren {-\sin^2 x + \cos^2 x} + \sin x}\)




















\(\ds \)

\(=\)







\(\ds \paren {\cos^4 x - 3 \sin x \cos^2 x - \cos^2 x - 3 \cos^2 x \sin x + 3 \sin^2 x - 3 \cos^2 x + \sin x} e^{\sin x}\)




















\(\ds \)

\(=\)







\(\ds \paren {\cos^4 x - 6 \cos^2 x \sin x - 4 \cos^2 x + 3 \sin^2 x + \sin x} e^{\sin x}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d^5} {\d x^5} \map f x\)

\(=\)







\(\ds \paren {\cos^4 x - 6 \cos^2 x \sin x - 4 \cos^2 x + 3 \sin^2 x + \sin x} \frac \d {\d x} e^{\sin x}\)





Product Rule for Derivatives














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds e^{\sin x} \frac \d {\d x} \paren {\cos^4 x - 6 \cos^2 x \sin x - 4 \cos^2 x + 3 \sin^2 x + \sin x}\)




















\(\ds \)

\(=\)







\(\ds \paren {\cos^4 x - 6 \cos^2 x \sin x - 4 \cos^2 x + 3 \sin^2 x + \sin x} \cos x \, e^{\sin x}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds e^{\sin x} \paren {-4 \cos^3 x \sin x - 6 \paren {-2 \cos x \sin^2 x + \cos^3 x} + 8 \cos x \sin x + 6 \cos x \sin x + \cos x}\)




















\(\ds \)

\(=\)







\(\ds \paren {\cos^5 x - 10 \cos^3 x \sin x - 10 \cos^3 x + 15 \cos x \sin^2 x + 15 \cos x \sin x + \cos x} e^{\sin x}\)










By definition of Taylor series:

$\ds \map f x \sim \sum_{n \mathop = 0}^\infty \frac {\paren {x - \xi}^n} {n!} \map {f^{\paren n} } \xi$

and so expanding about $\xi = 0$:















\(\ds e^{\sin x}\)

\(=\)







\(\ds \frac {x^0} {0!} e^{\sin 0} + \frac {x^1} {1!} \cos 0 \, e^{\sin 0} + \frac {x^2} {2!} \paren {\cos^2 0 - \sin 0} e^{\sin 0}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {x^3} {3!} \paren {\cos^3 0 - 3 \sin 0 \cos 0 - \cos 0} e^{\sin 0} + \frac {x^4} {4!} \paren {\cos^4 0 - 6 \cos^2 0 \sin 0 - 4 \cos^2 0 + 3 \sin^2 0 + \sin 0} e^{\sin 0}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {x^5} {5!} \paren {\cos^5 0 - 10 \cos^3 0 \sin 0 - 10 \cos^3 0 + 15 \cos 0 \sin^2 0 + 15 \cos 0 \sin 0 + \cos 0} e^{\sin 0} + \cdots\)




















\(\ds \)

\(=\)







\(\ds 1 + x + \frac {x^2} 2 + \frac {x^3} 6 \paren {1 - 0 - 1} + \frac {x^4} {24} \paren {1 - 0 - 4} + \frac {x^5} {120} \paren {1 - 0 - 10 + 1} + \cdots\)





Sine of Zero is Zero, Exponential of Zero, Cosine of Zero is One














\(\ds \)

\(=\)







\(\ds 1 + x + \frac {x^2} 2 - \frac {x^4} 8 - \frac {x^5} {15} + \cdots\)










No pattern is immediately apparent.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Miscellaneous Series: $20.43$




