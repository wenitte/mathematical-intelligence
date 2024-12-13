# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/139_-_A_Crease_Problem/Solution



Modern Puzzles by Henry Ernest Dudeney: $139$
A Crease Problem
Fold a page, so that the bottom outside corner touches the inside edge and the crease is the shortest possible.


Solution

Bisect $AB$ at $C$ and construct $CG$ parallel to $BH$.
Bisect $AC$ at $D$ and construct the semicircle between $B$ and $D$.
Let the semicircle $BD$ intersect $CG$ at $E$.
Let $DE$ be produced to intersect $BH$ at $F$.
Then $DF$ is the required crease.


Proof
First we assume that the length of the page is sufficiently long.
Otherwise simply folding the page in half could produce a shorter crease.

Suppose $t$ of the length of the bottom edge is folded over.
Then $1 - t$ of the length of the bottom edge is not folded over.
The angle adjacent to the bottom edge of the small triangle produced after folding is therefore:

$\cos^{-1} \paren {\dfrac {1 - t} t}$
The angle of the crease with respect to the bottom edge would be:

$\dfrac 1 2 \paren {180^\circ - \cos^{-1} \paren {\dfrac {1 - t} t} } = 90^\circ - \dfrac 1 2 \cos^{-1} \paren {\dfrac {1 - t} t}$
The length of the crease is therefore:














\(\ds \frac t {\cos \paren {90^\circ - \dfrac 1 2 \cos^{-1} \paren {\frac {1 - t} t} } }\)

\(=\)







\(\ds \frac t {\sin \paren {\frac 1 2 \cos^{-1} \paren {\frac {1 - t} t} } }\)





Cosine of Complement equals Sine














\(\ds \)

\(=\)







\(\ds \frac t {\sqrt \frac {1 - \cos \paren {\cos^{-1} \paren {\frac {1 - t} t} } } 2}\)





Half Angle Formula for Sine














\(\ds \)

\(=\)







\(\ds \frac t {\sqrt \frac {1 - \frac {1 - t} t} 2}\)




















\(\ds \)

\(=\)







\(\ds \frac t {\sqrt {\frac {2 t - 1} {2 t} } }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\frac {2 t^3} {2 t - 1} }\)









of the length of the bottom edge.

Let $\map f t = \dfrac {2 t^3} {2 t - 1}$.
Then $\map {f'} t = \dfrac {6 t^2 \paren {2 t - 1} - 2 \paren {2 t^3} } {\paren {2 t - 1}^2} = \dfrac {8 t^3 - 6 t^2} {\paren {2 t - 1}^2}$
$\map {f'} t = 0$ when $t = 0$ or $t = \dfrac 3 4$.
Hence the maximum length of the crease occurs when  $t = \dfrac 3 4$, which is shown in the construction in the solution.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $139$. -- A Crease Problem
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $366$. A Crease Problem




