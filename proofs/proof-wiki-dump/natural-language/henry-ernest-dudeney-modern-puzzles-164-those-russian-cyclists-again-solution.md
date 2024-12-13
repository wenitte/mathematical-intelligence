# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/164_-_Those_Russian_Cyclists_Again/Solution



Modern Puzzles by Henry Ernest Dudeney: $164$
Those Russian Cyclists Again
In the section from a map given in the diagram we are shown three long straight roads, forming a right-angled triangle.

The General asked the two men how far it was from $A$ to $B$.
Pyotr replied that all he knew was that riding round the triangle, from $A$ to $B$,
from there to $C$ and home to $A$, his odometer showed exactly $60$ miles,
while Sergei could only say that he happened to know that $C$ was exactly $12$ miles from the road $A$ to $B$ --
that is, to the point $D$, as shown by the dotted line.
Whereupon the General made a very simple calculation in his head and declared that the distance from $A$ to $B$ must be ...
Can the reader discover so easily how far it was?


Solution
$25$ miles.


Proof
Let $BC = a$, $AC = b$ and $AB = c$.
Let $CD = d$.
Let $AD = c_1$ and $BD = c_2$.
We have:




\(\text {(1)}: \quad\)









\(\ds a + b + c\)

\(=\)







\(\ds 60\)





riding round the triangle, from $A$ to $B$ ... exactly $60$ miles




\(\text {(2)}: \quad\)









\(\ds d\)

\(=\)







\(\ds 12\)





$C$ was exactly $12$ miles from the road $A$ to $B$




\(\text {(3)}: \quad\)









\(\ds a^2 + b^c\)

\(=\)







\(\ds c^2\)










\(\text {(4)}: \quad\)









\(\ds a^2\)

\(=\)







\(\ds d^2 + c_2^2\)










\(\text {(5)}: \quad\)









\(\ds b^2\)

\(=\)







\(\ds d^2 + c_1^2\)














\(\ds \leadsto \ \ \)





\(\ds c_1^2\)

\(=\)







\(\ds b^2 - d^2\)





rearranging $(5)$














\(\ds c_2^2\)

\(=\)







\(\ds a^2 - d^2\)





rearranging $(4)$








\(\ds \leadsto \ \ \)





\(\ds c_1^2 c_2^2\)

\(=\)







\(\ds \paren {a^2 - d^2} \paren {b^2 - d^2}\)














\(\ds \leadsto \ \ \)





\(\ds d^4\)

\(=\)







\(\ds a^2 b^2 - d^2 \paren {a^2 + b^2} + d^4\)





$d^2 = c_1 c_2$ from some theorem I can't find








\(\ds \leadsto \ \ \)





\(\ds a b\)

\(=\)







\(\ds c d\)





$a^2 + b^2 = c^2$ and simplification








\(\ds \leadsto \ \ \)





\(\ds a b\)

\(=\)







\(\ds 12 c\)





from $(2)$




This article, or a section of it, needs explaining.In particular: Find that theorem that says $c_1 c_2 = d^2$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then we have:














\(\ds a + b\)

\(=\)







\(\ds \paren {a + b + c} - c\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds \paren {a + b}^2\)

\(=\)







\(\ds \paren {\paren {a + b + c} - c}^2\)














\(\ds \leadsto \ \ \)





\(\ds a^2 + 2 a b + b^2\)

\(=\)







\(\ds c^2 - 120 c + \paren {a + b + c}^2\)














\(\ds \leadsto \ \ \)





\(\ds c^2 + 2 c d\)

\(=\)







\(\ds c^2 - 2 \paren {a + b + c} c + \paren {a + b + c}^2\)





from $a^2 + b^2 = c^2$ and $a b = c d$








\(\ds \leadsto \ \ \)





\(\ds 2 c d\)

\(=\)







\(\ds -2 \paren {a + b + c} + \paren {a + b + c}^2\)














\(\ds \leadsto \ \ \)





\(\ds 2 c \paren {\paren {a + b + c} + d}\)

\(=\)







\(\ds \paren {a + b + c}^2\)





simplification








\(\ds \leadsto \ \ \)





\(\ds c\)

\(=\)







\(\ds \dfrac {\paren {a + b + c}^2} {2 \paren {\paren {a + b + c} + d} }\)





simplification



Setting $a + b + c = 60$ and $d = 12$ gives the result.

Hence Dudeney's General simply squared $60$ and divided by $2 \times \paren {60 + 12}$:

$c = \dfrac {60^2} {2 \times \paren {12 + 60} } = \dfrac {3600} {144} = 25$
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $164$. -- Those Russian Cyclists Again
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $282$. Those Russian Cyclists Again




