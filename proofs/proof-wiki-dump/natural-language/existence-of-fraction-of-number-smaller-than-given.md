# 

Source: https://proofwiki.org/wiki/Existence_of_Fraction_of_Number_Smaller_than_Given



Theorem
Let $a, b \in \R_{>0}$ be two (strictly) positive real numbers, such that $a > b$.
Let the sequence $\sequence {a_n}$ be defined recursively as:

$a_i = \begin{cases} a & : i = 1 \\
a_{i - 1} - c: \dfrac {a_{i - 1} } 2 < c < a_{i - 1} & : i > 1
\end{cases}$

Then:

$\exists n \in \N_{>0}: a_n < b$

In the words of Euclid:

Two unequal magnitudes being set out, if, from the greater there be subtracted a magnitude greater than its half, and from that which is left a magnitude greater than its half, and if this process be repeated continually, there will be left some magnitude which will be less than the lesser magnitude set out.
(The Elements: Book $\text{X}$: Proposition $1$)


Proof

Let $AB$ and $C$ be two unequal magnitudes such that $AB > C$.
From Book $\text{V}$ Definition $4$: Existence of Ratio there exists a multiple of $C$ which is greater than $AB$.
Thus let $DE$ be a multiple of $C$ which is greater than $AB$.
Let $DE$ be divided into parts $DF$, $FG$ and $GE$ (for example) which are equal to $C$.
From $AB$ let $BH$ be subtracted which is greater than half $AB$.
From $AH$ let $HK$ be subtracted which is greater than half $AH$.
Let this process be continued until the divisions of $AB$ are equal in number to the divisions of $DE$.
Let $AK, KH, HB$ be divisions which are equal in number to $DF, FG, GE$.

We have that $DE > AB$.
From $DE$ there has been subtracted $EG$ which is less than half $DE$.
From $AB$ there has been subtracted $BH$ which is greater than half $AB$.
Therefore the remainder $GD$ of $DE$ is greater than the remainder $HA$ of $AB$.

From $GD$ there has been subtracted $GF$ which is half $GD$.
From $HA$ there has been subtracted $HK$ which is greater than half $HA$.
Therefore the remainder $DF$ of $GD$ is greater than the remainder $AK$ of $HA$.

But $DF = C$.
Therefore $C > AK$.
Therefore there is left of the magnitude $AB$ the magnitude $AK$ which is less than the lesser magnitude set out, which is $C$.
$\blacksquare$


Historical Note
This proof is Proposition $1$ of Book $\text{X}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 3 (2nd ed.) ... (previous) ... (next): Book $\text{X}$. Propositions




