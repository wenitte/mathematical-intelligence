# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/536_Puzzles_%26_Curious_Problems/1_-_Concerning_a_Cheque/Solution



536 Puzzles & Curious Problems by Henry Ernest Dudeney: $1$
Concerning a Cheque
A man went into a bank to cash a check.
In handing over the money the cashier, by mistake, gave him dollars for cents and cents for dollars.
He pocketed the money without examining it, and spent a nickel on his way home.
He then found that he possessed exactly twice the amount of the check.
He had no money in his pocket before going to the bank.
What was the exact amount of that check?


Solution
The amount on the the check was $\$ 31.63$.
After leaving the bank, he had $\$ 63.31$.
After arriving home, he had $\$ 63.26$, which is twice $\$ 31.63$.


Proof
Let $C$ be the amount written on the check.
Let $C$ consist of $x$ dollars and $y$ cents.

Let $C_1$ be the value of the check in cents.
Let $C_2$ be the money the man left the bank with in cents.
Let $C_3$ be the money the man arrived home with in cents.

We have:

$C_1 = 100 x + y$
After coming out of the bank, the man has:

$C_2 = 100 y + x$
After arriving home, the man has:

$C_3 = 100 y + x - 5$
But we have:

$C_1 \times 2 = C_3$
which leads us to:














\(\ds 200 x + 2 y\)

\(=\)







\(\ds 100 y + x - 5\)














\(\ds \leadsto \ \ \)





\(\ds 199 x - 98 y\)

\(=\)







\(\ds -5\)





rearranging



This is a linear Diophantine equation.

Using the Euclidean Algorithm:




\(\text {(1)}: \quad\)









\(\ds 199\)

\(=\)







\(\ds \paren {-2} \times \paren {-98} + 3\)










\(\text {(2)}: \quad\)









\(\ds -98\)

\(=\)







\(\ds \paren {-33} \times 3 + 1\)









Thus we have that:

$\gcd \set {199, -98} = 1$
which is a divisor of $-5$:

$-5 = -5 \times 1$
So, from Solution of Linear Diophantine Equation, a solution exists.

Next we find a single solution to $199 x - 98 y = -5$.
Again with the Euclidean Algorithm:














\(\ds 1\)

\(=\)







\(\ds -98 - \paren {\paren {-33} \times 3}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds -98 + 33 \times 3\)




















\(\ds \)

\(=\)







\(\ds -98 + 33 \times \paren {1 \times 199 - \paren {\paren {-2} \times \paren {-98} } }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds -98 + 33 \times \paren {199 - 2 \times 98}\)




















\(\ds \)

\(=\)







\(\ds 33 \times 199 + 67 \times \paren {-98}\)














\(\ds \leadsto \ \ \)





\(\ds -5\)

\(=\)







\(\ds -5 \times \paren {33 \times 199 + 67 \times \paren {-98} }\)




















\(\ds \)

\(=\)







\(\ds -165 \times 199 + \paren {-335} \times \paren {-98}\)










and so:














\(\ds x_0\)

\(=\)







\(\ds -165\)




















\(\ds y_0\)

\(=\)







\(\ds -335\)









is a solution.

From Solution of Linear Diophantine Equation, the general solution is:

$\forall t \in \Z: x = x_0 + \dfrac b d t, y = y_0 - \dfrac a d t$
where $d = \gcd \set {a, b}$.

In this case:














\(\ds x_0\)

\(=\)







\(\ds -165\)




















\(\ds y_0\)

\(=\)







\(\ds -335\)




















\(\ds a\)

\(=\)







\(\ds 199\)




















\(\ds b\)

\(=\)







\(\ds -98\)




















\(\ds d\)

\(=\)







\(\ds 1\)
























\(\ds x\)

\(=\)







\(\ds -165 - 98 t\)




















\(\ds y\)

\(=\)







\(\ds -335 - 199 t\)









In order to make $x$ and $y$ minimally positive, we see that $t = -2$:














\(\ds x\)

\(=\)







\(\ds -165 - 98 \paren {-2}\)




















\(\ds \)

\(=\)







\(\ds -165 + 196\)




















\(\ds \)

\(=\)







\(\ds 31\)




















\(\ds y\)

\(=\)







\(\ds -335 - 199 \paren {-2}\)




















\(\ds \)

\(=\)







\(\ds -335 + 398\)




















\(\ds \)

\(=\)







\(\ds 63\)










Thus we arrive at:

$x = 31$
and:

$y = 63$
and the solution follows.
$\blacksquare$


Sources
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $1$. Concerning a Cheque




