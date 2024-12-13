# 

Source: https://proofwiki.org/wiki/Relative_Sizes_of_Ratios_on_Unequal_Magnitudes



Theorem
In the words of Euclid:

Of unequal magnitudes, the greater has to the same a greater ratio than the less has; and the same has to the less a greater ratio than it has to the greater.
(The Elements: Book $\text{V}$: Proposition $8$)

That is:

$a > b \implies a : c > b : c$
$a > b \implies c : a < c : b$


Proof
Let $AB, C$ be unequal magnitudes, and let $AB$ be greater.
Let $D$ be another arbitrary magnitude.
We are to show that $AB$ has to $D$ a greater ratio than $C$ has to $D$, and $D$ has to $C$ a greater ratio than it has to $AB$.

We have that $AB > C$, so let $BE = C$.
Then from Book $\text{V}$ Definition $4$: Existence of Ratio, the lesser of the magnitudes $AE, EB$, if multiplied, will eventually be greater than $D$.

There are two cases.

First, let $AE < EB$.

Let $AE$ be multiplied by some number, and let $FG$ be a multiple of it which is greater than $D$.
Then whatever multiple $FG$ is of $AE$, let $GH$ be made the same multiple of $EB$ and $K$ of $C$.
Let $L := 2D, M := 3D, N := 4D \ldots$ until one of these multiples is greater than $K$.
Suppose $M \le K$ while $N > K$.
WE have that $FG$ is the same multiple of $AE$ that $GH$ is of $EB$.
So from Multiplication of Numbers is Left Distributive over Addition, $FG$ is the same multiple of $AE$ that $FHK$ is of $AB$.
But $FG$ is the same multiple of $AE$ that $K$ is of $C$.
Therefore $FH, K$ are equimultiples of $AB, C$.
Again, we have that $GH$ is the same multiple of $EB$ that $K$ is of $C$, and $EB = C$.
Therefore $GH = K$.
But $K \ge M$ and so $GH \ge M$.
Also, $FG > D$ so $FH > D + M$.
But $D + M = N$ by the construction of $M$ and $N$, and $FH > M + D$.
So $FH > N$ while $K \le N$.
Also, $FH, K$ are equimultiples of $AB, C$ while $N$ is a multiple of some arbitrary $D$.
So from Ratios of Equal Magnitudes $AB$ has a greater ratio to $D$ than $C$ has to $D$.

Next, note that with the same construction, we can show similarly that $N > K$ while $N \le FH$.
Also we have that $N$ is a multiple of $D$, while $FH, K$ are other equimultiples of $AB, C$.
Therefore $D$ has a greater ratio to $C$ than $D$ has to $AB$.
$\Box$


Second, let $AE > EB$.
From Book $\text{V}$ Definition $4$: Existence of Ratio, $EB$, if multiplied, will eventually be greater than $D$.


Let it be so multiplied, and let $GH$ be a multiple of $EB$ and greater than $D$.
Whatever multiple $GH$ is of $EB$, let $FG$ be made the same multiple of $AE$, and $K$ of $C$.
Then we can prove similarly that $FH, K$ are equimultiples of $AB, C$.
Similarly, let $M, N$ be consecutive multiples of $D$ such that $M \le FG$ and $N > FG$.
But $GH > D$, therefore $FH > D + M$, that is, $FH > N$.
Now $K \le N$ inasmuch as $FG$ also, which is greater than $GH$, that is, than $K$, is not in excess of $N$.
Hence the result.
$\blacksquare$


Historical Note
This proof is Proposition $8$ of Book $\text{V}$ of Euclid's The Elements. It is the converse of Proposition $10$ of Book $\text{V} $: Relative Sizes of Magnitudes on Unequal Ratios. 


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{V}$. Propositions




