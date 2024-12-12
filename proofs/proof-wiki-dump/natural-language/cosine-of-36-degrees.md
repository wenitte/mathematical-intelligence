# 

Source: https://proofwiki.org/wiki/Cosine_of_36_Degrees



Theorem
$\cos 36 \degrees = \cos \dfrac \pi 5 = \dfrac \phi 2 = \dfrac {1 + \sqrt 5} 4$
where $\phi$ denotes the golden mean.


Proof 1
Let $u = \cos 72 \degrees, v = \cos 36 \degrees$.
Recall from Cosine of Complement equals Sine that $\map \cos {\dfrac \pi 2 - \theta} = \sin \theta$
Therefore:














\(\ds \map \cos {90 \degrees - 18 \degrees}\)

\(=\)







\(\ds \map \sin {18 \degrees}\)














\(\ds \leadsto \ \ \)





\(\ds \map \cos {72 \degrees}\)

\(=\)







\(\ds \map \sin {18 \degrees}\)










Therefore:














\(\ds \cos 36 \degrees\)

\(=\)







\(\ds 1 - 2 \sin^2 18 \degrees\)





Double Angle Formula for Cosine: Corollary $2$








\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds 1 - 2 u^2\)





substituting for $u$ and $v$














\(\ds \cos 72 \degrees\)

\(=\)







\(\ds 2 \cos^2 36 \degrees - 1\)





Double Angle Formula for Cosine: Corollary $1$








\(\ds \leadsto \ \ \)





\(\ds u\)

\(=\)







\(\ds 2 v^2 - 1\)





substituting for $u$ and $v$








\(\ds \leadsto \ \ \)





\(\ds u + v\)

\(=\)







\(\ds 2 \paren {v^2 - u^2}\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {v + u} \paren {v - u}\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(=\)







\(\ds 2 \paren {v - u}\)





dividing both sides by $\paren {v + u}$














\(\ds \)

\(=\)







\(\ds 2 v - 4 v^2 + 2\)





substituting $u = 2 v^2 - 1$








\(\ds \leadsto \ \ \)





\(\ds \paren {2 v}^2\)

\(=\)







\(\ds 2 v + 1\)














\(\ds \leadsto \ \ \)





\(\ds 2 v\)

\(=\)







\(\ds \phi\)





Square of Golden Mean equals One plus Golden Mean



$\blacksquare$


Proof 2
From Complex Algebra: $z^4 - 3z^2 + 1 = 0$, the roots of $z^4 - 3z^2 + 1 = 0$ are:

$2 \cos 36 \degrees, 2 \cos 72 \degrees, 2 \cos 216 \degrees, 2 \cos 252 \degrees$
Then:














\(\ds z^4 - 3z^2 + 1\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds z^2\)

\(=\)







\(\ds \dfrac {3 \pm \sqrt {\paren {-3}^2 - 4 \times 1} } 2\)





Quadratic Formula














\(\ds \)

\(=\)







\(\ds \dfrac 3 2 \pm \dfrac {\sqrt 5} 2\)









By Shape of Cosine Function:

$\paren {2 \cos 36^\circ}^2 > \paren {2 \cos 45^\circ}^2 = 2 > \dfrac 3 2 - \dfrac {\sqrt 5} 2$
so $\paren {2 \cos 36^\circ}^2 = \dfrac 3 2 + \dfrac {\sqrt 5} 2$.

Let $z = k \paren {a + \sqrt 5}$, where $k \in \Q$ and $a \in \Z$.
Then for $z = 2 \cos 36^\circ$:














\(\ds k^2 \paren {a + \sqrt 5}^2\)

\(=\)







\(\ds \dfrac 3 2 + \dfrac {\sqrt 5} 2\)














\(\ds \leadsto \ \ \)





\(\ds 2 k^2 \paren {a^2 + 5 + 2 a \sqrt 5}\)

\(=\)







\(\ds 3 + \sqrt 5\)





Square of Sum



By comparing coefficients:














\(\ds \paren {a^2 + 5} : 2 a\)

\(=\)







\(\ds 3 : 1\)














\(\ds \leadsto \ \ \)





\(\ds a^2 + 5\)

\(=\)







\(\ds 6 a\)














\(\ds \leadsto \ \ \)





\(\ds a^2 - 6 a + 5\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds \paren {a - 5} \paren {a - 1}\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds 1 \text{ or } 5\)









We have, from the expansion above:

$4 a k^2 = 1$
which leads to:

$\sqrt a = \dfrac 1 {2 k}$
so $a$ must be square.
Thus $a = 1$ and hence:

$2 \cos 36^\circ = k \paren {a + \sqrt 5} = \dfrac {1 + \sqrt 5} 2$
$\cos 36^\circ = \dfrac {1 + \sqrt 5} 4$
$\blacksquare$


Proof 3













\(\ds \sin 108 \degrees\)

\(=\)







\(\ds 3 \sin 36 \degrees - 4 \sin^3 36 \degrees\)





Triple Angle Formula for Sine














\(\ds \sin 72 \degrees\)

\(=\)







\(\ds 3 \sin 36 \degrees - 4 \sin^3 36 \degrees\)





Sine of Supplementary Angle














\(\ds 2 \sin 36 \degrees \cos 36 \degrees\)

\(=\)







\(\ds 3 \sin 36 \degrees - 4 \sin^3 36 \degrees\)





Double Angle Formula for Sine














\(\ds 2 \cos 36 \degrees\)

\(=\)







\(\ds 3 - 4 \sin^2 36 \degrees\)





dividing both sides by $\sin 36 \degrees$














\(\ds \)

\(=\)







\(\ds 4 \cos^2 36 \degrees - 1\)





Sum of Squares of Sine and Cosine








\(\ds \leadsto \ \ \)





\(\ds 4 \cos^2 36 \degrees - 2 \cos 36 \degrees - 1\)

\(=\)







\(\ds 0\)




















\(\ds \cos 36 \degrees\)

\(=\)







\(\ds \frac {2 \pm \sqrt {2^2 + 4 \times 4} } {2 \times 4}\)





Quadratic Formula














\(\ds \)

\(=\)







\(\ds \frac {2 \pm \sqrt {20} } 8\)




















\(\ds \)

\(=\)







\(\ds \frac {1 + \sqrt 5} 4\)





negative root is rejected as $\cos 36 \degrees > 0$



$\blacksquare$





