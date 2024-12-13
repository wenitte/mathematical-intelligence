# 

Source: https://proofwiki.org/wiki/Number_does_not_divide_Number_iff_Cube_does_not_divide_Cube



Theorem
Let $a, b \in \Z$ be integers.
Then:

$a \nmid b \iff a^3 \nmid b^3$
where $a \nmid b$ denotes that $a$ is not a divisor of $b$.

In the words of Euclid:

If a cube number do not measure a cube number, neither will the side measure the side; and, if the side do not measure the side, neither will the cube measure the cube.
(The Elements: Book $\text{VIII}$: Proposition $17$)


Proof
Let $a \nmid b$.
Aiming for a contradiction, suppose:

$a^3 \divides b^3$
where $\divides$ denotes divisibility.
Then by Number divides Number iff Cube divides Cube:

$a \divides b$
From Proof by Contradiction it follows that $a^2 \divides b^2$ is false.
Thus $a^3 \nmid b^3$.
$\Box$

Let $a^3 \nmid b^3$.
Aiming for a contradiction, suppose

$a \divides b$
Then by Number divides Number iff Cube divides Cube:

$a^3 \divides b^3$
From Proof by Contradiction it follows that $a \divides b$ is false.
Thus $a \nmid b$.
$\blacksquare$


Historical Note
This proof is Proposition $17$ of Book $\text{VIII}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VIII}$. Propositions




