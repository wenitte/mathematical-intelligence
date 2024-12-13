# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Exponential_of_Cosine_of_x/Proof_1

Theorem













\(\ds e^{\cos x}\)

\(=\)







\(\ds e \paren {e^{\cos x - 1} }\)




















\(\ds \)

\(=\)







\(\ds e \paren {\sum_{n \mathop = 0}^\infty \frac {\paren {-1}^m \map {P_2} {2 m} } {2 m!} x^{2 m} }\)





where $\map {P_2} {2 m}$ is the partition of the set of size $2 m$ into even blocks














\(\ds \)

\(=\)







\(\ds e \paren {1 - \dfrac {x^2} 2 + \dfrac {x^4} 6 - \dfrac {31 x^6} {720} + \cdots}\)









for all $x \in \R$.


Proof
Let $\map f x = e^{\cos x}$.
Then:














\(\ds \frac \d {\d x} \map f x\)

\(=\)







\(\ds -\sin x \, e^{\cos x}\)





Chain Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \frac {\d^2} {\d x^2} \map f x\)

\(=\)







\(\ds -\sin x \frac \d {\d x} e^{\cos x} + e^{\cos x} \map {\frac \d {\d x} } {-\sin x}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \sin^2 x \, e^{\cos x} - \cos x \, e^{\cos x}\)




















\(\ds \)

\(=\)







\(\ds \paren {\sin^2 x - \cos x} e^{\cos x}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d^3} {\d x^3} \map f x\)

\(=\)







\(\ds \paren {\sin^2 x - \cos x} \frac \d {\d x} e^{\cos x} + e^{\cos x} \map {\frac \d {\d x} } {\sin^2 x - \cos x}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \paren {\sin^2 x - \cos x} \paren {-\sin x} e^{\cos x} + e^{\cos x} \paren {2 \cos x \sin x + \sin x}\)




















\(\ds \)

\(=\)







\(\ds \paren {-\sin^3 x + 3 \cos x \sin x + \sin x} e^{\cos x}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d^4} {\d x^4} \map f x\)

\(=\)







\(\ds \paren {-\sin^3 x + 3 x \cos x \sin + \sin x} \frac \d {\d x} e^{\cos x} + e^{\cos x} \map {\frac \d {\d x} } {-\sin^3 x + 3 \cos x \sin x + \sin x}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \paren {-\sin^3 x + 3 \cos x \sin x + \sin x} \paren {-\sin x} \, e^{\cos x} + e^{\cos x} \paren {-3 \cos x \sin^2 x + 3 \paren {\cos^2 x - \sin^2 x} + \cos x}\)




















\(\ds \)

\(=\)







\(\ds \paren {\sin^4 x - 3 \cos x \sin^2 x - \sin^2 x - 3 \cos x \sin^2 x + 3 \paren {\cos^2 x - \sin^2 x} + \cos x} e^{\cos x}\)




















\(\ds \)

\(=\)







\(\ds \paren {\sin^4 x - 6 \cos x \sin^2 x + 3 \cos^2 x - 4 \sin^2 x + \cos x} e^{\cos x}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d^5} {\d x^5} \map f x\)

\(=\)







\(\ds \paren {\sin^4 x - 6 \cos x \sin^2 x + 3 \cos^2 x - 4 \sin^2 x + \cos x} \frac \d {\d x} e^{\cos x}\)





Product Rule for Derivatives














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds e^{\cos x} \, \map {\frac \d {\d x} } {\sin^4 x - 6 \cos x \sin^2 x + 3 \cos^2 x - 4 \sin^2 x + \cos x}\)




















\(\ds \)

\(=\)







\(\ds \paren {\sin^4 x - 6 \cos x \sin^2 x + 3 \cos^2 x - 4 \sin^2 x + \cos x} \paren {-\sin x} \, e^{\cos x}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds e^{\cos x} \paren {4 \cos x \sin^3 x - 6 \paren {2 \cos^2 x \sin x - \sin^3 x} - 6 \cos x \sin x - 8 \cos x \sin x - \sin x}\)




















\(\ds \)

\(=\)







\(\ds \paren {-\sin^5 x + 10 \cos x \sin^3 x - 15 \cos^2 x \sin x + 6 \sin^3 x - 15 \cos x \sin x - \sin x} e^{\cos x}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d^6} {\d x^6} \map f x\)

\(=\)







\(\ds \paren {-\sin^5 x + 10 \cos x \sin^3 x - 15 \cos^2 x \sin x + 6 \sin^3 x - 15 \cos x \sin x - \sin x} \frac \d {\d x} e^{\cos x}\)





Product Rule for Derivatives














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds e^{\cos x} \map {\frac \d {\d x} } {-\sin^5 x + 10 \cos x \sin^3 x - 15 \cos^2 x \sin x + 6 \sin^3 x - 15 \cos x \sin x - \sin x}\)




















\(\ds \)

\(=\)







\(\ds \paren {-\sin^5 x + 10 \cos x \sin^3 x - 15 \cos^2 x \sin x + 6 \sin^3 x - 15 \cos x \sin x - \sin x} \paren {-\sin x} \, e^{\cos x}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds e^{\cos x} \paren {-5 \cos x \sin^4 x + 10 \paren {3 \cos^2 x \sin^2 x - \sin^4 x} - 15 \paren {\cos^3 x - 2 \cos x \sin^2 x} - 15 \paren {\cos^2 x - \sin^2 x} - \cos x}\)




















\(\ds \)

\(=\)







\(\ds \paren {\sin^6 x - 15 \cos x \sin^4 x + 45 \cos^2 x \sin^2 x - 16 \sin^4 x - 15 \cos^3 x + 45 \cos x \sin^2 x - 15 \cos^2 x + 16 \sin^2 x - \cos x} \, e^{\cos x}\)










By definition of Taylor series:

$\map f x \sim \ds \sum_{n \mathop = 0}^\infty \frac {\paren {x - \xi}^n} {n!} \map {f^{\paren n} } \xi$

and so expanding about $\xi = 0$:














\(\ds e^{\cos x}\)

\(=\)







\(\ds \frac {x^0} {0!} e^{\cos 0} + \frac {x^1} {1!} \paren {-\sin 0} \, e^{\cos 0} + \frac {x^2} {2!} \paren {\sin^2 0 - \cos 0} e^{\cos 0}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {x^3} {3!} \paren {-\sin^3 0 + 3 \cos 0 \sin 0 + \sin 0} e^{\cos 0} + \frac {x^4} {4!} \paren {\sin^4 0 - 6 \cos 0 \sin^2 0 + 3 \cos^2 0 - 4 \sin^2 0 + \cos 0} e^{\cos 0}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {x^5} {5!} \paren {-\sin^5 0 + 10 \cos 0 \sin^3 0 - 15 \cos^2 0 \sin 0 + 6 \sin^3 0 - 15 \cos 0 \sin 0 - \sin 0} e^{\cos 0} + \cdots\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {x^6} {6!} \paren {\sin^6 0 - 15 \cos 0 \sin^4 0 + 45 \cos^2 0 \sin^2 0 - 16 \sin^4 0 - 15 \cos^3 0 + 45 \cos 0 \sin^2 0 - 15 \cos^2 0 + 16 \sin^2 0 - \cos 0} e^{\cos 0} + \cdots\)




















\(\ds \)

\(=\)







\(\ds e \paren {1 + 0 \times x - \frac {x^2} 2 + \frac {x^3} 6 \paren {-0 + 0 + 0} + \frac {x^4} {24} \paren {0 - 0 + 3 - 0 + 1} + \frac {x^5} {120} \paren {-0 + 0 - 0 + 0 - 0 - 0} + \frac {x^6} {720} \paren {0 - 0 + 0 - 0 - 15 + 0 - 15 + 0 - 1} + \cdots}\)





Sine of Zero is Zero, Exponential of Zero, Cosine of Zero is One














\(\ds \)

\(=\)







\(\ds e \paren {1 + \frac {x^2} 2 - \frac {x^4} 6 - \frac {31 x^6} {720} + \cdots}\)









$\blacksquare$





