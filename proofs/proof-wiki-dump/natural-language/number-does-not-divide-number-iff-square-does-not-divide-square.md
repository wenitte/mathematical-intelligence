# 

Source: https://proofwiki.org/wiki/Number_does_not_divide_Number_iff_Square_does_not_divide_Square



Theorem
Let $a, b \in \Z$ be integers.
Then:

$a \nmid b \iff a^2 \nmid b^2$
where $a \nmid b$ denotes that $a$ is not a divisor of $b$.

In the words of Euclid:

If a square number do not measure a square number, neither will the side measure the side; and, if the side do not measure the side, neither will the square measure the square.
(The Elements: Book $\text{VIII}$: Proposition $16$)


Proof
Let $a \nmid b$.
Aiming for a contradiction, suppose:

$a^2 \divides b^2$
where $\divides$ denotes divisibility.
Then by Number divides Number iff Square divides Square:

$a \divides b$
From Proof by Contradiction it follows that $a^2 \divides b^2$ is false.
Thus $a^2 \nmid b^2$.
$\Box$

Let $a^2 \nmid b^2$.
Aiming for a contradiction, suppose:

$a \divides b$
Then by Number divides Number iff Square divides Square:

$a^2 \divides b^2$
From Proof by Contradiction it follows that $a \divides b$ is false.
Thus $a \nmid b$.
$\blacksquare$


Historical Note
This proof is Proposition $16$ of Book $\text{VIII}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VIII}$. Propositions




