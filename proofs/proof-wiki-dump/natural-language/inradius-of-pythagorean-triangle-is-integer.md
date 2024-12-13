# 

Source: https://proofwiki.org/wiki/Inradius_of_Pythagorean_Triangle_is_Integer

Theorem
Let $\triangle ABC$ be a Pythagorean triangle.
Let $r$ be the inradius of $\triangle ABC$.

Then $r$ is an integer.


Proof 1
Let $\triangle ABC$ be such that $\angle C$ is a right angle.
Let:

$A$ be opposite the side $a$
$B$ be opposite the side $b$
$C$ be opposite the side $c$


From Solutions of Pythagorean Equation, we have that:

$c = m^2 + n^2$
for some $m, n \in \Z_{>0}$, and that the other sides are $m^2 - n^2$ and $2 m n$
Without loss of generality, let the sides $a$ and $b$ be such that:














\(\ds a\)

\(=\)







\(\ds m^2 - n^2\)




















\(\ds b\)

\(=\)







\(\ds 2 m n\)










Hence:














\(\ds c\)

\(=\)







\(\ds \paren {a - r} + \paren {b - r}\)




















\(\ds \)

\(=\)







\(\ds a + b - 2 r\)














\(\ds \leadsto \ \ \)





\(\ds r\)

\(=\)







\(\ds \dfrac {a + b - c} 2\)














\(\ds \leadsto \ \ \)





\(\ds r\)

\(=\)







\(\ds \dfrac {m^2 - n^2 + 2 m n - \paren {m^2 + n^2} } 2\)














\(\ds \leadsto \ \ \)





\(\ds r\)

\(=\)







\(\ds \dfrac {2 m n - 2 n^2} 2\)














\(\ds \leadsto \ \ \)





\(\ds r\)

\(=\)







\(\ds n \paren {m - n}\)










As $m$ and $n$ are both integers, it follows that $r$ is also an integer.
$\blacksquare$


Proof 2
Let $\triangle ABC$ be such that $\angle C$ is a right angle.
Let:

$A$ be opposite the side $a$
$B$ be opposite the side $b$
$C$ be opposite the side $c$


Let $I$ denote the incenter of $\triangle ABC$.

From Solutions of Pythagorean Equation, we have that:

$c = m^2 + n^2$
for some $m, n \in \Z_{>0}$, and that the other sides are $m^2 - n^2$ and $2 m n$
Without loss of generality, let the sides $a$ and $b$ be such that:














\(\ds a\)

\(=\)







\(\ds m^2 - n^2\)




















\(\ds b\)

\(=\)







\(\ds 2 m n\)










We have that:














\(\ds \map \Area {\triangle ABC}\)

\(=\)







\(\ds \map \Area {\triangle BIC} + \map \Area {\triangle AIC} + \map \Area {\triangle AIB}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {a b} 2\)

\(=\)







\(\ds \dfrac {a r} 2 + \dfrac {b r} 2 + \dfrac {c r} 2\)





Area of Triangle in Terms of Side and Altitude














\(\ds \)

\(=\)







\(\ds \dfrac {r \paren {a + b + c} } 2\)














\(\ds \leadsto \ \ \)





\(\ds r\)

\(=\)







\(\ds \dfrac {a b} {a + b + c}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {m^2 - n^2} \paren {2 m n} } {\paren {m^2 - n^2} + \paren {2 m n} + \paren {m^2 + n^2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 m n \paren {m - n} \paren {m + n} } {2 m \paren {m + n} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 m n \paren {m - n} \paren {m + n} } {2 m \paren {m + n} }\)




















\(\ds \)

\(=\)







\(\ds n \paren {m - n}\)










As $m$ and $n$ are both integers, it follows that $r$ is also an integer.
$\blacksquare$





