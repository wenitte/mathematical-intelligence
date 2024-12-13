# 

Source: https://proofwiki.org/wiki/Hurwitz%27s_Theorem_(Number_Theory)/Lemma_1



Lemma
Let $\xi$ be an irrational number.
Let $A \in \R$ be a real number strictly greater than $\sqrt 5$.
Then there may exist at most a finite number of relatively prime integers $p, q \in \Z$ such that:

$\size {\xi - \dfrac p q} < \dfrac 1 {A \, q^2}$


Proof
We will take as our example of such an irrational number:

$\xi = \dfrac {\sqrt 5 - 1} 2$
This is equal to $\phi - 1$, where $\phi$ is the Golden mean.
Aiming for a contradiction, suppose that there exist an infinite number of $p, q$ with $p \perp q$ such that:

$\size {\xi - \dfrac p q} < \dfrac 1 {A \, q^2}$
Then there exist an infinite number of $p, q$ with $p \perp q$ such that:

$\xi = \dfrac p q + \dfrac \delta {q^2}$
where:

$A > \sqrt 5$
Therefore:

$\dfrac 1 A < \dfrac 1 {\sqrt 5}$
and:

$0 < \size \delta < \dfrac 1 A < \dfrac 1 {\sqrt 5}$
Hence:














\(\ds \dfrac \delta {q^2}\)

\(=\)







\(\ds \xi - \dfrac p q\)




















\(\ds \dfrac \delta q\)

\(=\)







\(\ds q \xi - p\)





multiplying through by $q$














\(\ds \dfrac \delta q\)

\(=\)







\(\ds q \paren{\dfrac {\sqrt 5 - 1} 2 } - p\)





substituting $\xi = \dfrac {\sqrt 5 - 1} 2$








\(\ds \leadsto \ \ \)





\(\ds \dfrac \delta q - \dfrac {q \sqrt 5} 2\)

\(=\)







\(\ds -\dfrac q 2 - p\)














\(\ds \leadsto \ \ \)





\(\ds \paren{\dfrac \delta q - \dfrac {q \sqrt 5} 2 }^2\)

\(=\)







\(\ds \paren {-\dfrac q 2 - p}^2\)





squaring both sides








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\delta^2} {q^2} - \delta \sqrt 5 + \dfrac {5 q^2} 4\)

\(=\)







\(\ds \dfrac {q^2} 4 + pq + p^2\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac {\delta^2} {q^2} - \delta \sqrt 5\)

\(=\)







\(\ds p^2 + p q - q^2\)









Over the interval ${-\dfrac 1 {\sqrt 5} } < \delta < \dfrac 1 {\sqrt 5}$, the left hand side of $(1)$ takes on values:

$\dfrac 1 {5 q^2} - 1 < \dfrac {\delta^2} {q^2} - \delta \sqrt 5 < \dfrac 1 {5 q^2} + 1$

At the same time, the right hand side of $(1)$ is always an integer.
Thus, for the equality to hold infinitely many times, it must hold at zero:














\(\ds p^2  + p q - q^2\)

\(=\)







\(\ds 0\)




















\(\ds 4p^2  + 4p q - 4q^2\)

\(=\)







\(\ds 0\)





multiplying through by $4$














\(\ds 4p^2  + 4p q\)

\(=\)







\(\ds 4q^2\)




















\(\ds 4p^2  + 4p q + q^2\)

\(=\)







\(\ds 4q^2 + q^2\)





adding $q^2$ to both sides - Completing the Square














\(\ds \paren {2 p + q}^2\)

\(=\)







\(\ds 5 q^2\)




















\(\ds \paren {2 p + q}\)

\(=\)







\(\ds \pm \sqrt 5 q\)





taking square roots of both sides














\(\ds \paren {2 \dfrac p q + 1}\)

\(=\)







\(\ds \pm \sqrt 5\)





dividing through by $q$














\(\ds \dfrac p q\)

\(=\)







\(\ds \dfrac {-1 \pm \sqrt 5} 2\)





isolating the rational number $\dfrac p q$



Hence $\dfrac {-1 \pm \sqrt 5} 2$, is a rational number.
Hence $\sqrt 5$ is also rational.
But by Square Root of Prime is Irrational, $\sqrt 5$ is irrational.
This is a contradiction.
Hence by Proof by Contradiction there cannot be an infinite number of such $p, q$.
Hence the result.
$\blacksquare$


Source of Name
This entry was named for Adolf Hurwitz.


Sources
1979: G.H. Hardy and E.M. Wright: An Introduction to the Theory of Numbers (5th ed.): $11.8$: The measure of the closest approximation to an arbitrary irrational: Theorem $194$




