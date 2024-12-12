# 

Source: https://proofwiki.org/wiki/Areas_of_Circles_are_as_Squares_on_Diameters



Theorem
In the words of Euclid:

Circles are to one another as the squares on the diameters.
(The Elements: Book $\text{XII}$: Proposition $2$)


Lemma
In the words of Euclid:

I say that, the area $S$ being greater than the circle $EFGH$, as the area $S$ is to the circle $ABCD$, so is the circle $EFGH$ to some area less than the circle $ABCD$.
(The Elements: Book $\text{XII}$: Proposition $2$ : Lemma)


Proof

Let $ABCD$ and $EFGH$ be circles.
Let $BD$ be a diameter of $ABCD$.
Let $FH$ be a diameter of $EFGH$.
It is to be demonstrated that the ratio of the area of $ABCD$ to the area of $EFGH$ equals the ratio of the square on $BD$ to the square on $FH$.

Suppose to the contrary that the square on $BD$ to the square on $FH$ does not equal the area of $ABCD$ to the area of $EFGH$.
Then:

$BD^2 : FH^2 = ABCD : S$
where $S \ne EFGH$.
Suppose WLOG that $S < EFGH$.
Let the square $EFGH$ be inscribed in the circle $EFGH$.
From Square Inscribed in Circle is greater than Half Area of Circle:

the square $EFGH$ is greater than half the circle $EFGH$.
Let the arcs $EF, FG, GH, HE$ be bisected at $K, L, M, N$.
Let $EK, KF, FL, LG, GM, MH, HN, NE$ be joined.
Let the parallelogram be completed on $\triangle EKF$.
Then $\triangle EKF$ is half of this parallelogram.
Therefore the segment $EKF$ of the circle $EFGH$ is less than twice $\triangle EKF$.
Hence each of $\triangle EKF, \triangle FLG, \triangle GMH, \triangle HNE$ is greater than half the segment of the circle $EFGH$ around it.
This process can be repeated.
We continue to bisecting the remaining arcs and joining straight lines repeatedly.
By Proposition $1$ of Book $\text{X} $: Existence of Fraction of Number Smaller than Given:

eventually we will leave some segments of the circle $EFGH$ which will be less than the amount by which the circle $EFGH$ exceeds $S$.
Therefore the remainder, the polygon $EKFLGMHN$ is greater than the area $S$.
Let the polygon $AOBPCQDR$ similar to $EKFLGMHN$ be inscribed in the circle $ABCD$.
Therefore from Proposition $1$ of Book $\text{XII} $: Areas of Similar Polygons Inscribed in Circles are as Squares on Diameters:

$BD^2 : FH^2 = AOBPCQDR : EKFLGMHN$
But:

$BD^2 : FH^2 = ABCD : S$
So by Proposition $11$ of Book $\text{V} $: Equality of Ratios is Transitive:

$ABCD : S = AOBPCQDR : EKFLGMHN$
So by Proposition $16$ of Book $\text{V} $: Proportional Magnitudes are Proportional Alternately:

$ABCD : AOBPCQDR = S : EKFLGMHN$
But:

$ABCD > AOBPCQDR$
Therefore:

$S > EKFLGMHN$
But we started with the premise that:

$S < EKFLGMHN$
Therefore the square on $BD$ to the square on $FH$ does not equal the area of $ABCD$ to any area less than $EFGH$.
Using the same technique we can also show that the square on $FH$ to the square on $BD$ does not equal the area of $EFGH$ to any area less than $ABCD$.

It is now to be shown that the ratio of the area of $ABCD$ to an area greater than $EFGH$ can equal the ratio of the square on $BD$ to the square on $FH$.
Suppose to the contrary, that:

$ABCD : S = BD^2 : FH^2$
where $S > EFGH$.
that is:

$FH^2 : DB^2 = S : ABCD$
But as $S$ is to the circle $ABCD$, so $EFGH$ is to an area less than the circle $ABCD$. 
Therefore by Proposition $11$ of Book $\text{V} $: Equality of Ratios is Transitive:

the ratio of the square on $BD$ to the square on $FH$ equals the ratio of the circle $EFGH$ to an area less than the circle $ABCD$.
This was shown to be impossible.
Therefore the square on $BD$ to the square on $FH$ does not equal the area of $ABCD$ to any area greater than $EFGH$.
Hence the result.
$\blacksquare$


Historical Note
This proof is Proposition $2$ of Book $\text{XII}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 3 (2nd ed.) ... (previous) ... (next): Book $\text{XII}$. Propositions




