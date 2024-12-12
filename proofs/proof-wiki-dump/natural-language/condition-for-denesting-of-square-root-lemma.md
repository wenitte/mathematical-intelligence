# 

Source: https://proofwiki.org/wiki/Condition_for_Denesting_of_Square_Root/Lemma

Theorem
Let $a, b, c, d \in \Q_{\ge 0}$.
Suppose $\sqrt b \notin \Q$.
Then:

$\sqrt {a + \sqrt b} = \sqrt {c + \sqrt d} \implies a = c, b = d$


Proof













\(\ds \sqrt {a + \sqrt b}\)

\(=\)







\(\ds \sqrt {c + \sqrt d}\)














\(\ds \leadsto \ \ \)





\(\ds a + \sqrt b\)

\(=\)







\(\ds c + \sqrt d\)














\(\ds \leadsto \ \ \)





\(\ds a - c\)

\(=\)







\(\ds \sqrt d - \sqrt b\)














\(\ds \leadsto \ \ \)





\(\ds \sqrt d - \sqrt b\)

\(\in\)







\(\ds \Q\)





Rational Subtraction is Closed




Aiming for a contradiction, suppose $b \ne d$.
Then:














\(\ds \sqrt d - \sqrt b\)

\(\ne\)







\(\ds 0\)




















\(\ds d - b\)

\(=\)







\(\ds \paren {\sqrt d - \sqrt b} \paren {\sqrt d + \sqrt b}\)





Difference of Two Squares








\(\ds \leadsto \ \ \)





\(\ds \sqrt d + \sqrt b\)

\(=\)







\(\ds \dfrac {d - b} {\sqrt d - \sqrt b} \in \Q\)





Rational Division is Closed








\(\ds \leadsto \ \ \)





\(\ds 2 \sqrt b\)

\(=\)







\(\ds \paren {\sqrt d + \sqrt b} - \paren {\sqrt d - \sqrt b} \in \Q\)





Rational Subtraction is Closed








\(\ds \leadsto \ \ \)





\(\ds \sqrt b\)

\(\in\)







\(\ds \Q\)





Rational Division is Closed



But this contradicts our assertion that $\sqrt b \notin \Q$.
Hence our supposition that $b \ne d$ must be false.
Therefore we must have $b = d$. 

Consequently:

$a - c = \sqrt d - \sqrt b = 0$
This implies $a = c$.
$\blacksquare$





