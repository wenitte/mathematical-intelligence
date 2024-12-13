# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Exponential_of_Cosine_of_x



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


Proof 1
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


Proof 2
A result in combinatorics known as the Exponential formula states that if 

$\ds \map f x = \sum_{n \mathop = 1}^\infty \frac {c_n} {n!} x^n $
then:

$\ds e^{\map f x} = \sum_{k \mathop = 0}^\infty \frac {\map {B_k} {c_1, c_2, \ldots, c_k} } {k!} x^k$
where $\map {B_k} {c_1, c_2, \ldots, c_k}$ is the $k$th complete Bell Polynomial.
From the Power Series Expansion for Cosine Function, we get:

$\ds \cos x - 1 = \sum_{p \mathop = 1}^\infty \frac {\paren {-1}^p} {2 p!} x^{2 p}$
Using this we may plug the sequence $\tuple {0, -1, 0, 1, 0, -1}$ into the first $6$ complete Bell Polynomials.
An arbitrary even Complete Bell Polynomial, will take the form:

$\ds \map {B_n} {x_1, x_2, x_3, \ldots, x_n} = \sum \frac {n!} {k_1! k_2! \dotsm k_n!} \paren {\frac {x_1} {1!} }^{c_1} \paren {\frac {x_2} {2!} }^{c_2} \dotsm \paren {\frac {x_n} {n!} }^{c_n}$
where the sum is taken over all n-tuples $\tuple {c_1, \ldots, c_n}$ such that $c_1 + 2 c_2 + \dotsb + n c_n = n$
In other words, it is taken over every integer partition of $n$.
Here we have it that

$x_{4 n + 0} = 1$
$x_{4 n + 1} = 0$
$x_{4 n + 2} = -1$
$x_{4 n + 3} = 0$
Because there is no way to form a partition of an odd number without using an odd number, all the summands in the odd Complete Bell polynomials contain a $0$, thus they equal $0$.
Explicitly calculating the first $6$ even complete Bell Polynomials we get:

$\map {B_0} 0 = 1$
$\map {B_2} {0, -1} = 0^2 - 1 = -1$
$\map {B_4} {0, -1, 0, 1} = 0^4 + 6 \paren 0^2 \paren {-1} + 4 \paren 0 \paren 0 + 3 \paren {-1}^2 + 1 = 4$
$\map {B_6} {0, -1, 0, 1, 0, -1} = 0^6 + 6 \paren {-1} \paren 0 + 15 \paren {-1} (1) + 10 \paren 0^2 + 15 \paren 0^2 (1) + 15 \paren {-1}^3 + 60 \paren 0 \paren {-1} \paren 0 + 20 \paren 0^3 \paren 0 + 45 \paren 0^2 \paren {-1}^2 + 15 \paren 0^4 \paren {-1} + \paren {-1} = -31$
Note that in all the summands for the above polynomials, they are either $0$ or of the same sign.
This is provable to always be the case, as if $n \equiv 2 \pmod 4$, then an odd number of integers congruent to $2 \pmod 4$ must be chosen for every partition.
Thus all summands will be a negative.
A similar argument holds for the case $n \equiv 0 \pmod 4$.
Thus for our given values of $x_k$, we are only summing over the partitions of $2 m$ such that all summands in the partition are even, and because all the summands in the polynomial are the same sign we have:

$\map {B_{2 m} } {0, -1, 0, \ldots, \pm 1} = \paren {-1}^m \map {B_{2 m} } {0, 1, 0, 1, \ldots, 1}$
Thus from the definition of Bell Polynomials as a sum over all incomplete Bell polynomials we have:

$\map {B_{2 m} } {0, -1, 0, \ldots , \pm x_{2 m} } = \paren {-1}^m \map {P_2} {2 m}$
where $\map {P_2} {2 m}$ is all partitions of a set of size $2 m$ into even blocks.
Thus we have:

$\ds e^{\cos x} = e \paren {e^{\cos x - 1} } = e \paren {\sum_{n \mathop = 0}^\infty \frac {\paren {-1}^m P_2 \paren {2 m} } {2m!} x^{2 m} }$
where $P_2 \paren {2 m}$ is the partition of the set of size $2 m$ into even blocks.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Miscellaneous Series: $20.44$




