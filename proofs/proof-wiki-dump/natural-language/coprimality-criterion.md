# 

Source: https://proofwiki.org/wiki/Coprimality_Criterion



Theorem
In the words of Euclid:

Two unequal numbers being set out, and the less being continually subtracted in turn from the greater, if the number which is left never measures the one before it until an unit is left, the original numbers will be prime to one another.
(The Elements: Book $\text{VII}$: Proposition $1$)


Proof
Let the less of two unequal numbers $AB, CD$ be continually subtracted from the greater, such that the number which is left over never measure the one before it till a unit is left.
We need to show that $AB$ and $CD$ are coprime.


Suppose $AB, CD$ are not coprime.
Then some natural number $E > 1$ will divide them both.
Let some multiple of $CD$ be subtracted from $AB$ such that the remainder $AF$ is less than $CD$.
Then let some multiple of $AF$ be subtracted from $CD$ such that the remainder $CG$ is less than $AF$.
Then let some multiple of $CG$ be subtracted from $FA$ such that the remainder $AH$ is a unit.
Since, then, $E$ divides $CD$, and $CD$ divides $BF$, then $E$ also divides $BF$.
But $E$ also divides $BA$.
Therefore $E$ also divides $AF$.
But $AF$ divides $DG$.
Therefore $E$ also divides $DG$.
But $E$ also divides the whole $DC$.
Therefore $E$ also divides the remainder $GC$.
But $CG$ divides $FH$.
Therefore $E$ also divides $FH$.
But $E$ also divides the whole $FA$.
Therefore $E$ also divides the remainder, that is, the unit $AH$.
But $E > 1$ so this is impossible.
Therefore, from Book $\text{VII}$ Definition $12$: Relatively Prime, $AB$ and $CD$ are relatively prime.
$\blacksquare$


Historical Note
This proof is Proposition $1$ of Book $\text{VII}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VII}$. Propositions
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.4$: Euclid (flourished ca. $300$ B.C.)




