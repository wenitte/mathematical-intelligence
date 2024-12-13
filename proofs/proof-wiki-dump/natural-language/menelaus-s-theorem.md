# 

Source: https://proofwiki.org/wiki/Menelaus%27s_Theorem



Theorem
Let $ABC$ be a triangle.
Let points $D, E, F$ lie on lines $BC, AC, AB$ respectively (produced if necessary).

Then $D, E$ and $F$ are collinear if and only if:

$\dfrac {AF} {FB} \cdot \dfrac {BD} {DC} \cdot \dfrac {CE} {EA} = -1$
In the above, the line segments $AF, BD, EA$ are determined to have negative length if they lie outside the line segments $AB, BC, CA$.

An equivalent definition is that, as directed line segments, $AF$ and $FB$ lie in opposite directions.
Hence the ratio $\dfrac {AF} {FB}$ is negative, accounting for $-1$ in the product above.


Proof
Necessary Condition
First we check that the equation works out negative.
From Pasch's Axiom, the line $DEF$ must intersect either two sides of $\triangle ABC$:


or none of them:



That means there is an odd number of negative contributions to the product.
Hence the equation works out to be negative.

Next, the magnitude can be checked.
The method is illustrated using the second of the above options; the first works the same.


Construct perpendiculars $AD$, $CH$ and $BI$ from $A$, $B$ and $C$ to $DEF$.
The triangles $\triangle AEG$, $\triangle CEH$ are similar.
The triangles $\triangle BDI$, $\triangle CDH$ are also similar.
The triangles $\triangle BFI$, $\triangle AFG$ are also similar.

Hence:

$\dfrac {CE} {EA} = \dfrac {CH} {AG}, \dfrac {BD} {DC} = \dfrac {BI} {CH}, \dfrac {AF} {FB} = \dfrac {AG} {BI}$

Thus:

$\size {\dfrac {AF} {FB} \cdot \dfrac{BD} {DC} \cdot \dfrac{CE} {EA} } = \size {\dfrac {AG} {BI} \cdot \dfrac {BI} {CH} \cdot \dfrac {CH} {AG} } = 1$

Hence the result.
$\Box$


Sufficient Condition
Suppose $\dfrac {AF} {FB} \cdot \dfrac {BD} {DC} \cdot \dfrac {CE} {EA} = -1$.
Let $F'$ be a point on $AB$ distinct from $F$.
Let us define the measurements of $AF$, $AF'$, $AB$ as $n, n', s$ respectively.
Without loss of generality, suppose that $F'$ also satisfies the equation.
Then:

$\dfrac {AF} {FB} = \dfrac {AF'} {F'B}$
which means:

$\dfrac n {s - n} = \dfrac {n'} {s - n'}$
and so $n = n'$ and so $F = F'$.
So only one point on line $AB$ can satisfy the equation.
Let us fix $D$ and $E$.
Then if $F$ satisfies the equation, then it must be the point collinear with $D$ and $E$.
By a similar argument, the same applies to $D$ and $E$.
Hence the result.
$\blacksquare$


Also known as
Menelaus's Theorem is also (usually) reported in the form Menelaus' Theorem.


Also see
Ceva's Theorem, to which this one is related.


Source of Name
This entry was named for Menelaus of Alexandria.


Historical Note
Menelaus's Theorem was discovered by Menelaus of Alexandria in around $\text {c. 100}$$\text { C.E.}$
It was rediscovered in $1678$ by Giovanni Benedetto Ceva.


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Menelaus' theorem
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Menelaus' theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Menelaus' theorem
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Menelaus' Theorem




