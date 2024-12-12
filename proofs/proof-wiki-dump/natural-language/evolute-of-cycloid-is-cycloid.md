# 

Source: https://proofwiki.org/wiki/Evolute_of_Cycloid_is_Cycloid

Theorem
The evolute of a cycloid is another cycloid.


Proof
Let $C$ be the cycloid defined by the equations:

$\begin {cases} x = a \paren {\theta - \sin \theta} \\ y = a \paren {1 - \cos \theta} \end {cases}$

From Parametric Equations for Evolute: Formulation 2:

$(1): \quad \begin {cases} X = x - \dfrac {y' \paren {x'^2 + y'^2} } {x' y' ' - y' x' '} \\ Y = y + \dfrac {x' \paren {x'^2 + y'^2} } {x' y' ' - y' x' '} \end {cases}$
where:

$\tuple {x, y}$ denotes the Cartesian coordinates of a general point on $C$
$\tuple {X, Y}$ denotes the Cartesian coordinates of a general point on the evolute of $C$
$x'$ and $x' '$ denote the derivative and second derivative respectively of $x$ with respect to $\theta$
$y'$ and $y' '$ denote the derivative and second derivative respectively of $y$ with respect to $\theta$.

Thus we have:














\(\ds x'\)

\(=\)







\(\ds a \paren {1 - \cos \theta}\)




















\(\ds x' '\)

\(=\)







\(\ds a \sin \theta\)










and:














\(\ds y'\)

\(=\)







\(\ds a \sin \theta\)




















\(\ds y' '\)

\(=\)







\(\ds a \cos \theta\)










Thus:














\(\ds \dfrac {x'^2 + y'^2} {x' y' ' - y' x' '}\)

\(=\)







\(\ds \dfrac {a^2 \paren {1 - \cos \theta}^2 + a^2 \sin^2 \theta} {a \paren {1 - \cos \theta} a \cos \theta - a \sin \theta \, a \sin \theta}\)





substituting for $x'$, $x' '$, $y'$, $y' '$














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {1 - 2 \cos \theta + \cos^2 \theta} + \sin^2 \theta} {\cos \theta - \cos^2 \theta - \sin^2 \theta}\)





multiplying out, cancelling out $a^2$














\(\ds \)

\(=\)







\(\ds \dfrac {2 - 2 \cos \theta} {\cos \theta - 1}\)





Sum of Squares of Sine and Cosine




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds -2\)





dividing top and bottom by $1 - \cos \theta$




and so:














\(\ds X\)

\(=\)







\(\ds a \paren {\theta - \sin \theta} - a \sin \theta \paren {-2}\)





substituting for $x$ and $y'$ and from $(2)$ in $(1)$














\(\ds \)

\(=\)







\(\ds a \paren {\theta + \sin \theta}\)





simplifying




and:














\(\ds Y\)

\(=\)







\(\ds a \paren {1 - \cos \theta} + a \paren {1 - \cos \theta} \paren {-2}\)





substituting for $y$ and $x'$ and from $(2)$ in $(1)$














\(\ds \)

\(=\)







\(\ds -a \paren {1 - \cos \theta}\)










The cycloid $C$ (blue) and its evolute (red) are illustrated below:


$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.23$: Evolutes and Involutes. The Evolute of a Cycloid: Example $2$




