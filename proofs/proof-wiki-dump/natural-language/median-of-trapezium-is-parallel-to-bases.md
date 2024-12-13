# 

Source: https://proofwiki.org/wiki/Median_of_Trapezium_is_Parallel_to_Bases



Theorem
Let $\Box ABCD$ be a trapezium such that $AB$ and $DC$ are the bases.


Let $E$ be the midpoint of $AD$.
Let $F$ lie on $BC$.

Then:

$EF$ is parallel to both $AB$ and $DC$
if and only if:

$F$ is the midpoint of $BC$.

That is, the median of $\Box ABCD$ is parallel to the bases of $\Box ABCD$.


Proof
Sufficient Condition

Let $DH$ be constructed parallel to $BC$ to cut $AB$ at $H$.
From the Parallel Transversal Theorem:

$DG : GH = DE : EA$
and so $G$ is the midpoint of $AH$.
That is:

$(1): \quad DG = GH$

Then we have that:

$DC$ is parallel to $GF$
and:

$DG$ is parallel to $CF$
so, by definition, $\Box GFCD$ is a parallelogram.
Similarly, we have:

$GF$ is parallel to $HB$
and:

$GH$ is parallel to $FB$
so, by definition, $\Box GFBH$ is also a parallelogram.
By Opposite Sides and Angles of Parallelogram are Equal we have that:

$CF = DG$
and:

$GH = FB$
But from $(1)$:

$DG = GH$
and so:

$CF = FB$
and so $F$ is the midpoint of $CB$.
$\Box$


Necessary Condition

Aiming for a contradiction, suppose $EF$ is not parallel to $DC$.
By Playfair's axiom, there exists a unique straight line through $E$ which is parallel to $DC$.
Let $EF'$ be this line.
From Median of Trapezium is Parallel to Bases: Sufficient Condition, $F'$ is the midpoint of $BC$.
But by hypothesis $F$ is also the midpoint of $BC$.
That is:

$F = F'$
So:

$EF = EF'$
and so $EF$ is parallel to $DC$.
This contradicts our assertion that $EF$ is not parallel to $DC$.
Hence, by Proof by Contradiction, $EF$ is parallel to $DC$.

By definition of base of trapezium, $AB$ is parallel to $DC$.
By Parallelism is Transitive Relation, $EF$ is parallel to $AB$.

That is, $EF$ is parallel to both $AB$ and $DC$.
$\blacksquare$


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): median: 3.




