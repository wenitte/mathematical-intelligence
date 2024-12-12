# 

Source: https://proofwiki.org/wiki/Behaviour_of_Parametric_Equations_for_Folium_of_Descartes_according_to_Parameter



Theorem
Consider the folium of Descartes $F$, given in parametric form as:

$\begin {cases} x = \dfrac {3 a t} {1 + t^3} \\ y = \dfrac {3 a t^2} {1 + t^3} \end {cases}$
Then:

$F$ has a discontinuity at $t = -1$.
For $t < -1$, the section in the $4$th quadrant is generated
For $-1 < t \le 0$, the section in the $2$nd quadrant is generated
For $0 \le t$, the section in the $1$st quadrant is generated.


Proof



Discontinuity at $t = -1$
When $t = -1$, we have that:

$1 + t^3 = 0$
and so both $x$ and $y$ are undefined.
$\Box$


Behaviour for $t < -1$













\(\ds \lim_{t \mathop \to -\infty} \dfrac {3 a t} {1 + t^3}\)

\(<\)







\(\ds \lim_{t \mathop \to -\infty} \dfrac {3 a t} {t^3}\)




















\(\ds \)

\(=\)







\(\ds \lim_{t \mathop \to -\infty} \dfrac {3 a} {t^2}\)




















\(\ds \)

\(=\)







\(\ds \to 0^+\)
























\(\ds \lim_{t \mathop \to -\infty} \dfrac {3 a t^2} {1 + t^3}\)

\(<\)







\(\ds \lim_{t \mathop \to -\infty} \dfrac {3 a t^2} {t^3}\)




















\(\ds \)

\(=\)







\(\ds \lim_{t \mathop \to -\infty} \dfrac {3 a} t\)




















\(\ds \)

\(=\)







\(\ds \to 0^-\)









So:

$\ds \lim_{t \mathop \to -\infty} \tuple {x, y} = \tuple {0^+, 0^-}$

Then:














\(\ds \lim_{t \mathop \to -1^-} \dfrac {1 + t^3} {3 a t}\)

\(\to\)







\(\ds \dfrac {0^-} {-3 a}\)





because $t^3 < -1$














\(\ds \)

\(=\)







\(\ds 0^+\)






















\(\ds \lim_{t \mathop \to -1^-} \dfrac {1 + t^3} {3 a t^2}\)

\(\to\)







\(\ds \dfrac {0^-} {3 a}\)





because $t^3 < -1$














\(\ds \)

\(=\)







\(\ds 0^-\)










Thus:














\(\ds \lim_{t \mathop \to -1^-} \dfrac {3 a t} {1 + t^3}\)

\(\to\)







\(\ds +\infty\)




















\(\ds \lim_{t \mathop \to -1^-} \dfrac {3 a t^2} {1 + t^3}\)

\(\to\)







\(\ds -\infty\)










Thus, as $t$ goes from $-\infty$ to $-1$, $F$ goes from $\tuple {0, 0}$ in the $4$th quadrant to $\tuple {+\infty, -\infty}$.
$\Box$


Behaviour for $t > 0$













\(\ds \lim_{t \mathop \to +\infty} \dfrac {3 a t} {1 + t^3}\)

\(<\)







\(\ds \lim_{t \mathop \to +\infty} \dfrac {3 a t} {t^3}\)




















\(\ds \)

\(=\)







\(\ds \lim_{t \mathop \to +\infty} \dfrac {3 a} {t^2}\)




















\(\ds \)

\(=\)







\(\ds \to 0^+\)
























\(\ds \lim_{t \mathop \to +\infty} \dfrac {3 a t^2} {1 + t^3}\)

\(<\)







\(\ds \lim_{t \mathop \to +\infty} \dfrac {3 a t^2} {t^3}\)




















\(\ds \)

\(=\)







\(\ds \lim_{t \mathop \to +\infty} \dfrac {3 a} t\)




















\(\ds \)

\(=\)







\(\ds \to 0^+\)










So:

$\ds \lim_{t \mathop \to -\infty} \tuple {x, y} = \tuple {0^+, 0^+}$
It is observed that for $t > 0$, we have that:

$x > 0$
$y > 0$
and so for $t > 0$, $F$ is in the $1$st quadrant.

Thus we have that the loop is traversed from $t = 0$ to $t = +\infty$.
$\Box$


Behaviour for $-1 < t < 0$
We have that when $t = 0$, $\tuple {x, y} = \tuple {0, 0}$.
When $-1 < t < 0$, we have that:














\(\ds x\)

\(=\)







\(\ds \dfrac {3 a t} {1 + t^3}\)




















\(\ds \)

\(<\)







\(\ds 0\)




















\(\ds y\)

\(=\)







\(\ds \dfrac {3 a t^2} {1 + t^3}\)




















\(\ds \)

\(>\)







\(\ds 0\)










Then:














\(\ds \lim_{t \mathop \to -1^+} \dfrac {1 + t^3} {3 a t}\)

\(\to\)







\(\ds \dfrac {0^+} {-3 a}\)





because $t^3 > -1$














\(\ds \)

\(=\)







\(\ds 0^-\)






















\(\ds \lim_{t \mathop \to -1^-} \dfrac {1 + t^3} {3 a t^2}\)

\(\to\)







\(\ds \dfrac {0^+} {3 a}\)





because $t^3 > -1$














\(\ds \)

\(=\)







\(\ds 0^+\)










Thus:














\(\ds \lim_{t \mathop \to -1^-} \dfrac {3 a t} {1 + t^3}\)

\(\to\)







\(\ds -\infty\)




















\(\ds \lim_{t \mathop \to -1^-} \dfrac {3 a t^2} {1 + t^3}\)

\(\to\)







\(\ds +\infty\)










Thus, as $t$ goes from $0$ to $-1$, $F$ goes from $\tuple {0, 0}$ in the $2$nd quadrant to $\tuple {-\infty, +\infty}$.
$\Box$

The result follows.
$\blacksquare$





