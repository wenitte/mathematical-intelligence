# 

Source: https://proofwiki.org/wiki/Product_of_Sines_of_Fractions_of_Pi



Theorem
Let $m \in \Z$ such that $m > 1$.

Then:

$\ds \prod_{k \mathop = 1}^{m - 1} \sin \frac {k \pi} m = \frac m {2^{m - 1} }$


Proof
Consider the equation:

$z^m - 1 = 0$
whose solutions are the complex roots of unity:

$1, e^{2 \pi i / m}, e^{4 \pi i / m}, e^{6 \pi i / m}, \ldots, e^{2 \paren {m - 1} \pi i / m}$

Then:














\(\ds z^m - 1\)

\(=\)







\(\ds \paren {z - 1} \paren {z - e^{2 \pi i / m} } \paren {z - e^{4 \pi i / m} } \dotsm \paren {z - e^{2 \paren {m - 1} \pi i / m} }\)





product of all the roots








\(\ds \leadsto \ \ \)





\(\ds \frac {z^m - 1} {z - 1}\)

\(=\)







\(\ds \prod_{k \mathop = 1}^{m - 1} \paren {z - e^{2 k \pi i / m} }\)





dividing by $z - 1$








\(\ds \leadsto \ \ \)





\(\ds 1 + z + \dotsb + z^{m-1}\)

\(=\)







\(\ds \prod_{k \mathop = 1}^{m - 1} \paren {z - e^{2 k \pi i / m} }\)





Sum of Geometric Sequence




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds \prod_{k \mathop = 1}^{m - 1} \paren {1 - e^{2 k \pi i / m} }\)





setting $z = 1$




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds \prod_{k \mathop = 1}^{m - 1} \paren {1 - e^{-2 k \pi i / m} }\)





taking complex conjugate of both sides








\(\ds \leadsto \ \ \)





\(\ds m^2\)

\(=\)







\(\ds \prod_{k \mathop = 1}^{m - 1} \paren {\paren {1 - e^{2 k \pi i / m} } \paren {1 - e^{-2 k \pi i / m} } }\)





multiplying $(1)$ by $(2)$








\(\ds \leadsto \ \ \)





\(\ds m^2\)

\(=\)







\(\ds \prod_{k \mathop = 1}^{m - 1} \paren {1 - e^{2 k \pi i / m} - e^{-2 k \pi i / m} + 1}\)





multiplying out








\(\ds \leadsto \ \ \)





\(\ds m^2\)

\(=\)







\(\ds \prod_{k \mathop = 1}^{m - 1} \paren {2 - 2 \frac {e^{2 k \pi i / m} + e^{-2 k \pi i / m} } 2}\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds m^2\)

\(=\)







\(\ds \prod_{k \mathop = 1}^{m-1} \paren {2 - 2 \cos \frac {2 k \pi} m}\)





Euler's Cosine Identity








\(\ds \leadsto \ \ \)





\(\ds m^2\)

\(=\)







\(\ds 2^{m - 1} \prod_{k \mathop = 1}^{m - 1} \paren {1 - \cos \frac {2 k \pi} m}\)





factoring out $m - 1$ instances of $2$








\(\ds \leadsto \ \ \)





\(\ds m^2\)

\(=\)







\(\ds 2^{m - 1} \prod_{k \mathop = 1}^{m - 1} \paren {2 \sin^2 \frac {k \pi} m}\)





Double Angle Formula for Cosine: Corollary $2$








\(\ds \leadsto \ \ \)





\(\ds \frac {m^2} {2^{2 m - 2} }\)

\(=\)







\(\ds \prod_{k \mathop = 1}^{m - 1} \paren {\sin^2 \frac {k \pi} m}\)





factoring out another $m - 1$ instances of $2$








\(\ds \leadsto \ \ \)





\(\ds \frac m {2^{m - 1} }\)

\(=\)







\(\ds \prod_{k \mathop = 1}^{m - 1} \paren {\sin \frac {k \pi} m}\)





taking square root of both sides



$\blacksquare$


Also presented as
Some sources prefer to report this result as:

$\ds \prod_{k \mathop = 1}^{m - 1} \sin \frac {k \pi} m = \frac {2 m} {2^m}$
on the grounds that it may be easier to remember.


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Solved Problems: Miscellaneous Problems: $52$




