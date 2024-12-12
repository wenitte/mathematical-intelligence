# 

Source: https://proofwiki.org/wiki/Continued_Fraction_Expansion_of_Euler%27s_Number



Theorem
The constant Euler's number $e$ has the continued fraction expansion:














\(\ds e\)

\(=\)







\(\ds \sqbrk {2; 1, 2, 1, 1, 4, 1, 1, 6, 1, 1, \ldots }\)




















\(\ds \)

\(=\)







\(\ds \sqbrk {1, 0, 1, 1, 2, 1, 1, 4, 1, 1, 6, 1, 1, \ldots }\)










This sequence is A003417 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Convergents
The convergents of the continued fraction expansion to Euler's number $e$ are:

$2, 3, \dfrac 8 3, \dfrac {11} 4, \dfrac {19} 7, \dfrac {87} {32}, \dfrac {106} {39}, \dfrac {193} {71}, \dfrac {1264} {465}, \dfrac {1457} {536}, \dfrac {2721} {1001}, \ldots$
The numerators form sequence A007676 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
The denominators form sequence A007677 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).

These best rational approximations are accurate to $0, 0, 1, 1, 2, 3, 3, 4, 5, 5, \ldots$ decimals.
This sequence is A114539 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).

The fraction $\dfrac {878} {323}$ is exceptionally easy to remember:

$\dfrac {878} {323} = 2 \cdotp 71826 \, 625 \ldots$
although this does not occur in the above continued fraction expansion.


Proof 1
From the recursive definition of continued fractions, we have:














\(\ds p_i\)

\(=\)







\(\ds a_i p_{i - 1} + p_{i - 2}\)




















\(\ds q_i\)

\(=\)







\(\ds a_i q_{i - 1} + q_{i - 2}\)










Let:














\(\ds \sqbrk {a_0, a_1, a_2, a_3, a_4, a_5, a_6, a_7, a_8, a_9, \ldots}\)

\(=\)







\(\ds \sqbrk {1, 0, 1, 1, 2, 1, 1, 4, 1, 1, \ldots}\)









In other words:

$a_{3 n + 1} = 2 n$
and:

$a_{3 n + 0} = a_{3 n + 2} = 1$

Then $p_i$ and $q_i$ are as follows:

$\begin{array}{r|cccccccccc}
\ds i &  0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9  \\
\hline
p_i & 1 & 1 & 2 & 3 & 8 & 11 & 19 & 87 & 106 & 193 \\
q_i & 1 & 0 & 1 & 1 & 3 & 4 & 7 & 32 & 39 & 71 \\
\hline
\end{array}$

Furthermore, $p_i$ and $q_i$ satisfy the following $6$ recurrence relations:




\(\text {(1)}: \quad\)









\(\ds p_{3 n + 0}\)

\(=\)

\(\, \ds \paren {a_{3 n + 0} } p_{3 n - 1} + p_{3 n - 2} \, \)

\(\, \ds = \, \)



\(\ds p_{3 n - 1} + p_{3 n - 2}\)










\(\text {(2)}: \quad\)









\(\ds p_{3 n + 1}\)

\(=\)

\(\, \ds \paren {a_{3 n + 1} } p_{3 n + 0} + p_{3 n - 1} \, \)

\(\, \ds = \, \)



\(\ds 2 n p_{3 n + 0} + p_{3 n - 1}\)










\(\text {(3)}: \quad\)









\(\ds p_{3 n + 2}\)

\(=\)

\(\, \ds \paren {a_{3 n + 2} } p_{3 n + 1} + p_{3 n + 0} \, \)

\(\, \ds = \, \)



\(\ds p_{3 n + 1} + p_{3 n + 0}\)










\(\text {(4)}: \quad\)









\(\ds q_{3 n + 0}\)

\(=\)

\(\, \ds \paren {a_{3 n + 0} } q_{3 n - 1} + q_{3 n - 2} \, \)

\(\, \ds = \, \)



\(\ds q_{3 n - 1} + q_{3 n - 2},\)










\(\text {(5)}: \quad\)









\(\ds q_{3 n + 1}\)

\(=\)

\(\, \ds \paren {a_{3 n + 1} } q_{3 n + 0} + q_{3 n - 1} \, \)

\(\, \ds = \, \)



\(\ds 2 n q_{3 n + 0} + q_{3 n - 1},\)










\(\text {(6)}: \quad\)









\(\ds q_{3 n + 2}\)

\(=\)

\(\, \ds \paren {a_{3 n + 2} } q_{3 n + 1} + q_{3 n + 0} \, \)

\(\, \ds = \, \)



\(\ds q_{3 n + 1} + q_{3 n + 0},\)










Our ultimate aim is to prove that:

$\ds \lim_{n \mathop \to \infty} \frac {p_n} {q_n} = e$

In the pursuit of that aim, let us define the integrals:














\(\ds A_n\)

\(=\)







\(\ds \int_0^1 \frac {x^n \paren {x - 1}^n} {n!} e^x \rd x\)




















\(\ds B_n\)

\(=\)







\(\ds \int_0^1 \frac {x^{n + 1} \paren {x - 1}^n} {n!} e^x \rd x\)




















\(\ds C_n\)

\(=\)







\(\ds \int_0^1 \frac {x^n \paren {x - 1}^{n + 1} } {n!} e^x \rd x\)











Lemma
For $n \in \Z , n \ge 0$:













\(\ds A_n\)

\(=\)







\(\ds q_{3 n} e - p_{3 n}\)




















\(\ds B_n\)

\(=\)







\(\ds p_{3 n + 1} - q_{3 n + 1} e\)




















\(\ds C_n\)

\(=\)







\(\ds p_{3 n + 2} - q_{3 n + 2} e\)









$\Box$

We assert that $A_n$, $B_n$ and $C_n$ all converge to $0$ as $n \to \infty$:














\(\ds \lim_{n \mathop \to \infty} A_n\)

\(=\)







\(\ds \frac {\frac {x^{n + 1} \paren {x - 1}^{n + 1} } {\paren {n + 1}!} e^x} {\frac {x^n \paren {x - 1}^n } {n!} e^x}\)





Radius of Convergence from Limit of Sequence: Real Case














\(\ds \)

\(=\)







\(\ds \frac {x \paren {x - 1} } {\paren {n + 1} }\)




















\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \lim_{n \mathop \to \infty} B_n\)

\(=\)







\(\ds \frac {\frac {x^{n + 2} \paren {x - 1}^{n + 1} } {\paren {n + 1}!} e^x} {\frac {x^{n + 1} \paren {x - 1}^n} {n!} e^x}\)





Radius of Convergence from Limit of Sequence/Real Case














\(\ds \)

\(=\)







\(\ds \frac {x \paren {x - 1} } {\paren {n + 1} }\)




















\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \lim_{n \mathop \to \infty} C_n\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} B_n - \lim_{n \mathop \to \infty} A_n\)




















\(\ds \)

\(=\)







\(\ds 0\)










We now have:














\(\ds \lim_{n \mathop \to \infty} A_n\)

\(=\)

\(\, \ds \lim_{n \mathop \to \infty} \paren {q_{3 n} e - p_{3 n} } \, \)

\(\, \ds = \, \)



\(\ds 0\)




















\(\ds \lim_{n \mathop \to \infty} B_n\)

\(=\)

\(\, \ds \lim_{n \mathop \to \infty} \paren {p_{3 n + 1} - q_{3 n + 1} e} \, \)

\(\, \ds = \, \)



\(\ds 0\)




















\(\ds \lim_{n \mathop \to \infty} C_n\)

\(=\)

\(\, \ds \lim_{n \mathop \to \infty} \paren {p_{3 n + 2} - q_{3 n + 2} e} \, \)

\(\, \ds = \, \)



\(\ds 0\)









from which we conclude:














\(\ds \lim_{n \mathop \to \infty} \paren {p_n - q_n e}\)

\(=\)







\(\ds 0\)




















\(\ds \lim_{n \mathop \to \infty} p_n\)

\(=\)







\(\ds q_n e\)




















\(\ds \lim_{n \mathop \to \infty} \frac {p_n} {q_n}\)

\(=\)







\(\ds e\)









$\blacksquare$


Historical Note
Leonhard Euler analyzed the Ricatti equation to prove that the number e has the continued fraction shown here.
Later, while proving the transcendence of e, Charles Hermite also proved this continued fraction.



Sources
Weisstein, Eric W. "e Continued Fraction." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/eContinuedFraction.html




