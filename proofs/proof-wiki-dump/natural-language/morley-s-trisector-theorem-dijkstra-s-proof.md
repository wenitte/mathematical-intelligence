# 

Source: https://proofwiki.org/wiki/Morley%27s_Trisector_Theorem/Dijkstra%27s_Proof



Theorem
Let $\triangle ABC$ be a triangle.
Let the internal angles of $\triangle ABC$ be trisected.
Let the points where these angle trisectors first intersect be $D$, $E$ and $F$.



Then $\triangle EDF$ is equilateral.


Dijkstra's Proof
Choose angles $\alpha$, $\beta$ and $\gamma$ all greater than $0$ such that $\alpha + \beta + \gamma = 60 \degrees$.
Draw an equilateral triangle $\triangle XYZ$.

Construct $\triangle AXY$ and $\triangle BXZ$ with the angles as indicated:



We have that:














\(\ds \angle AXY\)

\(=\)







\(\ds 60 \degrees + \beta\)




















\(\ds \angle AYX\)

\(=\)







\(\ds 60 \degrees + \gamma\)




















\(\ds \angle BXZ\)

\(=\)







\(\ds 60 \degrees + \alpha\)




















\(\ds \angle BZX\)

\(=\)







\(\ds 60 \degrees + \gamma\)










Because $\angle AXB = 180 \degrees - \paren {\alpha + \beta}$ , it follows that:

if $\angle BAX = \alpha + x$ then $\angle ABX = \beta - x$
Using the Sine Rule $3$ times, in $\angle AXB$, $\angle AXY$ and $\angle BXZ$, we have:














\(\ds \dfrac {\map \sin {\alpha + x} } {\map \sin {\beta - x} }\)

\(=\)







\(\ds \dfrac {BX} {AX}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {XZ \map \sin {60 \degrees + \gamma} / \sin \beta} {XY \map \sin {60 \degrees + \gamma} / \sin \alpha}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\sin \alpha} {\sin \beta}\)









In the range in which these angles lie, the left hand side of the above is a strictly increasing function of $x$.
Thus we conclude that $x = 0$.
The result follows.
$\blacksquare$


Source of Name
This entry was named for Edsger Wybe Dijkstra.


Historical Note
This proof was published by Edsger Wybe Dijkstra on $30$ December $1975$ in an open letter to Ross Honsberger.
As he put it:

the other day I encountered your delightful booklet "Mathematical Gems". On account of Chapter 8, I concluded that you might be interested in the following proof of Morley's Theorem "The adjacent pairs of the trisectors of a triangle always meet at the vertices of an equilateral triangle." ... I found this proof in the early sixties, but am afraid that I did not publish it.


Sources
$30$ December $1975$: Open letter from Edsger W. Dijkstra to Ross Honsberger: EWD544




