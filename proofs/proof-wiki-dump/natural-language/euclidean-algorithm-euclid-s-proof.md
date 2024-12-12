# 

Source: https://proofwiki.org/wiki/Euclidean_Algorithm/Euclid%27s_Proof



Theorem
In the words of Euclid:

Given two (natural) numbers not prime to one another, to find their greatest common measure.
(The Elements: Book $\text{VII}$: Proposition $2$)


Proof
Let $AB, CD$ be the two given (natural) numbers which are not coprime.
We need to find the greatest common divisor of $AB$ and $CD$.


Without loss of generality that $CD \le AB$.
We have that $CD$ is a divisor of itself.
If $CD$ is a divisor of $AB$ then $CD$ is a common divisor of $CD$ and $AB$.
It is clearly the greatest, because no number greater than $CD$ can be a divisor  of $CD$.

Now, suppose $CD$ does not divide $AB$.
Then the less of the numbers $AB, CD$ being continually subtracted from the greater, some number will be left which will be a divisor  of the one before it.
From Coprimality Criterion, this number will not be a unit, otherwise $AB$ and $CD$ will be coprime.
So some number will be left which is a divisor of the one before it.

Now let $CD$, dividing $BE$, leave $EA$ less than itself.
Let $EA$, dividing $DF$, leave $FC$ less than itself.
Let $CF$ divide $AE$.
Since then $CF$ divides $AE$, and $AE$ divides $DF$, then $CF$ will also divide $DF$.
But it also divides itself.
Therefore it will also divide the whole $CD$.
But $CD$ divides $BE$, therefore $CF$ divides $BE$.
But it also divides $EA$, therefore it will also divide the whole $BA$.
So $CF$ is a common divisor of $CD$ and $AB$.

Suppose $CF$ is not the greatest common divisor of $CD$ and $AB$.
Let $G > CF$ also be a common divisor of $CD$ and $AB$.
Since $G$ divides $CD$, while $CD$ divides $BE$, it follows that $G$ divides $BE$.
But $G$ also divides the whole $BA$, and so it also divides the remainder $AE$.
But $AE$ divides $DF$.
Therefore $G$ divides $DF$.
But $G$ also divides the whole $DC$.
Therefore it will also divide the remainder $CF$.
But $G$ is greater than $CF$, which is impossible.
Therefore no number greater than $CF$ divides the numbers $AB$ and $CD$.
Therefore $CF$ is the greatest common divisor of $AB$ and $CD$.
$\blacksquare$


Porism
In the words of Euclid:

From this it is manifest that, if a number measure two numbers, it will also measure their greatest common divisor.
(The Elements: Book $\text{VII}$: Proposition $2$ : Porism)


Historical Note
This proof is Proposition $2$ of Book $\text{VII}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VII}$. Propositions
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 23 \zeta$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.4$: Euclid (flourished ca. $300$ B.C.)




