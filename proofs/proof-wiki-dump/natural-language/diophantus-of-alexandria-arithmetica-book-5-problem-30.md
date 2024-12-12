# 

Source: https://proofwiki.org/wiki/Diophantus_of_Alexandria/Arithmetica/Book_5/Problem_30



Example of Diophantine Problem
A man buys a certain number of measures of wine, some at $8$ drachmas, some at $5$ drachmas each.
He pays for them a square number of drachmas;
and if we add $60$ to this number, the result is a square, the side of which is equal to the whole number of measures.
Find how many he bought at each price.


Solution
The solution given by Diophantus of Alexandria is:

The number of $5$-drachma measures is $\dfrac {79} {12}$.
The number of $8$-drachma measures is $\dfrac {59} {12}$.


Proof
Let $x$ be the total number of measures bought.
Then $x^2 - 60$ is the price paid, which is itself a square number: $\paren {x - m}^2$, say.
So, $\dfrac 1 5$ of the price of the $5$-drachma measures plus $\dfrac 1 8$ of the price of the $8$-drachma measures equals $x$.
Hence the total price $x^2 - 60$ has to be divided into $2$ parts such that $\dfrac 1 5$ of one plus $\dfrac 1 8$ of the other equals $x$.
This has no real solution unless:














\(\ds x\)

\(>\)







\(\ds \dfrac 1 5 \paren {x^2 - 60}\)




















\(\ds x\)

\(<\)







\(\ds \dfrac 1 8 \paren {x^2 - 60}\)














\(\ds \leadsto \ \ \)





\(\ds 5 x\)

\(<\)







\(\ds x^2 - 60 < 8 x\)









Thus we have:

$x^2 > 5 x + 60$
and so $x^2$ equals $5 x$ plus a number greater than $60$.
Hence $x$ is not less than $11$.
Similarly, we have:

$x^2 < 8 x + 60$
and so $x^2$ equals $8 x$ minus a number less than 60.
Hence $x$ is not greater than $12$.
That is:

$11 < x < 12$

From above, we deduce:

$x = \dfrac {m^2 + 60} {2 m}$
and so:

$22 m < m^2 + 60 < 24 m$

So:

$22 m$ equals $m^2$ plus some number less than $60$
and so:

$m^2$ is not less than $19$.
Also:

$24 m$ equals $m^2$ minus some number greater than $60$
and so:

$m^2$ is less than $21$.
So we can put $m = 20$, and so:

$x^2 - 60 = \paren {x - 20}^2$
which leads to:














\(\ds x\)

\(=\)







\(\ds 11 \tfrac 1 2\)




















\(\ds x^2\)

\(=\)







\(\ds 132 \tfrac 1 4\)




















\(\ds x^2 - 60\)

\(=\)







\(\ds 72 \tfrac 1 4\)










It remains to divide $72 \frac 1 4$ into $2$ parts such that $\dfrac 1 5$ of one part plus $\dfrac 1 8$ of the other part equals $11 \frac 1 2$.
Let the first part be $5 z$.
Therefore $\dfrac 1 8$ times the second half equals $11 \frac 1 2 + z$
That is, the second half equals $92 - 8 z$m which leads to:

$5 z + 92 - 8 z = 72 \frac 1 4$
and so:

$z = \dfrac {79} {12}$
Hence the result.
$\blacksquare$


Sources
c. 250: Diophantus of Alexandria: Arithmetica: Book $\text {V}$: Problem $30$
1910: Sir Thomas L. Heath: Diophantus of Alexandria (2nd ed.): The Arithmetica: Book $\text {V}$: $30$
1968: Henrietta Midonick: The Treasury of Mathematics: Volume $\text { 2 }$
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Square Problems: $29$




