# 

Source: https://proofwiki.org/wiki/Condition_for_Denesting_of_Square_Root



Theorem
Let $a, b \in \Q_{\ge 0}$.
Suppose $\sqrt b \notin \Q$.

Then:

$\exists p, q \in \Q: \sqrt {a + \sqrt b} = \sqrt p + \sqrt q$
if and only if:

$\exists n \in \Q: a^2 - b = n^2$.


Proof
Lemma
Let $a, b, c, d \in \Q_{\ge 0}$.
Suppose $\sqrt b \notin \Q$.
Then:

$\sqrt {a + \sqrt b} = \sqrt {c + \sqrt d} \implies a = c, b = d$
$\Box$


Necessary condition













\(\ds \sqrt {a + \sqrt b}\)

\(=\)







\(\ds \sqrt p + \sqrt q\)




















\(\ds \)

\(=\)







\(\ds \sqrt {p + q + \sqrt {4 p q} }\)





Sum of Square Roots as Square Root of Sum








\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds p + q\)





by Lemma














\(\ds b\)

\(=\)







\(\ds 4 p q\)





by Lemma








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds b - 4 p q\)




















\(\ds \)

\(=\)







\(\ds b - 4 p \paren {a - p}\)




















\(\ds \)

\(=\)







\(\ds b - 4 a p + 4 p^2\)














\(\ds \leadsto \ \ \)





\(\ds p\)

\(=\)







\(\ds \frac {4 a \pm \sqrt {16 a^2 - 16 b} } 8\)





Quadratic Formula














\(\ds \)

\(=\)







\(\ds \frac a 2 \pm \frac {\sqrt {a^2 - b} } 2\)









This shows that, in order for $p \in \Q$, we must have $\sqrt {a^2 - b} \in \Q$ as well.
The result follows from $\paren {\sqrt {a^2 - b} }^2 = a^2 - b$.
$\Box$


Sufficient condition
Let $n^2 = a^2 - b$.
As $a^2 = b + n^2$ it follows that:

$a \ge \sqrt b$
Then:














\(\ds \sqrt {a + \sqrt b}\)

\(=\)







\(\ds \sqrt {\dfrac a 2 + \dfrac {\sqrt {a^2 - b} } 2} + \sqrt {\dfrac a 2 - \dfrac {\sqrt {a^2 - b} } 2}\)





Square Root of Sum as Sum of Square Roots














\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac a 2 + \dfrac {\sqrt {n^2} } 2} + \sqrt {\dfrac a 2 - \dfrac {\sqrt {n^2} } 2}\)





substituting $n^2 = a^2 - b$














\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac a 2 + \dfrac n 2} + \sqrt {\dfrac a 2 - \dfrac n 2}\)









By Rational Addition is Closed and Rational Subtraction is Closed:

$\dfrac a 2 + \dfrac n 2$ and $\dfrac a 2 - \dfrac n 2$
are rational.
$\blacksquare$





