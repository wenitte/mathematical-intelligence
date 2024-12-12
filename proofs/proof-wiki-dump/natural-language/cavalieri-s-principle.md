# 

Source: https://proofwiki.org/wiki/Cavalieri%27s_Principle



Theorem
Let two solid figures $S_1$ and $S_2$ have equal height.
Let sections made by planes parallel to their bases and at equal distances from the bases always have equal area.

Then the volumes of $S_1$ and $S_2$ are equal.


Extension
An extension of Cavalieri's Principle is as follows:

Let two solid figures $S_1$ and $S_2$ have equal height.
Let the areas of the sections made by planes parallel to their bases and at equal distances from the bases always have the same ratio.

Then the volumes of $S_1$ and $S_2$ are in that same ratio.


Proof
Let $H$ be the common height of the two figures.
The volume of a solid figure is its Lebesgue Measure in $\R^3$.


A particular theorem is missing.In particular: The above needs to be demonstrated as it is in fact is the core of the principleYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding the theorem.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{TheoremWanted}} from the code.
Therefore:














\(\ds \map V {S_1}\)

\(=\)







\(\ds \map {\lambda^3} {S_1}\)




















\(\ds \)

\(=\)







\(\ds \int_{\R^3} \chi_{S_1} \rd \lambda^3\)





Definition of Integral of Positive Simple Function














\(\ds \)

\(=\)







\(\ds \int_{\R \times \R^2} \chi_{S_1} \rd \paren {\lambda \times \lambda^2}\)




















\(\ds \)

\(=\)







\(\ds \int_\R \int_{\R^2} \paren {\chi_{S_1} }_x \rd \lambda^2 \rd \lambda\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \int_{\closedint 0 H} \int_{\R^2} \paren {\chi_{S_1} }_x \rd \lambda^2 \rd \lambda\)





Figure is bounded between planes $x = 0$ and $x = H$




This article, or a section of it, needs explaining.In particular: Lebesgue measure isn't a product measure. We need a variant of Fubini that works on completions of measure spaces.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
In the same manner:

$\ds \map V {S_2} = \int_{\closedint 0 H} \int_{\R^2} \paren {\chi_{S_2} }_x \rd \lambda^2 \rd \lambda$

The area of a plane figure is its Lebesgue Measure in $\R^2$.
The area of a section made in $S_1$ by the plane $x = x_0$ is:














\(\ds \map A {S_1 \cap P_{x \mathop = x_0} }\)

\(=\)







\(\ds \map {\lambda^2} {S_1 \cap P {x = x_0} }\)




















\(\ds \)

\(=\)







\(\ds \int_{\R^2} \paren {\chi_{S_1} }_{x \mathop = x_0} \rd \lambda^2\)





Definition of Integral of Positive Simple Function



Likewise:

$\ds \map A {S_2 \cap P_{x \mathop = x_0} } = \int_{\R^2} \paren {\chi_{S_2} }_{x \mathop = x_0} \rd \lambda^2$

But by assumption:

$\map A {S_1 \cap P_{x \mathop = x_0} } = \map A {S_2 \cap P_{x \mathop = x_0} }$
for every $x_0 \in \closedint 0 H$.
Therefore:








\(\ds \leadsto \ \ \)





\(\ds \int_{\R^2} \paren {\chi_{S_1} }_x \rd \lambda^2\)

\(=\)







\(\ds \int_{\R^2} \paren {\chi_{S_2} }_x \rd \lambda^2\)




















\(\ds \int_{\closedint 0 H} \int_{\R^2} \paren {\chi_{S_1} }_x \rd \lambda^2 \rd \lambda\)

\(=\)







\(\ds \int_{\closedint 0 H} \int_{\R^2} \paren {\chi_{S_2} }_x \rd \lambda^2 \rd \lambda\)









Thus we conclude that $\map V {S_1} = \map V {S_2}$
$\blacksquare$


Source of Name
This entry was named for Bonaventura Francesco Cavalieri.


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Cavalieri's principle
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.14$: Cavalieri ($\text {1598}$ – $\text {1647}$)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Cavalieri, Bonaventura




